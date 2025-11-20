<template>
  <div class="games-tournaments">

    <h1>🎮 Games & 🏆 Tournaments Management</h1>

    <p class="intro">
       Welcome to our official list of games featured in JEI Entertainment tournaments!                                  

           Across the years, we’ve hosted exciting competitions spanning board, card, and online games.  
    </p>

    <!-- === GAMES SECTION === -->
    <section class="section">
      <h2>All Featured Games</h2>

      <!-- Add Game Form -->
      <div class="add-box">
        <h3>Add a Game</h3>
        <form @submit.prevent="addGame" class="form-row">
          <input v-model="newGame.Name_game" placeholder="Name (e.g. Uno)" required />
          <select v-model="newGame.Type_game" required>
            <option disabled value="">Type</option>
            <option>Card</option>
            <option>Board</option>
            <option>Online</option>
          </select>
          <input v-model="newGame.Editor" placeholder="Editor (e.g. Mattel)" required />
          <input v-model="newGame.Release_date" type="date" required />
          <input v-model.number="newGame.Age_requirement" type="number" min="0" placeholder="Age req." required />
          <button class="action-btn add-btn" type="submit">Add Game</button>
        </form>
      </div>

      <!-- Edit Game Box -->
      <div v-if="editingGame" class="add-box">
        <h3>Edit Game</h3>
        <form @submit.prevent="confirmEditGame" class="form-row">
          <input v-model="editingGame.Name_game" placeholder="Name" required />
          <select v-model="editingGame.Type_game" required>
            <option disabled value="">Type</option>
            <option>Card</option>
            <option>Board</option>
            <option>Online</option>
          </select>
          <input v-model="editingGame.Editor" placeholder="Editor" required />
          <input v-model="editingGame.Release_date" type="date" required />
          <input v-model.number="editingGame.Age_requirement" type="number" min="0" placeholder="Age req." required />
          <div class="edit-actions">
            <button class="action-btn edit-btn" type="submit">Save</button>
            <button class="action-btn cancel-btn" type="button" @click="cancelEditGame">Cancel</button>
          </div>
        </form>
      </div>

      <!-- Games Table -->
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Game Name</th>
            <th>Type</th>
            <th>Editor</th>
            <th>Release Date</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="game in games" :key="game.ID_game">
            <td>{{ game.ID_game }}</td>
            <td>{{ game.Name_game }}</td>
            <td>{{ game.Type_game }}</td>
            <td>{{ game.Editor }}</td>
            <td>{{ formatDate(game.Release_date) }}</td>
            <td>{{ game.Age_requirement }}+</td>
            <td>
              <template v-if="editableGames.includes(game.ID_game)">
                <button class="action-btn edit-btn" @click="startEditGame(game)">Edit</button>
                <button class="action-btn delete-btn" @click="deleteGame(game.ID_game)">Delete</button>
              </template>
              <template v-else>
                <span class="locked">Locked</span>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- === TOURNAMENTS SECTION === -->
    <section class="section">
      <h2>Past Tournaments</h2>

   
      <div class="add-box">
        <h3>Add a Tournament</h3>
        <form @submit.prevent="addTournament" class="form-row">
          <input v-model="newTournament.Name_tournament" placeholder="Name (e.g. CardCaptor)" required />
          <input v-model="newTournament.Location" placeholder="Location" required />
          <input v-model="newTournament.Date_start" type="date" required />
          <input v-model="newTournament.Date_end" type="date" required />
          <input v-model="newTournament.Reward" placeholder="Reward (e.g. Money)" required />
          <button class="action-btn add-btn" type="submit">Add Tournament</button>
        </form>
      </div>

      <div v-if="editingTournament" class="add-box">
        <h3>Edit Tournament</h3>
        <form @submit.prevent="confirmEditTournament" class="form-row">
          <input v-model="editingTournament.Name_tournament" placeholder="Name" required />
          <input v-model="editingTournament.Location" placeholder="Location" required />
          <input v-model="editingTournament.Date_start" type="date" required />
          <input v-model="editingTournament.Date_end" type="date" required />
          <input v-model="editingTournament.Reward" placeholder="Reward" required />
          <div class="edit-actions">
            <button class="action-btn edit-btn" type="submit">Save</button>
            <button class="action-btn cancel-btn" type="button" @click="cancelEditTournament">Cancel</button>
          </div>
        </form>
      </div>

      <!-- Tournaments Table -->
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tournament Name</th>
            <th>Location</th>
            <th>Start</th>
            <th>End</th>
            <th>Reward</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in tournaments" :key="t.ID_tournament">
            <td>{{ t.ID_tournament }}</td>
            <td>{{ t.Name_tournament }}</td>
            <td>{{ t.Location }}</td>
            <td>{{ t.Date_start }}</td>
            <td>{{ t.Date_end }}</td>
            <td>{{ t.Reward }}</td>
            <td>
              <template v-if="editableTournaments.includes(t.ID_tournament)">
                <button class="action-btn edit-btn" @click="startEditTournament(t)">Edit</button>
                <button class="action-btn delete-btn" @click="deleteTournament(t.ID_tournament)">Delete</button>
              </template>
              <template v-else>
                <span class="locked">Locked</span>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

  </div>
</template>

<script>
import gamesData from '@/assets/Game.json';
import tournamentsData from '@/assets/Tournament.json';

