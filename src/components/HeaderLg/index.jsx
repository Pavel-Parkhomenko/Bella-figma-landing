import React from "react";
import { Button, Col, Grid, Row } from "antd";
import HeaderMobile from "../HeaderMobile";
import {
    OrangeButton,
    StyledText,
    OutLinedButton
} from "./styled"
const { useBreakpoint } = Grid;

const HeaderLg = () => {
  const { xs, sm, md } = useBreakpoint();
  if ((!md && sm) || xs) {
    return <HeaderMobile />;
  }
  return (
    <>
      <Row style={{ height: 156 }}>
        <Col flex={6}>
          <Row justify={"center"} align={"middle"} style={{ height: "100%" }}>
            <Col>
              <img src="images/Bella Olonje logo 111 1.png" alt="" />
            </Col>
          </Row>
        </Col>

        <Col flex={11} offset={7}>
          <Row
            justify={"space-around"}
            align={"middle"}
            style={{ height: "100%" }}
          >
            <Button type="link">
              <StyledText>Home</StyledText>
            </Button>

            <Button type="link">
              <StyledText>Product</StyledText>
            </Button>

            <Button type="link">
              <StyledText>Faq</StyledText>
            </Button>

            <Button type="link">
              <StyledText>Contact</StyledText>
            </Button>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          backgroundImage: `url("./images/Rectangle 48.png")`,
          backgroundRepeat: `no-repeat `,
          backgroundSize: "cover",
          height: 674,
          width: "100%",
        }}
      >
        <Col span={24} style={{ color: "white" }}>
          <Row
            justify={"center"}
            align={"middle"}
            style={{
              marginTop: 73,
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "36px",
            }}
          >
            <Col>Food app</Col>
          </Row>
          <Row
            justify={"center"}
            align={"middle"}
            style={{
              fontSize: "58px",
              fontWeight: 700,
              lineHeight: "80px",
              paddingTop: "10px",
            }}
          >
            <Col>Why stay hungry when </Col>
          </Row>
          <Row
            justify={"center"}
            align={"middle"}
            style={{
              fontSize: "58px",
              fontWeight: 700,
              lineHeight: "80px",
              textAlign: "center",
            }}
          >
            <Col>you can order form Bella Onojie</Col>
          </Row>
          <Row
            justify={"center"}
            align={"middle"}
            style={{
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "38px",
              padding: "10px 88px 48px 88px",
            }}
          >
            <Col>Download the bella onoje’s food app now on</Col>
          </Row>
          <Row
            justify={"space-around"}
            align={"middle"}
            style={{ width: 600, margin: "auto" }}
          >
            <Col>
              <OrangeButton shape="round">Playstore</OrangeButton>
            </Col>
            <Col>
              <OutLinedButton shape="round">App store</OutLinedButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default HeaderLg;
