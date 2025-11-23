"use client";

import Card from "@/app/components/Atoms/Card";
import Title from "@/app/components/Atoms/Title";
import Subtitle from "@/app/components/Atoms/Subtitle";
import { feeStats, monthlyCollectionData, feeStatusDistribution, collectionTrendData } from "./data";
import {
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const COLORS = {
    success: "#21c45d",
    warning: "#ffa972",
    destructive: "#ff6e13"
};

export default function AnalyticsPage() {
    return (
        <div className="p-8 space-y-8 animate-fade-in">
            <div>
                <Title title="Fee Analytics Dashboard" />
                <Subtitle title="Comprehensive view of fee collection and outstanding amounts" />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {feeStats.map((stat, idx) => (
                    <Card 
                        key={idx} 
                        style={{ animationDelay: `${idx * 100}ms` } as React.CSSProperties}
                    >
                        <div className="px-6 pt-6 pb-2">
                            <div className="space-y-1.5 flex flex-row items-center justify-between">
                                <h3 className="text-sm font-medium text-rust">{stat.title}</h3>
                                <div className={`w-10 h-10 rounded-lg ${stat.iconColor} flex items-center justify-center ${stat.iconTextColor}`}>
                                    {stat.icon}
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <div className={`text-3xl font-bold ${stat.iconTextColor}`}>{stat.value}</div>
                            <p className="text-xs text-rust mt-1">{stat.subtitle}</p>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Monthly Fee Collection Trend */}
                <Card>
                    <div className="p-6">
                        <Title title="Monthly Fee Collection Trend" text="2xl" />
                        <Subtitle title="Breakdown of collected, pending, and overdue fees" />
                    </div>
                    <div className="p-6 pt-0">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={monthlyCollectionData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(17, 20, 24, 0.1)" />
                                <XAxis 
                                    dataKey="month" 
                                    stroke="#626284"
                                    tick={{ fill: "#626284" }}
                                />
                                <YAxis 
                                    stroke="#626284"
                                    tick={{ fill: "#626284" }}
                                />
                                <Tooltip 
                                    contentStyle={{ 
                                        backgroundColor: "white", 
                                        border: "1px solid rgba(17, 20, 24, 0.2)",
                                        borderRadius: "8px"
                                    }}
                                />
                                <Legend />
                                <Bar 
                                    dataKey="Collected" 
                                    fill={COLORS.success} 
                                    radius={[8, 8, 0, 0]}
                                />
                                <Bar 
                                    dataKey="Pending" 
                                    fill={COLORS.warning} 
                                    radius={[8, 8, 0, 0]}
                                />
                                <Bar 
                                    dataKey="Overdue" 
                                    fill={COLORS.destructive} 
                                    radius={[8, 8, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Fee Status Distribution */}
                <Card>
                    <div className="p-6">
                        <Title title="Fee Status Distribution" text="2xl" />
                        <Subtitle title="Current state of all fee payments" />
                    </div>
                    <div className="p-6 pt-0">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={feeStatusDistribution}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={(entry: any) => `${entry.name}: ${entry.percentage}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {feeStatusDistribution.map((entry, index) => {
                                        const colorMap = {
                                            "Collected": COLORS.success,
                                            "Pending": COLORS.warning,
                                            "Overdue": COLORS.destructive
                                        };
                                        return (
                                            <Cell 
                                                key={`cell-${index}`} 
                                                fill={colorMap[entry.name as keyof typeof colorMap]} 
                                            />
                                        );
                                    })}
                                </Pie>
                                <Tooltip 
                                    contentStyle={{ 
                                        backgroundColor: "white", 
                                        border: "1px solid rgba(17, 20, 24, 0.2)",
                                        borderRadius: "8px"
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>

            {/* Collection Trend Analysis */}
            <Card>
                <div className="p-6">
                    <Title title="Collection Trend Analysis" text="2xl" />
                    <Subtitle title="6-month collection performance overview" />
                </div>
                <div className="p-6 pt-0">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={collectionTrendData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(17, 20, 24, 0.1)" />
                            <XAxis 
                                dataKey="month" 
                                stroke="#626284"
                                tick={{ fill: "#626284" }}
                            />
                            <YAxis 
                                stroke="#626284"
                                tick={{ fill: "#626284" }}
                            />
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: "white", 
                                    border: "1px solid rgba(17, 20, 24, 0.2)",
                                    borderRadius: "8px"
                                }}
                            />
                            <Legend />
                            <Line 
                                type="monotone" 
                                dataKey="Collected" 
                                stroke={COLORS.success} 
                                strokeWidth={2}
                                dot={{ r: 4, fill: COLORS.success }}
                            />
                            <Line 
                                type="monotone" 
                                dataKey="Pending" 
                                stroke={COLORS.warning} 
                                strokeWidth={2}
                                dot={{ r: 4, fill: COLORS.warning }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Card>
        </div>
    );
}
