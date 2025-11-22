import Card from "./Atoms/Card";

export default function StudentDashboardCard({ title, icon, iconColor, value, subtitle }: { title: string, icon: React.ReactNode, iconColor: string, value: string, subtitle?: string }) {
    return (
        <Card>
            <div className="px-6 pt-6 pb-2">
                <div className="space-y-1.5 flex gap-2 items-center justify-between">
                    <h3 className="text-sm font-medium text-rust">{title}</h3>
                    <div className={`w-10 h-10 rounded-lg ${iconColor} flex items-center justify-center`}>{icon}</div>
                </div>
            </div>
            <div className="p-6 pt-0">
                <div className="text-2xl font-bold">{value}</div>
                {subtitle && <p className="text-xs text-[#21c45d] font-medium">+0.3 from last term</p>}
            </div>
        </Card>
    )
}