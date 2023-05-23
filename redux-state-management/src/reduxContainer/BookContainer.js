import React from "react"
import { useDispatch, useSelector } from "react-redux";
import purchase_book from './BookAction';

const BookContainer = () => {

    const numberBooks = useSelector(state => state.NumberOfBooks);
    const dispatch = useDispatch();
 

    return (<div>
        <h2>No. Of Books - {numberBooks}</h2>
        <button onClick={()=>dispatch(purchase_book())}>Buy Book</button>
    </div>)
}

export default BookContainer;