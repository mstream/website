import {convertArticlePayload} from "./ArticlePayloadConverter";


const convertArticlesPayload = (payloadJson) => {
    return payloadJson.map(convertArticlePayload);
};


export {convertArticlesPayload};