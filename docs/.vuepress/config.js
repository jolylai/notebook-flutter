module.exports = {
  title: "Flutter",
  description: "🚀 Flutter 学习笔记",
  base: "/notebook-flutter/",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    repo: "Jolylai/notebook-vue",
    nav: require("./nav/zh"),
    sidebar: require("./siderbar/index"),
    lastUpdated: "上次更新"
  },
  markdown: {
    lineNumbers: true
  }
};
