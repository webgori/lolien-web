<template>
  <CustomGame @setLoading="setLoading" />
</template>

<script>
import CustomGame from "@/components/custom-game/CustomGame";

export default {
  components: {
    CustomGame
  },
  methods: {
    setLoading: function(loading) {
      this.$emit("setLoading", loading);
    }
  }
};
</script>
