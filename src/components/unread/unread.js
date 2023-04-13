import './style.css';

function Unread({ unread }) {

    if(unread !== 0){
        return(
        <span>{unread}</span>
        )
    } else {
        return null;
    }
}

export default Unread;
