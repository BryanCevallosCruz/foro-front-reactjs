import { useEffect, useState } from "react";
import CommentReply from "./commentReply";
import CreateComment from "./createComment";
import httpClient from "../../services/httpClient";
import { useNavigate } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

function Comment(props) {
    const { com, level: propLevel, idLast: propIdLast } = props;
    const [level, setLevel] = useState(propLevel || 1);
    const [idLast, setIdLast] = useState(propIdLast || com.id);
  

    const [replying, setReplying] = useState(false);
    const timeAgo = moment(com.date).fromNow();
   

    const handlerReply = () => {
        setReplying(!replying);
    }

    var createReplyComment;
    if (replying) {
        createReplyComment = <CommentReply com={com} level={level} idLast={idLast} replying={replying} />
    }


    const handlerDelete = () => {
        if (level === 1) {
            httpClient.delete(`/comments/${com.id}`)
        }
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
                    {/* TO-DO: Editar */}
                </div>
                {(() => {
                    if (level < 2) {
                        return <div onClick={e => handlerDelete(e)} className="col-2 col-md-1 Comment-actions">
                            Eliminar
                        </div>
                    }
                })()}

                <div className="col-2 Comment-date">
                    {timeAgo}
                </div>
            </div>

            <div className="row">
                <div className="col-md-auto offset-1">
                    {com.comment}
                </div>
            </div>

            <div className="row">
                {(() => {
                    if (level < 3) {
                        return (<>
                            <div onClick={e => handlerReply(e)} className="col-4 col-sm-3 col-md-2 offset-1 Comment-reply">
                                Responder
                            </div>
                            <div className="col-4 col-sm-3 col-md-2 Comment-number-replies">
                            {com.commentSub && com.commentSub.length > 0 ? com.commentSub.length : 0} Respuestas
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
                                <TransitionGroup>
                                    {com.commentSub.map((com) => (
                                        <CSSTransition
                                            key={com.id}
                                            classNames="comment"
                                            timeout={300}
                                        >
                                            <Comment key={com.id} com={com} level={level + 1} idLast={idLast} />
                                        </CSSTransition>))}
                                </TransitionGroup>
                            </div>
                        );
                    }
                })()}




            </div>

        </div>
    </>
}

export default Comment;