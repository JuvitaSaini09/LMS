"use client";

import Card from "@/app/components/Atoms/Card";
import Title from "@/app/components/Atoms/Title";
import Subtitle from "@/app/components/Atoms/Subtitle";
import { studyMaterials } from "./data";
import { Eye, Download } from "lucide-react";

export default function MaterialsPage() {
    const handleView = (id: string) => {
        console.log("View material:", id);
        // TODO: Implement view functionality
    };

    const handleDownload = (id: string) => {
        console.log("Download material:", id);
        // TODO: Implement download functionality
    };

    return (
        <div className="p-8 space-y-8 animate-fade-in">
            <div>
                <Title title="Study Materials" />
                <Subtitle title="Access comprehensive learning resources and course materials" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studyMaterials.map((material, idx) => (
                    <Card 
                        key={material.id} 
                        className="group"
                        style={{ animationDelay: `${idx * 50}ms` } as React.CSSProperties}
                    >
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="flex items-start justify-between">
                                <div className={`w-12 h-12 rounded-lg ${material.iconColor} flex items-center justify-center ${material.iconTextColor}`}>
                                    {material.icon}
                                </div>
                                <div className="inline-flex items-center rounded-full border border-woodsmoke/20 px-2.5 py-0.5 text-xs font-semibold text-rust">
                                    {material.type}
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold leading-none tracking-tight mt-4 group-hover:text-pumpkin transition-colors">
                                {material.title}
                            </h3>
                            <p className="text-sm text-rust">{material.subject}</p>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm text-rust">
                                    <span>Size: {material.size}</span>
                                    <span>{material.downloads} downloads</span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleView(material.id)}
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors bg-pumpkin text-white hover:bg-pumpkin/90 h-9 rounded-md px-3 flex-1"
                                    >
                                        <Eye className="w-4 h-4" />
                                        View
                                    </button>
                                    <button
                                        onClick={() => handleDownload(material.id)}
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-woodsmoke/20 bg-white hover:bg-athen-gray text-rust h-9 rounded-md px-3 flex-1"
                                    >
                                        <Download className="w-4 h-4" />
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
