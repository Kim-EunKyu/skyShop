import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/common/Header";
import { logout } from "../../modules/user";

const HeaderContainer = () => {
  const menuLeftList = ["베스트", "쿠폰/혜택", "기획전", "오늘장보기"];
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <Header user={user} menuLeftList={menuLeftList} onLogout={onLogout} />;
};

export default HeaderContainer;
