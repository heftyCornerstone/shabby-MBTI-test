import { create } from "zustand";

const useUserAuthStore = create(
    (set) => ({
        isSignin: false,
        token: null,
        nickname: null,
        userId: null,
        userSignedIn: () => set({ isSignin: true }),
        userSignedOut: () => set({ isSignin: false }),
        setToken: (payload) => set({ token: payload }),
        setNickname: (payload) => set({ nickname: payload }),
        setUserId: (payload) => set({ userId: payload })
    })
);

export default useUserAuthStore