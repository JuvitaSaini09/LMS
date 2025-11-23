"use client";

import Card from "@/app/components/Atoms/Card";
import Title from "@/app/components/Atoms/Title";
import Subtitle from "@/app/components/Atoms/Subtitle";
import { dashboardStats, todaySchedule } from "./data";
import { BookOpen } from "lucide-react";

export default function TeacherDashboardPage() {
    const handleMarkAttendance = (classId: string) => {
        console.log("Mark attendance for class:", classId);
        // TODO: Implement mark attendance functionality
    };

    const getStatusColor = (status: string) => {
        if (status === "Completed") {
            return "bg-green-500/20 text-green-400";
        }
        return "bg-blue-500/20 text-blue-400";
    };

    return (
        <div className="p-8 space-y-8 animate-fade-in">
            <div>
                <Title title="Teacher Dashboard" />
                <Subtitle title="Manage your classes and track student progress" />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, idx) => (
                    <Card 
                        key={idx} 
                        style={{ animationDelay: `${idx * 100}ms` } as React.CSSProperties}
                    >
                        <div className="px-6 pt-6 pb-2">
                            <div className="space-y-1.5 flex flex-row items-center justify-between">
                                <h3 className="text-sm font-medium text-slate-400">{stat.title}</h3>
                                <div className={`w-10 h-10 rounded-lg ${stat.iconColor} flex items-center justify-center ${stat.iconTextColor}`}>
                                    {stat.icon}
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Today's Schedule */}
            <Card>
                <div className="p-6">
                    <Title title="Today's Schedule" text="2xl" />
                    <Subtitle title="Your classes for today" />
                </div>
                <div className="p-6 pt-0">
                    <div className="space-y-4">
                        {todaySchedule.map((classItem) => (
                            <div 
                                key={classItem.id}
                                className="flex items-center justify-between p-4 rounded-lg border border-slate-700 bg-slate-700/50 hover:border-blue-500 hover:bg-slate-700 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-lg ${classItem.status === "Completed" ? "bg-green-500/20" : "bg-blue-500/20"} flex items-center justify-center ${classItem.status === "Completed" ? "text-green-400" : "text-blue-400"}`}>
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">{classItem.subject}</h3>
                                        <p className="text-sm text-slate-400">{classItem.className} • {classItem.studentCount} students • {classItem.time}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(classItem.status)}`}>
                                        {classItem.status}
                                    </span>
                                    {classItem.status === "Pending" && (
                                        <button
                                            onClick={() => handleMarkAttendance(classItem.id)}
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 h-9 rounded-md px-3"
                                        >
                                            Mark Attendance
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    );
}
