import { FileText, Video } from "lucide-react";

export interface StudyMaterial {
    id: string;
    title: string;
    subject: string;
    type: "PDF" | "Video";
    size: string;
    downloads: number;
    icon: React.ReactNode;
    iconColor: string;
    iconTextColor: string;
}

export const studyMaterials: StudyMaterial[] = [
    {
        id: "1",
        title: "Introduction to Calculus",
        subject: "Mathematics",
        type: "PDF",
        size: "2.5 MB",
        downloads: 145,
        icon: <FileText className="w-6 h-6" />,
        iconColor: "bg-pumpkin/10",
        iconTextColor: "text-pumpkin"
    },
    {
        id: "2",
        title: "Newton's Laws of Motion",
        subject: "Physics",
        type: "Video",
        size: "125 MB",
        downloads: 98,
        icon: <Video className="w-6 h-6" />,
        iconColor: "bg-hit-pink/10",
        iconTextColor: "text-hit-pink"
    },
    {
        id: "3",
        title: "Organic Chemistry Basics",
        subject: "Chemistry",
        type: "PDF",
        size: "3.2 MB",
        downloads: 132,
        icon: <FileText className="w-6 h-6" />,
        iconColor: "bg-rust/10",
        iconTextColor: "text-rust"
    },
    {
        id: "4",
        title: "Cell Biology Overview",
        subject: "Biology",
        type: "PDF",
        size: "4.1 MB",
        downloads: 167,
        icon: <FileText className="w-6 h-6" />,
        iconColor: "bg-[#21c45d]/10",
        iconTextColor: "text-[#21c45d]"
    },
    {
        id: "5",
        title: "Trigonometry Advanced",
        subject: "Mathematics",
        type: "Video",
        size: "89 MB",
        downloads: 89,
        icon: <Video className="w-6 h-6" />,
        iconColor: "bg-pumpkin/10",
        iconTextColor: "text-pumpkin"
    },
    {
        id: "6",
        title: "Electromagnetic Waves",
        subject: "Physics",
        type: "PDF",
        size: "1.8 MB",
        downloads: 76,
        icon: <FileText className="w-6 h-6" />,
        iconColor: "bg-hit-pink/10",
        iconTextColor: "text-hit-pink"
    }
];

