import React, {useState} from "react";

const FollowListItem = ({who}) =>{
    return(
        <>
            <li className="list-group-item col-color">
                <div className="row">
                    <div className="col-3">
                        <img className="ttr-tuit-avatar-logo rounded-circle" style={{width: 48, height: 48}} src={`../images/${who.username}.jpg`}/>
                    </div>

                    <div className="col-6">
                        <span className="right-text">{who.username}</span>
                        <i className="fas fa-circle icon-white"></i><br></br>

                    </div>
                </div>
            </li>
        </>
    );
}
export default FollowListItem;



