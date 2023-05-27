import { useEffect, useState } from "react";
import httpClient from "../../services/httpClient";
import Comment from "./comment";

function CommentList() {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        httpClient.get(`/comments`)
            .then((response) => {
                setComment(response.data);
            });
    }, []);



    return <>
        <div div className="container">
            {comment.map((com) => 
            <Comment key = {com.id} com = {com} />
            )}  
        </div>
    </>

}

export default CommentList;