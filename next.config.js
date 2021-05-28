const withImages = require('next-images')
module.exports = withImages()

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: {
//         test: /\.jsx?$/,
//       },
//       use: ['@svgr/webpack'],
//     });

//     return config;
//   },
// };

// module.exports = {
//   webpack(config) {
//     config.module.rules.push( {
//       test: /\.(jpg|png)$/,
//       use: ['file-loader'],
//     });

//     return config;
//   },
// };