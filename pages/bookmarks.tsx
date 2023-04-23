import Navbar from '@/components/navbar/Navbar'
import { AppContext } from '@/helpers/Helpers'
import React, { useContext } from 'react'

type Props = {}

const bookmarks = (props: Props) => {
  const { bookmarks } = useContext(AppContext)
  
  console.log(bookmarks);
  
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default bookmarks