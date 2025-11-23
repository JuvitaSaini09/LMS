import { Users, Calendar } from "lucide-react";

export const attendanceStats = [
    {
        title: "Total Students",
        icon: <Users className="w-5 h-5" />,
        iconColor: "bg-pumpkin/10",
        iconTextColor: "text-pumpkin",
        value: "10"
    },
    {
        title: "Present Today",
        icon: <Users className="w-5 h-5" />,
        iconColor: "bg-[#21c45d]/10",
        iconTextColor: "text-[#21c45d]",
        value: "8"
    },
    {
        title: "Attendance Rate",
        icon: <Calendar className="w-5 h-5" />,
        iconColor: "bg-rust/10",
        iconTextColor: "text-rust",
        value: "80.0%"
    }
];

export const classes = [
    "Class 10-A",
    "Class 10-B",
    "Class 9-A",
    "Class 9-B",
    "Class 11-A",
    "Class 11-B"
];

export const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "Computer Science"
];

export interface Student {
    id: string;
    name: string;
    rollNumber: string;
    isPresent: boolean;
}

export const students: Student[] = [
    { id: "1", name: "Alice Johnson", rollNumber: "001", isPresent: true },
    { id: "2", name: "Bob Smith", rollNumber: "002", isPresent: true },
    { id: "3", name: "Charlie Brown", rollNumber: "003", isPresent: false },
    { id: "4", name: "Diana Prince", rollNumber: "004", isPresent: true },
    { id: "5", name: "Edward Norton", rollNumber: "005", isPresent: true },
    { id: "6", name: "Fiona Apple", rollNumber: "006", isPresent: true },
    { id: "7", name: "George Wilson", rollNumber: "007", isPresent: false },
    { id: "8", name: "Hannah Montana", rollNumber: "008", isPresent: true },
    { id: "9", name: "Ian McKellen", rollNumber: "009", isPresent: true },
    { id: "10", name: "Julia Roberts", rollNumber: "010", isPresent: true }
];

