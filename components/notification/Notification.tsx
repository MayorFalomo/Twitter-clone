import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '@/helpers/Helpers';

const Notification = ({ notification }: any) => {
  const { currentUser } = useContext(AppContext);
  
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
  const { currentUser } = useContext(AppContext);
  // const [notifications, setNotifications] = useState<string[]>([]);

  // useEffect(() => {
  //   console.log(currentUser.notifications);
    
  //   const fetchNotifications = async () => {
  //     try {
  //       const response = await axios.put(
  //         'http://localhost:7000/api/users/notifications',
  //         {
  //           userId: currentUser._id,
  //         }
  //       );
  //     } catch (error) {
  //       console.log('Error fetching notifications:', error);
  //     }
  //   };

  //   fetchNotifications();
  // }, []);

  const renderNotifications = () => {
    if (currentUser.notifications?.length == 0) {
      return <div>No notifications</div>;
    }

    return currentUser.notifications?.map((notification: string, index: number) => (
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