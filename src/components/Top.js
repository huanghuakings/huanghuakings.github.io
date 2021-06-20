import React from "react";

const Top = () => {
  return (
    <div className="top">
      <div
        className="wrap"
        data-spm-anchor-id="a1z3e1.11770841.0.i3.2d677405fopOmO"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://job.alibaba.com/?spm=a1z3e1.11770841.0.0.2d677405fopOmO"
          data-spm-anchor-id="a1z3e1.11770841.0.0"
        >
          社会招聘
        </a>{" "}
        |
        <a target="_blank" rel="noreferrer" href="https://102.alibaba.com/">
          阿里校园合作
        </a>{" "}
        |
        <a target="_blank" rel="noreferrer" href="http://e.weibo.com/campusali">
          官方微博
        </a>
        <input
          type="hidden"
          id="loginUrl"
          value="https://passport.alibaba.com/login.htm?appName=hrjob&amp;params=https%3A%2F%2Fcampus.alibaba.com%2Findex.htm"
        />
        <span className="login">
          欢迎来到阿里巴巴校园招聘！
          <a
            id="login"
            rel="noreferrer"
            href="https://campus.alibaba.com/login.htm?params=https%3A%2F%2Fcampus.alibaba.com%2Findex.htm%3Fspm%3Da1z3e1.11770841.0.0.5c357405GD0mbM"
            target="_top"
          >
            登录
          </a>
          <a
            href="http://member1.taobao.com/member/new_register.jhtml"
            rel="noreferrer"
            target="_blank"
          >
            免费注册
          </a>
        </span>
      </div>
    </div>
  );
};

export default Top;
