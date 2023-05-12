import Navbar from '@/components/navbar/Navbar'
import { AppContext } from '@/helpers/Helpers'
import { MessagesStyle } from '@/styles/Messages.styled'
import Link from 'next/link'
import React,{useContext} from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { BsEnvelopePlus } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'

type Props = {}

const messages = (props: any) => {

  const { currentUser, suggestedUsers } = useContext(AppContext)
  
  return (
    <MessagesStyle>
    <div className='messagesContainer' >
      <Navbar />
      <div className='centerGridContainer' >
        <header>
          <h1>Messages </h1>
          <div className='messageIcon' >
            <span>{<AiOutlineSetting fontSize='40px' cursor='pointer' />} </span>
            <span>{<BsEnvelopePlus  fontSize='40px' cursor='pointer' />} </span>
          </div>
        </header>
        <div>
        <form>
          <input placeholder={`${<FaSearch/>} Search Direct Messages `} />
          </form>
          </div>
          </div>
        <div className='leftGrid' >
          <div className='subLeftGrid' >
          <h1>Select a message </h1>
          <p>Choose from your existing conversations, start a new one, or just keep swimming. </p>
            <Link href="" ><button  className='newMessageBtn'>New message</button> </Link>
            </div>
        </div>
      </div>
    </MessagesStyle>
  )
}

export default messages