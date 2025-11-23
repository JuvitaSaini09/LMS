"use client";

import Card from "@/app/components/Atoms/Card";
import Title from "@/app/components/Atoms/Title";
import Subtitle from "@/app/components/Atoms/Subtitle";
import { stats, performanceTrendData, subjectWiseData, radarData } from "./data";
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

export default function MarksAnalysisPage() {
    return (
        <div className="p-8 space-y-8 animate-fade-in">
            <div>
                <Title title="Marks Analysis" />
                <Subtitle title="Comprehensive analysis of your academic performance" />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                    <Card key={idx} style={{ animationDelay: `${idx * 100}ms` } as React.CSSProperties}>
                        <div className="px-6 pt-6 pb-2">
                            <div className="space-y-1.5 flex flex-row items-center justify-between">
                                <h3 className="text-sm font-medium text-slate-400">{stat.title}</h3>
                                <div className={`w-10 h-10 rounded-lg ${stat.iconColor} flex items-center justify-center ${stat.iconTextColor}`}>
                                    {stat.icon}
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <div className={`text-3xl font-bold ${stat.iconTextColor}`}>{stat.value}</div>
                            <p className="text-xs text-slate-400 mt-1">{stat.subtitle}</p>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Performance Trend Analysis */}
            <Card>
                <div className="p-6">
                    <Title title="Performance Trend Analysis" text="2xl" />
                    <Subtitle title="Your marks progression across different terms" />
                </div>
                <div className="p-6 pt-0">
                    <ResponsiveContainer width="100%" height={350}>
                        <LineChart data={performanceTrendData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis 
                                dataKey="term" 
                                stroke="#9ca3af"
                                tick={{ fill: "#9ca3af" }}
                            />
                            <YAxis 
                                stroke="#9ca3af"
                                tick={{ fill: "#9ca3af" }}
                            />
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: "#1f2937", 
                                    border: "1px solid #374151",
                                    borderRadius: "8px"
                                }}
                                labelStyle={{ color: "#fff" }}
                            />
                            <Legend />
                            <Line 
                                type="monotone" 
                                dataKey="Math" 
                                stroke="#3b82f6" 
                                strokeWidth={2}
                                dot={{ r: 4, fill: "#3b82f6", strokeWidth: 2 }}
                            />
                            <Line 
                                type="monotone" 
                                dataKey="Physics" 
                                stroke="#8b5cf6" 
                                strokeWidth={2}
                                dot={{ r: 4, fill: "#8b5cf6", strokeWidth: 2 }}
                            />
                            <Line 
                                type="monotone" 
                                dataKey="Chemistry" 
                                stroke="#ec4899" 
                                strokeWidth={2}
                                dot={{ r: 4, fill: "#ec4899", strokeWidth: 2 }}
                            />
                            <Line 
                                type="monotone" 
                                dataKey="Biology" 
                                stroke="#10b981" 
                                strokeWidth={2}
                                dot={{ r: 4, fill: "#10b981", strokeWidth: 2 }}
                            />
                            <Line 
                                type="monotone" 
                                dataKey="English" 
                                stroke="#f59e0b" 
                                strokeWidth={2}
                                dot={{ r: 4, fill: "#f59e0b", strokeWidth: 2 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Card>

            {/* Subject-wise Performance and Performance Radar */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                {/* Subject-wise Performance */}
                <Card>
                    <div className="p-6">
                        <Title title="Subject-wise Performance" text="2xl" />
                        <Subtitle title="Comparison with class average" />
                    </div>
                    <div className="p-6 pt-0">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={subjectWiseData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis 
                                    dataKey="subject" 
                                    angle={-45}
                                    textAnchor="end"
                                    height={80}
                                    stroke="#9ca3af"
                                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                                />
                                <YAxis 
                                    stroke="#9ca3af"
                                    tick={{ fill: "#9ca3af" }}
                                />
                                <Tooltip 
                                    contentStyle={{ 
                                        backgroundColor: "#1f2937", 
                                        border: "1px solid #374151",
                                        borderRadius: "8px"
                                    }}
                                    labelStyle={{ color: "#fff" }}
                                />
                                <Legend />
                                <Bar 
                                    dataKey="yourScore" 
                                    fill="#3b82f6" 
                                    radius={[8, 8, 0, 0]}
                                    name="Your Score"
                                />
                                <Bar 
                                    dataKey="classAverage" 
                                    fill="#9ca3af" 
                                    radius={[8, 8, 0, 0]}
                                    name="Class Average"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Performance Radar */}
                {/* <Card>
                    <div className="p-6">
                        <Title title="Performance Radar" text="2xl" />
                        <Subtitle title="Overall skill assessment across subjects" />
                    </div>
                    <div className="p-6 pt-0">
                        <ResponsiveContainer width="100%" height={300}>
                            <RadarChart data={radarData}>
                                <PolarGrid stroke="rgba(17, 20, 24, 0.1)" />
                                <PolarAngleAxis 
                                    dataKey="subject" 
                                    tick={{ fill: "#626284" }}
                                />
                                <PolarRadiusAxis 
                                    angle={90} 
                                    domain={[0, 100]}
                                    tick={{ fill: "#626284" }}
                                />
                                <Radar 
                                    name="Your Score" 
                                    dataKey="yourScore" 
                                    stroke="#ff6e13" 
                                    fill="#ff6e13" 
                                    fillOpacity={0.6}
                                />
                                <Radar 
                                    name="Class Average" 
                                    dataKey="classAverage" 
                                    stroke="#c5c6c7" 
                                    fill="#c5c6c7" 
                                    fillOpacity={0.3}
                                />
                                <Legend />
                                <Tooltip 
                                    contentStyle={{ 
                                        backgroundColor: "white", 
                                        border: "1px solid rgba(17, 20, 24, 0.2)",
                                        borderRadius: "8px"
                                    }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </Card> */}
            </div>
        </div>
    );
}
