import Meet from '@/components/meet/Meet'
import MobileNav from '@/components/mobilenav/MobileNav'
import Navbar from '@/components/navbar/Navbar'
import Search from '@/components/search/Search'
import Trends from '@/components/trends/Trends'
import { AppContext } from '@/helpers/Helpers'
import { ConnectStyled } from '@/styles/Connect.styled'
import Link from 'next/link'
import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'

type Props = {}

const connect = (props: Props) => {

    const { currentUser, suggestedUsers } = useContext(AppContext)

    return (
      <ConnectStyled>
    <div className='connectStyleContainer' >
        <Navbar />
                <div className='centerGridContainer' >
                    <div className='connectDetails' >
                <Link href='/' style={{listStyle: 'none'}} className='arrowBack' >{<BsArrowLeft cursor='pointer' fontSize={25} />} </Link>
                <h2>Connect </h2>
              </div>
              <h2>Suggested for you </h2>
                    <div className='mappedContainer' >
                        {suggestedUsers.map((suggest: any) => (
                            <div key={suggest._id} className="subMapped" ><Meet suggest={suggest} />
                                </div>
                        ))}
                    </div>
          </div>
          <div className='rightGridContainer' >
          <Search />
          <Trends/>
        </div>
          <div className="mobileNav" > <MobileNav/></div>
            </div>
            </ConnectStyled>
  )
}

export default connect