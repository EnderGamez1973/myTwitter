import "./SideBar.css";
import SideBarOptions from "../SideBarOptions/SideBarOption";
import {ImTwitter} from "react-icons/im"
import {GrSearch, GrNotification,GrBookmark,GrHome, GrMailOption,GrList,GrUser} from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import {CgMoreO} from "react-icons/cg";
import {FiUsers} from "react-icons/fi";
const SideBar = () => {
  return (
    <>
      <div className="SideBar">        
        <ImTwitter className="ImTwitter_SideBar"/>
        <SideBarOptions  active Icon={GrHome} Text=". Home"/>
        <SideBarOptions  Icon={GrSearch} Text=". Explore"/>
        <SideBarOptions  Icon={GrNotification} Text=". Notifications"/>
        <SideBarOptions  Icon={GrMailOption} Text=". Message"/>
        <SideBarOptions  Icon={GrList} Text=". List"/>
        <SideBarOptions  Icon={GrBookmark} Text=". BookMarks"/>
        <SideBarOptions  Icon={FiUsers} Text=". Communities"/>
        <SideBarOptions  Icon={FaXTwitter} Text=". Premium"/>
        <SideBarOptions  Icon={GrUser} Text=". Profile"/>
        <SideBarOptions  Icon={CgMoreO} Text=". More"/>
      </div>
    </>
  );
};
export default SideBar;