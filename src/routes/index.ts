import { Router } from "express";

import contactRoutes from "./api/contact";

const routes = Router();

routes.use("/contact", contactRoutes);


export default routes;