import { cn } from "@/utils/cn";
import { JSX } from "react";

interface BotaoProps {
  texto: string;
  icone?: JSX.Element;
  className?: string;
}

export default function Botao({ texto, className, icone }: BotaoProps) {
  return (
    <button
      className={cn(`
      flex gap-1 items-center justify-center px-3 py-2 font-semibold rounded-lg hover:brightness-75 hover:transition-all bg-red-kino
      `, className)}
    >
      {texto}
      {icone}
    </button>
  );
}
