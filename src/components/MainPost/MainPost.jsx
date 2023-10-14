import React from "react";
import "./MainPost.css";
import  Avatar  from "react-avatar";
import { GrChat, GrUpdate, GrFavorite, GrLinkTop } from "react-icons/gr";

import SideBarOptions from "../SideBarOptions/SideBarOption";
const MainPost = () => {
  return (
    <div className="MaintPost">
      <div className="PostAvatar">
        <Avatar  size="50"  round={true} src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"/>
        <input type="text" placeholder="What Happening?" />
      </div>
      <div className="PostBody">
        <div className="PostHeader">
          <div className="PostHeaderText">
            <h4>EnderGamez{" "}
            </h4>
          </div>
                        <span className="PostHeaderUserName">
                <SideBarOptions Icon={GrFavorite} className="VerifiedIconPost"/>@Ender Gamez
              </span>{" "}
          <div className="PoatHeaderDescription">
            <p>             
            </p>
          </div>
        </div>
      </div>
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Forigamigo.wixsite.com%2Ftecnologiagbm%2Fanimaciones&psig=AOvVaw0WqpExculn9mb_GYbWwnR0&ust=1697295640412000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDqgpCl84EDFQAAAAAdAAAAABAk"
        alt=""
      />
      <div className="PostFooter">
        <GrChat/>
        <GrUpdate/>
        <GrFavorite/>
        <GrLinkTop/>
      </div>
      </div>);
};
export default MainPost;