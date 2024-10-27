import { createSlice } from '@reduxjs/toolkit'
import { Main } from '../../utils/types'
import { MainActions } from '../actions/MainActions'


const initialState: any = {
    categoryData: [],
    AllCategoryData: []
}

const MainSlice = createSlice({
    name: 'Main',
    initialState,
    reducers: {
        emptyData: (state, action) => {
            state.categoryData = null
        },

    },
    extraReducers: (builder) => {
        builder.addCase(MainActions.GetCategoryData.fulfilled, (state, action) => {
            state.categoryData = action.payload
        })
        builder.addCase(MainActions.FilterCategoryDataByTitle.fulfilled, (state, action) => {
            state.categoryData = action.payload
        })
        builder.addCase(MainActions.GetAllCategoryData.fulfilled, (state, action) => {
            state.AllCategoryData = action.payload
        })

    }
})

export const { emptyData } = MainSlice.actions
export default MainSlice.reducer