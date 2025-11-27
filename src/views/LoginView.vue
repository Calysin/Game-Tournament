<template>
  <div class="login-container">
    <h1>Login</h1>


<form @submit.prevent="login">
  <input v-model="email" type="text" placeholder="Email" required />
  <input v-model="password" type="password" placeholder="Password" required />

  <button type="submit">Login</button>
</form>

<p v-if="success" class="success">🎉 Login successful!</p>
<p v-if="error" class="error">{{ error }}</p>


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
          localStorage.setItem("loggedIn", "true");

          setTimeout(() => {
            this.$router.push("/JoinTournament");
          }, 1200);
        } else {
          this.error = "Invalid credentials, please try again.";
        }
      } catch (err) {
        console.error(err);
        this.error = "Server error. Try again later.";
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
.error {
  margin-top: 15px;
  color: #e74c3c;
  font-weight: bold;
}
</style>
