import './style.css';

import angelaImg from './images/avatar-angela-gray.webp';
import annaImg from './images/avatar-anna-kim.webp';
import jacobImg from './images/avatar-jacob-thompson.webp';
import kimberlyImg from './images/avatar-kimberly-smith.webp';
import markImg from './images/avatar-mark-webber.webp';
import nathanImg from './images/avatar-nathan-peterson.webp';
import rizkyImg from './images/avatar-rizky-hasanuddin.webp';
import chessImg from './images/image-chess.webp';


function Notifications({ unread }) {

    return(
        <>
            <div className='notification unread'>
                <img src={markImg} alt="" />
                <div className="notification-info">
                    <div className="notification-info__container">
                        <p><button className='name button-link'>Mark Webber </button>
                        reacted to your recent post
                        <span className='strong button-link'> My first tournament today!<span className="unread-dot"></span></span></p>
                    </div>
                    <span className='time'>1m ago</span>
                </div>
            </div>

            <div className='notification unread'>
                <img src={angelaImg} alt="" />
                <div className="notification-info">
                    <div className="notification-info__container">
                        <p><button className='name button-link'>Angela Gray </button>
                        followed you
                        <span className="unread-dot"></span></p>
                    </div>
                    <span className='time'>5m ago</span>
                </div>
            </div>

            <div className='notification unread'>
                <img src={jacobImg} alt="" />
                <div className="notification-info">
                    <div className="notification-info__container">
                        <p><button className='name button-link'>Jacob Thompson </button>
                        has joined your group 
                        <span className='strong group button-link'> Chess Club<span className="unread-dot"></span></span></p>
                    </div>
                    <span className='time'>1 day ago</span>
                </div>
            </div>

            <div className='notification'>
                <img src={rizkyImg} alt="" />
                <div className="notification-info">
                    <div className="notification-info__container">
                        <p><button className='name button-link'>Rizky Hasanuddin </button>
                        sent you a private message</p>
                    </div>
                    <span className='time'>5 days ago</span>
                    <p className="message"> Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.</p>
                </div>
            </div>

            <div className='notification'>
                <img src={kimberlyImg} alt="" />
                <div className="notification-info">
                    <div className="notification-info__container">
                        <p><button className='name button-link'>Kimberly Smith </button>
                        commented on your picture</p>
                    </div>
                    <span className='time'>1 week ago</span>
                </div>
                <img className='notification__img' src={chessImg} alt="girl focused on chess game" />
            </div>

            <div className='notification'>
                <img src={nathanImg} alt="" />
                <div className="notification-info">
                    <div className="notification-info__container">
                        <p><button className='name button-link'>Nathan Peterson </button>
                        reacted to your recent post 
                        <span className="strong button-link"> 5 end-game strategies to increase your win rate</span></p>
                    </div>
                    <span className='time'>2 weeks ago</span>
                </div>
            </div>

            <div className='notification'>
                <img src={annaImg} alt="" />
                <div className="notification-info">
                    <div className="notification-info__container">
                        <p><button className='name button-link'>Anna Kim </button>
                        left the group 
                        <span className="strong group button-link"> Chess Club</span></p>
                    </div>
                    <span className='time'>2 weeks ago</span>
                </div>
            </div>
        </>
    )
}

export default Notifications;
