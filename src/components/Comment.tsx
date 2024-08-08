"use client";

import { comments } from "@/libs/comments";
import { CommentProps } from "@/libs/types";
import Reply from "./Reply";
import { nanoid } from 'nanoid';

export default function Comment({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}: CommentProps) {
  return (
    <div className="comment-container">
      <div className="d-flex gap-2 my-2">
        <img
          src={userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
          alt={`Profile picture of ${username}`}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            {username}
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>{commentText}</span>
          <div className="d-flex align-items-center gap-1">
            {likeNum > 0 ? (
              <>
                <img src="/like.svg" width={20} alt="like icon" />
                <span style={{ color: "#B0B3B8" }}>{likeNum} คน</span>
              </>
            ) : null}
          </div>
        </div>
      </div>
      {/* Container for replies */}
      {replies && replies.length > 0 && (
        <div className="replies-container">
          {replies.map((reply) => (
            <Reply
              key={nanoid()}
              userImagePath={reply.userImagePath}
              username={reply.username}
              replyText={reply.replyText}
              likeNum={reply.likeNum}
            />
          ))}
        </div>
      )}
    </div>
  );
}
