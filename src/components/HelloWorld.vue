<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>
    At JEI Entertainment, we believe every player has a champion waiting to emerge. We are the premier destination for competitive gaming, a vibrant hub where passion for strategy, skill, and community converges. Whether your battleground is the digital realm, the strategic depth of a board, or the shuffle of a deck, you'll find your place here.  <br></br>
    We host a constantly evolving calendar of tournaments for every kind of gamer. Test your reflexes in our video game championships, outmaneuver your opponents in deep board game clashes, or prove your mastery in intense card game duels. From casual weekly events to grand championships, JEI Entertainment is where legends are forged. <br></br>
    Your journey to victory starts with a simple sign-up. To register for any of our exciting tournaments, you first need to create your free JEI Entertainment account. Once you're in, the entire arena is open to you.<br></br>
    Ready to claim your spot? The choice is yours. <br></br>
    Simply sign up and choose your tournaments from the list below. </h3>
    <br></br>





    <h2>Take a look at some of our tournaments:</h2>
    <p> Board game tournament <br></br>
      <router-link to="/boardtournament">
        <img src="../assets/boardtournament.png" width="400">
      </router-link>
    </p>
    <p> Card game tournament<br></br>
      <router-link to="/cardtournament">
        <img src="../assets/cardtournament.png" width="400">
      </router-link>
    </p>
    <p> E-sport game tournament<br></br>
      <router-link to="/Esporttournament">
        <img src="../assets/esporttournament.png" width="400">
      </router-link>
    </p>
    
    <h3>Essential Links</h3>
    <ul>
      <li><router-link to="/about">About</router-link></li>
    </ul>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  padding: 40px 200px;
  line-height: 2;
  text-align: justify;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

body {
  background-color: royalblue;
}
.image-round {
  border-radius: 50%;
}

</style>
