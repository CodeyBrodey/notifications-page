import Header from './components/header/header.js';
import Notification from './components/notification/notification.js';
import { useState } from 'react';

function App() {
  const [ unread, setUnread ] = useState(3);

  return (
    <>
      <Header unread={unread} />
      <main>
        <Notification />
      </main>
    </>
  );
}

export default App;
