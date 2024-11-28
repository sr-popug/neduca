import { Loader2 } from 'lucide-react'
import './loading.scss'

export default function Loading() {
  return (
    <article className='loading-over-content'>
      <div>
        <Loader2 width={100} height={100} className='image-loader' />
        <p>Загрузка...</p>
      </div>
    </article>
  )
}