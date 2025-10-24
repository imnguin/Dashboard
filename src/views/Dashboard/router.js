import Dashboard from ".";
import Detail1 from "./details/Detail1";
import Detail2 from "./details/Detail2";

const dashboardRouter = [
    {
        path: '/Dashboard',
        component: Dashboard,
        title: 'Hiệu quả vận hành'
    },
    {
        path: '/Detail1',
        component: Detail1,
        title: 'Hiệu quả hài lòng'
    },
    {
        path: '/Detail2',
        component: Detail2,
        title: 'Doanh thu'
    }
]

export default dashboardRouter;