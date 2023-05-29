
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MyContext from "../../context/mycontext";
import CommentList from "./commentList";
import httpClient from "../../services/httpClient";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Comment from "./comment";
import CreateComment from "./createComment";
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

function CommentReply(props) {
    const {com, level,idLast,replying} = props;
    const [comment, setComment] = useState([]);
    const [newComment, setNewComment] = useState("");
    const timeAgo = moment(com.date).fromNow();
    
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
        if (event.target.checkValidity() == true) {
            const dateToday = new Date();
            const commentPost = {
                name: MyContext.userName,
                comment: newComment,
                date: dateToday
            }
            
            console.log(com.id)
            if (level == 1){
                var pathPut = `/comments/comment/${com.id}`
                console.log("Ingreso al if ")
                console.log(pathPut)
            } else {
                var pathPut = `/comments/comment/${idLast}/${com.id}`
                console.log(pathPut)
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