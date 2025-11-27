<template>
  <div class="join-container">
    <h1>Join a Tournament</h1>

    <p class="intro">
      Fill out the form below to join one of our tournaments!
    </p>

    <form @submit.prevent="submitForm">
      
      <!-- Tournament selection -->
      <select v-model="player.Tournament" required>
        <option disabled value="">Select Tournament</option>
        <option>Board Game Tournament</option>
        <option>Card Game Tournament</option>
        <option>E-sport Tournament</option>
      </select>

      <input v-model="player.Pseudo" placeholder="Pseudo" required />
      <input v-model="player.Name" placeholder="Name" required />
      <input v-model="player.Surname" placeholder="Surname" required />

      <input
        v-model.number="player.Age"
        type="number"
        min="1"
        placeholder="Age"
        required
      />

      <select v-model="player.Gender" required>
        <option disabled value="">Select gender</option>
        <option>Boy</option>
        <option>Girl</option>
      </select>

      <button type="submit">Join Tournament</button>
    </form>

    <p v-if="success" class="success">
      🎉 Successfully joined the tournament!
    </p>
  </div>
</template>

<script>
export default {
  name: "JoinTournament",
  data() {
    return {
      player: {
        Tournament: "",
        Pseudo: "",
        Name: "",
        Surname: "",
        Age: null,
        Gender: ""
      },
      success: false
    };
  },
  methods: {
    submitForm() {
      this.success = true;

    
      this.player = {
        Tournament: "",
        Pseudo: "",
        Name: "",
        Surname: "",
        Age: null,
        Gender: ""
      };
    }
  }
};
</script>

<style scoped>
.join-container {
  max-width: 350px;
  margin: 50px auto;
  padding: 25px;
  background: #f5faff;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
  text-align: center;
}
input{
 width: 90%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
select {
 width: 98%;
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
.intro {
  text-align: center;
  font-size: 1rem;
  margin-bottom: 20px;
  color: #444;
}
</style>
