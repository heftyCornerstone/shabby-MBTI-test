import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserAuthStore = create(
    persist(
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
        }),
        {
            name: 'userAuth-storage',
            getStorage: () => sessionStorage
        }
    )
);

export default useUserAuthStore