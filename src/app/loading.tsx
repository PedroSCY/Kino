"use client"
import Wrap from '@/components/template/Wrap'
import { IconLoader2 } from '@tabler/icons-react'

export default function Carregando() {
  return (
    <Wrap className='absolute w-full top-1/2'>
      <IconLoader2 size={80} stroke={2} className='animate-spin text-white m-auto' />
    </Wrap>
  )
}
