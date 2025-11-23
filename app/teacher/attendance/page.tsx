"use client";

import { useState } from "react";
import Card from "@/app/components/Atoms/Card";
import Title from "@/app/components/Atoms/Title";
import Subtitle from "@/app/components/Atoms/Subtitle";
import { attendanceStats, classes, subjects, students as initialStudents, Student } from "./data";
import { ChevronDown, Save, Check } from "lucide-react";

export default function AttendancePage() {
    const [selectedClass, setSelectedClass] = useState("Class 10-A");
    const [selectedSubject, setSelectedSubject] = useState("Mathematics");
    const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false);
    const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
    const [students, setStudents] = useState<Student[]>(initialStudents);

    const handleToggleAttendance = (studentId: string) => {
        setStudents(students.map(student => 
            student.id === studentId 
                ? { ...student, isPresent: !student.isPresent }
                : student
        ));
    };

    const handleSaveAttendance = () => {
        const presentCount = students.filter(s => s.isPresent).length;
        console.log("Saving attendance:", {
            class: selectedClass,
            subject: selectedSubject,
            students: students,
            presentCount,
            totalCount: students.length
        });
        // TODO: Implement save attendance functionality
    };

    const presentCount = students.filter(s => s.isPresent).length;
    const attendanceRate = ((presentCount / students.length) * 100).toFixed(1);

    return (
        <div className="p-8 space-y-8 animate-fade-in">
            <div>
                <Title title="Attendance Management" />
                <Subtitle title="Mark and track student attendance" />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {attendanceStats.map((stat, idx) => (
                    <Card key={idx}>
                        <div className="px-6 pt-6 pb-2">
                            <div className="space-y-1.5 flex flex-row items-center justify-between">
                                <h3 className="text-sm font-medium text-slate-400">{stat.title}</h3>
                                <div className={`w-10 h-10 rounded-lg ${stat.iconColor} flex items-center justify-center ${stat.iconTextColor}`}>
                                    {stat.icon}
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <div className={`text-2xl font-bold ${stat.iconTextColor}`}>
                                {stat.title === "Attendance Rate" ? attendanceRate + "%" : stat.value}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Mark Attendance Section */}
            <Card>
                <div className="p-6">
                    <Title title="Mark Attendance" text="2xl" />
                    <Subtitle title="Select class and subject to mark attendance" />
                    <div className="flex gap-4 mt-4">
                        {/* Class Dropdown */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsClassDropdownOpen(!isClassDropdownOpen);
                                    setIsSubjectDropdownOpen(false);
                                }}
                                className="flex h-10 items-center justify-between rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm w-[180px] text-white hover:border-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                            >
                                <span className="line-clamp-1">{selectedClass}</span>
                                <ChevronDown className={`h-4 w-4 opacity-50 transition-transform ${isClassDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isClassDropdownOpen && (
                                <>
                                    <div 
                                        className="fixed inset-0 z-10" 
                                        onClick={() => setIsClassDropdownOpen(false)}
                                    />
                                    <div className="absolute top-full mt-1 z-20 w-[180px] rounded-md border border-slate-700 bg-slate-800 shadow-lg">
                                        {classes.map((className) => (
                                            <button
                                                key={className}
                                                onClick={() => {
                                                    setSelectedClass(className);
                                                    setIsClassDropdownOpen(false);
                                                }}
                                                className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-700 transition-colors text-white ${
                                                    selectedClass === className ? 'bg-blue-600 text-white font-medium' : ''
                                                }`}
                                            >
                                                {className}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Subject Dropdown */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsSubjectDropdownOpen(!isSubjectDropdownOpen);
                                    setIsClassDropdownOpen(false);
                                }}
                                className="flex h-10 items-center justify-between rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm w-[180px] text-white hover:border-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                            >
                                <span className="line-clamp-1">{selectedSubject}</span>
                                <ChevronDown className={`h-4 w-4 opacity-50 transition-transform ${isSubjectDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isSubjectDropdownOpen && (
                                <>
                                    <div 
                                        className="fixed inset-0 z-10" 
                                        onClick={() => setIsSubjectDropdownOpen(false)}
                                    />
                                    <div className="absolute top-full mt-1 z-20 w-[180px] rounded-md border border-slate-700 bg-slate-800 shadow-lg">
                                        {subjects.map((subject) => (
                                            <button
                                                key={subject}
                                                onClick={() => {
                                                    setSelectedSubject(subject);
                                                    setIsSubjectDropdownOpen(false);
                                                }}
                                                className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-700 transition-colors text-white ${
                                                    selectedSubject === subject ? 'bg-blue-600 text-white font-medium' : ''
                                                }`}
                                            >
                                                {subject}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Save Button */}
                        <button
                            onClick={handleSaveAttendance}
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 ml-auto"
                        >
                            <Save className="w-4 h-4" />
                            Save Attendance
                        </button>
                    </div>
                </div>

                {/* Students List */}
                <div className="p-6 pt-0">
                    <div className="space-y-2">
                        {students.map((student) => (
                            <div
                                key={student.id}
                                className="flex items-center justify-between p-4 rounded-lg border border-slate-700 bg-slate-700/50 hover:border-blue-500 hover:bg-slate-700 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <span className="text-sm font-semibold text-blue-400">{student.rollNumber}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">{student.name}</h3>
                                        <p className="text-sm text-slate-400">Roll No: {student.rollNumber}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() => handleToggleAttendance(student.id)}
                                        className={`h-4 w-4 shrink-0 rounded-sm border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                                            student.isPresent 
                                                ? 'bg-blue-600 border-blue-600' 
                                                : 'border-slate-600 bg-slate-800'
                                        }`}
                                    >
                                        {student.isPresent && (
                                            <span className="flex items-center justify-center text-white">
                                                <Check className="w-3 h-3" />
                                            </span>
                                        )}
                                    </button>
                                    <label 
                                        htmlFor={`student-${student.id}`}
                                        className={`text-sm font-medium cursor-pointer ${
                                            student.isPresent ? 'text-green-400' : 'text-blue-400'
                                        }`}
                                    >
                                        {student.isPresent ? 'Present' : 'Absent'}
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    );
}
