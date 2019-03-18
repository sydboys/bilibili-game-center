import * as React from 'react';
import BlueBtn from "src/components/commonComponent/blue-btn";
import {starIcon} from "src/components/icons";
import {ImgLoadingIcon} from "src/components/icons";
import "./home-game-activity.css";

const ActivityItem = (props:{
    coverSrc:string,
    gameIconSrc:string,
    gameName:string,
    activityIntro:string,
    gameScore:string,
    gameId:string
})=>{
    return(
        <div className="home-activity-item">
            <div className="activity-cover" style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                <img src={props.coverSrc} alt=""/>
            </div>
            <div className="game-download">
                <div className="game-name">
                    <img src={props.gameIconSrc} alt=""/>
                    <span>{props.gameName}</span>
                </div>
                <div className="d-btn">
                    <BlueBtn width="5rem" height="2rem" name="下载" link="#"/>
                </div>
            </div>
            <div className="game-info">
                <div className="activity-intro">
                    <span>{props.activityIntro}</span>
                </div>
                <div className="game-score">
                    <img src={starIcon} alt=""/>
                    <span>{props.gameScore}</span>
                </div>
            </div>
        </div>
    )
}

export default ActivityItem;