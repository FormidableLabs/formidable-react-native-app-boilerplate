##formidable-react-native-app-boilerplate
> React Native / Redux / Babel boilerplate.

#### Features

- Babel/ES2015 support
- ES6 Class support
- Redux with Async actions via `redux-thunk` and console logging via `redux-logger`
- Navigator & NavigationBar
- Android support
- ESLint preconfigured with settings from [eslint-config-defaults](https://github.com/walmartlabs/eslint-config-defaults)
- Flowtype annotations preconfigured

#### Getting Started

- Make sure XCode is installed.

- Install React Native following the instructions detailed here [https://facebook.github.io/react-native/docs/getting-started.html#content](https://facebook.github.io/react-native/docs/getting-started.html#content)

- Clone this repo and then run `npm install`

- Open XCode and open `/ios/App.xcodeproj`

#### Running IOS

Simply run the project in XCode

#### Running Android

From your command line run `react-native run-android`

#### Linting

To lint your code using [ESLint](http://eslint.org/) run `npm run lint`

#### Type Checking

To type check your code using [Flow](flowtype.org), first [install Flow](http://flowtype.org/docs/getting-started.html#_) and then run `npm run flow`

#### Troubleshooting

If you have any trouble with package caching due to `.babelrc`, run `rm -fr $TMPDIR/react-*`