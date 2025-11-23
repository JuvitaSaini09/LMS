export interface StudentFee {
    id: string;
    name: string;
    rollNumber: string;
    className: string;
    dueDate: string;
    amount: number;
    status: "PAID" | "PENDING" | "OVERDUE";
    paymentDate?: string;
    receiptNo?: string;
    paymentMethod?: string;
}

export const classes = [
    "10-A",
    "10-B",
    "11-A",
    "11-B",
    "12-A",
    "12-B"
];

export const studentsData: Record<string, StudentFee[]> = {
    "10-A": [
        {
            id: "1",
            name: "Aditya Kumar",
            rollNumber: "RN-101",
            className: "10-A",
            dueDate: "2024-11-15",
            amount: 50000,
            status: "PAID",
            paymentDate: "2024-11-14",
            receiptNo: "RCP-1-2025",
            paymentMethod: "Bank Transfer"
        },
        {
            id: "2",
            name: "Priya Sharma",
            rollNumber: "RN-102",
            className: "10-A",
            dueDate: "2024-11-15",
            amount: 50000,
            status: "PENDING"
        },
        {
            id: "3",
            name: "Rahul Singh",
            rollNumber: "RN-103",
            className: "10-A",
            dueDate: "2024-11-10",
            amount: 50000,
            status: "OVERDUE"
        },
        {
            id: "4",
            name: "Sneha Patel",
            rollNumber: "RN-104",
            className: "10-A",
            dueDate: "2024-11-15",
            amount: 50000,
            status: "PAID",
            paymentDate: "2024-11-12",
            receiptNo: "RCP-2-2025",
            paymentMethod: "Cash"
        }
    ],
    "10-B": [
        {
            id: "5",
            name: "Amit Verma",
            rollNumber: "RN-201",
            className: "10-B",
            dueDate: "2024-11-15",
            amount: 50000,
            status: "PENDING"
        },
        {
            id: "6",
            name: "Kavita Reddy",
            rollNumber: "RN-202",
            className: "10-B",
            dueDate: "2024-11-10",
            amount: 50000,
            status: "OVERDUE"
        }
    ],
    "11-A": [
        {
            id: "7",
            name: "Vikram Mehta",
            rollNumber: "RN-301",
            className: "11-A",
            dueDate: "2024-11-20",
            amount: 55000,
            status: "PAID",
            paymentDate: "2024-11-18",
            receiptNo: "RCP-3-2025",
            paymentMethod: "Online Payment"
        }
    ],
    "11-B": [],
    "12-A": [],
    "12-B": []
};

