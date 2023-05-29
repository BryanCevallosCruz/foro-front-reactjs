import { useEffect, useState } from "react";
import httpClient from "../../services/httpClient";
import Comment from "./comment";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function CommentList() {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        httpClient.get(`/comments`)
            .then((response) => {
                setComment(response.data);
            });
    }, []);



    return <>
        <div className="card px-2 py-2">
            <TransitionGroup>
            {comment.map((com) => (
                <CSSTransition 
                    key={com.id} 
                    classNames="comment" 
                    timeout={300} 
                >
                    <Comment key = {com.id} com = {com} />
                </CSSTransition>
            ))} 
            </TransitionGroup>
             
        </div>
    </>

}

export default CommentList;