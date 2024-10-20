import {createAsyncThunk} from '@reduxjs/toolkit';
import client from '../../utils/AxiosInterceptor';
import {convertDataToFormData} from '../../utils/Constants';
import {endpoints} from '../../utils/Endpoints';
import {setLoading} from '../slices/OtherSlice';
import {AuthActions} from './AuthActions';

export const MainActions = {
  getNewsFeed: createAsyncThunk(
    'main/post',
    async (data: {page: number; search: string}, thunkApi) => {
      let apiCall = await client.get(
        endpoints.NewsFeed +
          `?page=${data.page}${data.search ? '&search=' + data.search : ''}`,
      );
      return apiCall.data?.response?.data;
    },
  ),
  AddPost: createAsyncThunk('main/addpost', async (data, thunkApi) => {
    thunkApi.dispatch(setLoading(true));
    let formData = convertDataToFormData(data);
    let apiCall = await client.post(endpoints.CreatePost, formData);
    thunkApi.dispatch(MainActions.getNewsFeed({page: 1, search: ''}));
    return apiCall.data?.response?.data;
  }),
  UpdatePostPoll: createAsyncThunk(
    'main/updatepost',
    async (data: {data: any; id: string}, thunkApi) => {
      thunkApi.dispatch(setLoading(true));
      let formData = convertDataToFormData(data.data);
      let apiCall = await client.post(
        endpoints.CreatePost + '/' + data.id,
        formData,
      );
      thunkApi.dispatch(MainActions.getNewsFeed({page: 1, search: ''}));
      thunkApi.dispatch(AuthActions.getMyPolls({page: 1}));
      thunkApi.dispatch(AuthActions.getMyPosts({page: 1}));
      return apiCall.data?.response?.data;
    },
  ),
  ReportPost: createAsyncThunk(
    'main/ReportPost',
    async (data: {post_id: string}, thunkApi) => {
      thunkApi.dispatch(setLoading(true));
      let formData = convertDataToFormData(data);
      let apiCall = await client.post(endpoints.ReportPost, formData);
      thunkApi.dispatch(MainActions.getNewsFeed({page: 1, search: ''}));
      thunkApi.dispatch(AuthActions.getMyPosts({page: 1}));
      return apiCall.data?.response?.data;
    },
  ),
  UpdateExpe: createAsyncThunk(
    'main/updateexp',
    async (data: {data: any; id: string}, thunkApi) => {
      thunkApi.dispatch(setLoading(true));
      let formData = convertDataToFormData(data.data);
      let apiCall = await client.post(
        endpoints.Experiences + '/' + data.id,
        formData,
      );
      thunkApi.dispatch(AuthActions.getMyExperience({page: 1}));
      return apiCall.data?.response?.data;
    },
  ),
  Like: createAsyncThunk('main/likepost', async (data, thunkApi) => {
    let formData = convertDataToFormData(data);
    let apiCall = await client.post(endpoints.Like, formData);
    return apiCall.data?.response?.data;
  }),
  Comment: createAsyncThunk('main/commentpost', async (data, thunkApi) => {
    let formData = convertDataToFormData(data);
    let apiCall = await client.post(endpoints.Comment, formData);
    return apiCall.data?.response?.data;
  }),
  DeletePost: createAsyncThunk(
    'main/DeletePost',
    async (data: {id: string}, thunkApi) => {
      let apiCall = await client.delete(endpoints.GetPost + data.id);
      return apiCall.data?.response?.data;
    },
  ),
  DeleteExperience: createAsyncThunk(
    'main/DeleteExperience',
    async (data: {id: string}, thunkApi) => {
      let formData = new FormData();
      formData.append('_method', 'DELETE');
      let apiCall = await client.delete(endpoints.Experiences + '/' + data.id);
      thunkApi.dispatch(AuthActions.getMyExperience({page: 1}));
      return apiCall.data?.response?.data;
    },
  ),
  getPost: createAsyncThunk(
    'main/getcommentpost',
    async (data: {id: string}, thunkApi) => {
      let apiCall = await client.get(endpoints.GetPost + data?.id);
      return apiCall.data?.response?.data;
    },
  ),
  sharePost: createAsyncThunk('main/sharePost', async (data: any, thunkApi) => {
    let formData = convertDataToFormData(data);
    let apiCall = await client.post(endpoints.SharePost, formData);
    return apiCall.data?.response?.data;
  }),
  addExperience: createAsyncThunk(
    'main/addExperience',
    async (data: any, thunkApi) => {
      thunkApi.dispatch(setLoading(true));
      let formData = convertDataToFormData(data);
      let apiCall = await client.post(endpoints.Experiences, formData);
      thunkApi.dispatch(AuthActions.getMyExperience({page: 1}));
      return apiCall.data?.response?.data;
    },
  ),
  getOthersProfile: createAsyncThunk(
    'main/getOthersProfile',
    async (data: {user_id: string}, thunkApi) => {
      thunkApi.dispatch(setLoading(true));
      let apiCall = await client.get(endpoints.OthersProfile + data.user_id);
      return apiCall.data?.response?.data;
    },
  ),
  createAd: createAsyncThunk('main/createAd', async (data, thunkApi) => {
    thunkApi.dispatch(setLoading(true));
    let formData = convertDataToFormData(data);
    let apiCall = await client.post(endpoints.Ads, formData);
    thunkApi.dispatch(MainActions.getAds());
    return apiCall.data?.response?.data;
  }),
  getAds: createAsyncThunk('main/getAds', async (data, thunkApi) => {
    let apiCall = await client.get(endpoints.Ads);
    return apiCall.data?.response?.data;
  }),
  updateAdsStatus: createAsyncThunk(
    'main/updateAdsStatus',
    async (data, thunkApi) => {
      let formData = convertDataToFormData(data);
      let apiCall = await client.post(endpoints.UpdateAdPrivacy, formData);
      return apiCall.data?.response?.data;
    },
  ),
  calculateAdsRate: createAsyncThunk(
    'main/calculateAdsRate',
    async (data: {days: string}, thunkApi) => {
      let apiCall = await client.get(endpoints.CalculateAdRates + data?.days);
      return apiCall.data?.response?.data;
    },
  ),
};
