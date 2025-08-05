import { createSlice } from "@reduxjs/toolkit";
import { Main } from "../../utils/types";
import { MainActions } from "../actions/MainActions";

const initialState: any = {
  categoryData: [],
  AllCategoryData: [],
  ExcerciseCategories: [],
  Diets: {},
  Moods: {},
  subscriptionPackages: [],
  selectedPackageId: null,
};

const MainSlice = createSlice({
  name: "Main",
  initialState,
  reducers: {
    emptyData: (state, action) => {
      state.categoryData = null;
    },
    setSelectedPackageId: (state, action) => {
      state.selectedPackageId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(MainActions.GetCategoryData.fulfilled, (state, action) => {
      state.categoryData = action.payload;
    });
    builder.addCase(
      MainActions.FilterCategoryDataByTitle.fulfilled,
      (state, action) => {
        state.categoryData = action.payload;
      }
    );
    builder.addCase(
      MainActions.GetAllCategoryData.fulfilled,
      (state, action) => {
        state.AllCategoryData = action.payload;
      }
    );
    builder.addCase(
      MainActions.GetAllExcerciseCategory.fulfilled,
      (state, action) => {
        state.ExcerciseCategories = action.payload;
      }
    );
    builder.addCase(MainActions.GetDietService.fulfilled, (state, action) => {
      if (action.payload?.pagination?.current == 1)
        state.Diets = action.payload;
      else {
        state.Diets = {
          ...action.payload,
          data: [...state.Diets?.data, ...action.payload.data],
        };
      }
    });
    builder.addCase(MainActions.GetMoodService.fulfilled, (state, action) => {
      if (action.payload?.pagination?.current == 1)
        state.Moods = action.payload;
      else {
        state.Moods = {
          ...action.payload,
          data: [...state.Moods?.data, ...action.payload.data],
        };
      }
    });
    // Subscription package reducers
    builder.addCase(MainActions.GetSubscriptionPackages.fulfilled, (state, action) => {
      state.subscriptionPackages = action.payload;
    });
  },
});

export const { emptyData, setSelectedPackageId } = MainSlice.actions;
export default MainSlice.reducer;
