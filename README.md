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

