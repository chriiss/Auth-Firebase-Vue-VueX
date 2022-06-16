import { createStore } from "vuex";
import { auth, provider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";


export default createStore({
    state: {
        user: null,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },
    actions: {
        async register(context, { email, password }) {
            const response = await createUserWithEmailAndPassword(auth, email, password);

            if(response) {
                context.commit('SET_USER', response.user)
            } else {
                throw new Error('signup failed')
            }
        },

        async login(context, { email, password }) {
            const response = await signInWithEmailAndPassword(auth, email, password);

            if(response) {
                context.commit('SET_USER', response.user)
            } else {
                throw new Error('login failed')
            }
        },

        async loginGoogle(context) {
            const response = await signInWithPopup(auth, provider)
            if(response) {
                context.commit('SET_USER', response.user.displayName)
            } else {
                throw new Error('login failed')
            }
        },

        async logout(context) {
            await signOut(auth)
            context.commit('SET_USER', null);
        },
    }
})