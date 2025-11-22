import StudentDashboardCard from "@/app/components/StudentDashboardCard";
import { cards, quickActions, recentGrades } from "./data";
import Title from "@/app/components/Atoms/Title";
import Subtitle from "@/app/components/Atoms/Subtitle";
import Card from "@/app/components/Atoms/Card";
import Link from "next/link";

export default function DashboardPage() {

    const getGradeColor = (grade: string) => {
        if (grade === "A+") return "text-[#21c45d]";
        if (grade === "A") return "text-[#21c45d]";
        if (grade === "B+") return "text-pumpkin";
        if (grade === "B") return "text-pumpkin";
        if (grade === "C") return "text-silver-sand";
        return "text-silver-sand";
    }

    return (
        <div className="p-8 space-y-8 animate-fade-in">
            <div>
                <Title title="Dashboard" />
                <Subtitle title="Track your academic performance and progress" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    cards.map((card, idx) => (
                        <StudentDashboardCard key={idx} title={card.title} icon={card.icon} iconColor={card.iconColor} value={card.value} subtitle={card.subtitle} />
                    ))
                }
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <div className="p-6">
                        <Title title="Recent Grades" />
                        <Subtitle title="Your latest Academic Performance" />
                    </div>
                    <div className="p-6 pt-0 space-y-4">
                        {
                            recentGrades.map((grade, idx) => (
                                <div key={idx} className="flex items-center justify-between p-4 rounded-lg border-[0.5px] border-woodsmoke/20 hover:border-woodsmoke/50 transition-color">
                                    <div>
                                        <h3 className="font-semibold">{grade.subject}</h3>
                                        <Subtitle title={`Score: ${grade.marks}/${grade.totalMarks}`} />
                                    </div>

                                    <div className={`min-w-9 text-2xl font-bold ${getGradeColor(grade.grade)}`}>{grade.grade}</div>

                                </div>
                            ))
                        }
                    </div>
                </Card>
                <Card>
                    <div className="p-6">
                        <Title title="Quick Actions" />
                        <Subtitle title="Access your academic tools" />
                    </div>
                    <div className="p-6 pt-0">
                    <div className=" grid grid-cols-2 gap-4">
                        {
                            quickActions.map((action, idx) => (
                                <Card key={idx}>
                                      <Link key={idx} href={action.link} className="bg-athen-gray">
                                    <div className="border-[0.5px] border-woodsmoke/5 hover:bg-pumpkin hover:text-white rounded-md px-4 py-2 h-24 flex flex-col items-center justify-center gap-2 transition-[color,background-color,border-color,text-decoration-color,fill,stroke] ease-in-out duration-150">
                                    
                                    {action.icon}
                                    <span className="text-sm">{action.title}</span>
                                    </div>
                                </Link>
                                </Card>
                              
                            ))
                        }
                    </div>
                    </div>
                </Card>
            </div>


        </div>
    )
}