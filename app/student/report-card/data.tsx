export interface ReportCardSubject {
    subject: string;
    theoryMarks?: number;
    theoryMax?: number;
    practicalMarks?: number;
    practicalMax?: number;
    totalObtained: number;
    totalMax: number;
    grade: string;
}

export interface ReportCardData {
    studentName: string;
    rollNumber: string;
    className: string;
    academicYear: string;
    term: string;
    subjects: ReportCardSubject[];
}

export const reportCardData: ReportCardData = {
    studentName: "John Doe",
    rollNumber: "2024001",
    className: "Class 10-A",
    academicYear: "2024-2025",
    term: "Term 1",
    subjects: [
        {
            subject: "Mathematics",
            theoryMarks: 95,
            theoryMax: 100,
            totalObtained: 95,
            totalMax: 100,
            grade: "A+"
        },
        {
            subject: "Physics",
            theoryMarks: 62,
            theoryMax: 70,
            practicalMarks: 27,
            practicalMax: 30,
            totalObtained: 89,
            totalMax: 100,
            grade: "A"
        },
        {
            subject: "Chemistry",
            theoryMarks: 64,
            theoryMax: 70,
            practicalMarks: 27,
            practicalMax: 30,
            totalObtained: 91,
            totalMax: 100,
            grade: "A"
        },
        {
            subject: "Biology",
            theoryMarks: 60,
            theoryMax: 70,
            practicalMarks: 25,
            practicalMax: 30,
            totalObtained: 85,
            totalMax: 100,
            grade: "B+"
        },
        {
            subject: "English",
            theoryMarks: 88,
            theoryMax: 100,
            totalObtained: 88,
            totalMax: 100,
            grade: "A"
        },
        {
            subject: "Computer Science",
            theoryMarks: 72,
            theoryMax: 70,
            practicalMarks: 28,
            practicalMax: 30,
            totalObtained: 100,
            totalMax: 100,
            grade: "A+"
        }
    ]
};

export const calculateOverallStats = (subjects: ReportCardSubject[]) => {
    const totalObtained = subjects.reduce((sum, subj) => sum + subj.totalObtained, 0);
    const totalMax = subjects.reduce((sum, subj) => sum + subj.totalMax, 0);
    const percentage = (totalObtained / totalMax) * 100;
    
    // Calculate overall grade based on percentage
    let overallGrade = "A+";
    if (percentage >= 90) overallGrade = "A+";
    else if (percentage >= 80) overallGrade = "A";
    else if (percentage >= 70) overallGrade = "B+";
    else if (percentage >= 60) overallGrade = "B";
    else if (percentage >= 50) overallGrade = "C";
    else overallGrade = "D";
    
    return {
        totalObtained,
        totalMax,
        percentage: percentage.toFixed(2),
        overallGrade
    };
};

