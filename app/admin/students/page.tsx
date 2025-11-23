"use client";

import { useState } from "react";
import Title from "@/app/components/Atoms/Title";
import Subtitle from "@/app/components/Atoms/Subtitle";
import Card from "@/app/components/Atoms/Card";
import { ChevronDown, Mail, FileText } from "lucide-react";
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
        if (student.status !== "PAID") {
            alert("Receipt can only be generated for paid fees");
            return;
        }

        const receiptContent = `
    <html>
      <head>
        <title>Fee Receipt - ${student.name}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; }
          .content { margin: 30px 0; }
          .info { margin: 15px 0; }
          .footer { text-align: center; margin-top: 40px; border-top: 1px solid #999; padding-top: 20px; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
          th { background-color: #f0f0f0; }
          .amount { font-weight: bold; font-size: 18px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>EduFLow Institution</h1>
          <p>Official Fee Receipt</p>
        </div>
        
        <div class="content">
          <div class="info">
            <strong>Receipt No:</strong> ${student.receiptNo || `RCP-${student.id}-${new Date().getFullYear()}`}<br/>
            <strong>Date:</strong> ${new Date().toLocaleDateString()}<br/>
          </div>
          <h3>Student Details</h3>
          <div class="info">
            <strong>Name:</strong> ${student.name}<br/>
            <strong>Class:</strong> ${student.className}<br/>
            <strong>Payment Date:</strong> ${student.paymentDate || 'N/A'}<br/>
          </div>
          <table>
            <tr>
              <th>Description</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>Tuition Fees (${formatDate(student.dueDate)})</td>
              <td class="amount">₹${student.amount.toLocaleString('en-IN')}</td>
            </tr>
            <tr>
              <th>Total Amount Paid</th>
              <th class="amount">₹${student.amount.toLocaleString('en-IN')}</th>
            </tr>
          </table>
          <div class="info">
            <strong>Payment Method:</strong> ${student.paymentMethod || 'Bank Transfer'}<br/>
            <strong>Status:</strong> <span style="color: green; font-weight: bold;">PAID</span>
          </div>
        </div>
        <div class="footer">
          <p>Thank you for your payment!</p>
          <p>For queries, contact: fees@eduflow.com</p>
          <p>_________________</p>
          <p>Authorized Signatory</p>
        </div>
      </body>
    </html>
    `;

        const printWindow = window.open("", "", "height=900,width=900");
        if (printWindow) {
            printWindow.document.write(receiptContent);
            printWindow.document.close();
            printWindow.print();
        }
    };

    const handleEmail = (student: StudentFee) => {
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
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handleReceipt(student)}
                                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors bg-pumpkin text-white hover:bg-pumpkin/90 h-9 rounded-md px-4"
                                                >
                                                    <FileText className="w-4 h-4" />
                                                    Receipt
                                                </button>
                                                <button
                                                    onClick={() => handleEmail(student)}
                                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-woodsmoke/20 bg-white hover:bg-athen-gray text-rust h-9 rounded-md px-4"
                                                >
                                                    <Mail className="w-4 h-4" />
                                                    Email
                                                </button>
                                            </div>
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
