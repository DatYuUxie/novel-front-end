import AuthorSidebar from './AuthorSidebar';
import Header from '../../components/Header';
function AuthorLayout({ children }) {
    return (
        <div className="author-layout">
            <div className="wrapper">
                <AuthorSidebar />

                <div className="container">
                <Header/>


                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default AuthorLayout;
