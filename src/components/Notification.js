import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

const Notification = () => {

  const [addOneStatus, setAddOneStatus] = useState(false);
  const dispatch = useDispatch()

  const notification = useSelector((state) => {
    return state.notification.content;
  })

  const notificationTimer = useSelector((state) => {
    return state.notification.time;
  })

  useEffect(() => {
    if (notification != false){
      setAddOneStatus(true);
      console.log(notification)
    }

    const timeoutId = setTimeout(() => {
      setAddOneStatus(false);
    }, notificationTimer);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [notification, dispatch]);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (

      <div>
        {addOneStatus
            ? <div style={style}>You Voted "{notification}"</div>
            : <div></div>}
      </div>
  )
}

export default Notification
