import { useEffect, useState } from "react";
import MyContext from "../../context/mycontext";
import httpClient from "../../services/httpClient";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Comment from "./comment";

function CreateComment() {
    const [comment, setComment] = useState([]);
    const [newComment, setNewComment] = useState("");
    
    useEffect(() => {
        httpClient.get(`/comments`)
            .then((response) => {
                setComment(response.data);
            });

    }, [comment]);

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
            httpClient.post(`/comments`, commentPost)
                .then(() => {
                    const updateComment = [...comment, commentPost];
                    setComment(updateComment);
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

export default CreateComment;