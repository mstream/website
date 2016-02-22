import uuid from "uuid";
import ActionCreatorFactory from "./ActionCreatorFactory";


const actionCreator = new ActionCreatorFactory(uuid.v4);


export default actionCreator;