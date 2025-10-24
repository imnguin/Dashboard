
import { appRouters } from "../views";
import Dashboard from "../views/Dashboard";
import PageNotFound from "../views/PageNotFound";

const configRoute = [
    {
        title: 'Hiệu quả vận hành',
        path: '/',
        component: Dashboard,
        layout: 'MainLayout'
    },
    ...appRouters,
    {
        path: '*',
        component: PageNotFound,
        layout: 'notUse'
    },
]

export default configRoute;