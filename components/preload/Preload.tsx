import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { PreloadStyle } from './Preload.styled'

type Props = {}

const Preload = (props: any) => {
  return (
    <PreloadStyle>
    <div className='preloadContainer' >
      <p><BsTwitter className='loginLogo' style={{ color: ' #1d9aef' }} /></p>
      </div>
      </PreloadStyle>
  )
}

export default Preload