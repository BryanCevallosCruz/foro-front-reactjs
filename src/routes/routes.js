import ListComments from "../pages/comments";
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
        component: <ListComments />,
        showLink: true
    }
];