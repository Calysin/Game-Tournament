<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/Players">Players</router-link>
      <router-link to="/boardtournament">Board Tournament</router-link>
      <router-link to="/cardtournament">Card Tournament</router-link>
      <router-link to="/esporttournament">Online Tournament</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style>
/* === Global Reset & Body === */
body {
  margin: 0;
  padding: 0;
  background-color: #d6ecff; 
  font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

/* === App Container === */
#app {
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* === Navigation Bar === */
nav {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  padding: 20px 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* === Links === */
nav a {
  font-weight: 600;
  color: #2c3e50;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* === Hover + Active Styles === */
nav a:hover {
  background-color: #e9f7ff;
  color: #1b73b2;
}

nav a.router-link-exact-active {
  background-color: #42b983;
  color: white;
  box-shadow: 0 3px 8px rgba(66, 185, 131, 0.3);
}

/* === Main Content === */
router-view {
  flex: 1;
  padding: 40px 20px;
}

/* === Responsive === */
@media (max-width: 700px) {
  nav {
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }

  nav a {
    display: block;
    width: 100%;
    max-width: 240px;
  }
}
</style>
