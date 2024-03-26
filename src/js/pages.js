const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Includes
const head = fs.readFileSync("src/includes/head.html");
const sectionHeader = fs.readFileSync("src/includes/section-header.html");
const sectionFooter = fs.readFileSync("src/includes/section-footer.html");
const hidden = fs.readFileSync("src/includes/hidden.html");

// Pages
module.exports = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    inject: "body",
    title: "Главная",
    head,
    sectionHeader,
    sectionFooter,
    hidden,
  }),
];
