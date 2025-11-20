<template>
  <div class="esport-tournament">
    <h1>🎮Online Game Tournaments</h1>
    <p class="intro">Welcome to the heart of competitive online gaming!</p>

    <p class="description">
      Whether you're a strategic mastermind, a quick-shot specialist, or an explorer of vast virtual worlds, our online game tournaments are designed for players of all styles and skill levels.
    </p>

    <section class="featured">
      <h2>Featured Games</h2>
      <div class="game-grid">
        <div class="game-card">
          <h3>🎮 League of Legends</h3>
          <p>Join the battle in one of the world's most popular MOBAs. Form your team, draft your champions, and compete for glory in Summoner's Rift.</p>
        </div>
        <div class="game-card">
          <h3>🔫 Valorant</h3>
          <p>Precision, tactics, and teamwork define the experience in Valorant. Face off in intense 5v5 matches and prove you have what it takes to be the last one standing.</p>
        </div>
        <div class="game-card">
          <h3>🌍 Genshin Impact</h3>
          <p>Explore the beautiful world of Teyvat in a unique tournament format. Showcase your mastery of characters, elements, and combat in this breathtaking action RPG.</p>
        </div>
      </div>
    </section>

    <section class="why-join">
      <h2>Why Compete With Us?</h2>
      <ul>
        <li>Fair Play Guaranteed: Anti-cheat systems and professional refereeing.</li>
        <li>Regular Events: Seasonal tournaments, ranked ladders, and special themed contests.</li>
        <li>Rewards & Prizes: Win in-game currency, exclusive skins, cash prizes, and more.</li>
        <li>Community Driven: Meet players from around the world, join guilds, and grow together.</li>
      </ul>
    </section>

    <section class="how-to">
      <h2>How to Participate</h2>
      <ol>
        <li>Create an Account and log in</li>
        <li>Register for a Tournament – Choose your game and category.</li>
        <li>Check-In & Play – Be online at the scheduled time and give it your all!</li>
      </ol>
    </section>

    <p class="closing">
      Whether you're here for fun or for fame, our online tournaments offer a stage for every gamer.
    </p>

    <p><strong>Ready to play?</strong></p>
    <button class="join-btn" @click="$router.push('/JoinTournament')">Join a Tournament</button>

    <section class="upcoming">
      <h2>Upcoming Online Tournaments</h2>
      <ul>
        <li>Genshin Impact Tournament</li>
        <li>Valorant Tournament</li>
        <li>League Of Legends Tournament</li>
        <li>Genshin Impact, Valorant, League Of Legends Tournament</li>
      </ul>
    </section>

    <div class="links">
      <router-link to="/about">About us</router-link>
    </div>
  </div>
</template>

<style scoped>
.esport-tournament {
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

/* === How to Participate === */
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
