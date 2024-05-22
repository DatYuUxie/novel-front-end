import React, { useEffect, useState } from 'react';
import { getUserAccount } from '../api/api';

const UserContext = React.createContext(null);
const UserProvider = ({ children }) => {
    const userDefault = {
        isLoading: true,
        isAuthenticated: false,
        token: '',
        account: {},
    };
    const [user, setUser] = useState(userDefault);

    // Login updates the user data with a name parameter
    const loginContext = (userData) => {
        setUser({ ...userData, isLoading: false });
    };

    // Logout updates the user data to default
    const logoutContext = () => {
        setUser({ ...userDefault, isLoading: false });
    };

    // ham nay la ham fetchUser trong video 11.9
    const fetchUser = async () => {
        try{
            let response = await getUserAccount();
            if (response && response.data && response.data.EC === 0) {
                let role = response.data.DT.role;
                let email = response.data.DT.email;
                let username = response.data.DT.username;
                let userID = response.data.DT.userID;
                let token = response.data.DT.access_token;
                let avatar = response.data.DT.avatar;
                let data = {
                    isAuthenticated: true,
                    token: token,
                    account: { role, email, username, userID, avatar },
                    isLoading: false,
                };
                // console.log('data', data);
                // setTimeout(() => {
                setUser(data);
                // }, 10000);
                // setUser(data);
            } else {
                setUser({ ...userDefault, isLoading: false });
            }
        }catch (error) {
            if (error.response && error.response.status === 401) {
                console.log("Unauthorized! Please log in."); // Thông báo lỗi cho người dùng qua console log
            } else {
                console.error("An error occurred:", error); // Nếu lỗi không phải là 401, in ra lỗi chi tiết
            }
        }
        
    };
    useEffect(() => {
        // console.log(window.location);
        if (window.location.pathname !== '/' && window.location.pathname !== '/login') {
            fetchUser();
        } else {
            setUser({ ...userDefault, isLoading: false });
        }
        fetchUser();
    }, []);

    return <UserContext.Provider value={{ user, loginContext, logoutContext }}>{children}</UserContext.Provider>;
};
export { UserContext, UserProvider };
