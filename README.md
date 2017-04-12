# ion-simpleauth

Ionic 2 & 3 example project how to use auth0 and to save the access token with Ionic Storage. 

- Login Page
- Profile Page (auth0 user details) 

If there is an access token the login will skipped and profile page will be shown. If there is no access token stored, login page will shown.

## steps

    ionic start ion-simpleauth tabs --v2

    # --- commit ---

    ionic g page login
    ionic g page profile
    # update app.components.ts
    # update app.module.ts
    # update tabs to contain profile and about
    # minor update of about

    # --- commit ---

    ionic g provider user
    ionic g provider auth
    # create config/auth0.ts, see auth.example.ts
    # update app.module.ts to import angular/httpModule (was missing, a Ionic 3 thing?)
    # update login.ts to use User provider
    # update profile.ts to use User provider

    # --- commit ---

    # update `app.module.ts` to import 'IonicStorageModule.forRoot()'
    # update `user.ts` to persist and load token using Storage
    # update `profile.ts` to remove token when logout or getting http 401
    # update `app.component.ts` to load token from Storage and switch to Login or Profile Page

    # --- commit ---

## auth0 config

auth0 is used to authenticate the user. Therefore you have to provide the domain, client id. See `src/config/auth0.example.ts` and save as `src/config/auth0.ts`

    export class Auth0Config {
        static AUTH0_DOMAIN = "https://<YOUR-DOMAIN>.eu.auth0.com";
        static AUTH0_CLIENTID = "<YOUR-CLIENTID>";
        static AUTH0_CONNECTION = "Username-Password-Authentication";
    };

in auth0 you have to setup a client (e.g. native app for this ionic app). 
The connection using 'Username-Password-Authentication' database should be activated by default.

In the section 'Connections > Database' you can use 'Try' to register a user.

## run

**install**

    git clone
    npm install

**run in browser**

    ionic serve

**run on ios**

    ionic platform add ios
    ionic run ios

**run on android**

    ionic platform add android
    ionic run android

