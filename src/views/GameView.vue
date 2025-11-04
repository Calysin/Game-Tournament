<template>
  <div class="games">
    <h1>🎮 Games Played in Our Tournaments</h1>

    <p class="intro">
      Welcome to our official list of games featured in JEI Entertainment tournaments!  
      Across the years, we’ve hosted exciting competitions spanning board, card, and online games.  
      From classic titles like <strong>Monopoly</strong> and <strong>Belote</strong> to modern hits such as  
      <strong>Valorant</strong> and <strong>Genshin Impact</strong>, each game offers a unique experience that brings  
      our community together through strategy, skill, and passion for play.
    </p>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Game Name</th>
          <th>Type</th>
          <th>Editor</th>
          <th>Release Date</th>
          <th>Age Requirement</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in games" :key="game.ID_game">
          <td>{{ game.ID_game }}</td>
          <td>{{ game.Name_game }}</td>
          <td>{{ game.Type_game }}</td>
          <td>{{ game.Editor }}</td>
          <td>{{ new Date(game.Release_date).getFullYear() }}</td>
          <td>{{ game.Age_requirement }}+</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import gamesData from '@/assets/Game.json';

export default {
  name: 'GameList',
  data() {
    return {
      games: gamesData
    };
  }
};
</script>

<style scoped>
.games {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1a2a42;
  text-align: center;
}

h1 {
  color: #42b983;
  margin-bottom: 20px;
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

/* Table styling */
table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 10px;
  overflow: hidden;
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

/* Responsive */
@media (max-width: 700px) {
  th, td {
    padding: 10px;
    font-size: 0.9rem;
  }
  .intro {
    font-size: 1rem;
  }
}
</style>
