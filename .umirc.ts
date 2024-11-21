import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  history: {type: 'hash'},
  npmClient: 'pnpm',
  outputPath: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
});
