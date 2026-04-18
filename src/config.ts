export const SITE = {
  website: "https://waylongo.github.io/", // replace this with your deployed domain
  author: "Wenlong Wu",
  profile: "https://waylongo.github.io/",
  desc: "Wenlong Wu 的个人主页，记录项目、文章与阶段性思考。",
  title: "waylongo's log",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/waylongo/waylongo-pages/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
