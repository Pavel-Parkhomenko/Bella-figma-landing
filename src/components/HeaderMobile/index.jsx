import React, { useState } from "react";
import { Button, Col, Drawer, Row } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  StyledText,
  OutLinedButton,
  OrangeButton
} from "./styled";

const HeaderMobile = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <>
        <Row style={{ height: 112 }} justify={"space-around"} align={"middle"}>
          <Col flex={6}>
            <Row
              justify={"space-around"}
              align={"middle"}
              style={{ height: "100%" }}
            >
              <Col>
                <img src="images/Bella Olonje logo 111 1.png" alt="" />
              </Col>
            </Row>
          </Col>

          <Col
            flex={18}
            style={{
              height: "100%",
              textAlign: "right",
            }}
          >
            <Button
              onClick={showDrawer}
              style={{ marginTop: "40px", marginRight: "40px" }}
            >
              {React.createElement(
                visible ? MenuUnfoldOutlined : MenuFoldOutlined
              )}
            </Button>

            <Drawer
              title="Menu"
              placement="right"
              closable={true}
              onClose={onClose}
              visible={visible}
            >
              <Row
                justify={"space-around"}
                align={"middle"}
                style={{ height: "100%" }}
              >
                <Col span={24}>
                  <Button type="link">
                    <StyledText>Home</StyledText>
                  </Button>
                </Col>
                <Col span={24}>
                  <Button type="link">
                    <StyledText>Product</StyledText>
                  </Button>
                </Col>
                <Col span={24}>
                  <Button type="link">
                    <StyledText>Faq</StyledText>
                  </Button>
                </Col>
                <Col span={24}>
                  <Button type="link">
                    <StyledText>Contact</StyledText>
                  </Button>
                </Col>
              </Row>
            </Drawer>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ color: "black" }}>
            <Row
              justify={"center"}
              align={"middle"}
              style={{
                marginTop: 73,
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "24px",
                color: "#737373",
              }}
            >
              <Col>Food app</Col>
            </Row>
            <Row
              justify={"center"}
              align={"middle"}
              style={{
                fontSize: "36px",
                fontWeight: 700,
                lineHeight: "42px",
                paddingTop: "10px",
                textAlign: "center",
              }}
            >
              <Col>Why stay hungry when you can order form Bella Onojie </Col>
            </Row>
            <Row
              justify={"center"}
              align={"middle"}
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "38px",
                padding: "10px 0px 0px 10px",
                textAlign: "center",
                color: "#737373",
              }}
            >
              <Col>Download the bella onoje’s food app now on</Col>
            </Row>
            <Row
              justify={"center"}
              align={"middle"}
              style={{ maxWidth: 600, margin: "auto" }}
            >
              <Col
                span={24}
                style={{ textAlign: "center", margin: `40px 0px 17px 0px` }}
              >
                <OrangeButton shape="round">Playstore</OrangeButton>
              </Col>
              <Col span={24} style={{ textAlign: "center" }}>
                <OutLinedButton shape="round">App store</OutLinedButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    </>
  );
};

export default HeaderMobile;
