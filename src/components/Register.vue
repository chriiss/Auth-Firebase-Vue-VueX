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

    const register = async () => {
      try {
        await store.dispatch('register', {
          email: email.value,
          password: password.value
        })

        router.push('/')
      } catch(err) {
        error.value = err.message
      }
    }

    return { register, email, password, error }
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
  <div class="register v-margin-top">
    <h1 class="text-center">New Account</h1>
    <v-row justify="center">
    <v-col
      cols="10"
      sm="10"
      md="8"
      lg="6">
      <v-form class="v-center" ref="form" v-model="valid" lazy-validation @submit.prevent="register">
          <v-text-field type="email" :rules="emailRules" label="email" v-model="email" name="email" placeholder="enter email" required></v-text-field>
          <v-text-field type="password" :counter="6" :rules="passwordRules" label="password" v-model="password" name="password" placeholder="enter password" required></v-text-field>
          <v-btn type="submit" color="primary" elevation="2" role="button">Create Account</v-btn>
        <div class="error" v-if="error">{{error}}</div>
      </v-form>
      <div class="d-flex v-margin-top">
        <p>Already have Account?&nbsp;</p>
        <router-link to="/login">Login</router-link>
      </div>
    </v-col>
  </v-row>
  </div>
</template>