import Navbar from '@/components/navbar/Navbar'
import Search from '@/components/search/Search';
import Singleuser from '@/components/singleuser/Singleuser';
import Trends from '@/components/trends/Trends';
import Whotofollow from '@/components/whotofollow/Whotofollow';
import { UsernamePageStyle } from '@/styles/username.styled';
import axios from 'axios';
import { Router, useRouter } from 'next/router';
import React, {useEffect, useState} from 'react'

type Props = {}

// const router = useRouter()

// console.log(router);

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:7000/api/users')
  const data = await res.json()

  const paths = data.map((path: any) => {
    return {
      params: { username: path.username  }
    }
  })
  return { 
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
    const username :string = context.params?.username;
  const res = await fetch('http://localhost:7000/api/users/get-user/' + username);
  const data = await res.json();
  
  return {
    props: {
      users: data
    },
  }
}


const Slug = ({ users }: any) => {
    
  console.log(users);

    const [allUsersTweets, setAllUsersTweets] = useState<any>([])

      useEffect(() => {
     axios.get(`http://localhost:7000/api/tweets/get-tweet/${users?.username}`).then((res) => setAllUsersTweets(res.data)).catch((err) => console.log(err))
  }, [users?.username])
    
    
  return (
    <UsernamePageStyle>
      <div className='userPageContainer' >
      <Navbar />
        <div className='subUserContainer' >
          {users.map((user: any) => (
            <div key={user._id} >
              <Singleuser user={user} allUsersTweets={allUsersTweets} />
              </div>
          ))}
      </div>
      <div className='rightGrid' >
        <Search />
        <Whotofollow/>
        <Trends/>
          </div>
      </div>
      </UsernamePageStyle>
  )
}

export default Slug;