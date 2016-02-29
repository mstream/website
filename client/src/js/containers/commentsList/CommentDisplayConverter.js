import {now} from "../../Clock";
import moment from "moment";


const convertToDisplay = comment => Object.assign(
    {},
    comment,
    {dateCreated: moment(comment.dateCreated).from(now())}
);


export {convertToDisplay};