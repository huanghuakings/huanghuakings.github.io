import styled from "styled-components";

export const CardBox = styled.div`
  display: block;
  float: left;
  margin: ${(props) => (props.margin ? props.margin : "0 0")};
  text-align: center;
  width: ${(props) => (props.width ? props.width : "380px")};
  height: ${(props) => (props.height ? props.height : "220px")};
  border: 1px solid #e2e2e2;
  box-shadow: 0px 2px 5px #c5c5c5;
  border-radius: 6px;
  font-family: PingFangSC-Regular;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "18px")};
  color: ${(props) => (props.color ? props.color : "rgb(155, 155, 155)")};
`;

export const Box = styled.div`
  display: flex;
  margin: 30px auto;
  vertical-align: center;
  justify-content: center;
`;

export const Tooltip = styled.span`
  visibility: hidden;
  width: 150px;
  font-size: 16px;
  background-color: white;
  border: 1px solid #dadada;
  color: #666;
  text-align: center;
  /* box-shadow: 0px 4px 15px rgb(31 56 88); */
  position: absolute;
  z-index: 1;
  bottom: 120%;
  left: 50%;
  margin-left: -60px;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgb(155, 155, 155) transparent transparent transparent;
    /* border-color: transparent transparent #fff transparent; */
  }
`;
export const Button = styled.p`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  width: 173px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 35px auto;
  color: white;
  border-radius: 40px;
  background: ${(props) =>
    props.background ? props.background : "rgb(226, 226, 226)"};
  cursor: ${(props) => (props.cursor ? props.cursor : "not-allowed")};
  &:hover ${Tooltip} {
    visibility: visible;
  }
`;
