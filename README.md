# hp-dayof-mobile
[WIP] HackPrinceton Day-Of Mobile App using React Native

## Installation
```
npm install -g react-native-cli
npm install
```
Start the debug server with `npm start`.

## Android
Install the Android Development Toolkit (https://developer.android.com/studio/install.html).
Start the emulator.
```
cd [path to Android directory]/sdk/tools
emulator -list-avds
emulator @Avd_name
```
You can see what avds you have available by using the `-list-avds` option. You may also connect an Android phone to your computer if you do not wish to use an emulator. Run the app with `npm run android`.

To see debug output use `react-native log-android`

## iOS
The iOS version of the app has not been tested yet, but the command to run the application is `react-native run-ios`.
To see debug output use `react-native log-ios`.
