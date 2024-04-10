import AdminSidebar from './Adminsidebar';
import AdminHeader from '../../components/AdminHeader';
function AdminLayout({ children }) {
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

export default AdminLayout;
