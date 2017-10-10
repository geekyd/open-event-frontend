import { Factory } from 'ember-cli-mirage';
import moment from 'moment';

const detectedTimezone = moment.tz.guess();
export default Factory.extend({
  name(i) {
    return `Event ${i}`;
  },
  age      : 28,
  admin    : false,
  startsAt : moment.tz(detectedTimezone).add(1, 'months').startOf('day'),
  endsAt   : moment.tz(detectedTimezone).add(1, 'months').hour(17).minute(0)
});
