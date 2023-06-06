import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '@/helpers/Helpers';
import { NotifyStyle } from './Notification.styled';
import { IoSettingsOutline } from 'react-icons/io5';
import UsersReplies from '../usersreplies/UsersReplies';
import { NotificationsStyle } from '@/styles/Notifications.styled';
import { BsFillPersonFill, BsHeart, BsHeartFill } from 'react-icons/bs';
import { AiOutlineRetweet } from 'react-icons/ai';
import MobileNav from '../mobilenav/MobileNav';

const Notification = ({ notification }: any) => {
  const { currentUser, } = useContext(AppContext);

  const [showLike, setShowLike] = useState<boolean>(false)
  const [showRetweets, setShowRetweets] = useState<boolean>(false)
  const [showAvatar, setShowAvatar] = useState<boolean>(false)

//  console.log(notification, "these are all notifications");
 
  // function addLoveEmoji(notification:any) {
  //   if (notification?.message.includes("liked")) {
  //   setShowLike(true)
  //   // notification.message = " ❤️" + notification?.message; // Adding a love emoji at the end of the message
  // }
  // return notification;
  // }
  
  // const modifiedNotification = addLoveEmoji(notification)

  // console.log(modifiedNotification);

  useEffect(() => {
    showLove()
    showRetweet()
    showFollow()
  }, [])

  const showLove = () => {
 if (notification?.message.includes("liked")) {
    setShowLike(true)
  } else {
    setShowLike(false)
  }
  } 

  const showRetweet = () => {
 if (notification?.message.includes("retweeted")) {
    setShowRetweets(true)
  } else {
    setShowRetweets(false)
  }
  } 
  const showFollow = () => {
 if (notification?.message.includes("followed")) {
    setShowAvatar(true)
  } else {
    setShowAvatar(false)
  }
  } 
  
  

  return (
    <NotifyStyle>
      <div className='mainNotifyContainer' >
        <div className='subNotificationsContainer'>
        {showLike ? <span className='loveIcon' ><BsHeartFill color='#F91880' /> </span> : ""}
        {showRetweets ? <span className='loveIcon' ><AiOutlineRetweet color='#00BA7C' /> </span> : ""}
        {showAvatar ? <span className='loveIcon' ><BsFillPersonFill color='#1D9BF0' /> </span> : ""}
        <div>
            <div style={{ backgroundImage: `url(${notification?.profileDp})` }} className='profileDp' > </div>
            <div className='notificationContent'>
        <h3 className='username' >{notification?.currentUserName} </h3>
              <p>{notification?.message}</p>
              </div>
        <p>{notification?.tweets}</p>
          </div>
        </div>
        </div>
      </NotifyStyle>
  );
};

const Notifications = () => {
  const { currentUser, notifications, setNotifications } = useContext(AppContext);
  const [notification, setNotification] = useState<string[]>([]);

  useEffect(() => {
    // console.log(currentUser.notifications);
    
    const fetchNotifications = async () => {
      try {
         const res =await axios.get(`https://twitter-clone-server-nu.vercel.app/api/users/${currentUser?._id}/get-notifications` );
        setNotification(res.data)
        
           // Clear notifications
              setNotifications(notification)
      } catch (error) {
        console.log('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [currentUser?._id]);

  useEffect(() => {
    const clearNotificationsAfterDelay = () => {
       const delayInMilliseconds = 18 * 1000; // 3 minutes in milliseconds
      const timeout = setTimeout(() => {
        handleClearNotifications();
      }, delayInMilliseconds); // 10 seconds delay

      // Cleanup function to cancel the timeout if the component unmounts
      return () => clearTimeout(timeout);
    };

    clearNotificationsAfterDelay();
  }, []);

  const handleClearNotifications = async () => {
    try {
     const res = await axios.put(`https://twitter-clone-server-nu.vercel.app/api/users/clear-notifications/clear`, {
          id: currentUser._id,
        });
        setNotification(res.data);
        setNotifications(notification);
    } catch (error) {
      console.log('Error clearing notifications:', error);
    }
  };

//   useEffect(() => {
//     axios.post('http://localhost:7000/users/clear-notifications', {
//       id: currentUser._id,
//     }).then((response) => setNotifications(response.data))
//     console.log(currentUser.notifications?.length);
    
//   }, [])

//   let returnData;
//   if (notifications?.length >= 1) {
//     returnData = notifications?.map(notification => {
//       return <Notification notification={notification} />
//     })
//   } else {
//     returnData = <h2>No Notifications</h2>
//   }
//   return (
//     returnData
//   )
// }
  // const handleClearNotifications = async () => {
  //   try {
  //     await axios.put('http://localhost:7000/api/users/notifications', {
  //       userId: currentUser._id,
  //     })
  //     setNotifications([])
  //   } catch (error) {
  //     console.log("Error clearing notifications");
  //   }
  // }


    const [current, setCurrent] = useState<any>(0)

     const handleClick = (param: any) => {
    setCurrent(param);
    };
    

  const renderNotifications = () => {
    if (notification?.length === 0) {
      return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', fontSize: '20px' }}>
        <p>No new notifications</p>
                          {/* <div className="mobileNav" > <MobileNav/></div> */}
      </div>;
    }

    return <div>{notification?.map((notification: string, index: number) => (
      <div key={index}  >
        <Notification notification={notification} />
      </div>
    ))}
    </div>;
  };

  return (
    <NotifyStyle>
      <div className='notifyCon' >
        <div className='notifyHeader' >
          <div className='notificationsFlex' >
          <h2>Notifications</h2>
            <span><IoSettingsOutline cursor='pointer' /></span>
          </div>
             <ul className='switchNotifications'>
                        <li onClick={(e:any) => handleClick(0)} className={current == 0  ? "border-bottom" : "no-border"} style={{  cursor: "pointer" }} >All </li>
                        <li onClick={(e:any) => handleClick(1)} className={current == 1 ? "border-bottom" : ""} style={{ cursor: "pointer" }}>Verified </li>
                        <li onClick={(e:any) => handleClick(2)}  className={current == 2 ? "border-bottom" : ""} style={{ cursor: "pointer" }}>Mentions</li>
                        {/* <li onClick={(e: any) => handleClick(3)}  className={current == 3 ? "border-bottom" : ""} style={{ cursor: "pointer" }}> Likes</li>           */}
                    </ul>
          {current == 0 && <div>
            <Notification />
             {renderNotifications()}
          </div>}
        </div>
                {current == 1 && <UsersReplies/> }
                {current == 2 && <UsersReplies/> }
                  {/* <div className="mobileNav" > <MobileNav/></div> */}

      </div>
      </NotifyStyle>
  );
};

export default Notifications;