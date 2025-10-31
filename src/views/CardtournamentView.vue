<template>
  <div class="card-tournament">
    <h1>🃏Card Game Tournaments</h1>
    <p class="intro">Welcome to the heart of strategy, luck, and fun!</p>

    <p class="description">
      Our Card Game Tournaments bring together players of all levels to compete in classic and modern card games. Whether you're a casual player or a seasoned pro, there's a seat for you at our tables.
    </p>

    <section class="featured">
      <h2>Featured Games</h2>
      <div class="game-grid">
        <div class="game-card">
          <h3>♥️Uno</h3>
          <p>Fast-paced, colorful, and full of surprises.</p>
        </div>
        <div class="game-card">
          <h3>♠️Belote</h3>
          <p>A classic trick-taking game beloved across Europe.</p>
        </div>
        <div class="game-card">
          <h3>♦️Kems</h3>
          <p>A partnership game of secret signals and perfect coordination.</p>
        </div>
      </div>
    </section>

    <section class="why-join">
      <h2>Why Join?</h2>
      <ul>
        <li>🃏 Play with friends and meet new opponents</li>
        <li>🏆 Compete for exciting rewards and recognition</li>
        <li>📅 Regular events with a friendly, competitive atmosphere</li>
        <li>🎯 Games suited for all ages and skill levels</li>
      </ul>
    </section>

    <section class="how-to">
      <h2>How to Participate</h2>
      <ol>
        <li>Create an account and log in</li>
        <li>Register for an upcoming card game tournament</li>
        <li>Show up and play your best!</li>
      </ol>
    </section>

    <p class="closing">
      Whether you're here to win or just to enjoy the game, our card game tournaments are all about bringing people together through the love of cards.
    </p>

    <p><strong>Ready to shuffle up and deal?</strong></p>
    <button class="join-btn">Join a Tournament Today!</button>

    <section class="upcoming">
      <h2>Upcoming Card Game Tournaments</h2>
      <ul>
        <li>Uno Tournament</li>
        <li>Belote Tournament</li>
        <li>Kems Tournament</li>
        <li>Uno, Belote, Kems Tournament</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.card-tournament {
  background: linear-gradient(180deg, #fff 0%, #d6ecff 100%);
  color: #1a2a42;
  font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-align: center;
  padding: 40px 20px;
  min-height: 100vh;
}

/* === HEADINGS === */
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

/* === TEXT === */
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

/* === FEATURED GAMES GRID === */
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

/* === WHY JOIN === */
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

/* === HOW TO PARTICIPATE === */
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

/* === BUTTON === */
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

/* === UPCOMING SECTION === */
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

/* === RESPONSIVE DESIGN === */
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
