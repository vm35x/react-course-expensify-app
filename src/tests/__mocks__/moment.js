// import moment from 'moment'; // cant use non mock version
const moment = require.requireActual('moment')

export default (timestamp = 0) => {
  return moment(timestamp);
};
