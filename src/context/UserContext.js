import React, { useEffect, useState } from 'react';
// import { getUserAccount } from '../services/userService';

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
    // const fetchUser = async () => {
    //     let response = await getUserAccount();
    //     if (response && response.EC === 0) {
    //         let groupWithRole = response.DT.groupWithRoles;
    //         let email = response.DT.email;
    //         let username = response.DT.username;
    //         let token = response.DT.access_token;
    //         let data = {
    //             isAuthenticated: true,
    //             token: token,
    //             account: { groupWithRole, email, username },
    //             isLoading: false,
    //         };
    //         // console.log("data", data);
    //         // setTimeout(() => {
    //         setUser(data);
    //         // }, 10000);
    //         // setUser(data);
    //     } else {
    //         setUser({ ...userDefault, isLoading: false });
    //     }
    // };
    // useEffect(() => {
    //     // console.log(window.location);
    //     if (window.location.pathname !== '/' && window.location.pathname !== '/login') {
    //         fetchUser();
    //     } else {
    //         setUser({ ...userDefault, isLoading: false });
    //     }
    //     // fetchUser();
    // }, []);

    return <UserContext.Provider value={{ user, loginContext, logoutContext }}>{children}</UserContext.Provider>;
};
export { UserContext, UserProvider };
