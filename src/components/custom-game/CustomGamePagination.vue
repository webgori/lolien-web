<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="totalPages"
      total-visible="10"
      @input="next"
    ></v-pagination>
  </div>
</template>

<script>
// import { eventBus } from "@/main";

export default {
  props: {
    totalPages: { type: Number }
  },
  data() {
    return {
      page: 1
    };
  },
  methods: {
    next(page) {
      this.$emit("updatePage", page);
    }
  }
};
</script>

<style scoped>
.spell {
  /* width: 3vh;
  height: 3vh; */
  width: 30px;
  height: 30px;
}

.spell1 {
  /* margin-left: 5vh; */
  margin-right: 1vh;
}

.champ {
  width: 3vh;
  height: 3vh;
  margin-right: 1vh;
}

.item {
  width: 3vh;
  height: 3vh;
  margin-right: 1vh;
}
</style>
