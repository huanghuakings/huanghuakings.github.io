import React from "react";
import { Footer, Header, Content } from "../components";
import { footerList, headerList } from "../constants";
// import Backgroup from "../images/log002.jpg";

export default function ShowPage() {
  return (
    <div>
      <Header headerList={headerList} />
      <div style={{ height: "350px" }}>
        <Content />
      </div>
      <Footer footerList={footerList} />
    </div>
  );
}
