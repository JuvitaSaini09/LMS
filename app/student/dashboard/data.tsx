
import { Award, BookOpen, Calendar, IndianRupee, Trophy } from "lucide-react";

export const cards: { title: string, icon: React.ReactNode, iconColor: string, value: string, subtitle?: string }[] = [
    {
        title: "Current GPA",
        icon: <Award color="#21c45d" />,
        iconColor: "bg-[#21c45d]/10",
        value: "8.7",
        subtitle: " +0.3 from last term"
    },
    {
        title: "Attendance",
        icon: <Calendar color="var(--color-woodsmoke)" />,
        iconColor: "bg-woodsmoke/10",
        value: "94%",
        subtitle: "+2% from last term"
    }, {
        title: "Enrolled Courses",
        icon: <BookOpen color="#26a6b3" />,
        iconColor: "bg-[#26a6b3]/10",

        value: "8",
    }, {
        title: "Rank",
        icon: <Trophy color="var(--color-pumpkin)" />,
        iconColor: "bg-pumpkin/10",
        value: "#12",
        subtitle: "+3 from last term"
    }
]

export const recentGrades: { subject: string, marks: number, totalMarks: number, grade: string }[] = [
    {
        subject: "Mathematics",
        marks: 95,
        totalMarks: 100,
        grade: "A+"
    },
    {
        subject: "Physics",
        marks: 89,
        totalMarks: 100,
        grade: "A"
    },
    {
        subject: "Chemistry",
        marks: 91,
        totalMarks: 100,
        grade: "A"
    }, {

        subject: "Biology",
        marks: 85,
        totalMarks: 100,
        grade: "B+"
    }
]

export const quickActions: { title: string, link: string, icon: React.ReactNode }[] = [
    {
        title: "Report Card",
        link: "/student/report-card",
        icon: <Award size={16} strokeWidth={2} />
    },
   {
    title: "Marks Analysis",
    link: "/student/marks-analysis",
    icon: <Trophy size={16} strokeWidth={2} />
   },{
    title: "Study Materials",
    link: "/student/materials",
    icon: <BookOpen size={16} strokeWidth={2} />
   },{
    title: "Fees & Receipts",
    link: "/student/fees",
    icon: <IndianRupee size={16} strokeWidth={2} />
   }
]