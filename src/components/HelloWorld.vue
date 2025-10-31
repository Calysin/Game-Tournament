<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="intro">
      <h3>
        At <span class="highlight">JEI Entertainment</span>, we believe every player has a champion waiting to emerge. We are the first destination for competitive gaming, a vibrant hub where passion for strategy, skill, and community converges. Whether your battleground is the digital realm, the strategic depth of a board, or the shuffle of a deck, you'll find your place here.  
        <br><br>
        We host a constantly evolving calendar of tournaments for every kind of gamer. Test your reflexes in our video game championships, outmaneuver your opponents in deep board game clashes, or prove your mastery in intense card game duels. From casual weekly events to grand championships, JEI Entertainment is where legends are forged.  
        <br><br>
        Your journey to victory starts with a simple sign-up. To register for any of our exciting tournaments, you first need to create your free JEI Entertainment account. Once you're in, the entire arena is open to you.  
        <br><br>
        Ready to claim your spot? The choice is yours.  
        <br><br>
        Simply sign up and choose your tournaments from the list below.
      </h3>
    </div>

    <h2>Take a look at some of our tournaments:</h2>

    <div class="tournaments">
      <div class="tournament">
        <h4>Board Game Tournament</h4>
        <router-link to="/boardtournament">
          <img src="../assets/boardtournament.png" alt="Board Tournament">
        </router-link>
      </div>

      <div class="tournament">
        <h4>Card Game Tournament</h4>
        <router-link to="/cardtournament">
          <img src="../assets/cardtournament.png" alt="Card Tournament">
        </router-link>
      </div>

      <div class="tournament">
        <h4>Online Game Tournament</h4>
        <router-link to="/esporttournament">
          <img src="../assets/esporttournament.png" alt="Esport Tournament">
        </router-link>
      </div>
    </div>

    <div class="links">
      <router-link to="/about">About us</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
/* === Global Layout === */
.hello {
  background: linear-gradient(180deg, #d6ecff 0%, #f8fbff 100%);
  min-height: 100vh;
  padding: 40px 20px;
  text-align: center;
  color: #1a2a42;
  font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

/* === Headings === */
h1 {
  font-size: 2.5rem;
  color: #1b73b2;
  margin-bottom: 24px;
}

h2 {
  font-size: 1.8rem;
  margin-top: 60px;
  margin-bottom: 30px;
  color: #2c3e50;
}

h3 {
  line-height: 1.8;
  font-weight: 400;
  text-align: justify;
  color: #334;
  background-color: white;
  border-radius: 12px;
  padding: 40px 60px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  max-width: 900px;
  margin: 0 auto;
}

h4 {
  color: #1b73b2;
  font-weight: 600;
  margin-bottom: 12px;
}

/* === Highlights === */
.highlight {
  color: #42b983;
  font-weight: bold;
}

/* === Tournament Grid === */
.tournaments {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.tournament {
  background: #fff;
  border-radius: 14px;
  padding: 20px;
  width: 320px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tournament:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 18px rgba(0,0,0,0.15);
}

.tournament img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.tournament img:hover {
  transform: scale(1.05);
}

/* === Essential Links === */
.links {
  margin-top: 50px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  margin: 10px;
}

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
@media (max-width: 900px) {
  h3 {
    padding: 24px;
  }

  .tournaments {
    flex-direction: column;
    align-items: center;
  }

  .tournament {
    width: 90%;
    max-width: 400px;
  }
}
</style>
