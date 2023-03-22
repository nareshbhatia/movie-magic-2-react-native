# Movie Magic 2 (with React Native)

A sample application to demonstrate the use of basic UI components such as
buttons, forms and lists.

### Home Page

<img src="docs/home.jpg" alt="Home Page" width="256" />

### Sign In Form

<img src="docs/signin.jpg" alt="Sign In Form" width="256" />

### Top 10 Movies

<img src="docs/top-10-movies.jpg" alt="Top 10 Movies" width="256" />

## Building Movie Magic 2

Make sure that React Native is correctly installed (see
[React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup)).

Also, make sure that the iOS Simulator is running.

Now follow these steps:

```shell
yarn
yarn pod-install  # pod install with RCT_NEW_ARCH_ENABLED=1
npx react-native run-ios

# To run on a real iOS device, attach an iPhone to your machine using a USB cable.
# Open the project in Xcode (ReactNativeDemo/ios/ReactNativeDemo.xcworkspace)
# Under "Signing and Capabilities" tab, select your Apple Developer account in the "Team" Field.
# (Do this for both targets: MovieMagic & MovieMagicTests)
# Now execute the following command:
npx react-native run-ios --device
```
