<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";


export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const login = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })

        router.push('/profile')
      } catch(err) {
        error.value = err.message
      }
    }

    const googleSignIn = async () => {
      try {
        await store.dispatch('loginGoogle')
        router.push('/profile')
      } catch(err) {
        error.value = err.message
      }
    }

    return { login, email, password, error, googleSignIn }
  },
  data: () => ({
    valid: true,
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must be more than 6 characters',
    ],
    email: '',
    emailRules: [
       v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ]
  })
}
</script>

<template>
  <div class="login v-margin-top">
    <h1 class="text-center">Sign In With</h1>

    <div class="login__breakpoint d-flex v-margin-top v-center" >
      <v-row justify="center">
      <v-col
        cols="10"
        sm="10"
        md="10"
        lg="10">
        <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="login">
            <v-text-field type="email" :rules="emailRules" label="email" v-model="email" name="email" placeholder="enter email" required></v-text-field>
            <v-text-field type="password" :counter="6" :rules="passwordRules" label="password" v-model="password" name="password" placeholder="enter password" required></v-text-field>
          <v-btn type="submit" color="primary" role="button" value="SignIn">Sign In</v-btn>
          <div v-if="error">{{ error }}</div>
        </v-form>
      </v-col>
      </v-row>
      <v-row justify="center">
      <v-col
      cols="10"
        sm="10"
        md="8"
        lg="6">
        <p class="v-margin-top">OR</p>
      <v-btn  color="primary" type="button" role="button" @click="googleSignIn">Sign in with Google</v-btn>
      </v-col>
      </v-row>
    </div>
  </div>
</template>


<style lang="css">
@media (max-width: 767px) {
  .login .login__breakpoint {
    flex-direction: column;
  }
}
</style>