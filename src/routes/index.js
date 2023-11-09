
// Pages
import Home from '../pages/Home';
import Book from '../pages/Book';
import Chapter from '../pages/Chapter';
import Library from '../pages/Library';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/book', component: Book },
    { path: '/chapter', component: Chapter },
    { path: '/library', component: Library }

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };