"use client";

import { useState } from "react";
import Title from "@/app/components/Atoms/Title";
import Subtitle from "@/app/components/Atoms/Subtitle";
import Card from "@/app/components/Atoms/Card";
import { ChevronDown, Mail, FileText, X } from "lucide-react";
import { classes, studentsData, StudentFee } from "./data";
import ReceiptModal from "./ReceiptModal";

export default function StudentsPage() {
    const [selectedClass, setSelectedClass] = useState("10-A");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<StudentFee | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const currentStudents = studentsData[selectedClass] || [];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "PAID":
                return "text-[#21c45d]";
            case "PENDING":
                return "text-hit-pink";
            case "OVERDUE":
                return "text-pumpkin";
            default:
                return "text-rust";
        }
    };

    const handleSendReminder = (student: StudentFee) => {
        console.log("Send reminder to:", student.name);
        // TODO: Implement send reminder functionality
    };

    const handleReceipt = (student: StudentFee) => {
        setSelectedStudent(student);
        setIsModalOpen(true);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    };

    const formatCurrency = (amount: number) => {
        return `₹${amount.toLocaleString('en-IN')}`;
    };

    return (
        <div className="p-8 space-y-8 animate-fade-in">
            <div>
                <Title title="Students" />
                <Subtitle title="Manage student fees and send receipts" />
            </div>

            {/* Class Dropdown */}
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex h-10 items-center justify-between rounded-md border border-woodsmoke/20 bg-white px-3 py-2 text-sm w-[180px] hover:border-woodsmoke/50 transition-colors focus:outline-none focus:ring-2 focus:ring-pumpkin focus:ring-offset-2"
                >
                    <span className="line-clamp-1">{selectedClass}</span>
                    <ChevronDown className={`h-4 w-4 opacity-50 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                    <>
                        <div 
                            className="fixed inset-0 z-10" 
                            onClick={() => setIsDropdownOpen(false)}
                        />
                        <div className="absolute top-full mt-1 z-20 w-[180px] rounded-md border border-woodsmoke/20 bg-white shadow-lg">
                            {classes.map((className) => (
                                <button
                                    key={className}
                                    onClick={() => {
                                        setSelectedClass(className);
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-3 py-2 text-sm hover:bg-athen-gray transition-colors ${
                                        selectedClass === className ? 'bg-pampas text-pumpkin font-medium' : ''
                                    }`}
                                >
                                    {className}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Students List */}
            <div className="space-y-4">
                {currentStudents.length === 0 ? (
                    <Card>
                        <div className="p-8 text-center text-rust">
                            <p>No students found for {selectedClass}</p>
                        </div>
                    </Card>
                ) : (
                    currentStudents.map((student) => (
                        <Card key={student.id}>
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-woodsmoke">{student.name}</h3>
                                        <p className="text-sm text-rust mt-1">Roll No: {student.rollNumber}</p>
                                        <div className="flex items-center gap-6 mt-3">
                                            <div>
                                                <p className="text-xs text-rust">Due Date</p>
                                                <p className="text-sm font-medium text-woodsmoke">{formatDate(student.dueDate)}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-rust">Amount</p>
                                                <p className="text-sm font-medium text-woodsmoke">{formatCurrency(student.amount)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-right">
                                            <p className={`text-sm font-semibold ${getStatusColor(student.status)}`}>
                                                {student.status}
                                            </p>
                                        </div>
                                        {student.status === "PAID" ? (
                                            <button
                                                onClick={() => handleReceipt(student)}
                                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors bg-pumpkin text-white hover:bg-pumpkin/90 h-9 rounded-md px-4"
                                            >
                                                <FileText className="w-4 h-4" />
                                                Receipt
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleSendReminder(student)}
                                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-woodsmoke/20 bg-white hover:bg-athen-gray text-rust h-9 rounded-md px-4"
                                            >
                                                <Mail className="w-4 h-4" />
                                                Send Reminder
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))
                )}
            </div>

            {/* Receipt Modal */}
            {isModalOpen && selectedStudent && (
                <ReceiptModal
                    student={selectedStudent}
                    onClose={() => {
                        setIsModalOpen(false);
                        setSelectedStudent(null);
                    }}
                />
            )}
        </div>
    );
}
