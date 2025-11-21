<template>
  <div class="about-page">
    <h1>About Us</h1>

    <p class="intro">
      Welcome to our Tournament Hub, the home of exciting competitions in board games,
      card games, and online esports!
    </p>

    <p class="description">
      Our goal is to unite players from all backgrounds by offering tournaments that
      are fun, inclusive, and accessible. Whether you're a strategic thinker, a lucky
      risk-taker, or a competitive gamer, there's something here for you.
    </p>

    <section class="section-card">
      <h2>Our Mission</h2>
      <p>
        We aim to build a vibrant and welcoming community where everyone can experience
        the joy of friendly competition. Through our events, we encourage teamwork,
        skill-building, and memorable moments.
      </p>
    </section>

    <section class="section-card">
      <h2>Who We Are</h2>
      <p>
        We are a passionate team of gaming enthusiasts who believe competitions should
        be easy to join and enjoyable for everyone. Our platform continues to grow,
        thanks to the amazing players who take part every day.
      </p>
    </section>

    <section class="section-card">
      <h2>What We Offer</h2>
      <ul>
        <li>🎲 Board Game Tournaments</li>
        <li>🃏 Card Game Competitions</li>
        <li>🎮 Online Esport Events</li>
        <li>📝 Easy Tournament Registration</li>
        <li>💬 A friendly and helpful community</li>
      </ul>
    </section>

    <p class="closing">
      Thank you for being part of our growing tournament family.  
      We hope you enjoy your time competing, learning, and meeting new people!
    </p>

  </div>
</template>

<style scoped>
.about-page {
  color: #1a2a42;
  font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-align: center;
  padding: 40px 20px;
  min-height: 100vh;
}

h1 {
  font-size: 2.5rem;
  color: #1976d2;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.8rem;
  color: #0d47a1;
  margin-top: 40px;
  margin-bottom: 15px;
}


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

.section-card {
  background: white;
  border-radius: 14px;
  max-width: 800px;
  margin: 30px auto;
  padding: 25px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  line-height: 1.8;
  text-align: left;
}

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

@media (max-width: 800px) {
  h1 {
    font-size: 2rem;
  }

  .section-card {
    width: 90%;
  }
}
</style>
