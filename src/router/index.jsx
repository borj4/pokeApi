import Home from '../pages/Home'
import Detail from '../pages/Detail'

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/detail',
    component: Detail,
    exact: true,
  },
]
