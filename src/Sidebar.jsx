import React from "react";
import "./sidebar.css";
import SidebarOptions from "./components/SidebarOptions";
import { Button } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Inbox from "@mui/icons-material/Inbox";
import Star from "@mui/icons-material/Star";
import { AccessTime } from "@mui/icons-material";
import { LabelImportant } from "@mui/icons-material";
import { NearMe } from "@mui/icons-material";
import { Note } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {  
  const dispatch = useDispatch()

  return (
    <div className="sidebar">
      <Button
        style={{ color: "black" }}
        startIcon={
          <ModeEditOutlineOutlinedIcon style={{ fontSize: "large" }} />
        }
        onClick={() => {dispatch(openSendMessage())}}
      >
        Compose
      </Button>
      <SidebarOptions
        Icon={Inbox}
        title="Inbox"
        number={54}
      />
      <SidebarOptions
        Icon={Star}
        title="Starred"
        number={54}
      />
      <SidebarOptions
        Icon={AccessTime}
        title="Snoozed"
        number={54}
      />
      <SidebarOptions
        Icon={LabelImportant}
        title="Important"
        number={54}
      />
      <SidebarOptions
        Icon={NearMe}
        title="Sent"
        number={54}
      />
      <SidebarOptions
        Icon={Note}
        title="Drafts"
        number={54}
      />
      <SidebarOptions
        Icon={ExpandMore}
        title="More"
        number={54}
      />
      <div className="sidebar__footer">
        <h4>Labels</h4>
        <Button>
          <AddIcon />
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;