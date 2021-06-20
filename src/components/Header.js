import React from "react";
import Top from "./Top";

export const Items = (props) => {
  const { listItem } = props;

  return (
    <ul style={{ boxShadow: "0 4px 15px #1f3858" }}>
      {listItem?.map((val, index) => (
        <li key={index + val.name} style={{ overflow: "hidden" }}>
          <a href={val.href}>{val.name}</a>
        </li>
      ))}
    </ul>
  );
};

export const HeaderItem = (props) => {
  const { headerList } = props;
  return (
    <ul className="nav" id="J-nav">
      {headerList?.map((val, index) => (
        <li key={index} style={{ overflow: "hidden" }}>
          <a href={val.href} style={val.style}>
            {val.name}
          </a>
          <Items listItem={val.item} />
        </li>
      ))}
      <li className="" style={{ overflow: "hidden" }}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://campus.alibaba.com/myJobApply.htm"
          style={{ padding: "0 14.5px" }}
        >
          个人中心
        </a>
      </li>
      <li className="" style={{ overflow: "hidden" }}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://campus.alibaba.com/en/homepage"
          style={{ padding: "0 14.5px" }}
        >
          {" "}
          Official Website (EN)
        </a>
      </li>
    </ul>
  );
};

export default function Header(props) {
  const { headerList } = props;
  return (
    <div className="head">
      <Top />
      <div
        className="wrap"
        style={{ position: "relative" }}
        data-spm-anchor-id="a1z3e1.11770841.0.i3.60137405k78Wye"
      >
        <h1 className="logo">
          <img
            style={{ height: "30px" }}
            src="https://img.alicdn.com/tfs/TB18loYdh9YBuNjy0FfXXXIsVXa-378-58.png"
            alt=""
          />
        </h1>
        <HeaderItem headerList={headerList} />
      </div>
    </div>
  );
}
