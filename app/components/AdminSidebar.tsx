'use client';

import { BarChart3, Users, LogOut, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
    name: string;
    href: string;
    icon: React.ReactNode;
}

const navItems: NavItem[] = [
    {
        name: 'Analytics',
        href: '/admin/analytics',
        icon: <BarChart3 />,
    },
    {
        name: 'Fees Management',
        href: '/admin/fees-management',
        icon: <Users />,
    },
];

interface AdminSidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export default function AdminSidebar({ isOpen = false, onClose }: AdminSidebarProps) {
    const pathname = usePathname();

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

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}
            <aside className={`
                fixed md:static inset-y-0 left-0 z-50
                h-screen w-64 flex flex-col justify-between bg-white
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                <div className="flex items-center gap-3 p-6">
                    <div className="bg-pumpkin h-10 w-10 flex items-center justify-center rounded-xl">
                        <span>{logoIconSvg}</span>
                    </div>
                    <div className="flex-1">
                        <h1 className="font-bold text-lg">EduFlow MLS</h1>
                        <p className="text-rust text-[13px] capitalize">Admin Portal</p>
                    </div>
                    {/* Close button for mobile */}
                    <button 
                        onClick={onClose}
                        className="md:hidden p-1 hover:bg-gray-100 rounded"
                    >
                        <X size={20} />
                    </button>
                </div>
                <nav className="flex-1 p-4">
                    <ul className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.href} className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 ease-in-out hover:bg-gray-200 ${isActive ? 'hover:bg-woodsmoke/90 bg-woodsmoke text-white' : ''}`}>
                                    <Link 
                                        href={item.href} 
                                        className="flex items-center gap-3"
                                        onClick={() => onClose?.()}
                                    >
                                        <span className={`icon icon-${item.icon}`}>
                                            {item.icon}
                                        </span>
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <div className="p-4 text-[14px] font-medium">
                    <button className="h-10 w-full px-4 py-2 flex items-center gap-4 cursor-pointer hover:bg-pumpkin rounded-lg transition-colors duration-150 ease-in-out hover:text-white">
                        <span><LogOut size={16} strokeWidth={2} /></span>
                        <span>Logout</span>
                    </button>
                </div>
            </aside>
        </>
    )
}

