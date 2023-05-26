import ListComments from "../pages/comments";
import CreateComment from "../pages/foro/createComment";
import ForoMain from "../pages/foro/foroMain";
import CreateUser from "../pages/user/CreateUser";
export default [
    {
        name: "Usuario",
        key: "usuario",
        route:"/usuario",
        component: <CreateUser />,
        showLink: true
    },
    {
        name: "Foro",
        key: "foro",
        route:"/foro",
        component: <ForoMain />,
        showLink: true
    }
];