import CreateComment from "./createComment";
import Comment  from "./comment";
import CommentList from "./commentList";

function ForoMain() {
    return<>
        <CreateComment />
        <div className="card">
            <CommentList />
        </div>
        
    </>
}

export default ForoMain;