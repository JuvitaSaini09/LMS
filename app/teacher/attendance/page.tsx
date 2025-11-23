import Title from "@/app/components/Atoms/Title";
import Subtitle from "@/app/components/Atoms/Subtitle";

export default function AttendancePage() {
    return (
        <div className="p-8 space-y-8 animate-fade-in">
            <div>
                <Title title="Attendance" />
                <Subtitle title="Attendance content" />
            </div>
            <div>
                <p>Attendance content</p>
            </div>
        </div>
    );
}

