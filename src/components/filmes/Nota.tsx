import Flex from "../template/Flex";
import { IconStarFilled } from "@tabler/icons-react";
import { cn } from "@/utils/cn";

interface NotaProps {
  nota: number;
  grande?: boolean;
}

export default function Nota({ nota, grande }: NotaProps) {
  return (
    <Flex className="mt-2">
      <IconStarFilled
        className={cn("text-amber-400")}
      />
      <span className={cn("font-semibold", { "text-xl": grande })}>
        {nota.toFixed(1)}/10
      </span>
    </Flex>
  );
}
