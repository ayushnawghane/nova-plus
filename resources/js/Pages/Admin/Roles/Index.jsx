import { useState } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import Modal from '@/Components/Admin/Modal';
import ConfirmDialog from '@/Components/Admin/ConfirmDialog';
import { Field, TextInput, Toggle, Button } from '@/Components/Admin/FormField';
import { Plus, Pencil, Trash2, Shield, Users as UsersIcon, Lock } from 'lucide-react';

const emptyForm = { name: '', permissions: [], is_active: true };

const permissionLabels = {
    'blogs.view': 'View blogs',
    'blogs.create': 'Create blogs',
    'blogs.edit': 'Edit blogs',
    'blogs.delete': 'Delete blogs',
    'roles.manage': 'Manage roles',
    'users.manage': 'Manage users',
};

export default function RolesIndex({ roles, allPermissions }) {
    const { auth } = usePage().props;
    const permissions = auth?.user?.permissions || [];
    const can = (p) => permissions.includes(p);

    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [confirmId, setConfirmId] = useState(null);

    const { data, setData, post, put, processing, errors, reset, clearErrors } = useForm(emptyForm);

    const openCreate = () => {
        setEditingId(null);
        setData(emptyForm);
        clearErrors();
        setModalOpen(true);
    };

    const openEdit = (role) => {
        setEditingId(role.id);
        setData({ name: role.name, permissions: role.permissions || [], is_active: role.is_active });
        clearErrors();
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        reset();
        clearErrors();
    };

    const togglePermission = (perm) => {
        setData('permissions', data.permissions.includes(perm) ? data.permissions.filter((p) => p !== perm) : [...data.permissions, perm]);
    };

    const submit = (e) => {
        e.preventDefault();
        const options = { onSuccess: closeModal };
        if (editingId) {
            put(route('admin.roles.update', editingId), options);
        } else {
            post(route('admin.roles.store'), options);
        }
    };

    const destroyForm = useForm({});
    const confirmDelete = () => {
        destroyForm.delete(route('admin.roles.destroy', confirmId), { onFinish: () => setConfirmId(null) });
    };

    return (
        <AdminLayout title="Roles">
            <Head title="Manage Roles" />

            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-slate-400">Define what each role is allowed to do across the admin panel.</p>
                {can('roles.manage') && (
                    <Button onClick={openCreate}>
                        <Plus size={16} /> New Role
                    </Button>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {roles.map((role) => (
                    <div
                        key={role.id}
                        className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-11 h-11 rounded-xl bg-[#f2f8ec] text-[#73aa3c] flex items-center justify-center">
                                <Shield size={20} />
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => openEdit(role)}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-[#003567] transition-colors"
                                >
                                    <Pencil size={14} />
                                </button>
                                {role.slug !== 'admin' && (
                                    <button
                                        onClick={() => setConfirmId(role.id)}
                                        className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                )}
                                {role.slug === 'admin' && (
                                    <span className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-300" title="Protected role">
                                        <Lock size={14} />
                                    </span>
                                )}
                            </div>
                        </div>

                        <h3 className="font-serif text-lg font-bold text-[#003567] mb-1">{role.name}</h3>
                        <p className="text-xs text-slate-400 flex items-center gap-1.5 mb-4">
                            <UsersIcon size={12} /> {role.users_count} user{role.users_count === 1 ? '' : 's'}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                            {(role.permissions || []).length === 0 && (
                                <span className="text-xs text-slate-300 italic">No permissions assigned</span>
                            )}
                            {(role.permissions || []).map((p) => (
                                <span key={p} className="text-[10px] font-semibold px-2 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-100">
                                    {permissionLabels[p] || p}
                                </span>
                            ))}
                        </div>

                        {!role.is_active && (
                            <span className="inline-block mt-4 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-amber-50 text-amber-600">
                                Inactive
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <Modal open={modalOpen} onClose={closeModal} title={editingId ? 'Edit Role' : 'New Role'} maxWidth="max-w-lg">
                <form onSubmit={submit} className="space-y-5">
                    <Field label="Role Name" required error={errors.name}>
                        <TextInput value={data.name} onChange={(e) => setData('name', e.target.value)} placeholder="e.g. Editor" />
                    </Field>

                    <Field label="Permissions" error={errors.permissions}>
                        <div className="grid grid-cols-2 gap-2.5">
                            {allPermissions.map((perm) => (
                                <label
                                    key={perm}
                                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-[#73aa3c]/40 cursor-pointer transition-colors"
                                >
                                    <input
                                        type="checkbox"
                                        checked={data.permissions.includes(perm)}
                                        onChange={() => togglePermission(perm)}
                                        className="w-4 h-4 rounded border-slate-300 text-[#73aa3c] focus:ring-[#73aa3c]"
                                    />
                                    <span className="text-xs font-semibold text-slate-600">{permissionLabels[perm] || perm}</span>
                                </label>
                            ))}
                        </div>
                    </Field>

                    <Toggle checked={data.is_active} onChange={(v) => setData('is_active', v)} label="Active" />

                    <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                        <Button type="button" variant="outline" onClick={closeModal}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving…' : editingId ? 'Update Role' : 'Create Role'}
                        </Button>
                    </div>
                </form>
            </Modal>

            <ConfirmDialog
                open={confirmId !== null}
                onClose={() => setConfirmId(null)}
                onConfirm={confirmDelete}
                title="Delete this role?"
                description="Users assigned to this role will need to be reassigned first."
                confirmLabel="Delete"
            />
        </AdminLayout>
    );
}
