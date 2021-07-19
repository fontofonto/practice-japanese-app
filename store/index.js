export const state = () => ({
    settings: {
        showKanji: false,
        numberOfQuestions: 10,
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
            pageName: "Chapter 11-14 Words",
            title: "第11-14課 詞語",
            filename: "chapter11-14.json"
        },
        {
            pageName: "Chapter 15-18 Words",
            title: "第15-18課 詞語",
            filename: "chapter15-18.json"
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
            pageName: "Adjective",
            title: "い形容詞",
            filename: "i-adjective.json"
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
    }
}

export const actions = {
    loadSettingsFromLocalStorage({ commit }) {
        let settings = JSON.parse(localStorage.getItem("settings"))
        if (settings !== null) {
            commit("loadSettings", settings)
        }
    }
}