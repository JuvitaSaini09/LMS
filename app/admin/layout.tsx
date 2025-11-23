'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import AdminSidebar from '../components/AdminSidebar';

const logoIconSvg = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-graduation-cap w-6 h-6"
    >
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
        <path d="M22 10v6"></path>
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
    </svg>
);

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Mobile Header with Logo */}
            <header className="md:hidden flex items-center gap-3 p-4 border-b border-silver-sand bg-white sticky top-0 z-30">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                >
                    <Menu size={24} />
                </button>
                <div className="bg-pumpkin h-10 w-10 flex items-center justify-center rounded-xl">
                    {logoIconSvg}
                </div>
                <div>
                    <h1 className="font-bold text-lg">EduFlow MLS</h1>
                    <p className="text-rust text-[13px] capitalize">Admin Portal</p>
                </div>
            </header>

            {/* Sidebar */}
            <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Main Content */}
            <main className="flex-1 w-full bg-athen-gray px-8">
                {children}
            </main>
        </div>
    );
}

