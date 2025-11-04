<template>
  <div class="players">
    <h1>Past Participants</h1>
    <p class="intro">
      This is our participant registry! Here you can explore the players who have joined our past and ongoing game tournaments.
      Each participant brings their unique skills, strategies, and enthusiasm to our competitions, whether they’re conquering board games,
      mastering card games, or competing in online challenges. This list celebrates the vibrant community of gamers who make our tournaments exciting and memorable.
    </p>

    
    <table>
      <thead>
        <tr>
          <th>Pseudo</th>
          <th>Full Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players" :key="player.ID_player">
          <td>{{ player.Pseudo }}</td>
          <td>{{ player.Name }} {{ player.Surname }}</td>
          <td>{{ player.Age }}</td>
          <td>{{ player.Gender }}</td>
        </tr>
      </tbody>
    </table>

    
    <div class="add-player">
      <h2>Add a New Participant</h2>
      <form @submit.prevent="addPlayer">
        <input v-model="newPlayer.Pseudo" type="text" placeholder="Pseudo" required />
        <input v-model="newPlayer.Name" type="text" placeholder="First Name" required />
        <input v-model="newPlayer.Surname" type="text" placeholder="Last Name" required />
        <input v-model.number="newPlayer.Age" type="number" placeholder="Age" required min="1" />
        <select v-model="newPlayer.Gender" required>
          <option disabled value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <button type="submit">Add Player</button>
      </form>
    </div>
  </div>

  <div class="links">
    <ul>
      <li><router-link to="/about">About us</router-link></li>
    </ul>
  </div>
</template>

<script>
import playersData from '@/assets/Player.json';

export default {
  name: 'PlayerList',
  data() {
    return {
      players: playersData,
      newPlayer: {
        Pseudo: '',
        Name: '',
        Surname: '',
        Age: null,
        Gender: ''
      }
    };
  },
  methods: {
    addPlayer() {
      const newEntry = {
        ID_player: this.players.length + 1,
        ...this.newPlayer
      };

      this.players.push(newEntry);

      // Reset the form
      this.newPlayer = {
        Pseudo: '',
        Name: '',
        Surname: '',
        Age: null,
        Gender: ''
      };
    }
  }
};
</script>

<style scoped>
.players {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1a2a42;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #1976d2;
  margin-bottom: 10px;
}

.intro {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 40px;
  background-color: #f5faff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
  text-align: justify;
}

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-bottom: 40px;
}

thead {
  background-color: #42b983;
  color: white;
}

th, td {
  padding: 12px 15px;
  text-align: left;
}

tbody tr {
  border-bottom: 1px solid #ddd;
}

tbody tr:nth-child(even) {
  background-color: #f7f7f7;
}

tbody tr:hover {
  background-color: #e0f7fa;
  transform: scale(1.01);
}

/* Add Player Form */
.add-player {
  background-color: #f5faff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
  margin-bottom: 30px;
}

.add-player h2 {
  color: #1976d2;
  margin-bottom: 20px;
}

.add-player form {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.add-player input,
.add-player select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 160px;
}

.add-player button {
  background-color: #42b983;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.add-player button:hover {
  background-color: #2e8b68;
}

/* Links */
a {
  text-decoration: none;
  color: #1b73b2;
  font-weight: 600;
  transition: color 0.3s ease;
}

a:hover {
  color: #42b983;
}

/* Responsive */
@media (max-width: 700px) {
  th, td {
    padding: 10px;
  }

  table {
    font-size: 0.9rem;
  }

  .add-player form {
    flex-direction: column;
    align-items: center;
  }

  .add-player input,
  .add-player select {
    width: 80%;
  }
}
</style>
