import Dashboard from ".";
import Detail1 from "./details/Detail1";
import Detail2 from "./details/Detail2";

const dashboardRouter = [
    {
        path: '/Dashboard',
        component: Dashboard
    },
    {
        path: '/Detail1',
        component: Detail1
    },
    {
        path: '/Detail2',
        component: Detail2
    }
]

export default dashboardRouter;