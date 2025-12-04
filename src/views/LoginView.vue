<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="E-mail" required />
       <input v-model="password" type="password" placeholder="Password" required />
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
      this.success = true;
      localStorage.setItem("loggedIn", "true");

      setTimeout(() => {
        this.$router.push("/JoinTournament");
      }, 1200);
    },
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