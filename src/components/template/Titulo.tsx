import { cn } from "@/utils/cn";

interface TituloProps {
  texto: string;
  pequeno?: boolean;
  className?: string;
  alinhar?: "center" | "left" | "right";
}

export default function Titulo({
  texto,
  alinhar,
  className,
  pequeno,
}: TituloProps) {
  return (
    <h1
      className={cn(
        `my-5 text-3xl px-0 font-bold w-full md:text-4xl xl:text-5xl`,
        {
          "font-semibold text-2xl md:text-3xl xl:text-4xl": pequeno,
          [`${alinhar === "center" ? "text-center" : alinhar === "left" ? "text-left" : "text-right"}`]:
            alinhar,
        },
        className,
      )}
    >
      {texto}
    </h1>
  );
}
