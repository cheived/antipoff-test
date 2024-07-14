import { create } from "zustand";


interface IUseAuth {
    isAuthenticated: boolean,
    user: { id: number, token: string } | null,
    login: (user: { id: number, token: string }) => void,
    logout: () => void
}

const useAuth = create<IUseAuth>((set) => ({
    isAuthenticated: !!localStorage.getItem("user"),
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,

    login: (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        set({ isAuthenticated: true, user })
    },

    logout: () => {
        localStorage.removeItem("user");
        set({ isAuthenticated: false, user: null })
    }

}))

export default useAuth