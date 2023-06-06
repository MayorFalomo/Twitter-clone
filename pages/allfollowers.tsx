import Followers from '@/components/followers/Followers'
import MobileNav from '@/components/mobilenav/MobileNav'
import Navbar from '@/components/navbar/Navbar'
import Search from '@/components/search/Search'
import Trends from '@/components/trends/Trends'
import UsersReplies from '@/components/usersreplies/UsersReplies'
import { AppContext } from '@/helpers/Helpers'
import { AllFollowersStyle } from '@/styles/Allfollowers.styled'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'

type Props = {}

const allfollowers = (props: Props) => {
    const { currentUser } = useContext(AppContext)
    
  const [current, setCurrent] = useState<any>(0)
  const [active, setActive] = useState<boolean>(false);

    const handleClick = (param: any) => {
    setCurrent(param);
    // setActive(true);
  };

    console.log(currentUser);
    

    return (
      <AllFollowersStyle>
      <div>
           <div className='connectStyleContainer' >
        <Navbar />
                <div className='centerGridContainer' >
                    <div className='connectDetails' >
                <Link href='/' style={{listStyle: 'none'}} className='arrowBack' >{<BsArrowLeft cursor='pointer' fontSize={25} />} </Link>
                      <h2>{currentUser?.username} </h2>
                      <span>{currentUser?.usersAt} </span>
                      
              </div>
             <ul className="postGroup" >
                  <a
                    className={current == 0 ? "linkActive" : "link"}
                    onClick={() => handleClick(0)}
                  >
                    <li> Followers </li>
                  </a>
                  <a
                    className={current == 1 ? "linkActive" : "link"}
                    onClick={() => handleClick(1)}
                  >
                    <li> Following </li>
                            </a>
                          
                        </ul>
                    {current == 0 && <Followers />}
                {current == 1 && <UsersReplies/> }
                
                    </div>
          </div>
          <div className='rightGridContainer' >
          <Search />
          <Trends/>
        </div>
          <div className="mobileNav" > <MobileNav/></div>
            </div>
            </AllFollowersStyle>
  )
}

export default allfollowers;