// Pages
import Home from '../pages/Home';
import Book from '../pages/Book';
import Chapter from '../pages/Chapter';
import Library from '../pages/Library';
import Rankings from '../pages/Rankings';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Forum from '../pages/Forum';
import Thread from '../pages/Thread';
import { Setting, Account, Coin } from '../pages/Settings';
import CreateNovel from '../authorPages/CreateNovel';
import CreateChapter from '../authorPages/CreateChapter';
import ManageUsers from '../adminPages/ManageUsers';
import ManageBooks from '../adminPages/ManageBooks';
import AdminLayout from '../layouts/AdminLayout';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/book/:bookID', component: Book },
    { path: '/chapter', component: Chapter },
    { path: '/library', component: Library },
    { path: '/rankings', component: Rankings },
    { path: '/forum', component: Forum },
    { path: '/thread/:threadId', component: Thread },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/account/setting', component: Setting },
    { path: '/account/coin', component: Coin },
    { path: '/account/:userId', component: Account },
    { path: '/create-novel', component: CreateNovel, layout: AdminLayout },
    { path: '/create-chapter', component: CreateChapter, layout: AdminLayout },
    { path: '/admin/manage-user', component: ManageUsers, layout: AdminLayout },
    { path: '/admin/manage-books', component: ManageBooks, layout: AdminLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
