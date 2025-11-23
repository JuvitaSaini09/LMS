import Title from "@/app/components/Atoms/Title";
import Subtitle from "@/app/components/Atoms/Subtitle";

export default function FeesPage() {
    return (
        <div className="p-8 space-y-8 animate-fade-in">
            <div>
                <Title title="Fees" />
                <Subtitle title="Fees content" />
            </div>
            <div>
                <p>Fees content</p>
            </div>
        </div>
    );
}

