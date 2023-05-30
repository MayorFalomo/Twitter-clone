import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '@/helpers/Helpers';

const Notification = ({ notification }: any) => {
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

const Notifications = () => {
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
      }, 10000); // 10 seconds delay

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

  const renderNotifications = () => {
    if (notification?.length === 0) {
      return <div>No notifications</div>;
    }

    return notification?.map((notification: string, index: number) => (
      <Notification key={index} notification={notification} />
    ));
  };

  return (
    <div>
      <h1>Notifications</h1>
      {renderNotifications()}
    </div>
  );
};

export default Notifications;