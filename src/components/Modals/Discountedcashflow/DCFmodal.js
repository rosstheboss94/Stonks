import  React, { useState } from "react";
import axios from "axios";
import "../Discountedcashflow/DCFmodal.css";



const DcfModal = (props) => {
 const [requestStatus, setRequestStatus] = useState(0)

 
 const messages = {
    getting: "Getting stock data...",
    done: "Ready"
  }

  let message;
  console.log(requestStatus);
  console.log(props);
  if(requestStatus >= 200 && requestStatus < 300 ){
    message = messages.done
  }
  else if (requestStatus <= 200 || requestStatus > 300){
    setRequestStatus(() => {return 200})
  }
  else{
    message = messages.getting
  }

  return (
    <div>
      <div className="modal-backdrop">
        <div className="modal">
          <div className="cancel-modal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-square"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              <button></button>
            </svg>
          </div>
          <div>spinner</div>
          <div className="modal-messages">{message}</div>
          <div className="modal-done"><button>Done</button></div>
        </div>
      </div>
    </div>
  );
};

export default DcfModal;
