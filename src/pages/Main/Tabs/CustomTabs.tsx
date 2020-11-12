import React, {FC, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ControlledTooltips from '../../../shared/components/Tooltip';
import {Avatar, Chip} from '@material-ui/core';
import {AvatarGroup} from '@material-ui/lab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}>
      {value === index && <div className="tab-content">{children}</div>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const CustomTabs: FC = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number,
  ): void => {
    setValue(newValue);
  };

  return (
    <div className="tabs-holder">
      <AppBar position="static" className="custom-tabs">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example">
          <Tab
            label={
              <div className="tab-heading">
                <span className="subheading">
                  Pageviews <ControlledTooltips />
                </span>
                <p>
                  <img src="./images/vector.svg" alt="" />
                  223.5k
                </p>
                <Chip label="+15%" className="custom-chip success" />
              </div>
            }
            {...a11yProps(0)}
          />
          <Tab
            disabled
            label={
              <div className="tab-heading">
                <span className="subheading">
                  Unique Users <ControlledTooltips />
                </span>
                <p>
                  <img src="./images/vector.svg" alt="" />
                  223.5k
                </p>
                <Chip label="+15%" className="custom-chip error" />
              </div>
            }
            {...a11yProps(1)}
          />
          <Tab
            disabled
            label={
              <div className="tab-heading">
                <span className="subheading">
                  Average visit time <ControlledTooltips />
                </span>
                <p>
                  <img src="./images/vector.svg" alt="" />
                  223.5k
                </p>
                <Chip label="+15%" className="custom-chip success" />
              </div>
            }
            {...a11yProps(2)}
          />
          <Tab
            disabled
            label={
              <div className="tab-heading">
                <span className="subheading">
                  Bounce Rate <ControlledTooltips />
                </span>
                <p>
                  <img src="./images/vector.svg" alt="" />
                  223.5k
                </p>
                <Chip label="+15%" className="custom-chip success" />
              </div>
            }
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="column-layout">
          <div className="statistic-col">
            <div className="data-row">
              <div className="data-name">
                <AvatarGroup max={2}>
                  <Avatar className="avatar-orange">GL</Avatar>
                  <Avatar className="avatar-light-green">
                    <img src="./images/growth.svg" alt="" />
                  </Avatar>
                </AvatarGroup>
              </div>
              <span className="data-value">20,748</span>
            </div>
            <div className="data-row">
              <div className="data-name">
                <AvatarGroup max={2}>
                  <Avatar className="avatar-blue">DS</Avatar>
                  <Avatar className="avatar-light-yellow">
                    <img src="./images/like.png" alt="" />
                  </Avatar>
                </AvatarGroup>
              </div>
              <span className="data-value">20,748</span>
            </div>
            <div className="data-row">
              <div className="data-name">
                <AvatarGroup max={2}>
                  <Avatar className="avatar-orange">Gl</Avatar>
                  <Avatar className="avatar-light-green">
                    <img src="./images/growth.svg" alt="" />
                  </Avatar>
                </AvatarGroup>
              </div>
              <span className="data-value">20,748</span>
            </div>
            <div className="data-row">
              <div className="data-name">
                <AvatarGroup max={2}>
                  <Avatar className="avatar-green">Dk</Avatar>
                  <Avatar className="avatar-light-yellow">
                    <img src="./images/fire.png" alt="" />
                  </Avatar>
                </AvatarGroup>
              </div>
              <span className="data-value">20,748</span>
            </div>
            <div className="data-row">
              <div className="data-name">
                <AvatarGroup max={2}>
                  <Avatar className="avatar-blue">DS</Avatar>
                  <Avatar className="avatar-light-yellow">
                    <img src="./images/unlike.png" alt="" />
                  </Avatar>
                </AvatarGroup>
              </div>
              <span className="data-value">20,748</span>
            </div>
            <div className="data-row">
              <div className="data-name">
                <AvatarGroup max={2}>
                  <Avatar className="avatar-gray">Nb</Avatar>
                  <Avatar className="avatar-light-green">
                    <img src="./images/growth.svg" alt="" />
                  </Avatar>
                </AvatarGroup>
              </div>
              <span className="data-value">20,748</span>
            </div>
          </div>
          <div className="chart-col">chart</div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
};

export default CustomTabs;
