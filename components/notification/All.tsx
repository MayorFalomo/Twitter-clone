import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '@/helpers/Helpers';
import { NotifyStyle } from './Notification.styled';
import { IoSettingsOutline } from 'react-icons/io5';
import UsersReplies from '../usersreplies/UsersReplies';

const All = ({ notification }: any) => {
  const { currentUser, } = useContext(AppContext);
  
 console.log(notification, "these are all notifications");
 
  

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} >
        <span>{notification.currentUserName} </span>
        <p>{notification.message}</p>
      </div>
    </div>
  );
};

const AllNotifications = () => {
  const { currentUser, notifications, setNotifications } = useContext(AppContext);
  const [notification, setNotification] = useState<string[]>([]);

  useEffect(() => {
    // console.log(currentUser.notifications);
    
    const fetchNotifications = async () => {
      try {
         const res =await axios.get(`http://localhost:7000/api/users/${currentUser?._id}/get-notifications` );
        setNotification(res.data)
        console.log(notification, "THis is notification");
        
           // Clear notifications
              setNotifications(notification)
        // await axios.put(
        //   `http://localhost:7000/api/users/${currentUser._id}/clear-notifications`,
        // );
      } catch (error) {
        console.log('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    const clearNotificationsAfterDelay = () => {
      const timeout = setTimeout(() => {
        handleClearNotifications();
      }, 3000000); // 10 seconds delay

      // Cleanup function to cancel the timeout if the component unmounts
      return () => clearTimeout(timeout);
    };

    clearNotificationsAfterDelay();
  }, []);

  const handleClearNotifications = async () => {
    try {
     const res = await axios.put(`http://localhost:7000/api/users/clear-notifications/clear`, {
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
      return <div>No new notifications</div>;
    }

    return notification?.map((notification: string, index: number) => (
      <All key={index} notification={notification} />
    ));
  };

  return (
    <NotifyStyle>
      <div className='notifyCon' >
      {/* {renderNotifications()} */}
      </div>
      </NotifyStyle>
  );
};

export default All;