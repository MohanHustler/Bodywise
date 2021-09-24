import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
import CONFIG_CONSTANTS from "./../../constants/apiList";
import { addAppointment } from "./../../redux/actions/addAppointmentAction";
import { connect } from "react-redux";

import styles from "./appointmentScheduler.module.scss";
export class AppointmentScheduler extends Component {
  state = {
    nextTwelveDays: [],
    nextTwelveDaysSlots: [],
    currentSlotsList: [],
    selectedDate: "",
    selectedSlot: "",
  };

  componentDidMount() {
    let today = new Date();
    let twelveDays = this.loadNext12Days(today);
    this.setState({ nextTwelveDays: twelveDays }, () => {
      this.loadSlots();
    });
  }

  loadNext12Days = (today) => {
    let twelveDays = [];
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    for (let i = 0; i < 12; i++) {
      let d = new Date();
      d.setDate(today.getDate() + i);
      twelveDays[i] = d.toLocaleDateString("en-GB", options);
    }
    return twelveDays;
  };

  dateSortFunc = (a, b) => {
    return new Date(b) - new Date(a);
  };

  loadSlots() {
    var data = {
      date_range: this.state.nextTwelveDays,
      slot_time_period: "10",
      slot_length: "30",
      category: ["is_sh"],
    };
    axios.post(CONFIG_CONSTANTS.url.AVAILABLE_SLOTS, data).then((resp) => {
      this.setState({ nextTwelveDaysSlots: resp.data });
    });
  }

  handleDateSelect = (dateIndex) => {
    this.setState({
      selectedDate: this.state.nextTwelveDays[dateIndex],
      selectedSlot: "",
      currentSlotsList: this.state.nextTwelveDaysSlots[
        this.state.nextTwelveDays[dateIndex]
      ],
    });
  };

  handleSlotSelect = (slotIndex) => {
    this.setState(
      { selectedSlot: this.state.currentSlotsList[slotIndex] },
      () => {
        this.props.addAppointment({
          date: this.state.selectedDate,
          slot: this.state.selectedSlot,
        });
      }
    );
  };

  render() {
    return (
      <div data-test="as-container" className={styles["as-box"]}>
        <div className={styles.notice}>
          Your order contains some product(s) that require a prescription. In
          case the doctor finds it unsuitable for you, the order will be shipped
          without that product and apporpriate refund will be processed.
        </div>
        <div className={styles["help-title"]}>
          Need help with this order? Contact us
        </div>
        <div className={styles.info}>
          <h5>Schedule a free doctor appointment</h5>
          <div className={styles.sub}>
            Our doctors will call you at your selected date and time
          </div>
        </div>
        <div className="date-box">
          <div className="inp-title">Select Date</div>
          <div className="val">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {this.state.selectedDate
                  ? this.state.selectedDate
                  : "Select Date"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {this.state.nextTwelveDays.map((elem, index) => (
                  <Dropdown.Item
                    as="button"
                    onClick={() => this.handleDateSelect(index)}
                    key={index}
                  >
                    {elem}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        {this.state.selectedDate && (
          <div className="date-box">
            <div className="inp-title">Select Slot</div>
            <div className="val">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {this.state.selectedSlot
                    ? this.state.selectedSlot
                    : "Select Slot"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {this.state.currentSlotsList.map((elem, index) => (
                    <Dropdown.Item
                      as="button"
                      onClick={() => this.handleSlotSelect(index)}
                      key={index}
                    >
                      {elem}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapPropstoState = (state) => ({
  appointmentProps: state.appointmentStore,
});

export default connect(mapPropstoState, { addAppointment })(
  AppointmentScheduler
);
