import Title from "@/app/components/Atoms/Title";
import Subtitle from "@/app/components/Atoms/Subtitle";

export default function AnalyticsPage() {
    return (
        <div className="p-8 space-y-8 animate-fade-in">
            <div>
                <Title title="Analytics" />
                <Subtitle title="Analytics content" />
            </div>
            <div>
                <p>Analytics content</p>
            </div>
        </div>
    );
}

