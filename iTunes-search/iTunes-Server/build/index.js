"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ITunesRouter_1 = __importDefault(require("./routers/ITunesRouter"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = express_1.default();
const allowedOrigins = ['http://localhost:8080'];
const PORT = process.env.PORT || 8000;
const options = {
    origin: allowedOrigins
};
app.use(cors_1.default(options));
app.use(morgan_1.default("tiny"));
app.use(express_1.default.static("public"));
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json",
    },
}));
app.use('/iTunes', ITunesRouter_1.default);
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
module.exports = app;
//# sourceMappingURL=index.js.map