import Navbar from '@/components/navbar/Navbar'
import Notifications from '@/components/notification/Notification'
import React from 'react'

type Props = {}

const notifications = (props: any) => {
  // console.log(props.notification);
  
  return (
    <div>
      {/* <Navbar/> */}
      <Notifications />
    </div>
  )
}

export default notifications