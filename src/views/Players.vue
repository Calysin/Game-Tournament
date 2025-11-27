<template>
  <div class="players">
    <h1>Past Participants</h1>

    <p class="intro">
      This is our participant registry! Here you can explore the players who have joined our past and ongoing tournaments.
      Each participant brings strategy, skills, and enthusiasm to our events. You can also add new players, edit their information, or remove them from the list as needed.
    </p>

    <!-- ADD PLAYER -->
    <div class="add-player">
      <h2>Add a New Player</h2>

      <form @submit.prevent="addPlayer">
        <input v-model="newPlayer.Pseudo" placeholder="Pseudo" required />
        <input v-model="newPlayer.Name" placeholder="Name" required />
        <input v-model="newPlayer.Surname" placeholder="Surname" required />
        <input v-model.number="newPlayer.Age" type="number" min="1" placeholder="Age" required />

        <select v-model="newPlayer.Gender" required>
          <option disabled value="">Choose gender</option>
          <option>Boy</option>
          <option>Girl</option>
        </select>

        <button type="submit" class="action-btn add-btn">Add Player</button>
      </form>
    </div>

    <!-- EDIT PLAYER BOX -->
    <div v-if="editingPlayer" class="edit-player-box">
      <h2>Edit Player</h2>

      <form @submit.prevent="confirmEdit">
        <input v-model="editingPlayer.Pseudo" placeholder="Pseudo" required />
        <input v-model="editingPlayer.Name" placeholder="Name" required />
        <input v-model="editingPlayer.Surname" placeholder="Surname" required />
        <input v-model.number="editingPlayer.Age" type="number" min="1" placeholder="Age" required />

        <select v-model="editingPlayer.Gender" required>
          <option disabled value="">Choose gender</option>
          <option>Boy</option>
          <option>Girl</option>
        </select>

        <div class="edit-actions">
          <button type="submit" class="action-btn edit-btn">Save</button>
          <button type="button" @click="cancelEdit" class="action-btn cancel-btn">Cancel</button>
        </div>
      </form>
    </div>

    <!-- PLAYER TABLE -->
    <table>
      <thead>
        <tr>
          <th>Pseudo</th>
          <th>Full Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="player in players" :key="player.ID_player">
          <td>{{ player.Pseudo }}</td>
          <td>{{ player.Name }} {{ player.Surname }}</td>
          <td>{{ player.Age }}</td>
          <td>{{ player.Gender }}</td>

          <td>
            <template v-if="editablePlayers.includes(player.ID_player)">
              <button @click="startEdit(player)" class="action-btn edit-btn">Edit</button>
              <button @click="deletePlayer(player.ID_player)" class="action-btn delete-btn">Delete</button>
            </template>

            <template v-else>
              <span class="locked">Locked</span>
            </template>
          </td>
        </tr>
      </tbody>
    </table>

  </div>

  
</template>

<script>
import playersData from '@/assets/Player.json';

export default {
  name: "PlayerList",

  data() {
    return {
      players: playersData,
      newPlayer: {
        Pseudo: "",
        Name: "",
        Surname: "",
        Age: null,
        Gender: ""
      },
      editingPlayer: null,
      editablePlayers: [] 
    };
  },

  methods: {
  
    addPlayer() {
      const nextId =
        this.players.length > 0
          ? Math.max(...this.players.map((p) => p.ID_player)) + 1
          : 1;

      const newEntry = {
        ID_player: nextId,
        ...this.newPlayer,
      };

      this.players.push(newEntry);
      this.editablePlayers.push(nextId);

      // Reset form
      this.newPlayer = {
        Pseudo: "",
        Name: "",
        Surname: "",
        Age: null,
        Gender: "",
      };
    },

    // START EDIT
    startEdit(player) {
      if (!this.editablePlayers.includes(player.ID_player)) return;
      this.editingPlayer = { ...player };
    },

    // CONFIRM EDIT
    confirmEdit() {
      const index = this.players.findIndex(
        (p) => p.ID_player === this.editingPlayer.ID_player
      );

      if (index !== -1) {
        this.players[index] = { ...this.editingPlayer };
      }

      this.editingPlayer = null;
    },

    // CANCEL EDIT
    cancelEdit() {
      this.editingPlayer = null;
    },

    // DELETE PLAYER
    deletePlayer(id) {
      if (!this.editablePlayers.includes(id)) return;

      this.players = this.players.filter((p) => p.ID_player !== id);
      this.editablePlayers = this.editablePlayers.filter((x) => x !== id);
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

/* TABLE */
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

tbody tr:nth-child(even) {
  background-color: #f7f7f7;
}

tbody tr:hover {
  background-color: #e0f7fa;
  transform: scale(1.01);
}

/* ADD PLAYER FORM */
.add-player,
.edit-player-box {
  background-color: #f5faff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
  margin-bottom: 30px;
}

.add-player h2,
.edit-player-box h2 {
  color: #1976d2;
  margin-bottom: 20px;
}

.add-player form,
.edit-player-box form {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.add-player input,
.add-player select,
.edit-player-box input,
.edit-player-box select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 160px;
}

/* BUTTONS */
.action-btn {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  color: white;
  transition: 0.25s ease;
}

.add-btn {
  background-color: #42b983;
}
.add-btn:hover {
  background-color: #2e8b68;
  transform: translateY(-2px);
}

.edit-btn {
  background-color: #1976d2;
}
.edit-btn:hover {
  background-color: #145ca5;
  transform: translateY(-2px);
}

.delete-btn {
  background-color: #d9534f;
}
.delete-btn:hover {
  background-color: #b52b27;
  transform: translateY(-2px);
}

.cancel-btn {
  background-color: #888;
}
.cancel-btn:hover {
  background-color: #666;
  transform: translateY(-2px);
}

.locked {
  color: #888;
  font-style: italic;
}

.edit-actions {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
}

/* RESPONSIVE */
@media (max-width: 700px) {
  table { font-size: 0.9rem; }
  th, td { padding: 10px; }
}
</style>
