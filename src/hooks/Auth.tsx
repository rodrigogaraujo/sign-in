import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";

interface AuthState {
    token: string;
    user: object;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: object;
    token: string;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used whitin an AuthProvider");
    }

    return context;
}

export const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem("@g3_infotech:token");
        const user = localStorage.getItem("@g3_infotech:user");
        if (token && user) {
            return { token, user: JSON.parse(user) };
        }
        return {} as AuthState;
    });

    const signOut = useCallback(() => {
        localStorage.removeItem("@g3_infotech:token");
        localStorage.removeItem("@g3_infotech:user");
        setData({} as AuthState);
    }, []);

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post("/sessions", {
            email,
            password,
        });
        const { token, user } = response.data;

        localStorage.setItem("@g3_infotech:token", token.token);
        localStorage.setItem("@g3_infotech:user", JSON.stringify(user));

        setData({ token, user });
    }, []);
    return (
        <AuthContext.Provider
            value={{ user: data.user, token: data.token, signIn, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};
