"use client";

import { X } from "lucide-react";
import { StudentFee } from "./data";

interface ReceiptModalProps {
    student: StudentFee;
    onClose: () => void;
}

export default function ReceiptModal({ student, onClose }: ReceiptModalProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit' });
    };

    const emailTemplate = `Subject: Fee Receipt - ${student.name}

Dear ${student.name.split(' ')[0]},

Please find attached your fee receipt for the amount of ₹${student.amount.toLocaleString('en-IN')}.

Payment Date: ${student.paymentDate ? formatDate(student.paymentDate) : 'N/A'}
Class: ${student.className}
Receipt No: ${student.receiptNo || 'N/A'}

If you have any queries regarding your fee payment, please contact the accounts office.

Best regards,
EduFlow Institution
Accounts Department
fees@eduflow.com`;

    const handleCopy = () => {
        navigator.clipboard.writeText(emailTemplate);
        // TODO: Show toast notification
    };

    const handleSend = () => {
        // TODO: Implement email sending functionality
        console.log("Sending email:", emailTemplate);
        onClose();
    };

    return (
        <>
            {/* Overlay */}
            <div 
                className="fixed inset-0 bg-black/50 z-50"
                onClick={onClose}
            />
            
            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-woodsmoke/20">
                        <h2 className="text-xl font-semibold text-woodsmoke">Fee Receipt Email</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-athen-gray rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5 text-rust" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-rust mb-2 block">
                                    Email Template
                                </label>
                                <textarea
                                    readOnly
                                    value={emailTemplate}
                                    className="w-full h-64 p-4 border border-woodsmoke/20 rounded-md bg-athen-gray text-sm text-white resize-none focus:outline-none focus:ring-2 focus:ring-pumpkin focus:ring-offset-2"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-end gap-3 p-6 border-t border-woodsmoke/20">
                        <button
                            onClick={handleCopy}
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-woodsmoke/20 bg-white hover:bg-athen-gray text-rust h-10 rounded-md px-4"
                        >
                            Copy
                        </button>
                        <button
                            onClick={handleSend}
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors bg-pumpkin text-white hover:bg-pumpkin/90 h-10 rounded-md px-4"
                        >
                            Send Email
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

