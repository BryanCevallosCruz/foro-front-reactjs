import { useEffect, useState } from "react";
import CommentReply from "./commentReply";
import CreateComment from "./createComment";
import httpClient from "../../services/httpClient";
import { useNavigate } from "react-router-dom";


function Comment(props) {
    const { com, level: propLevel } = props;
    const [answerList, setAnswerList] = useState([]);
    const [level, setLevel] = useState(propLevel || 1);
    const [replying, setReplying] = useState(false);
    const [comment, setComment] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        httpClient.get(`/comments`)
            .then((response) => {
                if (com.commentSub != null) {
                    setComment(response.data);
                }

            });
    }, []);

    const handlerReply = () => {
        setReplying(true);
    }
    var createReplyComment;
    if (replying) {
        createReplyComment = <CreateComment />
    }

    const handlerDelete = ()=> {
        httpClient.delete(`/comments/${com.id}`)
        .then(()=>{});
    }

    return <>
        <div className="container mt-2 Comment">
            <div className="row no-gutters">
                <div className="col-1">
                    Foto
                </div>
                <div className="col-5 col-md-7 Comment-name">
                    {com.name}
                </div>
                <div className="col-2 col-md-1 Comment-actions">
                    Editar
                </div>
                <div onClick={e=>handlerDelete(e)} className="col-2 col-md-1 Comment-actions">
                    Eliminar
                </div>
                <div className="col-2 Comment-date">
                    Fecha
                </div>
            </div>

            <div className="row">
                <div className="col-md-auto offset-1">
                    {com.comment}
                </div>
            </div>

            <div className="row">
                {(() => {
                    if (level<3) {
                        return (<>
                            <div className="col-4 col-sm-3 col-md-2 offset-1 Comment-reply">
                                Responder
                            </div>
                            <div className="col-4 col-sm-3 col-md-2 Comment-number-replies">
                                Respuestas
                            </div>
                            </>
                        );
                    }
                })()}

            </div>

            <div className="row">
                <div className="col-11 offset-1">
                    {createReplyComment}
                </div>
            </div>

            <div className="row">
                {(() => {
                    if (com.commentSub != null) {
                        return (
                            <div className="col-11 offset-1">
                                    {com.commentSub.map((com) =>
                                        <Comment key={com.id} com={com} level={level+1}/>
                                    )}
                            </div>
                        );
                    }
                })()}




            </div>

        </div>
    </>
}

export default Comment;