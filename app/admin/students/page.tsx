import Title from "@/app/components/Atoms/Title";
import Subtitle from "@/app/components/Atoms/Subtitle";

export default function StudentsPage() {
    return (
        <div className="p-8 space-y-8 animate-fade-in">
            <div>
                <Title title="Students" />
                <Subtitle title="Students content" />
            </div>
            <div>
                <p>Students content</p>
            </div>
        </div>
    );
}

