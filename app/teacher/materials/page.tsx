import Title from "@/app/components/Atoms/Title";
import Subtitle from "@/app/components/Atoms/Subtitle";

export default function MaterialsPage() {
    return (
        <div className="p-8 space-y-8 animate-fade-in">
            <div>
                <Title title="Study Material" />
                <Subtitle title="Study material content" />
            </div>
            <div>
                <p>Study material content</p>
            </div>
        </div>
    );
}

