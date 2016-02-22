import express from "express";
import articlesV1 from "./api/articles/v1/Articles"


const router = express.Router();

router.use("/articles", articlesV1);


export default router;