import Link from 'next/link'
import React from 'react'
import { BiBell, BiSearch } from 'react-icons/bi'
import { RiHome7Line } from 'react-icons/ri'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { MobileNavStyle } from './Mobilenav.styled'

type Props = {}

const MobileNav = (props: Props) => {
    return (
      <MobileNavStyle>
      <div className='mobileNavCon' >
          <Link href='/' ><span><RiHome7Line className="navIcon"  /></span></Link>
          <Link href='/trending' ><span><BiSearch className="navIcon"  /></span></Link>
          <Link href='/notifications' ><span><BiBell className="navIcon" /></span></Link>
          <Link href='/messages' ><span><RxEnvelopeClosed className="navIcon" /></span></Link>
            </div>
            </MobileNavStyle>
  )
}

export default MobileNav