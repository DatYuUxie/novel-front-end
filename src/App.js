import { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import ScrollToTop from './services/scrollToTop';
import { UserContext } from './context/UserContext';

function App() {
    const { user } = useContext(UserContext);

    return (
        <Router>
            {/* set len dau trang */}
            <>
                <ScrollToTop />
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>

                    {privateRoutes.map((route, index) => {
                        const Layout = route.layout;
                        if (route.authCondition()) {
                            return (
                                <Routes>
                                    {route.routes.map((subRoute, subIndex) => (
                                        <Route
                                            key={subIndex}
                                            path={subRoute.path}
                                            element={
                                                <Layout>
                                                    <subRoute.component />
                                                </Layout>
                                            }
                                        />
                                    ))}
                                </Routes>
                            );
                        }
                    })}
                </div>
            </>
        </Router>
    );
}

export default App;
