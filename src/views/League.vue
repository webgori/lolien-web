<template>
  <League @setLoading="setLoading" />
</template>

<script>
import League from "@/components/league/League";

export default {
  components: {
    League
  },
  methods: {
    setLoading: function(loading) {
      this.$emit("setLoading", loading);
    }
  }
};
</script>
