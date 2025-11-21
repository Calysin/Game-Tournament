<template>
  <div class="board-tournament">
    <h1>🎲 Board Game Tournaments</h1>
    <p class="intro"> Welcome to the heart of classic gaming! 
      
    <p class="description">
      Our Board Game Tournaments bring together strategy, fun, and competition in a lively and social atmosphere.                                                                                                      
      Whether you're a seasoned veteran or new to the world of board games, there’s a place for you at our tables.
    </p></p>
    
    <section class="featured">
      <h2>Featured Games</h2>
      <div class="game-grid">
        <div class="game-card">
          <h3>🎩Monopoly</h3>
          <p>Buy, trade, and build your way to victory in this timeless game of property and luck.</p>
        </div>
        <div class="game-card">
          <h3>♟️Checkers</h3>
          <p>A game of pure strategy and skill. Outmaneuver your opponent and claim the board!</p>
        </div>
        <div class="game-card">
          <h3>💸La Bonne Paye</h3>
          <p>Manage your finances, pay your bills, and be the first to succeed in this French classic.</p>
        </div>
      </div>
    </section>

    <section class="why-join">
      <h2>Why Join Our Board Game Tournaments?</h2>
      <ul>
        <li>🏆 Compete for exclusive rewards and recognition</li>
        <li>👥 Meet fellow board game enthusiasts</li>
        <li>🧠 Challenge your mind with strategic and tactical gameplay</li>
        <li>🎉 Enjoy a friendly and welcoming environment</li>
      </ul>
    </section>

    <section class="how-to">
      <h2>How to Participate</h2>
      <ol>
        <li>Create an account and log in</li>
        <li>Browse upcoming tournaments and check the schedule</li>
        <li>Register for your favorite board game events</li>
      </ol>
    </section>

    <p class="closing">
      Whether you’re here to relive childhood memories or to discover new favorites, our board game tournaments promise excitement and engagement for all.
    </p>

    <p><strong>Ready to roll the dice?</strong></p>
    <button class="join-btn" @click="$router.push('/JoinTournament')">Join a Tournament</button>


    <section class="upcoming">
      <h2>Upcoming Board Game Tournaments</h2>
      <ul>
        <li>Monopoly Tournament</li>
        <li>Checkers Tournament</li>
        <li>La Bonne Paye Tournament</li>
        <li>Monopoly, Checkers, La Bonne Paye Tournament</li>
      </ul>
    </section>



    <div class="links">
      <router-link to="/about">About us</router-link>
    </div>
  </div>
</template>

<style scoped>
.board-tournament {
  color: #1a2a42;
  font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-align: center;
  padding: 40px 20px;
  min-height: 100vh;
}

/* === Headings === */
h1 {
  font-size: 2.5rem;
  color: #1976d2;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.8rem;
  color: #0d47a1;
  margin-top: 50px;
  margin-bottom: 20px;
}

h3 {
  color: #1b5e20;
  font-weight: 600;
}

/* === Text === */
.intro {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.description,
.closing {
  max-width: 800px;
  margin: 0 auto 20px auto;
  line-height: 1.8;
  color: #334;
}

/* === Featured Games Grid === */
.game-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
}

.game-card {
  background: white;
  border-radius: 14px;
  width: 250px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.game-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/* === Why Join === */
ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 600px;
  text-align: left;
  line-height: 1.8;
}

li {
  background: #f1f8e9;
  border-left: 5px solid #66bb6a;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 8px;
}

/* How to Participate */
ol {
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.8;
}

ol li {
  background: #f1f5f7;
  border-left: 5px solid #42a5f5;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 8px;
}

/* === Button === */
.join-btn {
  background-color: #42a5f5;
  color: white;
  font-weight: bold;
  border: none;
  padding: 15px 30px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 20px;
  transition: 0.3s ease, transform 0.2s ease;
}

.join-btn:hover {
  background-color: #1e88e5;
  transform: scale(1.05);
}

/* === Upcoming Tournaments === */
.upcoming ol {
  max-width: 400px;
  margin: 20px auto;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.upcoming ol li {
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
}

.upcoming ol li:last-child {
  border-bottom: none;
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

/* === Responsive Design === */
@media (max-width: 800px) {
  .game-grid {
    flex-direction: column;
    align-items: center;
  }

  .game-card {
    width: 90%;
    max-width: 400px;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>
