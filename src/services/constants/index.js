import { Dimensions } from "react-native"
const { width, height } = Dimensions.get('window');

export const storageKey = {}

export const routes = {
    auth: 'auth',
    tab: 'tabNavigator',
    drawer: 'drawer',
    app: 'app',
    splash: 'splash',
    selectAccount: 'selectAccount',
    login: 'login',
    signup: 'signup',
    dashboard: 'dashboard',
    favorite: 'favorite',
    profile: 'profile',
}

export const loaderStyles = {
    CircleFlip: 'CircleFlip',
    Bounce: 'Bounce',
    Wave: 'Wave',
    WanderingCubes: 'WanderingCubes',
    Pulse: 'Pulse',
    ChasingDots: 'ChasingDots',
    ThreeBounce: 'ThreeBounce',
    Circle: 'Circle',
    CubeGrid: '9CubeGrid',
    WordPress: 'WordPress',
    FadingCircle: 'FadingCircle',
    FadingCircleAlt: 'FadingCircleAlt',
    Arc: 'Arc',
}


export const wp = (p) => width * (p / 100);
export const hp = (p) => height * (p / 100);
