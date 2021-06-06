// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'en-US',
    antd: false,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    // {
    //   path: '/user',
    //   component: '../layouts/UserLayout',
    //   routes: [
    //     {
    //       name: 'login',
    //       path: '/user/login',
    //       component: './user/login',
    //     },
    //     {
    //       name: 'signup',
    //       path: '/user/signup',
    //       component: './user/signup',
    //     },
    //     {
    //       name: 'inviteUser',
    //       path: '/user/forgotpassword',
    //       component: './user/ForgotPassword',
    //     },
    //     {
    //       name: 'resetPassword',
    //       path: '/user/resetpassword',
    //       component: './user/ResetPassword',
    //     },
    //     {
    //       name: 'inviteUser',
    //       path: '/user/invitedUserLogin',
    //       component: './user/acceptInvitation',
    //     },
    //   ],
    // },
    // {
    //   path: '/privacy-policy',
    //   name: 'privacyPolicy',
    //   component: './Policy',
    // },
    // {
    //   path: '/',
    //   component: '../layouts/UserLayout',
    //   // component: '../layouts/SecurityLayout',
    //   routes: [
    //     {
    //       path: '/',
    //       // component: '../layouts/BasicLayout',
    //       routes: [
    //         {
    //           path: '/',
    //           redirect: '/home',
    //         },
    //         {
    //           path: '/home',
    //           name: 'home',
    //           component: '../layouts/LayoutPro',
    //           routes: [
    //             {
    //               path: '/home',
    //               component: './Home',
    //             },
    //           ],
    //         },
    //         // {
    //         //   path: '/profile',
    //         //   name: 'profile',
    //         //   component: '../layouts/LayoutPro',
    //         //   // component: '../layouts/SecurityLayout',
    //         //   routes: [
    //         //     {
    //         //       path: '/profile',
    //         //       component: './Profile',
    //         //     },
    //         //   ],
    //         // },
    //         // {
    //         //   path: '/user-profile',
    //         //   name: 'user-profile',
    //         //   component: './UserProfile',
    //         //   hideInMenu: true,
    //         // },
    //         {
    //           component: './404',
    //         },
    //       ],
    //     },
    //     {
    //       component: './404',
    //     },
    //   ],
    // },
    // {
    //   component: './404',
    // },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  // theme: {
  //   // ...darkTheme,
  //   'primary-color': defaultSettings.primaryColor,
  // },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
