"use client";

import Card from "@/app/components/Atoms/Card";
import Title from "@/app/components/Atoms/Title";
import Subtitle from "@/app/components/Atoms/Subtitle";

export default function MarksPage() {
    return (
        <div className="p-8 space-y-8 animate-fade-in">
            <div>
                <Title title="Marks Management" />
                <Subtitle title="Manage and update student marks" />
            </div>
            
            <Card>
                <div className="p-6">
                    <p className="text-slate-400">Marks management page coming soon...</p>
                </div>
            </Card>
        </div>
    );
}