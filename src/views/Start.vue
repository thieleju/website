<template>
  <v-app>
    <h1>Hello, this is the start of this page</h1>
    <v-btn @click="routeToName('Home')">Go to Home</v-btn>
  </v-app>
</template>

<script>
export default {
  name: "Home",

  components: {},
  methods: {
    routeToName(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style></style>
