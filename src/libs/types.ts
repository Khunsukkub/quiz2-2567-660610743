// You can define interfaces for all React components here.

interface CommentProps{
    userImagePath? : string,
    username? : string,
    commentText? : string,
    likeNum? : any,
    replies? : any,
}

export type {CommentProps}

// Do not forget to export properly.

interface ReplyProps {
    userImagePath? : string,
    username? : string,
    replyText? : string,
    likeNum? : any,
}
export type { ReplyProps };
