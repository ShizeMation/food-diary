import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MainCalendar = props => (
  <div className="main-calendar">
    <Calendar
      selectable
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

export default MainCalendar;
