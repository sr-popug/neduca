import pagesConfig from '@/configs/pages'
import Image from 'next/image'
import Link from 'next/link'
import './header.scss'

export default function Header() {
  return (
    <header className='main-header'>
      <Link href='/' className='main-logo'>
        <Image
          className='main-logo'
          width={37}
          height={37}
          alt='main-logo'
          src='/images/logo-icon.svg'
        />
        <h5> Neduca </h5>
      </Link>
      {pagesConfig.map(group => {
        return (
          <article className='group'>
            <article className='head'>
              <div className='circle'></div>
              <h5>{group.groupName}</h5>
            </article>
            {group.elements.map(el => {
              return (
                <Link href={el.link}>
                  <el.Img width={27} height={27} />
                  <article className='hidden-info'>
                    <h4>{el.title}</h4>
                    <p>{el.description}</p>
                  </article>
                </Link>
              )
            })}
          </article>
        )
      })}
    </header>
  )
}
