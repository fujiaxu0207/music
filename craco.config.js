const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);// 路径拼接
module.exports = {
    webpack:{
        alias:{
            "@":resolve("src"),
            "components":resolve("src/components")
        }
    }
}