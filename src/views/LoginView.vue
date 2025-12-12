<template>
  <div class="login-container">
    <h1>Login</h1>

    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />

      <div class="password-container">
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          placeholder="Password"
          required
        />
        <button type="button" class="toggle-password" @click="showPassword = !showPassword">
          <span v-if="showPassword">⌣</span>
          <span v-else>👁</span>
        </button>
      </div>

      <button type="submit">Login</button>
    </form>

    <p v-if="success" class="success">🎉 Login successful!</p>
    <p v-if="error" class="error">{{ error }}</p>

    <p class="register-link">
      Don't have an account?
      <button @click="goToRegister" class="link-button">Register here</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      success: false,
      error: ""
    };
  },
  methods: {
    async login() {
      this.error = "";
      try {
        const response = await fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: this.email, password: this.password })
        });

        const data = await response.json();

        if (data.success) {
          this.success = true;
          localStorage.setItem("token", data.token);
          setTimeout(() => {
            this.$router.push("/JoinTournament");


          }, 1200);
        } else {
          this.error = data.message || "Invalid email or password.";
        }
      } catch (err) {
        console.error(err);
        this.error = "Server error. Try again later.";
      }
    },

    goToRegister() {
      this.$router.push("/Register");
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

.password-container {
  position: relative;
  width: 100%;
  margin: 0 auto 15px;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

button[type="submit"] {
  width: 100%;
  padding: 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #2f8b68;
}

.success {
  margin-top: 15px;
  color: #2e8b57;
  font-weight: bold;
}

.error {
  margin-top: 15px;
  color: #e74c3c;
  font-weight: bold;
}

.register-link {
  margin-top: 20px;
  font-size: 0.9rem;
}

.link-button {
  background: none;
  border: none;
  color: #42b983;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  margin-left: 5px;
}

.link-button:hover {
  color: #2f8b68;
}
</style>
