import { LayoutDashboard, FileText, ChartColumnIncreasing, BookOpen, IndianRupee, LogOut } from "lucide-react";
import Link from "next/link";


interface NavItem {
    name: string;
    href: string;
    icon: React.ReactNode;
}
const navItems: NavItem[] = [
    {
        name: 'Dashboard',
        href: '/student/dashboard',
        icon: <LayoutDashboard />,
    },
    {
        name: 'Report Card',
        href: '/student/report-card',
        icon: <FileText />,
    },
    {
        name: 'Marks Analysis',
        href: '/student/marks-analysis',
        icon: <ChartColumnIncreasing />,
    },
    {
        name: 'Study Materials',
        href: '/student/materials',
        icon: <BookOpen />,
    },
    {
        name: 'Fees & Receipts',
        href: '/student/fees',
        icon: <IndianRupee />,
    },
];
export default function Sidebar() {

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
        <aside className="h-screen flex flex-col justify-between border-r border-silver-sand">
            <div className="flex items-center gap-3 p-6 border-b border-silver-sand">
                <div className="bg-pumpkin h-10 w-10 flex items-center justify-center rounded-xl">
                    <span>{logoIconSvg}</span>
                </div>
                <div>
                    <h1 className="font-bold text-lg">EduFlow MLS</h1>
                    <p className="text-rust text-[13px] capitalize">Student Portal</p>
                </div>
            </div>
            <nav className="flex-1 p-4">
                <ul className="space-y-1">
                    {

                        navItems.map((item) => (
                            <li key={item.href} className="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 ease-in-out hover:bg-gray-200">
                                <Link href={item.href} className="flex items-center gap-3 ">
                                    <span className={`icon icon-${item.icon}`}>
                                        {item.icon}
                                    </span>
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            <div className="border-t border-silver-sand p-4 text-[14px] font-medium">
                <button className="h-10 w-full px-4 py-2 flex items-center gap-4 cursor-pointer hover:bg-pumpkin rounded-lg transition-colors duration-150 ease-in-out hover:text-white">
                    <span ><LogOut size={16} strokeWidth={2} /></span>
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    )
}