export const state = () => ({
    version: "1.3.4",
    settings: {
        showKanji: false,
        numberOfQuestions: 10,
        preferredJapaneseFontFamily: 'serif',
    },
    googleSheetId: "1RTGcd08OKuLVU7rqfjr9uBHf9282c5zUiFa3PR6iuSo",
    googleSheetPages: [
        {
            pageName: "Chapter 1-5 Words",
            title: "第1-5課 詞語",
            filename: "chapter1-5.json"
        },
        {
            pageName: "Chapter 6-10 Words",
            title: "第6-10課 詞語",
            filename: "chapter6-10.json"
        },
        {
            pageName: "Chapter 11-15 Words",
            title: "第11-15課 詞語",
            filename: "chapter11-15.json"
        },
        {
            pageName: "Chapter 16-19 Words",
            title: "第16-19課 詞語",
            filename: "chapter16-19.json"
        },
        {
            pageName: "Chapter 20-23 Words",
            title: "第20-23課 詞語",
            filename: "chapter20-23.json"
        },
        {
            pageName: "Number",
            title: "數字 & 量詞",
            filename: "number.json"
        },
        {
            pageName: "Date & Time",
            title: "日期 & 時間",
            filename: "datetime.json"
        },
        {
            pageName: "Family",
            title: "家人稱謂",
            filename: "family.json"
        },
        {
            pageName: "Verb",
            title: "動詞",
            filename: "verb.json"
        },
        {
            pageName: "I Adjective",
            title: "い形容詞",
            filename: "i-adjective.json"
        },
        {
            pageName: "Na Adjective",
            title: "な形容詞",
            filename: "na-adjective.json"
        },
    ]
})

export const getters = {
}

export const mutations = {
    loadSettings(state, payload) {
        state.settings = payload
    },
    toggleShowKanji(state, payload) {
        state.settings.showKanji = payload
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
}

export const actions = {
    loadSettingsFromLocalStorage({ commit }) {
        let settings = JSON.parse(localStorage.getItem("settings"))
        if (settings !== null) {
            commit("loadSettings", settings)
        }
    }
}