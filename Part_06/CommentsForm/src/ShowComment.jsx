import { useState } from "react";
import './ShowComment.css'
import CommentsForm from "./CommentsForm";
export default function ShowComment() {

    let [comment, setComment] = useState([{
        userName: "Niti",
        remark: "@gd",
        rating: "5",
    }])

    let addComment = (comment) => {
        setComment((currComent) => [...currComent, comment]);
    }

    return (
        <div>
            <h3>All Comments!</h3>
             {
               comment.map((comment,idx)=>(
                 <div className="comment">
                    <span>Name: {comment.remark}</span>
                    <br></br>
                    <span>Rating: {comment.rating}</span>
                    <br></br>
                    <p>- {comment.userName}</p>
                 </div>
               ))
             }
            <CommentsForm addNewComment={addComment} />
        </div>
    )
}