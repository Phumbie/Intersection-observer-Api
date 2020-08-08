
export const state = () => ({
    isOpen: false
})

export const mutations = {
    toggleSideBar (state) {
        state.isOpen = !state.isOpen
    }
}

export const getters = {
    getDrawerState(state) {
        return state.isOpen
    }
}