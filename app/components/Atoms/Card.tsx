export default function Card({ children, style, className }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
    return (
        <div className={`rounded-lg bg-white shadow-sm animate-slide-up hover:shadow-lg transition-all duration-300 ${className || ""}`} style={style}>{children}</div>
    )
}