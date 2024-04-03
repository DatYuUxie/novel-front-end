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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
