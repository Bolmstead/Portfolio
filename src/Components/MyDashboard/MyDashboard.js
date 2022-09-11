import { Page, PageContent } from "@containers/layout";
import { Col, Input, Row, Select, Spin, Tabs } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";

import DashboardCalendar from "./DashboardCalendar";
import DashboardGuide from "./DashboardGuide/DashboardGuide";
import DashboardTasks from "./DashboardTasks/DashboardTasks";
import avatarIcon from "/images/white_icons/avatar.png";
import documentsIcon from "/images/white_icons/documents.png";
import testTubeIcon from "/images/white_icons/test-tube.png";
import truckIcon from "/images/white_icons/truck.png";

import AttentionRequired from "@components/AttentionRequired/AttentionRequired";
import RegistrationManagement from "@components/RegistrationManagement/RegistrationManagement";
import { addFMCSADeadlineEvent } from "../../Helpers/addExpirationEvent";

import { users, invoices } from "../../constants";
import "./MyDashboard.less";

const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;

function MyDashboard(props) {
  const { units, invoices } = props;
  console.log("users!!!", users);
  console.log("invoices!!!", invoices);

  const user = JSON.parse(localStorage.getItem("user"));
  const endDate = moment(user.createdAt.split("T").shift()).add(30, "days");
  const current = moment(new Date());
  const duration = moment.duration(endDate.diff(current));
  const remainingDays = Math.floor(duration.asDays());
  const [windowWidth, setWindowWidth] = useState(null);

  let activeEmployeeCount = 0;
  let inactiveEmployeeCount = 0;
  let enrolledEmployeeCount = 0;
  let tractorCount = 0;
  let trailerCount = 0;
  let straightTruckCount = 0;
  let draftDocumentCount = 0;

  // used to determine which tab is shown in Notification Area
  const [currentTab, setCurrentTab] = React.useState("1");
  function switchTabs(key) {
    setCurrentTab(key);
  }
  useEffect(() => {
    async function checkFMCSACalendarEvent() {
      // If logged in user is an admin, update their FMCSA filing date
      // if the current one has passed.
      if (user.userRole === "admin") {
        for (event of user.calendarEvents) {
          if (!event) {
            return;
          }

          if (
            event.title === "FMCSA Filing Date" &&
            new Date(event.end) < new Date()
          ) {
            user.calendarEvents.splice(user.calendarEvents.indexOf(event));
            let newFMCSAFilingEvent = addFMCSADeadlineEvent(user.dotNumber);
            user.calendarEvents.push(newFMCSAFilingEvent[0]);
            let updatedUser = await API.updateUser(user);
            localStorage.setItem("user", JSON.stringify(updatedUser.user));
          }
        }
      }
    }

    checkFMCSACalendarEvent();
  }, []);

  useEffect(() => {
    function handleResize() {
      let width = Math.min(window.innerWidth - 40);
      setWindowWidth(width);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  const subTabs = [
    {
      title: "DASHBOARD",
      active: true,
    },
  ];

  if (users.length > 0) {
    users.forEach((userInfo) => {
      if (userInfo.isEnrolled) {
        enrolledEmployeeCount++;
      }
      if (userInfo.isActive) {
        activeEmployeeCount++;
      } else {
        inactiveEmployeeCount++;
      }

      userInfo.documents.forEach((documentInfo) => {
        if (
          documentInfo.fileType !== "Request" &&
          documentInfo.fileStatus === "DRAFT"
        ) {
          draftDocumentCount++;
        }
      });
    });
  }
  if (units.length > 0) {
    units.forEach((unitInfo) => {
      if (unitInfo.unitType === "Tractor") {
        tractorCount++;
      } else if (unitInfo.unitType === "Trailer") {
        trailerCount++;
      } else if (unitInfo.unitType === "Straight Truck") {
        straightTruckCount++;
      }
    });
  }
  const informationData = [
    {
      title: "ACTIVE EMPLOYEES",
      value: `${activeEmployeeCount}/${inactiveEmployeeCount}`,
      icon: avatarIcon,
    },
    {
      title: "INVENTORY",
      value: `${tractorCount}/${trailerCount}`,
      icon: truckIcon,
    },
    {
      title: "DOCUMENT DRAFTS",
      value: `${draftDocumentCount}`,
      icon: documentsIcon,
    },
    {
      title: "ENROLLED EMPLOYEES",
      value: `${enrolledEmployeeCount}`,
      icon: testTubeIcon,
    },
  ];

  return (
    <Page>
      <PageContent className="dashboard-page">
        <Row gutter={[16, 16]} type="flex">
          <Col xs={{ span: 24, order: 1 }}>
            <DashboardGuide />
          </Col>
          <Col xs={{ span: 24, order: 5 }} xl={{ span: 15, order: 2 }}>
            <div className="main-section">
              {windowWidth < 1160 ? null : (
                <Row gutter={[16, 16]} type="flex" className="information-area">
                  {informationData.map((information) => (
                    <Col xs={24} lg={6} key={information.title}>
                      <div className="information-sections">
                        <div className="icon-section">
                          <img src={information.icon} />
                        </div>
                        <div className="information-section">
                          <div className="title">{information.title}</div>
                          <div className="value">
                            <Spin spinning={false} delay={1000}>
                              {information.value}
                            </Spin>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              )}
              <DashboardCalendar />
            </div>
          </Col>
          <Col
            xs={{ span: 24, order: 2 }}
            xl={{ span: 9, order: 3 }}
            style={{ height: "100%" }}
          >
            <DashboardTasks />
          </Col>
          <Col xs={{ span: 24, order: 3 }} style={{ height: "100%" }}>
            {windowWidth > 1160 ? null : (
              <Row gutter={[16, 16]} type="flex" className="information-area">
                {informationData.map((information) => (
                  <Col xs={24} lg={6} key={information.title}>
                    <div className="information-sections">
                      <div className="icon-section">
                        <img src={information.icon} />
                      </div>
                      <div className="information-section">
                        <div className="title">{information.title}</div>
                        <div className="value">
                          <Spin spinning={false} delay={1000}>
                            {information.value}
                          </Spin>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </Col>

          <Col
            xs={{ span: 24, order: 4 }}
            xl={{ span: 15, order: 4 }}
            style={{ height: "100%" }}
          >
            {users ? (
              <AttentionRequired users={users} invoices={invoices} />
            ) : null}
          </Col>
          <Col
            xs={{ span: 24, order: 6 }}
            xl={{ span: 9, order: 5 }}
            style={{ height: "100%" }}
          >
            <RegistrationManagement />
            {/* <div className="small-tables-area">
            <SmallTable title="DRIVER QUALIFICATIONS" />
            <SmallTable title="COMPANY OPERATIONS" />
          </div> */}
          </Col>

          {/* <div className="recent-inspections-area">
          <RecentInspectionsCitations />
        </div> */}
        </Row>
      </PageContent>
    </Page>
  );
}

export default MyDashboard;
