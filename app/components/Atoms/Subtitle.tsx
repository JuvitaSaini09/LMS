export default function Subtitle({
    title,
    text,
  }: {
    title: string;
    text?: "text-sm" | "text-md" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl";
  }) {
    return (
      <p className={`text-slate-400 ${text ? text : ""}`}>
        {title}
      </p>
    );
  }
  