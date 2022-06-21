import { ls } from "@/utils/Storage";

export default {
  namespaced: true,

  state: {
    chosenLang: "zh",
    languageConfig: {
      zh: { name: "简体中文", htmlLang: "zh-CN" },
      en: { name: "English", htmlLang: "en" },
    },
  },

  getters: {
    calcLanguageName: (state) => (key) => state.languageConfig[key].name,
    calcChosenLanguageName: (state, getters) =>
      getters.calcLanguageName(state.chosenLang),
  },

  mutations: {
    CHOOSE_LANGUAGE(state, chosenLang) {
      ls.set("lang", chosenLang);
      state.chosenLang = chosenLang;
      document
        .querySelector("html")
        .setAttribute("lang", state.languageConfig[chosenLang].htmlLang);
    },
  },
};
