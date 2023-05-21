import Link from 'next/link'
import React from 'react'
import { BiBell, BiSearch } from 'react-icons/bi'
import { RiHome7Line } from 'react-icons/ri'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { MobileNavStyle } from './Mobilenav.styled'
import { useRouter } from 'next/router'

type Props = {}

const MobileNav = (props: Props) => {

  const router = useRouter();
  const currentRoute = router.pathname;

    return (
      <MobileNavStyle>
      <div className='mobileNavCon' >
          <Link href='/' ><span><RiHome7Line className={ currentRoute == '/' ? "activeRoute" : "navIcon"}  /></span></Link>
          <Link href='/trending' ><span><BiSearch className={currentRoute == '/trends' ? "activeRoute" : "navIcon"} /></span></Link>
          <Link href='/notifications' ><span><BiBell className={currentRoute == '/notifications' ? "activeRoute" : "navIcon"} /></span></Link>
          <Link href='/messages' ><span><RxEnvelopeClosed className={currentRoute =='/messages' ? "activeRoute" : "navIcon"} /></span></Link>
            </div>
            </MobileNavStyle>
  )
}

export default MobileNav