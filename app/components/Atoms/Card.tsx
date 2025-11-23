export default function Card({ children, style, className }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
    return (
        <div className={`rounded-lg bg-slate-800 border border-slate-700 shadow-sm animate-slide-up hover:border-blue-500 hover:shadow-lg transition-all duration-300 ${className || ""}`} style={style}>{children}</div>
    )
}