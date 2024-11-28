'use client'
import { LoaderCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { push } = useRouter()
  push('/issues/js')
  return (
    <article className='loading-layout'>
      <div className='image'>{<LoaderCircle width={100} height={100} />}</div>
    </article>
  )
}
