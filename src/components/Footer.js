import React from "react";
// import { footerList } from "../constants";

export default function Footer(props) {
  const { footerList } = props;

  return (
    <div>
      <div className="foot">
        <p>
          {footerList?.map((val) => (
            <span key={val.id}>
              <a
                rel="noreferrer"
                title={val.title}
                target="_blank"
                href={val.href}
              >
                {val.id === "011" ? `${val.title} (EN)` : val.title}
              </a>
              {val.id === "011" ? "" : ` |`}
            </span>
          ))}
        </p>
        <em style={{ color: "#fff" }}>
          ©1999-2021 阿里巴巴集团 版权所有{" "}
          <a href="http://weibo.com/campusali" rel="noreferrer" target="_blank">
            阿里巴巴集团校园招聘
          </a>
        </em>
      </div>
    </div>
  );
}
