import React from "react";
import Avatar from "react-avatar";
import Button from 'react-button-component'
import "./Tweetinput.css"
import { useState } from "react";
const Tweetinput = () => {
  const [tweett, setTweet] = useState("");
  return (
    <form onSubmit={ev =>{
      ev.preventDefault();
      setTweet(ev.target.tweett.value);
    }
         }>
    <div className="TweetBox">
      
        <div className="TweetInputBox">
          <Avatar size="45" round={true} src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d2"/>                
          <input type="text" name="tweett" placeholder="What Happening?"/>
          <Button type="submit" className="TweetBoxBtn">Tweet</Button>
        </div>
          <input type="text" className="TweetInput_ForImgURL" placeholder="Optional: Enter img URL"/>
        <p>{tweett}</p>
      
    </div>
    </form>
  );
};
export default Tweetinput;