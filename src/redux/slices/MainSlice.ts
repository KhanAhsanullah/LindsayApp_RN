import { createSlice } from '@reduxjs/toolkit'
import { Main } from '../../utils/types'
import { MainActions } from '../actions/MainActions'


const initialState: Main = {
    newsFeed: null,
    othersProfile: null,
    ads: []
}

const MainSlice = createSlice({
    name: 'Main',
    initialState,
    reducers: {
        emptyData: (state, action) => {
            state.newsFeed = null
            state.othersProfile = null
            state.ads = []
        },
        deletePost: (state, action) => {
            if (state.newsFeed?.data?.length > 0) {
                let data = [...state.newsFeed?.data]
                let index = data.findIndex((v) => v.id == action.payload)
                if (index > -1) {
                    data.splice(index, 1)
                    state.newsFeed = {
                        ...state.newsFeed,
                        data
                    }
                }
            }
        },
        deletePoll: (state, action) => {
            if (state.newsFeed?.data?.length > 0) {
                let data = [...state.newsFeed?.data]
                let index = data.findIndex((v) => v.id == action.payload)
                if (index > -1) {
                    data.splice(index, 1)
                    state.newsFeed = {
                        ...state.newsFeed,
                        data
                    }
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(MainActions.getNewsFeed.fulfilled, (state, action) => {
            if (action.payload.current_page == 1) {
                state.newsFeed = action.payload
            }
            else {
                state.newsFeed = {
                    ...action.payload,
                    data: [...state.newsFeed?.data, ...action.payload.data]
                }
            }
        })

        builder.addCase(MainActions.getOthersProfile.fulfilled, (state, action) => {
            state.othersProfile = action.payload
        })

        builder.addCase(MainActions.getAds.fulfilled, (state, action) => {
            state.ads = action.payload
        })

    }
})

export const { deletePost, deletePoll, emptyData } = MainSlice.actions
export default MainSlice.reducer