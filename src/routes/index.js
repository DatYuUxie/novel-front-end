// Import các component và layout cần thiết
import AdminLayout from '../layouts/AdminLayout';
import AuthorLayout from '../layouts/AuthorLayout';
// import { getRole } from '../utils/auth'; // Import hàm getRole để xác định vai trò

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
import { CreateChapter, EditChapter } from '../authorPages/CreateChapter';
import ManageUsers from '../adminPages/ManageUsers';
import ManageBooks from '../adminPages/ManageBooks';
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
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const GetRole = () => {
    const { user } = useContext(UserContext);
    return user.account.role;
};
// Public routes và private routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/book/:bookID', component: Book },
    { path: '/chapter/:bookID/:orderNumber', component: Chapter },
    { path: '/library/:userID', component: Library },
    { path: '/rankings', component: Rankings },
    { path: '/forum', component: Forum },
    { path: '/thread/:threadId', component: Thread },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/account/setting', component: Setting },
    { path: '/account/coin', component: Coin },
    { path: '/account/:userID', component: Account },
    { path: '/search/:bookName', component: SearchResult },
];

const privateRoutes = [
    // Các route cho vai trò author

    {
        path: '/author/**',
        layout: AuthorLayout,
        routes: [
            { path: '/author/dashboard', component: AuthorDashboard },
            { path: '/author/create-novel', component: CreateNovel },
            { path: '/author/create-chapter/:bookID', component: CreateChapter },
            { path: '/author/my-novels/:userId', component: MyNovels },
            { path: '/author/novel-detail/:bookID', component: AuthorNovelDetail },
            { path: '/author/feedbacks', component: Feedback },
            { path: '/author/income', component: IncomeDashboard },
            { path: '/author/edit-novel/:bookID', component: EditNovel },
            { path: '/author/edit-chapter/:chapterID', component: EditChapter },
        ],
        authCondition: () => {
            console.log('Running authCondition for author route');
            console.log('getrole', GetRole() == 'USER');
            return GetRole() == 'USER';
        },
    },
    // Các route cho vai trò admin
    {
        path: '/admin/**',
        layout: AdminLayout,
        routes: [
            { path: '/admin/manage-user', component: ManageUsers },
            { path: '/admin/manage-books', component: ManageBooks },
            { path: '/admin/manage-authors', component: ManageAuthors },
            { path: '/admin/manage-payment', component: ManagePayments },
            { path: '/admin/manage-report', component: Report },
            { path: '/admin/dashboard', component: AdminDashboard },
        ],
        authCondition: () => {
            console.log('Running authCondition for admin route');

            console.log('getrole', GetRole());
            return GetRole() == 'ADMIN';
        },
    },
];

// Export các routes
export { publicRoutes, privateRoutes };
