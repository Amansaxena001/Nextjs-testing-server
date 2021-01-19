import React, { useState } from "react";
import { Layout, Menu, Input, Select, Tabs, Divider, Checkbox } from "antd";
import styles from "./programs.module.scss";
import {
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarsOutlined,
  MailOutlined,
  BellOutlined,
  CloseOutlined,
  HomeFilled,
  SearchOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

export default function MyPrograms() {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  const toggle = () => {
    setCollapse(!collapse);
  };
  const selectBefore = (
    <Select defaultValue="All" className={styles.selectBefore}>
      <Option value="All">All</Option>
      <Option value="#">Programs</Option>
    </Select>
  );
  //Selecting programs from hero-dropdown
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  function callback(key) {
    console.log(key);
  }
  return (
    <React.Fragment>
      <div className={styles.header}>
        <div className={styles.header__left}>
          <div className={styles.collapse}>
            {React.createElement(width ? MenuOutlined : MenuOutlined, {
              className: styles.trigger,
              onClick: toggle,
            })}
          </div>
          <span className={styles.logoText}>Welcome to</span>

          <img className={styles.logo} src="/static/bb.png" />
        </div>

        <Search
          addonBefore={selectBefore}
          className={styles.search}
          placeholder="input search text"
          enterButton={true}
        />
        <div className={styles.header__right}>
          <div className={styles.right_box}>
            <h4 className={styles.right_text}>Coins</h4>
          </div>
          <MailOutlined className={styles.icons} />
          <BellOutlined className={styles.icons} />
        </div>
      </div>

      <Layout className={styles.layout}>
        <Sider className={styles.sider} collapsed={collapse} collapsedWidth={width} width={90}>
          <Menu className={styles.sider_bg} mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item className={styles.sider_items} key="1">
              <div>
                <HomeFilled className={styles.drawer_icons} />
              </div>
              <span className={styles.itemsText}>Dashboard</span>
            </Menu.Item>
            <Menu.Item className={styles.sider_items} key="2">
              <div>
                <HomeFilled className={styles.drawer_icons} />
              </div>
              <span className={styles.itemsText}>My Programs</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.layout}>
          <Content className={styles.content}>
            <div className={styles.content__left}>
              <h1 className={styles.content__header}>My Programs</h1>
              <div className={styles.content__hero}>
                <div className={styles.options}>
                  <Select defaultValue="lucy" style={{ width: 159 }} onChange={handleChange}>
                    <Option value="jack">All Programs</Option>
                    <Option value="lucy">1:1 Coaching</Option>
                  </Select>
                </div>
                <div>
                  <Tabs size="large" defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Started" key="1">
                      Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="In Progress" key="2">
                      Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Completed" key="3">
                      Content of Tab Pane 3
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
            <div className={styles.content__right}>SECOND</div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
}
