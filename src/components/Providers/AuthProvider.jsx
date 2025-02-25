import { createContext } from 'react';

const AuthContext = new createContext(null);


const AuthProvider = ({ children }) => {

    const userInfo = {
        name: "Hamid"
    };


    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;