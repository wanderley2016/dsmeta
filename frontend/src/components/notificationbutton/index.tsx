import axios, { Axios } from "axios";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";
type props = {
    salesId: number;
}

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`) 
    .then(response => {
        console.log("SUCESSO")
    })  
}

function NotificationButton({salesId} : props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(salesId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;