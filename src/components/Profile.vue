<script>
import { onBeforeMount, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { auth } from "../firebase";
export default {
    setup() {
        const error = ref(null)
        const name = ref("");

        const store = useStore()
        const router = useRouter()

        onBeforeMount(() => {
            const user = auth.currentUser;
            if(user) {
                name.value = user.email.split('@')[0];
            }
        })

        const logout = async () => {
            try {
                await store.dispatch('logout')

            router.push('/')
            } catch(err) {
                error.value = err.message
            }
        }

        return { logout, name, error }
    },
}
</script>


<template>
    <div class="profile">
        <v-btn type="button" class="logout" color="primary" @click="logout" role="button">Logout</v-btn>
        <h1 class="text-center">hello {{name}}</h1>
    </div>
</template>


<style lang="css">
.logout {
    float: right;
    margin-right: 1rem;
}
</style>