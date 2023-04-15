import Header from './components/header/header.js';
import Notifications from './components/notifications/notifications.js';
import { useState, useEffect } from 'react';

function App() {
  const [ unread, setUnread ] = useState(3);
  const unreadNotifications = document.querySelectorAll('div.unread');
  const unreadDot = document.querySelectorAll('span.unread-dot');

  function handleClear() {
    setUnread(0);
  }
  
    useEffect(() => {
      unreadNotifications.forEach((notif) => {
        notif.classList.remove('unread');
      });
  
      unreadDot.forEach((dot) => {
        dot.remove();
      });
    }, [unreadNotifications,unreadDot]);

  return (
    <>
      <Header unread={unread} onClick={handleClear} />
      <main>
        <Notifications className='Notifications' unread={unread} />
      </main>
    </>
  );
}

export default App;
