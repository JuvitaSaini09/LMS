import { BookOpen, Users, Calendar, Award } from "lucide-react";

export const dashboardStats = [
    {
        title: "Total Classes",
        icon: <BookOpen className="w-5 h-5" />,
        iconColor: "bg-pumpkin/10",
        iconTextColor: "text-pumpkin",
        value: "6"
    },
    {
        title: "Total Students",
        icon: <Users className="w-5 h-5" />,
        iconColor: "bg-hit-pink/10",
        iconTextColor: "text-hit-pink",
        value: "142"
    },
    {
        title: "Classes Today",
        icon: <Calendar className="w-5 h-5" />,
        iconColor: "bg-rust/10",
        iconTextColor: "text-rust",
        value: "4"
    },
    {
        title: "Avg. Attendance",
        icon: <Award className="w-5 h-5" />,
        iconColor: "bg-[#21c45d]/10",
        iconTextColor: "text-[#21c45d]",
        value: "92%"
    }
];

export interface ClassSchedule {
    id: string;
    subject: string;
    className: string;
    studentCount: number;
    time: string;
    status: "Pending" | "Completed";
}

export const todaySchedule: ClassSchedule[] = [
    {
        id: "1",
        subject: "Mathematics",
        className: "Class 10-A",
        studentCount: 35,
        time: "09:00 AM",
        status: "Pending"
    },
    {
        id: "2",
        subject: "Physics",
        className: "Class 10-B",
        studentCount: 32,
        time: "10:30 AM",
        status: "Completed"
    },
    {
        id: "3",
        subject: "Mathematics",
        className: "Class 9-A",
        studentCount: 38,
        time: "12:00 PM",
        status: "Pending"
    },
    {
        id: "4",
        subject: "Physics",
        className: "Class 9-B",
        studentCount: 37,
        time: "02:00 PM",
        status: "Pending"
    }
];

