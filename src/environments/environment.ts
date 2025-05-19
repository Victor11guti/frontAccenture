// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCagJvSA1rXZf0gut2iS9CjHUVrkomXXVk",
    authDomain: "task-app-83c7c.firebaseapp.com",
    projectId: "task-app-83c7c",
    storageBucket: "task-app-83c7c.appspot.com",
    messagingSenderId: "239189530869",
    appId: "1:239189530869:web:1a088de8e72f216ac14dbc",
    measurementId: "G-B6WV1F2KB9"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
