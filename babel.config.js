module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        root: ['.'],
        alias: {
          Utils: ['./src/utils'],
          Hooks: ['./src/hooks'],
          Types: ['./src/types'],
          Theme: ['./src/theme'],
          Models: ['./src/models'],
          Assets: ['./src/assets'],
          Screens: ['./src/screens'],
          Locales: ['./src/locales'],
          Constants: ['./src/constants'],
          Providers: ['./src/providers'],
          Components: ['./src/components'],
          Navigation: ['./src/navigators'],
          ReactQuery: ['./src/react_query'],
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
