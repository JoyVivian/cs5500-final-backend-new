import React from "react";
import {findAllTuitsLikedByUser} from "../../services/likes-service";
import {findAllTuitsDislikedByUser} from "../../services/dislikes-service";

const TuitStats = ({tuit, likeTuit,dislikeTuit, bookmarkTuit}) => {
    return (
      <div className="row mt-2">
        <div className="col">
            <i className="far fa-message me-1"></i>
          {tuit.stats &&
          <span className="ttr-stats-replies">{tuit.stats.replies}</span>
          }
        </div>
        <div className="col">
            <i className="far fa-retweet me-1"></i>
          {tuit.stats &&
          <span className="ttr-stats-retuits">{tuit.stats.retuits}</span>
          }
        </div>
        <div className="col">
          <span className="ttr-like-tuit-click"
                onClick={() => likeTuit(tuit)}>
              {
                tuit.stats  && tuit.stats.likes > 0 &&
                  <i className="fa-solid fa-thumbs-up me-1" style={{color: 'blue'}}></i>
              }
              {
                tuit.stats && tuit.stats.likes <= 0 &&
                  <i className="fa-solid fa-thumbs-up me-1"></i>
              }
            <span className="ttr-stats-likes">{tuit.stats && tuit.stats.likes}</span>
          </span>
        </div>

          <div className="col">
          <span className="ttr-dislike-tuit-click"
                onClick={() => dislikeTuit(tuit)}>
              {
                  tuit.stats && tuit.stats.dislikes > 0 &&
//                  findAllTuitsDislikedByUser("me").includes(tuit._id) &&
                  <i className="fa-solid fa-thumbs-down me-1" style={{color: 'blue'}}></i>
              }
              {
                  tuit.stats && tuit.stats.dislikes <= 0 &&
                  <i className="fa-solid fa-thumbs-down"></i>
              }
              <span className="ttr-stats-dislikes">{tuit.stats && tuit.stats.dislikes}</span>
          </span>
          </div>

          <div className="col">
              <span className="ttr-bookmarks-tuit-click"
                    onClick={() => bookmarkTuit(tuit)}>
                  {
                      tuit.stats && tuit.stats.bookmarks > 0 &&
                      <i className="fa-solid fa-bookmark me-1" style={{color: 'yellow'}}></i>
                  }
                  {
                      tuit.stats && tuit.stats.bookmarks <= 0 &&
                      <i className="fa-solid fa-bookmark"></i>
                  }
                  <span className="ttr-stats-bookmarks">{tuit.stats && tuit.stats.bookmarks}</span>
              </span>
          </div>

        <div className="col">
          <i className="far fa-inbox-out"></i>
        </div>
      </div>
    );
}
export default TuitStats;