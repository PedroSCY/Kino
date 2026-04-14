import { cn } from '@/utils/cn'
import { ReactNode } from 'react'

interface WrapProps {
  children: ReactNode
  className?: string
}

export default function Wrap({children, className}: WrapProps) {
  return (
    <div className={cn("w-full overflow-hidden",className)}>{children}</div>
  )
}
