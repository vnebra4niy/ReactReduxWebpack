const SET_REPOS = "SET_REPOS"
const SET_IS_FETCHING="SET_IS_FETCHING"
const CURRENT_PAGE="CURRENT_PAGE"
const SET_FETCH_ERROR="SET_FETCH_ERROR"

const defaultState = {
    items: [],
    isFetching: true,
    currentPage : 1,
    perPage: 10,
    totalCount: 0,
    isFetchError: false
}


export default function reposReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.total_count,
                isFetching: false
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.total_count,
                isFetching: false
            }
        case SET_FETCH_ERROR:
            return {
                ...state,
                isFetchError: action.payload
            }
        default:
            return state
    }
}

export const setRepos = (repos) => ({type:SET_REPOS, payload:repos})
export const setIsFetching = (bool) => ({type:SET_IS_FETCHING, payload:bool})
export const setCurrentPage = (page) => ({type:CURRENT_PAGE, payload:page})
export const setFetchError = (bool) => ({type:SET_FETCH_ERROR, payload:bool})