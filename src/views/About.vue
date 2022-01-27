<template>
  <div>
    <v-row align="center" style="height: 100%">
      <v-col
        cols="12"
        xs="10"
        sm="8"
        md="7"
        lg="5"
        xl="4"
        class="containerRight"
      >
        <!-- containerRight title -->
        <div class="titleRight">
          <v-icon left>mdi-account</v-icon>
          About
          <v-spacer></v-spacer>
        </div>
        <div class="innerPadding">
          <div class="headCont">
            <div class="textInputHeading body-1 text-center">
              Sorry, nothing here yet!
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.containerRight {
  background-color: var(--v-background2-base);
  margin-top: 20vh;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  border-radius: 10px;
  z-index: 5;
}
</style>
