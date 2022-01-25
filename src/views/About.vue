<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <h1>This is an about page</h1>

        <v-btn @click="routeToName('Home')">Go to Home</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    routeToName(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style></style>
