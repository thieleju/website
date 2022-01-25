<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <h1>This is the Home page</h1>

        <v-btn @click="routeToName('About')">Go to about</v-btn>
      </v-col>
    </v-row>
  </v-container>
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
