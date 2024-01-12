
// Pages
import Home from '../pages/Home';
import Book from '../pages/Book';
import Chapter from '../pages/Chapter';
import Library from '../pages/Library';
import Rankings from '../pages/Rankings';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/book', component: Book },
    { path: '/chapter', component: Chapter },
    { path: '/library', component: Library },
    { path: '/rankings', component: Rankings }

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };