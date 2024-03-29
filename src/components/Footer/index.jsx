import React from "react";
import {Col, Row, Typography} from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import {
  OutLinedButton,
  OrangeButton
} from './styled'
import FooterMobile from "../FooterMobile";

const {Title, Text} = Typography;

export const Footer = () => {
  const {xs, sm, md} = useBreakpoint();
  if ((!md && sm) || xs) {
    return <FooterMobile/>;
  }
  return (
    <>
      <Row
        justify={"start"}
        align={"top"}
        style={{
          backgroundImage: `url("images/Rectangle 47.png")`,

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Col span={24} style={{textAlign: "center", marginTop: 130}}>
          <Title
            level={2}
            style={{
              padding: 10,
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "57px",
              color: "white",
            }}
          >
            Download the app now.
          </Title>
        </Col>
        <Col span={24} style={{textAlign: "center"}}>
          <Title
            level={4}
            style={{
              padding: 10,
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "38px",
              color: "white",
            }}
          >
            Available on your favorite store. Start your premium experience now
          </Title>
        </Col>
        <Col span={24} style={{marginBottom: "130px", marginTop: "50px"}}>
          <Row
            justify={"space-around"}
            align={"middle"}
            style={{width: 332, margin: "auto"}}
          >
            <Col>
              <OrangeButton>Playstore</OrangeButton>
            </Col>
            <Col>
              <OutLinedButton>App store</OutLinedButton>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{padding: `0 115px`}}>
          <Row align={"middle"} justify={"center"}>
            <Col span={8}>
              {" "}
              <img src="images/Bella Olonje logo 111 1.png" alt=""/>
            </Col>

            <Col span={8}>
              <Row
                align={"middle"}
                justify={"space-around"}
                style={{width: 171, margin: "auto"}}
              >
                <div style={{fontSize: "33px", color: "#FA4A0C"}}>
                  <TwitterOutlined/>
                </div>
                <div style={{fontSize: "33px", color: "#FA4A0C"}}>
                  <FacebookFilled/>
                </div>
                <div style={{fontSize: "33px", color: "#FA4A0C"}}>
                  <InstagramFilled />
                </div>
              </Row>
            </Col>
            <Col span={8} style={{textAlign: "right"}}>
              <Text>Copywright 2020 Bella Onojie.com</Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
