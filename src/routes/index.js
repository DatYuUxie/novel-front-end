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
import SearchResult from '../pages/SearchResult';
import { Setting, Account, Coin } from '../pages/Settings';
import CreateNovel from '../authorPages/CreateNovel';
import CreateChapter from '../authorPages/CreateChapter';
import ManageUsers from '../adminPages/ManageUsers';
import ManageBooks from '../adminPages/ManageBooks';
import AdminLayout from '../layouts/AdminLayout';
import AuthorLayout from '../layouts/AuthorLayout';
import AuthorDashboard from '../authorPages/AuthorDashboard';
import MyNovels from '../authorPages/MyNovels';
import AuthorNovelDetail from '../authorPages/AuthorNovelDetail';
import Feedback from '../authorPages/Feedback';
import IncomeDashboard from '../authorPages/IncomeDashboard';
import ManageAuthors from '../adminPages/ManageAuthors';
import ManagePayments from '../adminPages/ManagePayments';
import Report from '../adminPages/Report';
import AdminDashboard from '../adminPages/AdminDashboard';
import EditNovel from '../authorPages/EditNovel';
// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/book/:bookID', component: Book },
    { path: '/chapter/:chapterID', component: Chapter },
    { path: '/library', component: Library },
    { path: '/rankings', component: Rankings },
    { path: '/forum', component: Forum },
    { path: '/thread/:threadId', component: Thread },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/account/setting', component: Setting },
    { path: '/account/coin', component: Coin },
    { path: '/account/:userId', component: Account },
    { path: '/search', component: SearchResult },

    { path: '/author/dashboard', component: AuthorDashboard, layout: AuthorLayout },
    { path: '/author/create-novel', component: CreateNovel, layout: AuthorLayout },
    { path: '/author/create-chapter', component: CreateChapter, layout: AuthorLayout },
    { path: '/author/my-novels', component: MyNovels, layout: AuthorLayout },
    { path: '/author/create-chapter', component: CreateChapter, layout: AuthorLayout },
    { path: '/author/novel-detail', component: AuthorNovelDetail, layout: AuthorLayout },
    { path: '/author/feedbacks', component: Feedback, layout: AuthorLayout },
    { path: '/author/income', component: IncomeDashboard, layout: AuthorLayout },
    { path: '/author/edit-novel', component: EditNovel, layout: AuthorLayout },

    { path: '/admin/manage-user', component: ManageUsers, layout: AdminLayout },
    { path: '/admin/manage-books', component: ManageBooks, layout: AdminLayout },
    { path: '/admin/manage-authors', component: ManageAuthors, layout: AdminLayout },
    { path: '/admin/manage-payment', component: ManagePayments, layout: AdminLayout },
    { path: '/admin/manage-report', component: Report, layout: AdminLayout },
    { path: '/admin/dashboard', component: AdminDashboard, layout: AdminLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
