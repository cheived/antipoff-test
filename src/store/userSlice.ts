import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserSlice {
    isAuthenticated: boolean,
    user: { id: number, token: string } | null,
}

const user = localStorage.getItem("user")
const userParsed = user ? JSON.parse(user) : null

const initialState: IUserSlice = {
    user: userParsed,
    isAuthenticated: !!localStorage.getItem("user"),
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ id: number, token: string }>) => {
            localStorage.setItem("user", JSON.stringify(action.payload))
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            localStorage.removeItem("user")
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export type { IUserSlice }
export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;