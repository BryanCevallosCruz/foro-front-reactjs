import { useEffect, useState } from "react";
import CommentReply from "./commentReply";
import CreateComment from "./createComment";
import httpClient from "../../services/httpClient";


function Comment(props) {
    const { com, level: propLevel } = props;
    const [answerList, setAnswerList] = useState([]);
    const [level, setLevel] = useState(propLevel || 1);
    const [replying, setReplying] = useState(false);
    const [comment, setComment] = useState([]);

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
    return <>
        <div className="card mt-3" style={{ backgroundColor: "#85C7F1" }}>
            <div className="row">
                <div className="col-1">
                    Foto
                </div>
                <div className="col-7">
                    {com.name}
                </div>
                <div className="col-1">
                    <button className="btn btn-link btn-sm">
                        Editar
                    </button>
                </div>
                <div className="col-1">
                    <button className="btn btn-link btn-sm">
                        Eliminar
                    </button>
                </div>
                <div className="col-2 text-center">
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
                    if (true) {
                        return (
                            <div className="col-md-auto offset-1">
                                <span>
                                    <button onClick={handlerReply.bind(this)} className="btn btn-link btn-sm">
                                        Responder
                                    </button>
                                </span>
                                <span>
                                    Respuestas
                                </span>
                            </div>
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
                                <div div className="container">
                                    {com.commentSub.map((com) =>
                                        <Comment key={com.id} com={com} />
                                    )}
                                    Hola
                                </div>
                            </div>

                        );
                    }
                })()}




            </div>

        </div>
    </>
}

export default Comment;