import React from "react";
import { CardBox, Button, Box, Tooltip } from "./styled";
import SlideImg from "../images/log002.jpg";
import RightImg from "../images/right_01.png";
import LeftImg from "../images/left_01.png";

export const Card = (props) => {
  const { style, url, value, isShowTips } = props;

  const handleToPage = () => {
    if (style?.cursor !== "pointer") return;
    window.open(url, "_self");
  };

  return (
    <>
      <CardBox {...style}>
        <p>{value?.name}</p>
        <p>{value?.leaveSchoolTime}</p>
        <Button {...style} onClick={handleToPage}>
          {value?.applyName}
          {isShowTips && <Tooltip>{value?.title}</Tooltip>}
        </Button>
      </CardBox>
    </>
  );
};

export const Banner = () => {
  return (
    <div
      style={{
        marginTop: "92px",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        height: "485px",
      }}
      className="indexBanner"
    >
      <ul
        className="bannerUl"
        style={{ width: "7629px", marginLeft: "-2543px", height: "100%" }}
      >
        <li style={{ width: "2543px" }}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://campus.alibaba.com/positionList.htm"
          >
            <img src={SlideImg} style={{ width: "2543px" }} />
          </a>
        </li>
        <li style={{ width: "2543px" }}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://campus.alibaba.com/positionList.htm"
          >
            <img src={SlideImg} style={{ width: "2543px" }} />
          </a>
        </li>
        <li style={{ width: "2543px", height: "100%" }}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://campus.alibaba.com/positionList.htm"
          >
            <img src={SlideImg} style={{ width: "2543px" }} />
          </a>
        </li>
      </ul>
      <ul className="blockClick" style={{ width: "35px", marginTop: "451px" }}>
        <li
          data-index="1"
          className="active"
          data-spm-anchor-id="a1z3e1.11770841.0.i6.60137405adjJGl"
        ></li>
      </ul>
      <p className="left" style={{ display: "block", top: "201px" }}>
        <img
          style={{ width: "25px" }}
          src={LeftImg}
          alt=""
          data-spm-anchor-id="a1z3e1.11770841.0.i4.60137405adjJGl"
        />
      </p>
      <p className="right" style={{ display: "block", top: "201px" }}>
        <img
          style={{ width: "25px" }}
          src={RightImg}
          alt=""
          data-spm-anchor-id="a1z3e1.11770841.0.i5.60137405adjJGl"
        />
      </p>
    </div>
  );
};

export default function Content() {
  const parmhasTitle = {
    url: "https://campus.alibaba.com/traineePositionList.htm",
    value: {
      name: "应届生入口",
      leaveSchoolTime: "毕业时间：2020年11月-2021年10月",
      applyName: "马上申请",
      title: "本批次暂无职位",
    },
    isShowTips: true,
  };

  const parm = { ...parmhasTitle, isShowTips: false };
  return (
    <>
      <div style={{ height: "550px" }}>
        <Banner />
      </div>
      <Box>
        <Card {...parmhasTitle} />
        <Card
          {...parm}
          style={{
            margin: "0 17px",
            color: "#F37327",
            cursor: "pointer",
            background: "#F37327",
          }}
        />
        <Card
          {...parm}
          style={{
            color: "#F37327",
            cursor: "pointer",
            background: "#F37327",
          }}
        />
      </Box>
    </>
  );
}
