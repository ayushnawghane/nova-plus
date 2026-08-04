import { useState } from 'react';
import Sidebar from '@/Components/Admin/Sidebar';
import Topbar from '@/Components/Admin/Topbar';
import Toast from '@/Components/Admin/Toast';

export default function AdminLayout({ title, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen flex bg-[#f7f9f8]">
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 min-w-0 flex flex-col">
                <Topbar title={title} onMenuClick={() => setSidebarOpen(true)} />
                <main className="flex-1 px-4 sm:px-8 py-8">{children}</main>
            </div>

            <Toast />
        </div>
    );
}
