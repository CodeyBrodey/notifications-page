import './style.css';

function Unread({ unread }) {

    if(unread !== 0){
        return(
        <span className='notification-count'>{unread}</span>
        )
    } else {
        return null;
    }
}

export default Unread;
