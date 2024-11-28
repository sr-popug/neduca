import { LoaderCircle } from 'lucide-react'
import './loader.scss'

export default function Loader() {
  return (
    <div className='image-loader'>
      {<LoaderCircle width={100} height={100} />}
    </div>
  )
}
