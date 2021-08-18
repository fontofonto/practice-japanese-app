export const state = () => ({
    version: "1.4.0",
    isSettingsLoaded: false,
    settings: {
        showKanji: false,
        numberOfQuestions: 10,
        preferredJapaneseFontFamily: 'serif',
        preferredUITheme: 'auto',
    },
    googleSheetPages: [
        {
            pageName: "Chapter 1-5 Words",
            title: "第1-5課 詞語",
            filename: "chapter1-5.json",
            googleSheetPath: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWFmrxXW_DjZNBJPpXb7Icm_lCpW40O2a_656WyqyJW_spPGLc2ljtxlZ-t3OAD3dFHxRVk5NNRlXY/pub?gid=127701060&single=true&output=csv"
        },
        {
            pageName: "Chapter 6-10 Words",
            title: "第6-10課 詞語",
            filename: "chapter6-10.json",
            googleSheetPath: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWFmrxXW_DjZNBJPpXb7Icm_lCpW40O2a_656WyqyJW_spPGLc2ljtxlZ-t3OAD3dFHxRVk5NNRlXY/pub?gid=1976246991&single=true&output=csv"
        },
        {
            pageName: "Chapter 11-15 Words",
            title: "第11-15課 詞語",
            filename: "chapter11-15.json",
            googleSheetPath: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWFmrxXW_DjZNBJPpXb7Icm_lCpW40O2a_656WyqyJW_spPGLc2ljtxlZ-t3OAD3dFHxRVk5NNRlXY/pub?gid=2012002939&single=true&output=csv"
        },
        {
            pageName: "Chapter 16-19 Words",
            title: "第16-19課 詞語",
            filename: "chapter16-19.json",
            googleSheetPath: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWFmrxXW_DjZNBJPpXb7Icm_lCpW40O2a_656WyqyJW_spPGLc2ljtxlZ-t3OAD3dFHxRVk5NNRlXY/pub?gid=421896800&single=true&output=csv"
        },
        {
            pageName: "Chapter 20-23 Words",
            title: "第20-23課 詞語",
            filename: "chapter20-23.json",
            googleSheetPath: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWFmrxXW_DjZNBJPpXb7Icm_lCpW40O2a_656WyqyJW_spPGLc2ljtxlZ-t3OAD3dFHxRVk5NNRlXY/pub?gid=1739841741&single=true&output=csv"
        },
        {
            pageName: "Number",
            title: "數字 & 量詞",
            filename: "number.json",
            googleSheetPath: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWFmrxXW_DjZNBJPpXb7Icm_lCpW40O2a_656WyqyJW_spPGLc2ljtxlZ-t3OAD3dFHxRVk5NNRlXY/pub?gid=1121781947&single=true&output=csv"
        },
        {
            pageName: "Date & Time",
            title: "日期 & 時間",
            filename: "datetime.json",
            googleSheetPath: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWFmrxXW_DjZNBJPpXb7Icm_lCpW40O2a_656WyqyJW_spPGLc2ljtxlZ-t3OAD3dFHxRVk5NNRlXY/pub?gid=492040894&single=true&output=csv"
        },
        {
            pageName: "Family",
            title: "家人稱謂",
            filename: "family.json",
            googleSheetPath: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWFmrxXW_DjZNBJPpXb7Icm_lCpW40O2a_656WyqyJW_spPGLc2ljtxlZ-t3OAD3dFHxRVk5NNRlXY/pub?gid=600903448&single=true&output=csv"
        },
        {
            pageName: "Verb",
            title: "動詞",
            filename: "verb.json",
            googleSheetPath: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWFmrxXW_DjZNBJPpXb7Icm_lCpW40O2a_656WyqyJW_spPGLc2ljtxlZ-t3OAD3dFHxRVk5NNRlXY/pub?gid=887139077&single=true&output=csv"
        },
        {
            pageName: "I Adjective",
            title: "い形容詞",
            filename: "i-adjective.json",
            googleSheetPath: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWFmrxXW_DjZNBJPpXb7Icm_lCpW40O2a_656WyqyJW_spPGLc2ljtxlZ-t3OAD3dFHxRVk5NNRlXY/pub?gid=332936593&single=true&output=csv"
        },
        {
            pageName: "Na Adjective",
            title: "な形容詞",
            filename: "na-adjective.json",
            googleSheetPath: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWFmrxXW_DjZNBJPpXb7Icm_lCpW40O2a_656WyqyJW_spPGLc2ljtxlZ-t3OAD3dFHxRVk5NNRlXY/pub?gid=1922793672&single=true&output=csv"
        },
    ]
})

export const getters = {
}

export const mutations = {
    loadSettings(state, payload) {
        if (!state.isSettingsLoaded) state.settings = payload
        state.isSettingsLoaded = true
    },
    toggleShowKanji(state, payload) {
        state.settings.showKanji = !state.settings.showKanji
        localStorage.setItem("settings", JSON.stringify(state.settings))
    },
    updateNumberOfQuestions(state, payload) {
        state.settings.numberOfQuestions = payload
        localStorage.setItem("settings", JSON.stringify(state.settings))
    },
    updatePreferredJapaneseFontFamily(state, payload) {
        state.settings.preferredJapaneseFontFamily = payload
        localStorage.setItem("settings", JSON.stringify(state.settings))
    },
    updatePreferredUITheme(state, payload) {
        state.settings.preferredUITheme = payload
        localStorage.setItem("settings", JSON.stringify(state.settings))
    }
}

export const actions = {
    loadSettingsFromLocalStorage({ commit, dispatch }) {
        const settings = JSON.parse(localStorage.getItem("settings"))
        if (settings) {
            commit("loadSettings", settings)
            dispatch("setUITheme", settings.preferredUITheme || "auto")
        } else {
            dispatch("setUITheme", "auto")
        }
    },
    setUITheme({ state, commit }, newTheme) {
        if (newTheme && newTheme !== state.settings.preferredUITheme) {
            commit("updatePreferredUITheme", newTheme)
        }
        let theme
        newTheme ? theme = newTheme : theme = state.settings.preferredUITheme
        if (theme === "auto") {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.remove("light");
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
                document.documentElement.classList.add("light");
            }
        } else if (theme === "dark") {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        }
    }
}