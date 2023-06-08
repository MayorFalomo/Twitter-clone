import { AppContext } from '@/helpers/Helpers'
import React, { useContext } from 'react'
import MappedFollowing from '../mappedfollowing/MappedFollowing'

type Props = {}

const Following = (props: any) => {
        const { currentUser } = useContext(AppContext)

  return (
      <div>
            {currentUser?.following?.length > 0 ? <div className='mappedContainer' >
              {currentUser?.following?.map((following: any) => (
                  <div key={following?._id} className="subMapped" >
                      <MappedFollowing following={following} />
                  </div>
              ))}
          </div>
              :
              <div className="noFollowersText" ><h2>You have no followers </h2></div>
          }
    </div>
  )
}

export default Following