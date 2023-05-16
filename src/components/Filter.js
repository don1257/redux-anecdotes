import {useState} from "react";
import {filterChange} from "../reducers/filterReducer";
import {useDispatch} from "react-redux";

const Filter = () => {

    const dispatch = useDispatch()
    const [input, setInput] = useState();

    const handleChange = (event) => {
        setInput(event.target.value)
        dispatch(filterChange(input))
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter
