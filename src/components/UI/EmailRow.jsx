import "./emailrow.css";
import {
  CheckBox,
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMail } from "../../features/mailSlice";

function MailRow({ id, title, subject, message, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        message,
        time,
      })
    );
    navigate("/mail");
  };

  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow__divider">
        <div className="emailRow__options">
          <CheckBox />
          <IconButton>
            <StarBorderOutlined />
          </IconButton>
          <IconButton>
            <LabelImportantOutlined />
          </IconButton>
        </div>
        <h3 className="emailRow__title">{title}</h3>
        <div className="emailRow__message">
          <h4>{subject} </h4>
          <span className="emailRow__description">- {message}</span>
        </div>
      </div>
      <div className="emailRow__time">{time}</div>
    </div>
  );
}

export default MailRow;