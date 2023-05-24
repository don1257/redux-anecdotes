import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

const Notification = () => {

  const [addOneStatus, setAddOneStatus] = useState(false);
  const dispatch = useDispatch()

  const notification = useSelector((state) => {
      if (state.notification != false){
        const anecdote = state.anecdote.find(item => item.id === state.notification);
        return anecdote ? anecdote.content : null;
      }
  })

  useEffect(() => {
    if (notification != null){
      setAddOneStatus(true);
      console.log(notification)
    }

    const timeoutId = setTimeout(() => {
      setAddOneStatus(false);
    }, 5000);

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
