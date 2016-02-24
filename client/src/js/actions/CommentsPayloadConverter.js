import {convertCommentPayload} from "./CommentPayloadConverter";


const convertCommentsPayload = (payloadJson) => {
    return payloadJson.map(convertCommentPayload);
};


export {convertCommentsPayload};