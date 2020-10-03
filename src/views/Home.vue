<template>
  <Home @setLoading="setLoading" />
</template>

<script>
import Home from "@/components/home/Home";

export default {
  components: {
    Home
  },
  methods: {
    setLoading: function(loading) {
      this.$emit("setLoading", loading);
    }
  }
};
</script>
