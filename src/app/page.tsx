"use client";

import PostOwner from "../components/PostOwnner";
import Comment from "../components/Comment";
import {comments} from "../libs/comments";
import Reply from "../components/Reply";
import { nanoid } from 'nanoid';

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        
        <PostOwner 
        fullname="Khunsuekthai Buashaiyo" 
        img="/profileImages/get_image_hi.jpg"
        message ="ก้าวไกล ไปไกลถึงดาวอังคาร"
        likes="999"
        />

        {/* Comment Example */}

        {comments.map((data : any) => 
        <Comment
        key={nanoid()}
        userImagePath={data.userImagePath}
        username={data.username}
        commentText={data.commentText}
        likeNum={data.likeNum}
        replies={data.replies.length > 0 ? data.replies : []}
        />
        )}

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
