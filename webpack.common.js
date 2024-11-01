/* eslint-disable no-undef */
import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const entry = "./src/index.js";
export const plugins = [
  new HtmlWebpackPlugin({
    title: 'Production',
    template: "./src/template.html",
    favicon: './src/Foodie/favicon.svg',
  }),
];
export const output = {
  filename: "main.js",
  path: resolve(__dirname, "dist"),
  clean: true,
};
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    },
  ],
};