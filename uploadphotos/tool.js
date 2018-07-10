"use strict";
    const fs = require("fs");
    const sizeOf = require('image-size');
    const path = "img";
    const output = "../themes/hueman/source/js/data.json";
    var dimensions;
    fs.readdir(path, function (err, files) {
        if (err) {
            return;
        }
        let arr = [];
        (function iterator(index) {
            if (index == files.length) {
                fs.writeFile(output, JSON.stringify(arr, null, "\t"));
                return;
            }
            fs.stat(path + "/" + files[index], function (err, stats) {
                if (err) {
                    return;
                }
                if (stats.isFile()) {
                    dimensions = sizeOf(path + "/" + files[index]);
                    console.log(dimensions.width, dimensions.height);
                    arr.push(files[index]);
                }
                iterator(index + 1);
            })
        }(0));
    });