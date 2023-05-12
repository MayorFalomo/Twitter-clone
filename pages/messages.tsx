import Navbar from '@/components/navbar/Navbar'
import { AppContext } from '@/helpers/Helpers'
import { MessagesStyle } from '@/styles/Messages.styled'
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
      <div>
        <header>
          <p>Messages </p>
          <div>
            <span>{<AiOutlineSetting/>} </span>
            <span>{<BsEnvelopePlus/>} </span>
          </div>
        </header>
        <div>
        <form>
          <input placeholder={`${<FaSearch/>} Search Direct Messages `} />
          </form>
          </div>
          </div>
        <div>
          <h1>Select a message </h1>
          <p>Choose from your existing conversations, start a new one, or just keep swimming. </p>
          <button>New message </button>
        </div>
      </div>
    </MessagesStyle>
  )
}

export default messages