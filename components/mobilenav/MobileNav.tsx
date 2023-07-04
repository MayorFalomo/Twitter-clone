import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { BiBell, BiSearch } from 'react-icons/bi'
import { RiHome7Line } from 'react-icons/ri'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { MobileNavStyle } from './Mobilenav.styled'
import { useRouter } from 'next/router'
import axios from 'axios'
import { AppContext } from '@/helpers/Helpers'

type Props = {}

const MobileNav = (props: Props) => {

  const {currentUser, notifications} = useContext(AppContext)
  
  const router = useRouter();
  const currentRoute = router.pathname;

  const [user, setUser] = useState();
  const [lengthOfNotification, setLengthOfNotification] = useState<any>([])

  useEffect(() => {
    if (currentUser !== null) {
      axios.get(`https://twitter-clone-server-nu.vercel.app/api/users/get-user/${currentUser?.username}`)
        .then((res) => setUser(res.data) )
    }
  }, [currentUser?.username, currentRoute])

   useEffect(() => {
     const notify = async () => {
       await axios.get(`https://twitter-clone-server-nu.vercel.app/api/users/${currentUser?._id}/get-notifications`)
      .then((res: any) => setLengthOfNotification(res.data))
    .catch((err) => console.log(err) )
    }
    notify()
  },[currentUser?._id])

    return (
      <MobileNavStyle>
      <div className='mobileNavCon' >
          <Link href='/' ><span><RiHome7Line className={ currentRoute == '/' ? "activeRoute" : "navIcon"}  /></span></Link>
          <Link href='/trending' ><span><BiSearch className={currentRoute == '/trends' ? "activeRoute" : "navIcon"} /></span></Link>
          <div className="notificationsCon" >
            <Link href='/notifications' ><span><BiBell className={currentRoute == '/notifications' ? "activeRoute" : "navIcon"} /> </span></Link>
            <span className='noOfNotifications' >{lengthOfNotification?.length } </span>
            {/* <span className='noOfNotifications' >{currentUser?.notifications?.length > 0 ? currentUser?.notifications?.length || notifications?.length : "" } </span> */}
            </div>
          <Link href='/messages' ><span><RxEnvelopeClosed className={currentRoute =='/messages' ? "activeRoute" : "navIcon"} /></span></Link>
            </div>
            </MobileNavStyle>
  )
}

export default MobileNav