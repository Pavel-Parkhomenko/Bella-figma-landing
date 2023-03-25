import styled from "styled-components";
import {Button, Typography} from "antd";
const { Text } = Typography;

export const StyledText = styled(Text)`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;

  &:hover {
    color: orange;
  }
`;

export const OrangeButton = styled(Button)`
  height: 68px;
  width: 236px;
  background-color: #fa4a0c !important;
  border-color: #fa4a0c !important;
  outline: none;
  color: white !important;
  font-weight: 700;
  line-height: 36px;
  font-size: 24px;
`;

export const OutLinedButton = styled(Button)`
  height: 68px;
  width: 236px;
  background-color: transparent !important;
  border-color: white !important;
  outline: none !important;
  color: white !important;
  font-weight: 700;
  line-height: 36px;
  font-size: 24px;
`;