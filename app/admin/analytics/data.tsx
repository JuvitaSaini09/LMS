import { CircleCheckBig, TrendingUp, CircleAlert } from "lucide-react";

export const feeStats = [
    {
        title: "Total Collected",
        icon: <CircleCheckBig className="w-5 h-5" />,
        iconColor: "bg-[#21c45d]/10",
        iconTextColor: "text-[#21c45d]",
        value: "₹24.5L",
        subtitle: "88.7% of total fees"
    },
    {
        title: "Pending Collection",
        icon: <TrendingUp className="w-5 h-5" />,
        iconColor: "bg-hit-pink/10",
        iconTextColor: "text-hit-pink",
        value: "₹3.8L",
        subtitle: "8.1% of total fees"
    },
    {
        title: "Overdue Amount",
        icon: <CircleAlert className="w-5 h-5" />,
        iconColor: "bg-pumpkin/10",
        iconTextColor: "text-pumpkin",
        value: "₹1.25L",
        subtitle: "3.2% of total fees"
    }
];

export const monthlyCollectionData = [
    { month: "Jan", Collected: 53000, Pending: 4800, Overdue: 1900 },
    { month: "Feb", Collected: 61000, Pending: 4500, Overdue: 1700 },
    { month: "Mar", Collected: 57000, Pending: 5200, Overdue: 2100 },
    { month: "Apr", Collected: 75000, Pending: 4200, Overdue: 1500 },
    { month: "May", Collected: 65000, Pending: 5100, Overdue: 1800 },
    { month: "Jun", Collected: 68000, Pending: 5100, Overdue: 1600 }
];

export const feeStatusDistribution = [
    { name: "Collected", value: 319000, percentage: 89 },
    { name: "Pending", value: 29200, percentage: 8 },
    { name: "Overdue", value: 11600, percentage: 3 }
];

export const collectionTrendData = [
    { month: "Jan", Collected: 53000, Pending: 4800 },
    { month: "Feb", Collected: 61000, Pending: 4500 },
    { month: "Mar", Collected: 57000, Pending: 5200 },
    { month: "Apr", Collected: 75000, Pending: 4200 },
    { month: "May", Collected: 65000, Pending: 5100 },
    { month: "Jun", Collected: 68000, Pending: 5100 }
];

