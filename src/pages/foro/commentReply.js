
import { useEffect, useState } from "react";
import MyContext from "../../context/mycontext";
import httpClient from "../../services/httpClient";

function CommentReply(props) {
    const {com, level,idLast,replying} = props;
    const [comment, setComment] = useState([]);
    const [newComment, setNewComment] = useState("");
   
    useEffect(() => {
        httpClient.get(`/comments`)
            .then((response) => {
                setComment(response.data);
            });
    }, []);

    const handleChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.checkValidity() === true) {
            const dateToday = new Date();
            const commentPost = {
                name: MyContext.userName,
                profilePhoto: MyContext.profilePhoto,
                comment: newComment,
                date: dateToday
            }
            
            if (level === 1){
                var pathPut = `/comments/comment/${com.id}`
                console.log("Ingreso al if ")
            } else {
                var pathPut = `/comments/comment/${idLast}/${com.id}`
            }    
            httpClient.put(pathPut, commentPost)
                .then(() => {
                    setNewComment("");               
                })
        }   
    }

    return <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-10">
                    <div className="input-group has-validation">
                        <input type="text" className="form-control" id="comment" 
                            value={newComment}
                            placeholder="Ingrese su comentario"
                            onChange={e => handleChange(e)} required maxLength="200" />
                    </div>
                </div>
                <div className="col-auto mb-3">
                    <button className="btn btn-success" type="submit">Enviar</button>
                </div>
            </div>
            </div>
        </form>
    </>
}

export default CommentReply;