export default function Title({ title,text="3xl" }: { title: string,text?:"3xl" | "2xl" | "xl" | "lg" | "md" | "sm" }) {
    return (
<h1 className={`text-${text} font-bold mb-2 text-white`}>{title}</h1>   )
}