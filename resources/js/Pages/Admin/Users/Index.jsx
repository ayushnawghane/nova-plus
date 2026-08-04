import { useState } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import Modal from '@/Components/Admin/Modal';
import ConfirmDialog from '@/Components/Admin/ConfirmDialog';
import { Field, TextInput, Select, Toggle, Button } from '@/Components/Admin/FormField';
import { Plus, Pencil, Trash2, Mail } from 'lucide-react';

const emptyForm = { name: '', email: '', password: '', role_id: '', is_active: true };

export default function UsersIndex({ users, roles }) {
    const { auth } = usePage().props;
    const permissions = auth?.user?.permissions || [];
    const can = (p) => permissions.includes(p);

    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [confirmId, setConfirmId] = useState(null);

    const { data, setData, post, put, processing, errors, reset, clearErrors } = useForm(emptyForm);

    const openCreate = () => {
        setEditingId(null);
        setData({ ...emptyForm, role_id: roles[0]?.id ?? '' });
        clearErrors();
        setModalOpen(true);
    };

    const openEdit = (user) => {
        setEditingId(user.id);
        setData({ name: user.name, email: user.email, password: '', role_id: user.role_id ?? '', is_active: user.is_active });
        clearErrors();
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        reset();
        clearErrors();
    };

    const submit = (e) => {
        e.preventDefault();
        const options = { onSuccess: closeModal };
        if (editingId) {
            put(route('admin.users.update', editingId), options);
        } else {
            post(route('admin.users.store'), options);
        }
    };

    const destroyForm = useForm({});
    const confirmDelete = () => {
        destroyForm.delete(route('admin.users.destroy', confirmId), { onFinish: () => setConfirmId(null) });
    };

    const initials = (name) =>
        (name || '')
            .split(' ')
            .map((w) => w[0])
            .slice(0, 2)
            .join('')
            .toUpperCase();

    return (
        <AdminLayout title="Users">
            <Head title="Manage Users" />

            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-slate-400">Manage who has access to the admin panel and what role they hold.</p>
                {can('users.manage') && (
                    <Button onClick={openCreate}>
                        <Plus size={16} /> New User
                    </Button>
                )}
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-100 text-left text-[11px] uppercase tracking-wide text-slate-400">
                                <th className="px-6 py-4 font-bold">User</th>
                                <th className="px-4 py-4 font-bold">Role</th>
                                <th className="px-4 py-4 font-bold">Status</th>
                                <th className="px-4 py-4 font-bold">Joined</th>
                                <th className="px-6 py-4 font-bold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {users.map((u) => (
                                <tr key={u.id} className="hover:bg-slate-50/60 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <span className="w-9 h-9 rounded-full bg-[#003567] text-white text-xs font-bold flex items-center justify-center shrink-0">
                                                {initials(u.name)}
                                            </span>
                                            <div className="min-w-0">
                                                <p className="font-semibold text-[#003567] truncate">{u.name}</p>
                                                <p className="text-xs text-slate-400 flex items-center gap-1 truncate">
                                                    <Mail size={11} /> {u.email}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-[#f2f8ec] text-[#73aa3c]">
                                            {u.role_name || 'No role'}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span
                                            className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                                                u.is_active ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-400'
                                            }`}
                                        >
                                            {u.is_active ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 text-slate-500 whitespace-nowrap">
                                        {new Date(u.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-1">
                                            <button
                                                onClick={() => openEdit(u)}
                                                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-[#003567] transition-colors"
                                            >
                                                <Pencil size={15} />
                                            </button>
                                            {u.id !== auth?.user?.id && (
                                                <button
                                                    onClick={() => setConfirmId(u.id)}
                                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 size={15} />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {users.length === 0 && (
                        <div className="px-6 py-16 text-center text-slate-400 text-sm">No users found.</div>
                    )}
                </div>
            </div>

            <Modal open={modalOpen} onClose={closeModal} title={editingId ? 'Edit User' : 'New User'} maxWidth="max-w-md">
                <form onSubmit={submit} className="space-y-5">
                    <Field label="Full Name" required error={errors.name}>
                        <TextInput value={data.name} onChange={(e) => setData('name', e.target.value)} placeholder="Jane Doe" />
                    </Field>

                    <Field label="Email Address" required error={errors.email}>
                        <TextInput type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} placeholder="jane@novaplus.sg" />
                    </Field>

                    <Field
                        label="Password"
                        required={!editingId}
                        error={errors.password}
                        hint={editingId ? 'Leave blank to keep current password' : undefined}
                    >
                        <TextInput
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder={editingId ? '••••••••' : 'Minimum 8 characters'}
                        />
                    </Field>

                    <Field label="Role" required error={errors.role_id}>
                        <Select value={data.role_id} onChange={(e) => setData('role_id', e.target.value)}>
                            <option value="">Select a role</option>
                            {roles.map((r) => (
                                <option key={r.id} value={r.id}>
                                    {r.name}
                                </option>
                            ))}
                        </Select>
                    </Field>

                    <Toggle checked={data.is_active} onChange={(v) => setData('is_active', v)} label="Active" />

                    <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                        <Button type="button" variant="outline" onClick={closeModal}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving…' : editingId ? 'Update User' : 'Create User'}
                        </Button>
                    </div>
                </form>
            </Modal>

            <ConfirmDialog
                open={confirmId !== null}
                onClose={() => setConfirmId(null)}
                onConfirm={confirmDelete}
                title="Delete this user?"
                description="They will immediately lose access to the admin panel."
                confirmLabel="Delete"
            />
        </AdminLayout>
    );
}
