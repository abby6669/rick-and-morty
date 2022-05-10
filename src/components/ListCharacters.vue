<template>
  <section>
    <div class="characters">
      <div
        class="characters__item"
        v-for="character in characters"
        :key="character.id"
      >
        <CardCharacter :character="character" />
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import CardCharacter from "./CardCharacter";

export default {
  components: {
    CardCharacter,
  },

  setup() {
    const store = useStore();
    const characters = computed(() => {
      return store.state.charactersFilter;
    });

    onMounted(() => {
      store.dispatch("fetchCharacters");
    });

    return {
      characters,
    };
  },
};
</script>

<style lang="scss">
.characters {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  margin: 3rem 1rem;
}
</style>
