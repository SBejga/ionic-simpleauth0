# ion-simpleauth

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