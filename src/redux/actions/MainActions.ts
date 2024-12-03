import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../utils/AxiosInterceptor";
import { convertDataToFormData } from "../../utils/Constants";
import { endpoints } from "../../utils/Endpoints";
import { setLoading } from "../slices/OtherSlice";
import { AuthActions } from "./AuthActions";

export const MainActions = {
  GetCategoryData: createAsyncThunk(
    "main/category",
    async ({ id }: { id: string }, thunkApi) => {
      let apiCall = await client.get(endpoints.Category(id));
      return apiCall.data?.response?.data;
    }
  ),
  FilterCategoryDataByTitle: createAsyncThunk(
    "main/category_filter_title",
    async ({ title }: { title: string }, thunkApi) => {
      let apiCall = await client.get(endpoints.FilterCategoryByTitle(title));
      return apiCall.data?.response?.data[0];
    }
  ),
  GetAllCategoryData: createAsyncThunk(
    "main/all_category",
    async (data, thunkApi) => {
      let apiCall = await client.get(endpoints.AllCategory);
      return apiCall.data?.response?.data;
    }
  ),
  GetAllExcerciseCategory: createAsyncThunk(
    "main/GetAllExcerciseCategory",
    async (data, thunkApi) => {
      let apiCall = await client.get(endpoints.ExcerciseCategories);
      return apiCall.data?.response?.data;
    }
  ),
  GetAllExcercises: createAsyncThunk(
    "main/GetAllExcercises",
    async (data, thunkApi) => {
      let apiCall = await client.get(endpoints.ExcerciseCategories);
      return apiCall.data?.response?.data;
    }
  ),
  GetAllAvailableDates: createAsyncThunk(
    "main/GetAllAvailableDates",
    async (data, thunkApi) => {
      let apiCall = await client.get(endpoints.Bookings(data?.date));
      return apiCall.data?.response?.data;
    }
  ),
  GetNotificationsListing: createAsyncThunk(
    "main/GetNotificationsListing",
    async (data, thunkApi) => {
      thunkApi.dispatch(setLoading(true));
      let apiCall = await client.get(endpoints.NotificationsListing);
      thunkApi.dispatch(setLoading(false));
      return apiCall.data?.response?.data;
    }
  ),
  BookSlot: createAsyncThunk("main/BookSlot", async (data, thunkApi) => {
    thunkApi.dispatch(setLoading(true));
    let apiCall = await client.post(endpoints.BookSlot, {
      booking_id: data?.booking_id,
    });
    thunkApi.dispatch(setLoading(false));
    return apiCall.data?.response?.data;
  }),
  DeleteAccount: createAsyncThunk(
    "main/DeleteAccount",
    async (data, thunkApi) => {
      thunkApi.dispatch(setLoading(true));
      let apiCall = await client.post(endpoints.DeleteAccount);
      thunkApi.dispatch(setLoading(false));
      return apiCall.data?.response;
    }
  ),
};
