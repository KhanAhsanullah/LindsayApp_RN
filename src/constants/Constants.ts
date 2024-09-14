import {ReactNode} from 'react';
import {Dimensions} from 'react-native';
import {SCREENS} from './ScreenNames';
import {navigate} from '../navigation/RootNavigation';
import {IMAGES} from '.';
interface Tab {
  key: number;
  title: string;
  navigateTo: string;
  image: ReactNode;
  imageActive: ReactNode;
  vector: string;
}
const {height, width} = Dimensions.get('screen');

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

const fontRegularName = 'Poppins';

export const theme = {
  font: {
    regular: fontRegularName + '-Regular',
    semibold: fontRegularName + '-SemiBold',
    bold: fontRegularName + '-Bold',
    medium: fontRegularName + '-Medium',
  },
  fontSize: {
    tiny: 8,
    extraVSmall: 10,
    extraSmall12: 12,
    extraSmall: 13,
    small: 14,
    medium: 15,
    regular: 16,
    large: 18,
    large20: 20,
    headingSize: 22,
    large24: 24,
    large26: 26,
    extraLarge: 28,
  },
  color: {
    primary: '#AC73FF',
    primarybeta:'#ACA8FF',
    cyan:'#9DE5FF',
    tgray: '#7C8BA0',
    facebook: '#3A589B',
    apple: '#2E2E2E',
    divider: '#E6E8EE',
    black: '#000',
    white: '#fff',
    messageColor: '#CCFFF0',
    callColor: '#9DE4F6',
    halfWhite: '#F9F9FC',
    descColor:'#8C8C8C',
    inputTypeColor:'#F5F9FE',
  },
};

export const CheckIfValid = (
  index: number,
  isValid: boolean,
  state: boolean[],
  setState: React.Dispatch<React.SetStateAction<boolean[]>>,
) => {
  const copy = [...state];
  copy[index] = isValid;
  setState(copy);
};

export const BOTTOMTABS = [
  {
    key: 0,
    navigateTo: SCREENS.HOME,
    image: IMAGES.avatar,
  },
  {
    key: 1,
    navigateTo: SCREENS.EXERCISE,
    image: IMAGES.car1,
  },
  {
    key: 2,
    navigateTo: SCREENS.ZOOMCALL,
    image: IMAGES.car1,
  },
  {
    key: 3,
    title: "Profile",
    navigateTo: SCREENS.NOTIFICATION,
    image: IMAGES.dummy,
  },
  {
    key: 4,
    title: "Profile",
    navigateTo: SCREENS.PROFILE,
    image: IMAGES.dummy,
  },
];
