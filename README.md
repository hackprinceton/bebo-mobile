# bebo-mobile
[WIP] HackPrinceton's Day-Of Mobile App. This app uses React Native, Redux, and Expo

## Installation
```
npm install -g react-native-cli
npm install
```
Start the debug server with `npm start`.

## Android
To run with an emulator:
Install the Android Development Toolkit (https://developer.android.com/studio/install.html).
Start the emulator.
```
cd [path to Android directory]/sdk/tools
emulator -list-avds
emulator @Avd_name
```
You can see what avds you have available by using the `-list-avds` option. You may also connect an Android phone to your computer if you do not wish to use an emulator. Run the app with `npm run android`.

Alternatively, install expo on your Android app, then type `npm run android` and use Expo to read the QR code that appears.

To see debug output use `react-native log-android`

## iOS
Be sure to have XCode installed.
Run with `npm run ios` while an iOS emulator is running, or install Expo on an iOS app and use it to read the QR code that appears.
To see debug output use `react-native log-ios`.