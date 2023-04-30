import React from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowDropDown } from "@mui/icons-material";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase/init";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => alert(error.message));
  };

  return (
    <header>
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="search mail" />
        <ArrowDropDown className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <div className="signOut">
          <Avatar onClick={signOut} src={user?.photoURL} />
          <div className="signOut-text">Sign Out</div>
        </div>
      </div>
    </header>
  );
}

export default Header;