import { Award, TrendingUp, Target } from "lucide-react";

export const stats = [
    {
        title: "Current GPA",
        icon: <Award className="w-5 h-5" />,
        iconColor: "bg-[#21c45d]/10",
        iconTextColor: "text-[#21c45d]",
        value: "9.2",
        subtitle: "Out of 10"
    },
    {
        title: "Class Rank",
        icon: <TrendingUp className="w-5 h-5" />,
        iconColor: "bg-pumpkin/10",
        iconTextColor: "text-pumpkin",
        value: "#3",
        subtitle: "Out of 45 students"
    },
    {
        title: "Improvement",
        icon: <Target className="w-5 h-5" />,
        iconColor: "bg-hit-pink/10",
        iconTextColor: "text-hit-pink",
        value: "+7%",
        subtitle: "Since last term"
    }
];

export const performanceTrendData = [
    { term: "Term 1", Math: 92, Physics: 88, Chemistry: 90, Biology: 85, English: 82 },
    { term: "Term 2", Math: 94, Physics: 90, Chemistry: 92, Biology: 87, English: 85 },
    { term: "Term 3", Math: 96, Physics: 92, Chemistry: 94, Biology: 89, English: 88 },
    { term: "Term 4", Math: 98, Physics: 95, Chemistry: 96, Biology: 92, English: 90 }
];

export const subjectWiseData = [
    { subject: "Mathematics", yourScore: 95, classAverage: 77 },
    { subject: "Physics", yourScore: 92, classAverage: 72 },
    { subject: "Chemistry", yourScore: 94, classAverage: 74 },
    { subject: "Biology", yourScore: 89, classAverage: 70 },
    { subject: "English", yourScore: 90, classAverage: 79 },
    { subject: "Computer Science", yourScore: 98, classAverage: 81 }
];

export const radarData = [
    { subject: "Mathematics", yourScore: 95, classAverage: 77 },
    { subject: "Physics", yourScore: 92, classAverage: 72 },
    { subject: "Chemistry", yourScore: 94, classAverage: 74 },
    { subject: "Biology", yourScore: 89, classAverage: 70 },
    { subject: "English", yourScore: 90, classAverage: 79 },
    { subject: "Computer", yourScore: 98, classAverage: 81 }
];

