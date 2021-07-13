export const state = () => ({
    settings: {
        showKanji: false,
    },
    googleSheetId: "1RTGcd08OKuLVU7rqfjr9uBHf9282c5zUiFa3PR6iuSo",
    googleSheetPages: [
        {
            pageName: "Chapter 1-5 Words",
            title: "第1-5課 詞語"
        },
        {
            pageName: "Chapter 6-10 Words",
            title: "第6-10課 詞語"
        },
        {
            pageName: "Chapter 11-14 Words",
            title: "第11-14課 詞語"
        },
        {
            pageName: "Number",
            title: "數字 & 量詞"
        },
        {
            pageName: "Date & Time",
            title: "日期 & 時間"
        },
        {
            pageName: "Family",
            title: "家人稱謂"
        },
        {
            pageName: "Verb",
            title: "動詞"
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