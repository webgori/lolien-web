<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar"

export default {
  name: "App",
  methods: {
    openKakao: function() {
        window.open("https://open.kakao.com/o/g2FEzQ5")
    }
  },
  components: {
    Navbar,
  }
};
</script>
