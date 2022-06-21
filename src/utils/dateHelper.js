import moment from 'moment';
export const dateFormat = msgDate => {
  const today = moment();
  return moment(msgDate).isSame(today, 'day')
    ? moment(msgDate).format('LT')
    : moment(msgDate).format('L');
};
