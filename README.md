Smart Delivery App - Customer (Expo scaffold)
----------------------------------------------
This is a minimal Expo React Native scaffold for the *customer* side of Smart Delivery App.
It includes basic screens: Auth, Home, Request Delivery, Tracking, Profile.

How to run
1. Install Expo CLI (if you don't have it):
   npm install -g expo-cli

2. Clone or download this project and install dependencies:
   npm install

3. Run with Expo:
   npm start
   Then open with Expo Go (scan QR) or run on simulator:
   npm run android
   npm run ios

Notes
- This scaffold uses react-navigation and expo-location; you'll need to run the appropriate installation steps for native packages (see README sections below).
- For maps, install `react-native-maps` with the package instructions for Expo.

Suggested package installs (run inside project):
  npx expo install expo-location expo-status-bar react-native-safe-area-context react-native-screens react-native-gesture-handler
  npm install @react-navigation/native @react-navigation/native-stack react-native-maps

Figma / UI design
- Included in /assets/design-mockups as PNGs (simple mockups). Import them into Figma as a starting point.
- I recommend you open these images in Figma and re-create components or use them as references.

Project structure
- App.js                -> entry (navigation + context)
- /screens              -> screen components (Home, Request, Tracking, Login, Register, Profile)
- /components           -> small reusable components
- /utils                -> helper API stubs
- /assets               -> images and mockups

Next steps
- Hook up real backend endpoints (auth, deliveries, tracking)
- Replace map placeholders with react-native-maps and a routing backend
- Implement secure payments (Stripe, Paystack, Flutterwave, etc.)

If you want, I can:
- Expand the courier matching algorithm
- Add more complete UI components (with Tailwind-like styling)
- Generate a Figma starter file (JSON specification) or detailed component library
