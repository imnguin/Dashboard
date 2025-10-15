
import Home from "../views/Home";
import PageNotFound from "../views/PageNotFound";

const configRoute = [
    {
        path: '/',
        component: Home,
        layout: 'Nguin'
    },
    {
        path: '*',
        component: PageNotFound,
        layout: 'notUse'
    },
]

export default configRoute;