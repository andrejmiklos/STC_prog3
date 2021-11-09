// imports express package
import express from "express";
// imports cors package
import cors from "cors";
// imports json and urlencoded
import { json, urlencoded } from "body-parser";
// imports http
import http from "http";
// imports maps (map1, map2) and fuctions (someInfo, wholeInfo)
import { map1, map2, someInfo, wholeInfo } from "./extra/Map";

// creates variable app
let app;

/** 
* starts functions 
*/
wholeInfo();
someInfo();

/**
 * @http.createServer creates http server
 * @app.get shows shows exact information on defined url
 *  it takes param id from url and changes it's type to number
 *  then it searches for that id in ids of books and then it returns id, name, author and genre of book or message. Both are in json format
 * @app.post return quiet data based on id in defined url
 *  it takes param id from url and changes it's type to number
 *  then it searches for that id in ids of books and then it returns every information about book which it has or message. Both are in json format
 */
function createServer() {
    app = express()

    app.use(cors())
    app.use(json())
    app.use(urlencoded({ extended: false}))

    http.createServer(app).listen(3000, () => {
        console.log("Running server on port 3000");
        // http://localhost:3000
    });


    app.get("/api/library/book/:id/info", (req, res) => {
        // http://localhost:3000/api/library/book/:id/info

        const id = req.params["id"];
        const inputid = parseInt(id);
        
        if (map1.has(inputid)) {
            res.json(map1.get(inputid)) 
        } else {
            res.json("Kniha s daným ID nebola nájdená")
        }
    });

    app.post("/api/library/book/:id/info", (req, res) => {
        // http://localhost:3000/api/library/book/:id/info
        const id2 = req.params["id"];
        const inputid2 = parseInt(id2);
        
        
        if (map2.has(inputid2)) {
            res.json(map2.get(inputid2))
        } else {
            res.json("Kniha s daným ID nebola nájdená")
        }
    })
}

createServer();