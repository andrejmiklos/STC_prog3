"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const http_1 = __importDefault(require("http"));
const Map_1 = require("./Map");
let app;
(0, Map_1.wholeInfo)();
(0, Map_1.someInfo)();
function createServer() {
    app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use((0, body_parser_1.json)());
    app.use((0, body_parser_1.urlencoded)({ extended: false }));
    http_1.default.createServer(app).listen(3000, () => {
        console.log("Running server on port 3000");
        // http://localhost:3000
    });
    app.get("/api/library/book/:id/info", (req, res) => {
        // http://localhost:3000/api/library/book/:id/info
        const id = req.params["id"];
        const inputid = parseInt(id);
        if (Map_1.map1.has(inputid)) {
            res.json(Map_1.map1.get(inputid));
        }
        else {
            res.json("Kniha s daným ID nebola nájdená");
        }
    });
    app.post("/api/library/book/:id/info", (req, res) => {
        // http://localhost:3000/api/library/book/:id/info
        const id2 = req.params["id"];
        const inputid2 = parseInt(id2);
        if (Map_1.map2.has(inputid2)) {
            res.json(Map_1.map2.get(inputid2));
        }
        else {
            res.json("Kniha s daným ID nebola nájdená");
        }
    });
}
createServer();
