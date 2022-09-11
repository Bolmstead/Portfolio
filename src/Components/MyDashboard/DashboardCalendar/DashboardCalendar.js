import React, { Fragment } from 'react';
import './DashboardCalendar.less';
import { Input, Modal, Button, Row, Checkbox, Select, TimePicker } from 'antd';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import API from '@utils/api';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import exclamationIcon from '@assets/images/dashboard/exclamation.png';
import alarmIcon from '@assets/images/dashboard/alarm.png';
import documentIcon from '@assets/images/dashboard/document.png';
import bellIcon from '@assets/images/dashboard/bell.png';
import { addFMCSADeadlineEvent } from '../../utils/addExpirationEvent';

const { Search, TextArea } = Input;
const { Option } = Select;

const user = JSON.parse(localStorage.getItem('user'));

class DashboardCalendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      eventColors: [
        '#00C0EF',
        '#0073B7',
        '#3C8DBC',
        '#39CCCC',
        '#F39C12',
        '#FF851B',
        '#00A65A',
        '#01FF70',
        '#DD4B39',
        '#605CA8',
        '#F012BE',
        '#777777',
        '#001F3F'
      ],
      selectedColor: '#00C0EF',
      clickedEvent: null,
      receivedEvent: null,
      visibleModal: false,
      eventName: '',
      start: moment('00:00', 'h:mm A'),
      end: moment('23:59', 'h:mm A'),
      notes: '',
      reminder: '12hours'
    };
  }

  async componentDidMount() {
    let draggableEl = document.getElementById('external-events');
    new Draggable(draggableEl, {
      itemSelector: '.fc-event',
      eventData: function(eventEl) {
        const title = eventEl.getAttribute('title');
        const id = eventEl.getAttribute('data');
        const backgroundColor = eventEl.getAttribute('datacolor');
        return {
          title,
          id,
          backgroundColor
        };
      }
    });
  }

  loadEvents = () => {
    const { events } = this.state;
    const storedEvents = [...events];
    user.calendarEvents.map(event => {
      if (!user.calendarEvents || !event) {
        return;
      } else {
        storedEvents.push({
          id: event.id,
          title: event.title,
          color: event.backgroundColor,
          start: event.start,
          end: event.end
        });
        this.setState({ events: storedEvents });
      }
    });
  };

  addEvent = value => {
    const { selectedColor, events } = this.state;
    const newEvents = [...events];
    if (selectedColor !== '' && value !== '') {
      newEvents.push({
        title: value,
        id: value,
        color: selectedColor
      });
      this.setState({ events: newEvents });
    }
  };

  eventReceive = async info => {
    const user = JSON.parse(localStorage.getItem('user'));
    const updatedUser = { ...user };
    const { event } = info;
    const newEvent = {
      id: event.id,
      title: event.title,
      backgroundColor: event.backgroundColor,
      start: event.start,
      end: event.end
    };
    if (!updatedUser.calendarEvents) {
      updatedUser.calendarEvents = [];
    }
    updatedUser.calendarEvents.push(newEvent);
    const userData = await API.updateUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(userData.user));

    const { events } = this.state;
    const updatedEvents = [...events].filter(
      eventInfo => eventInfo.id != event.id
    );
    this.setState({ events: updatedEvents, receivedEvent: newEvent });
  };

  eventResize = async info => {
    const user = JSON.parse(localStorage.getItem('user'));
    const updatedUser = { ...user };
    const { event } = info;
    const newEvent = {
      id: event.id,
      title: event.title,
      backgroundColor: event.backgroundColor,
      start: event.start,
      end: event.end
    };
    const eventIndex = updatedUser.calendarEvents.findIndex(
      eventInfo => eventInfo.id === event.id
    );
    updatedUser.calendarEvents[eventIndex] = newEvent;
  };

  drop = async info => {
    const user = JSON.parse(localStorage.getItem('user'));
    const updatedUser = { ...user };
    const { event } = info;
    const newEvent = {
      id: event.id,
      title: event.title,
      backgroundColor: event.backgroundColor,
      start: event.start,
      end: event.end
    };
    const eventIndex = updatedUser.calendarEvents.findIndex(
      eventInfo => eventInfo.id === event.id
    );
    updatedUser.calendarEvents[eventIndex] = newEvent;
    const userData = await API.updateUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(userData.user));
  };

  handleEventClick = ({ event }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const calendarEvent = user.calendarEvents.find(
      eventInfo => eventInfo.id === event.id
    );

    this.setState({
      clickedEvent: calendarEvent,
      visibleModal: true,
      eventName: event.title
    });

    if (calendarEvent.startTime) {
      const { startTime, endTime, notes, reminder } = calendarEvent;
      this.setState({
        startTime: moment(moment(startTime).format('h:mm A'), 'h:mm A'),
        endTime: moment(moment(endTime).format('h:mm A'), 'h:mm A'),
        notes,
        reminder
      });
    }
  };

  handleCancel = () => {
    this.setState({ visibleModal: false });
  };

  handleEventName = e => {
    this.setState({ eventName: e.target.value });
  };

  handleStartTime = (time, timeString) => {
    this.setState({ startTime: time });
  };

  handleEndTime = (time, timeString) => {
    this.setState({ endTime: time });
  };

  handleNotes = e => {
    this.setState({ notes: e.target.value });
  };

  handleReminder = value => {
    this.setState({ reminder: value });
  };

  handleAllDay = e => {
    if (e.target.checked) {
      this.setState({
        startTime: moment('00:00', 'h:mm A'),
        endTime: moment('23:59', 'h:mm A')
      });
    }
  };

  handleEditEvent = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const updatedUser = { ...user };
    const {
      clickedEvent,
      eventName,
      startTime,
      endTime,
      notes,
      reminder
    } = this.state;

    const newEvent = {
      id: clickedEvent.id,
      title: eventName,
      backgroundColor: clickedEvent.backgroundColor,
      start: clickedEvent.start,
      end: clickedEvent.end,
      notes,
      reminder
    };
    const eventIndex = updatedUser.calendarEvents.findIndex(
      eventInfo => eventInfo.id === clickedEvent.id
    );
    updatedUser.calendarEvents[eventIndex] = newEvent;
    const userData = await API.updateUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(userData.user));
    this.setState({ visibleModal: false });
  };

  handleDeleteEvent = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const updatedUser = { ...user };
    const { clickedEvent } = this.state;
    const calendarEvents = updatedUser.calendarEvents.filter(
      calendarEvent => calendarEvent.id !== clickedEvent.id
    );
    updatedUser.calendarEvents = calendarEvents;
    const userData = await API.updateUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(userData.user));
    this.setState({ visibleModal: false });
  };

  render() {
    const { receivedEvent } = this.state;
    const user = JSON.parse(localStorage.getItem('user'));
    const { calendarEvents } = { ...user };
    const filteredCalendarEvents = receivedEvent
      ? calendarEvents.filter(
          calendarEvent => calendarEvent.id !== receivedEvent.id
        )
      : calendarEvents;
    const events = filteredCalendarEvents.map(event => {
      event.start = new Date(event.start);
      event.durationEditable = true;
      if (event.end) {
        event.end = new Date(event.end);
      }
      return event;
    });
    return (
      <div className="dashboard-calendar">
        <div className="events">
          <div id="external-events">
            <p>Draggable Events</p>
            {this.state.events.map(event => (
              <div
                className="fc-event"
                title={event.title}
                data={event.id}
                datacolor={event.color}
                key={event.id}
                style={{ background: event.color }}
              >
                {event.title}
              </div>
            ))}
          </div>
          <div className="add-events">
            <p>Create Event</p>
            <div className="colors">
              {this.state.eventColors.map(color => (
                <div
                  className="event-color"
                  key={color}
                  style={{ background: color }}
                  color={color}
                  onClick={() => this.setState({ selectedColor: color })}
                />
              ))}
            </div>
            <div className="add-event">
              <Search
                placeholder="Event Title"
                enterButton="Add"
                onSearch={value => this.addEvent(value)}
              />
            </div>
          </div>
        </div>
        <div className="calendar" id="dashboard_calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth, timeGridWeek, timeGridDay, listWeek'
            }}
            eventDurationEditable={true}
            eventResizableFromStart={true}
            eventResourceEditable={true}
            events={events}
            eventClick={this.handleEventClick}
            rerenderDelay={10}
            editable={true}
            droppable={true}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            eventDrop={this.drop}
            eventReceive={this.eventReceive}
            eventResize={this.eventResize}
          />
        </div>
        <Modal
          className="edit-event"
          title="Calendar"
          visible={this.state.visibleModal}
          onCancel={this.handleCancel}
          footer={[
            <Button key="DELETE" onClick={this.handleDeleteEvent} type="danger">
              DELETE
            </Button>,
            <Button key="CANCEL" onClick={this.handleCancel} type="primary">
              CANCEL
            </Button>,
            <Button key="SAVE" onClick={this.handleEditEvent} type="primary">
              SAVE
            </Button>
          ]}
        >
          <Row type="flex" className="edit-row checkbox">
            <Checkbox onChange={this.handleAllDay}>All Day</Checkbox>
          </Row>
          <Row type="flex" className="edit-row">
            <img src={exclamationIcon} />
            <Input
              placeholder="Event Name"
              value={this.state.eventName}
              onChange={this.handleEventName}
            />
          </Row>
          <Row type="flex" className="edit-row">
            <img src={alarmIcon} />
            <TimePicker
              format="h:mm A"
              use12Hours
              value={this.state.startTime}
              onChange={this.handleStartTime}
            />
            <div className="span to">to</div>
            <TimePicker
              format="h:mm A"
              use12Hours
              value={this.state.endTime}
              onChange={this.handleEndTime}
            />
          </Row>
          <Row type="flex" className="edit-row">
            <img src={documentIcon} />
            <TextArea
              rows={4}
              placeholder="Notes"
              value={this.state.notes}
              onChange={this.handleNotes}
            />
          </Row>
          <Row type="flex" className="edit-row">
            <img src={bellIcon} />
            <div className="span">Send Reminder: </div>
            <Select value={this.state.reminder} onChange={this.handleReminder}>
              <Option value="12hours">12 Hours before</Option>
              <Option value="1day">1 Day before</Option>
              <Option value="1week">1 Week before</Option>
            </Select>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default DashboardCalendar;
