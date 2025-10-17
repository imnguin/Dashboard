
import Dashboard from "../views/Dashboard";
import Dashboard2 from "../views/Dashboard2";
import PageNotFound from "../views/PageNotFound";

const configRoute = [
    {
        path: '/',
        component: Dashboard,
        layout: 'Nguin'
    },
    {
        path: '/Dashboard2',
        component: Dashboard2,
        layout: 'Nguin'
    },
    {
        path: '*',
        component: PageNotFound,
        layout: 'notUse'
    },
]

export default configRoute;