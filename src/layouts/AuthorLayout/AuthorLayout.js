import AdminSidebar from './AuthorSidebar';
import AdminHeader from '../../components/AdminHeader';
function AuthorLayout({ children }) {
    return (
        <div className="layout">
            <div className="wrapper">
                <AdminSidebar />

                <div className="container">
                    <AdminHeader />

                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default AuthorLayout;