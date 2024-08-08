// You can define interfaces for all React components here.

interface CommentProps{
    key? : string,
    userImagePath? : string,
    username? : string,
    commentText? : string,
    likeNum? : any,
    replies? : ReplyProps[],
}

export type {CommentProps}

// Do not forget to export properly.

interface ReplyProps {
    key? : string,
    userImagePath? : string,
    username? : string,
    replyText? : string,
    likeNum? : any,
}
export type { ReplyProps };
