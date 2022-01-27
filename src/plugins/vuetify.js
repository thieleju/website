import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: { customProperties: true },
    themes: {
      dark: {
        primary: "#38A3A5",
        // secondary: "#22577A",
        secondary: "#0A1013",
        // background: "#181A1B",
        background: "#161618",
        background2: "#2D2D2D",
        accent: "#80ED99",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
});
