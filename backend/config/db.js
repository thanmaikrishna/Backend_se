// module.exports = {
//   mongoURI: 'mongodb://localhost:27017/video-annotation-app',
// };
require('dotenv').config();
module.exports = {
  mongoURI: process.env.MONGO_URI,
};
