import React from "react";
import  "./Feed.css";
import Tweetinput from "../Tweetinput/Tweetinput";
import MainPost from "../MainPost/MainPost";
const Feed = () => {
  return (
    <>
      <div className="Feed">
        <div className="FeedHeader">
            <h3>Home</h3>                        
        </div>
        <Tweetinput/>
        <MainPost/>
      </div>
    </>
  );
};
export default Feed;