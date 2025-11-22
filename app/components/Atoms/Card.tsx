export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-lg bg-white shadow-sm animate-slide-up hover:shadow-lg transition-all duration-300">{children}</div>
    )
}