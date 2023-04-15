import './style.css';
import Unread from '../unread/unread'

function Header({ unread, onClick }){

    return(
        <header>
            <div>
                <h1>Notifications</h1>
                <Unread unread={unread} />
            </div>
            <button onClick={onClick} className='button-link'>Mark all as read</button>
        </header>
    )
};


export default Header;
