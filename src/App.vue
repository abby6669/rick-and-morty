<template>
  <div class="title">
    <h1>Rick & Morty</h1>
  </div>
  <FilterByName />
  <br />
  <FilterByStatus />
  <ListCharacters />
</template>

<script>
import ListCharacters from "./components/ListCharacters";
import FilterByStatus from "./components/FilterByStatus.vue";
import FilterByName from "./components/FilterByName.vue";

export default {
  name: "App",
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName,
  },
};
</script>

<style lang="scss">
* {
  font-family: sans-serif;
}

.title {
  text-align: center;
  color: greenyellow;
  text-shadow: 2px 2px 2px black;
  font-size: 3rem;
  font-family: "Comic Sans MS", cursive, sans-serif;
}

:root {
  --background-body: #24282f;
  --background-card: #3c3e44;
  --text-white: #ffffff;
  --text-gray: #c0c0c0;
  --text-orange: #ff9800;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  margin-bottom: 3rem;
  text-align: center;
}
.container {
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}
img {
  width: 100%;
}
</style>
