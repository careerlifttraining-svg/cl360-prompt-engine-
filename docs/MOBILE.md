# Capacitor Mobile Deployment

CL360 Prompt Engine™ is configured as a Capacitor app for iOS and Android.

## App Identity

- App name: `CL360 Prompt Engine`
- App ID / Bundle ID: `com.careerlift360.cl360promptengine`
- Web build directory: `dist`

## Commands

```bash
npm install
npm run build
npx cap sync
```

Open native projects:

```bash
npx cap open android
npx cap open ios
```

Project scripts are also available:

```bash
npm run mobile:sync
npm run mobile:android
npm run mobile:ios
```

## Android

Requirements:

- Android Studio
- Android SDK
- JDK configured for Android Studio

After `npx cap sync`, open the Android project and build/sign the app in Android Studio.

## iOS

Requirements:

- macOS
- Xcode
- Apple Developer account for device or App Store deployment
- CocoaPods if your native setup requires pod install

After `npx cap sync`, open the iOS project in Xcode, configure signing, then archive for TestFlight or App Store distribution.

## Important Notes

- Keep Stripe secret keys and Supabase service role keys out of the mobile app.
- Only expose public Vite variables in the bundled app.
- Re-run `npm run build` and `npx cap sync` after web changes.
- The PWA service worker is web-focused; native Capacitor apps load the built files through the native WebView.
