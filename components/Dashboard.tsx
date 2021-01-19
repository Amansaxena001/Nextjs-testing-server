import React, { useState } from "react";
import { Layout, Menu, Input, Select } from "antd";
import styles from "./dashboard.module.scss";
import Link from "next/link";
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

export default function Dashboard() {
  const [collapse, setCollapse] = useState(false);
  const [width, setWidth] = useState(0);

  const toggle = () => {
    setCollapse(!collapse);
  };
  //Selecting programs from hero-dropdown
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const selectBefore = (
    <Select defaultValue="All" className={styles.selectBefore}>
      <Option value="All">All</Option>
      <Option value="#">Programs</Option>
    </Select>
  );
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

          <img className={styles.logo} src="/static/bb.png" />
        </div>

        <Search addonBefore={selectBefore} className={styles.search} placeholder="input search text" enterButton />
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
              <h1 className={styles.content__header}>Hello,Username</h1>

              <div className={styles.content__hero}>
                <div className={styles.hero__left}>
                  <Search
                    placeholder="input search text"
                    onSearch={(value) => console.log(value)}
                    enterButton
                    className={styles.hero__search}
                  />
                </div>
                <div className={styles.hero__right}>
                  <div>
                    <Select defaultValue="lucy" style={{ width: 159 }} onChange={handleChange}>
                      <Option value="jack">All Programs</Option>
                      <Option value="lucy">1:1 Coaching</Option>
                    </Select>
                  </div>
                  <div>
                    <Select defaultValue="lucy" style={{ width: 159 }} onChange={handleChange}>
                      <Option value="jack">All Programs</Option>
                      <Option value="lucy">1:1 Coaching</Option>
                    </Select>
                  </div>
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
