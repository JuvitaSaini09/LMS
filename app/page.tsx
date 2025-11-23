"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GraduationCap, Users, BarChart3, BookOpen, UserCheck, ChartColumn } from "lucide-react";

type Role = "Student" | "Teacher" | "Admin";

export default function LoginPage() {
    const [selectedRole, setSelectedRole] = useState<Role>("Student");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple login logic - just navigate based on role
        if (selectedRole === "Student") {
            router.push("/student/dashboard");
        } else if (selectedRole === "Teacher") {
            router.push("/teacher/dashboard");
        } else if (selectedRole === "Admin") {
            router.push("/admin/analytics");
        }
    };

    const logoIconSvg = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-graduation-cap w-7 h-7"
        >
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
            <path d="M22 10v6"></path>
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
        </svg>
    );

    const gridPattern = `data:image/svg+xml;base64,${btoa('<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" stroke-opacity="0.05" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)"/></svg>')}`;

    return (
        <div className="min-h-screen bg-gradient-to-br from-pumpkin via-pumpkin/90 to-hit-pink flex items-center justify-center p-4">
            <div 
                className="absolute inset-0 opacity-30"
                style={{ backgroundImage: `url(${gridPattern})` }}
            />
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center relative z-10">
                {/* Left Side - Features */}
                <div className="text-white space-y-6 animate-fade-in hidden md:block">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            {logoIconSvg}
                        </div>
                        <h1 className="text-4xl font-bold">EduFlow LMS</h1>
                    </div>
                    <p className="text-xl text-white/90">Comprehensive Learning Management System for Modern Education</p>
                    <div className="space-y-4 pt-8">
                        <div className="flex items-start gap-4 p-4 bg-white/15 backdrop-blur-sm rounded-xl">
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Study Materials</h3>
                                <p className="text-sm text-white/80">Access comprehensive learning resources</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-white/15 backdrop-blur-sm rounded-xl">
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <UserCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Attendance Management</h3>
                                <p className="text-sm text-white/80">Streamlined attendance tracking</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-white/15 backdrop-blur-sm rounded-xl">
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <ChartColumn className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Advanced Analytics</h3>
                                <p className="text-sm text-white/80">Comprehensive performance insights</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="rounded-lg border border-woodsmoke/20 bg-white shadow-2xl animate-scale-in">
                    <div className="flex flex-col p-6 space-y-1">
                        <h3 className="tracking-tight text-3xl font-bold text-woodsmoke">Welcome Back</h3>
                        <p className="text-sm text-rust">Select your role and login to continue</p>
                    </div>
                    <div className="p-6 pt-0">
                        <form onSubmit={handleLogin} className="space-y-6">
                            {/* Role Selection */}
                            <div className="grid grid-cols-3 gap-3">
                                <button
                                    type="button"
                                    onClick={() => setSelectedRole("Student")}
                                    className={`items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors px-4 py-2 h-20 flex flex-col gap-2 ${
                                        selectedRole === "Student"
                                            ? "bg-pumpkin text-white hover:bg-pumpkin/90"
                                            : "border border-woodsmoke/20 bg-white hover:bg-athen-gray text-rust"
                                    }`}
                                >
                                    <GraduationCap className="w-6 h-6" />
                                    <span className="text-sm">Student</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelectedRole("Teacher")}
                                    className={`items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors px-4 py-2 h-20 flex flex-col gap-2 ${
                                        selectedRole === "Teacher"
                                            ? "bg-pumpkin text-white hover:bg-pumpkin/90"
                                            : "border border-woodsmoke/20 bg-white hover:bg-athen-gray text-rust"
                                    }`}
                                >
                                    <Users className="w-6 h-6" />
                                    <span className="text-sm">Teacher</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelectedRole("Admin")}
                                    className={`items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors px-4 py-2 h-20 flex flex-col gap-2 ${
                                        selectedRole === "Admin"
                                            ? "bg-pumpkin text-white hover:bg-pumpkin/90"
                                            : "border border-woodsmoke/20 bg-white hover:bg-athen-gray text-rust"
                                    }`}
                                >
                                    <BarChart3 className="w-6 h-6" />
                                    <span className="text-sm">Admin</span>
                                </button>
                            </div>

                            {/* Email Input */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-woodsmoke">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex h-10 w-full rounded-md border border-woodsmoke/20 bg-white px-3 py-2 text-sm placeholder:text-rust focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pumpkin focus-visible:ring-offset-2"
                                />
                            </div>

                            {/* Password Input */}
                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium text-woodsmoke">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="flex h-10 w-full rounded-md border border-woodsmoke/20 bg-white px-3 py-2 text-sm placeholder:text-rust focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pumpkin focus-visible:ring-offset-2"
                                />
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors bg-pumpkin text-white hover:bg-pumpkin/90 px-4 py-2 w-full h-12 text-base"
                            >
                                Login as {selectedRole}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
