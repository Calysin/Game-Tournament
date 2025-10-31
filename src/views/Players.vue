<template>
  <div class="players">
    <h1>Past Participants</h1>
    <p>Welcome to our participant registry! Here you can explore the players who have joined our past and ongoing game tournaments. Each participant brings their unique skills, strategies, and enthusiasm to our competitions, whether they’re conquering board games, mastering card games, or competing in online challenges. This list celebrates the vibrant community of gamers who make our tournaments exciting and memorable.</p>

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
      players: playersData
    };
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

/* === Table Styles === */
table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
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

/* === Links === */
a {
  text-decoration: none;
  color: #1b73b2;
  font-weight: 600;
  transition: color 0.3s ease;
}

a:hover {
  color: #42b983;
}

/* === Responsive === */
@media (max-width: 700px) {
  th, td {
    padding: 10px;
  }

  table {
    font-size: 0.9rem;
  }
}
</style>
