import './style.css';
import Unread from '../unread/unread.js'

function Header({ unread }){

    return(
        <header>
            <div>
                <h1>Notifications</h1>
                <Unread unread={unread} />
            </div>
            <button>Mark all as read</button>
        </header>
    )
};


export default Header;
