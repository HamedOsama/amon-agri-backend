"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const error_middleware_1 = __importDefault(require("./middleware/error.middleware"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
// parse application/json
app.use(express_1.default.json());
// use cors
app.use((0, cors_1.default)());
const port = 3001;
// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Amon Agri!');
});
// use api routes
app.use('/api/v1/', index_1.default);
// use error middleware
app.use(error_middleware_1.default);
// define a route handler for wrong routes
app.use((req, res) => {
    res.status(404).send('page is not found');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
