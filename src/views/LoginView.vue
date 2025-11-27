<template>
  <div class="login-container">
    <h1>Login</h1>


    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="E-mail" required />
      <div style="position: relative; width: 90%; margin: 0 auto 15px;">
        <input 
          v-model="password" 
          :type="showPassword ? 'text' : 'password'" 
          placeholder="Password" 
          @blur="validatePassword" 
          :class="{'error' : passwordError}" 
          
          required 
        />
        <button 
  type="button" 
  @click="showPassword = !showPassword"
  class="toggle-password"
>
  <svg v-if="!showPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
  <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
</button>
      </div>
      <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
      <button type="submit">Login</button>
    </form>

    <p v-if="success" class="success"> Login successful!</p>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      success: false,
      passwordError: '',
      showPassword: false,
    };
  },
  methods: {
    login() {
      if (!this.validatePassword()) {
    return;
      }
      this.success = true;
      localStorage.setItem("loggedIn", "true");

      setTimeout(() => {
        this.$router.push("/JoinTournament");
      }, 1200);
    },
    validatePassword() {
      if (this.password.length < 5) {
        this.passwordError = "Le mot de passe doit contenir au moins 5 caractères."
        return false
      }
      if (!/[A-Z]/.test(this.password)){
        this.passwordError = "Le mot de passe doit contenir une majuscule."
        return false
      }
      if (!/[a-z]/.test(this.password)){
        this.passwordError = "Le mot de passe doit contenir une minuscule."
        return false
      }
      if (!/[0-9]/.test(this.password)){
        this.passwordError = "Le mot de passe doit contenir un chiffre."
        return false
      }
      this.passwordError = ''
      return true
    },
    clearPasswordError() {
    if (this.passwordError) {
      this.passwordError = ''
    }
  }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 350px;
  margin: 50px auto;
  padding: 25px;
  background: #f5faff;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
  text-align: center;
}
input {
  width: 90%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
button {
  width: 100%;
  padding: 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background-color: #2f8b68;
}

.success {
  margin-top: 15px;
  color: #2e8b57;
  font-weight: bold;
}
input.error {
  border-color: #ef4444;
}

.error-message {
  display: block;
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: -10px;
  margin-bottom: 10px;
}

.toggle-password {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.toggle-password:hover {
  background: rgba(66, 185, 131, 0.1);
  color: #42b983;
}

.toggle-password svg {
  display: block;
}
</style>