export default {
  name: 'GameTournamentCrud',
  data() {
    return {
  
      games: Array.isArray(gamesData) ? JSON.parse(JSON.stringify(gamesData)) : [],
      tournaments: Array.isArray(tournamentsData) ? JSON.parse(JSON.stringify(tournamentsData)) : [],

      // track IDs of newly added items
      editableGames: [],
      editableTournaments: [],

      newGame: {
        Name_game: '',
        Type_game: '',
        Editor: '',
        Release_date: '',
        Age_requirement: null
      },
      newTournament: {
        Name_tournament: '',
        Location: '',
        Date_start: '',
        Date_end: '',
        Reward: ''
      },

      // editing objects
      editingGame: null,
      editingTournament: null
    };
  },

  methods: {
    formatDate(d) {
      if (!d) return '';
      return d;
    },

    addGame() {
     
      const g = this.newGame;
      if (!g.Name_game || !g.Type_game || !g.Editor || !g.Release_date || g.Age_requirement == null) return;

      const nextId = this.games.length ? Math.max(...this.games.map(x => x.ID_game)) + 1 : 1;
      const newEntry = {
        ID_game: nextId,
        Name_game: g.Name_game,
        Type_game: g.Type_game,
        Editor: g.Editor,
        Release_date: g.Release_date,
        Age_requirement: Number(g.Age_requirement)
      };
      this.games.push(newEntry);
      this.editableGames.push(nextId);

      // reset form
      this.newGame = { Name_game: '', Type_game: '', Editor: '', Release_date: '', Age_requirement: null };
    },

    startEditGame(game) {
      if (!this.editableGames.includes(game.ID_game)) return;
      this.editingGame = { ...game };
    },

    confirmEditGame() {
      if (!this.editingGame) return;
      const idx = this.games.findIndex(g => g.ID_game === this.editingGame.ID_game);
      if (idx !== -1) {
        this.games.splice(idx, 1, { ...this.editingGame });
      }
      this.editingGame = null;
    },

    cancelEditGame() {
      this.editingGame = null;
    },

    deleteGame(id) {
      if (!this.editableGames.includes(id)) return;
      this.games = this.games.filter(g => g.ID_game !== id);
      this.editableGames = this.editableGames.filter(x => x !== id);
    },

    addTournament() {
      const t = this.newTournament;
      if (!t.Name_tournament || !t.Location || !t.Date_start || !t.Date_end || !t.Reward) return;

      const nextId = this.tournaments.length ? Math.max(...this.tournaments.map(x => x.ID_tournament)) + 1 : 1;
      const newEntry = {
        ID_tournament: nextId,
        Name_tournament: t.Name_tournament,
        Location: t.Location,
        Date_start: t.Date_start,
        Date_end: t.Date_end,
        Reward: t.Reward
      };
      this.tournaments.push(newEntry);
      this.editableTournaments.push(nextId);

      this.newTournament = { Name_tournament: '', Location: '', Date_start: '', Date_end: '', Reward: '' };
    },

    startEditTournament(t) {
      if (!this.editableTournaments.includes(t.ID_tournament)) return;
      this.editingTournament = { ...t };
    },

    confirmEditTournament() {
      if (!this.editingTournament) return;
      const idx = this.tournaments.findIndex(x => x.ID_tournament === this.editingTournament.ID_tournament);
      if (idx !== -1) {
        this.tournaments.splice(idx, 1, { ...this.editingTournament });
      }
      this.editingTournament = null;
    },

    cancelEditTournament() {
      this.editingTournament = null;
    },

    deleteTournament(id) {
      if (!this.editableTournaments.includes(id)) return;
      this.tournaments = this.tournaments.filter(x => x.ID_tournament !== id);
      this.editableTournaments = this.editableTournaments.filter(x => x !== id);
    }
  }
};
</script>

<style scoped>
.games-tournaments {
  max-width: 1100px;
  margin: 0 auto;
  padding: 36px 20px;
  font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1a2a42;
}

h1 {
  font-size: 2.2rem;
  color: #1976d2;
  text-align: center;
  margin-bottom: 12px;
}

.intro {
  background: #f5faff;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: justify;
  box-shadow: 0 3px 8px rgba(0,0,0,0.06);
}


.section {
  margin-top: 30px;
}


.add-box {
  background: #f5faff;
  padding: 18px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  margin-bottom: 18px;
}

.add-box h3 {
  color: #1976d2;
  margin-bottom: 10px;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}


.form-row input,
.form-row select {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

/* Table */
.data-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  margin-bottom: 24px;
}

.data-table thead {
  background: #42b983;
  color: white;
}

.data-table th, .data-table td {
  padding: 12px 14px;
  text-align: left;
}

.data-table tbody tr:nth-child(even) {
  background: #f7f7f7;
}

.data-table tbody tr:hover {
  background: #e0f7fa;
}

/* Buttons */
.action-btn {
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.08s ease;
}

.add-btn {
  background: #42b983;
}
.add-btn:hover { background: #2e8b68; transform: translateY(-2px); }

.edit-btn {
  background: #1976d2;
}
.edit-btn:hover { background: #145ca5; transform: translateY(-2px); }

.delete-btn {
  background: #d9534f;
}
.delete-btn:hover { background: #b52b27; transform: translateY(-2px); }

.cancel-btn {
  background: #888;
}
.cancel-btn:hover { background: #666; transform: translateY(-2px); }

.locked {
  color: #888;
  font-style: italic;
}

/* edit actions row */
.edit-actions {
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 8px;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .form-row { gap: 10px; }
  .form-row input, .form-row select { width: 100%; }
}

@media (max-width: 700px) {
  .data-table th, .data-table td { padding: 10px; font-size: 0.95rem; }
}
</style>
