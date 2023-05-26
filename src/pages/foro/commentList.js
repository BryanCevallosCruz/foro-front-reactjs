import { useEffect, useState } from "react";
import httpClient from "../../services/httpClient";

function CommentList () {
    const [comment, setComment] = useState([]);
    
    useEffect(() => {
        httpClient.get(`/comments`)
            .then((response) => {
                setComment(response.data);
            });
    }, []);

    return<>
        <div div className="row">
            <div className="col-md-auto">
                Prueba de la lista
            </div>
            {comment.map((com) =>
                <div className="com-md-auto">
                    {com.name}
                </div>
                )}
        </div>
    </>

}

export default CommentList;