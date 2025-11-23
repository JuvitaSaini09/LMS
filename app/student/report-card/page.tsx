"use client";

import { Award, Download, FileText } from "lucide-react";
import Card from "@/app/components/Atoms/Card";
import Title from "@/app/components/Atoms/Title";
import Subtitle from "@/app/components/Atoms/Subtitle";
import { reportCardData, calculateOverallStats } from "./data";

export default function ReportCardPage() {
    const stats = calculateOverallStats(reportCardData.subjects);

    const getGradeColor = (grade: string) => {
        if (grade === "A+") return "bg-green-500/20 text-green-400";
        if (grade === "A") return "bg-green-500/20 text-green-400";
        if (grade === "B+") return "bg-blue-500/20 text-blue-400";
        if (grade === "B") return "bg-blue-500/20 text-blue-400";
        if (grade === "C") return "bg-yellow-500/20 text-yellow-400";
        return "bg-slate-500/20 text-slate-400";
    };

    const handleDownloadPDF = () => {
        // TODO: Implement PDF download functionality
        console.log("Download PDF clicked");
    };

    return (
        <div className="p-8 space-y-8 animate-fade-in max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <Title title="Report Card" />
                    <Subtitle title={`Academic performance for ${reportCardData.term}`} />
                </div>
                <button
                    onClick={handleDownloadPDF}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
                >
                    <Download className="w-4 h-4" />
                    Download PDF
                </button>
            </div>

            <Card>
                <div className="flex flex-col space-y-1.5 p-6 border-b border-slate-700 bg-blue-600/10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <Award className="w-8 h-8 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold tracking-tight text-2xl text-white">Student Report Card</h3>
                                <Subtitle title={`${reportCardData.academicYear} • ${reportCardData.term}`} />
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-slate-400">Roll No</p>
                            <p className="text-lg font-semibold text-white">{reportCardData.rollNumber}</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-3 gap-4 p-4 bg-slate-700/50 rounded-lg">
                        <div>
                            <p className="text-sm text-slate-400">Student Name</p>
                            <p className="font-semibold text-white">{reportCardData.studentName}</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-400">Class</p>
                            <p className="font-semibold text-white">{reportCardData.className}</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-400">Academic Year</p>
                            <p className="font-semibold text-white">{reportCardData.academicYear}</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-slate-700">
                                    <th className="text-left py-3 px-4 font-semibold text-white">Subject</th>
                                    <th className="text-center py-3 px-4 font-semibold text-white">Theory (Max)</th>
                                    <th className="text-center py-3 px-4 font-semibold text-white">Practical (Max)</th>
                                    <th className="text-center py-3 px-4 font-semibold text-white">Total Obtained</th>
                                    <th className="text-center py-3 px-4 font-semibold text-white">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reportCardData.subjects.map((subject, idx) => (
                                    <tr key={idx} className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors">
                                        <td className="py-3 px-4 font-medium text-white">{subject.subject}</td>
                                        <td className="text-center py-3 px-4 text-slate-300">
                                            {subject.theoryMarks !== undefined 
                                                ? `${subject.theoryMarks} / ${subject.theoryMax}` 
                                                : "-"}
                                        </td>
                                        <td className="text-center py-3 px-4 text-slate-300">
                                            {subject.practicalMarks !== undefined 
                                                ? `${subject.practicalMarks} / ${subject.practicalMax}` 
                                                : "-"}
                                        </td>
                                        <td className="text-center py-3 px-4 font-semibold text-white">
                                            {subject.totalObtained} / {subject.totalMax}
                                        </td>
                                        <td className="text-center py-3 px-4">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(subject.grade)}`}>
                                                {subject.grade}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                                <tr className="bg-blue-600/10 font-bold border-t-2 border-blue-600">
                                    <td className="py-4 px-4 text-white">TOTAL</td>
                                    <td className="text-center py-4 px-4 text-slate-400" colSpan={2}>-</td>
                                    <td className="text-center py-4 px-4 text-lg text-white">{stats.totalObtained} / {stats.totalMax}</td>
                                    <td className="text-center py-4 px-4 text-slate-400">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="grid grid-cols-2 gap-6 p-6 bg-blue-600/10 rounded-lg">
                        <div>
                            <p className="text-sm text-slate-400 mb-1">Overall Percentage</p>
                            <p className="text-3xl font-bold text-blue-400">{stats.percentage}%</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-400 mb-1">Overall Grade</p>
                            <p className={`text-3xl font-bold ${
                                stats.overallGrade === "A+" || stats.overallGrade === "A" 
                                    ? "text-green-400" 
                                    : stats.overallGrade === "B+" || stats.overallGrade === "B"
                                    ? "text-blue-400"
                                    : "text-yellow-400"
                            }`}>
                                {stats.overallGrade}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <FileText className="w-5 h-5 text-blue-400" />
                        <p className="text-sm text-slate-300">
                            <span className="font-semibold text-white">Note:</span> This report card can be downloaded as PDF for official use.
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
}
