// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyD4iB6vDydo-En0bbAS4C5fPwXeiNdzRqM",
    authDomain: "comedor-n.firebaseapp.com",
    databaseURL: "https://comedor-n.firebaseio.com",
    projectId: "comedor-n",
    storageBucket: "comedor-n.appspot.com",
    messagingSenderId: "143253782132"
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
