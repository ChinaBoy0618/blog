export default {
  username: 'ChinaBoy0618', // GitHub 用户名
  repository: 'issue-blog', // 记录 issue 的仓库名
  accessToken: 'NDRhYmNhNTk5MTUwZjdjNjFjMmNhNDAzNWVhNzU0YzExOGNiNmI5Ng==', // 经过 base64 加密后的 GitHub Token
  blogName: 'Touch Site', // 给你的博客取个名字
  /**
   * 定制左侧菜单链接部分
   * 格式：
   * {
   *   title: '',   // 名称
   *   subTile: '', // 描述
   *   icon: '',    // 图标名称，上这里查找你需要的图标名称 https://fontawesome.com ，如果需要自定义图标的参考示例的最后一个配置，并将图标文件放到 /src/statics 目录中
   *   url: '',     // 链接
   * }
   * 示例如下：
   */
  links: [
    {
      title: 'RSS',
      subTile: 'rsshub.app/github/issue/ChinaBoy0618/issue-blog',
      icon: 'fas fa-rss-square',
      url: 'https://rsshub.app/github/issue/ChinaBoy0618/issue-blog',
    },
    {
      title: 'Email',
      subTile: '826679571@qq.com',
      icon: 'fas fa-envelope',
      url: 'mailto:826679571@qq.com',
    },
    {
      title: 'Home',
      subTile: 'ChinaBoy0618.net',
      icon: 'fas fa-home',
      url: 'https://ChinaBoy0618.net',
    },
    {
      title: 'GitHub',
      subTile: 'github.com/ChinaBoy0618',
      icon: 'fab fa-github',
      url: 'https://github.com/ChinaBoy0618',
    },
    {
      title: 'Steam',
      subTile: 'steamcommunity.com/id/ChinaBoy0618',
      icon: 'fab fa-steam',
      url: 'https://steamcommunity.com/id/ChinaBoy0618',
    },
    {
      title: 'DouBan',
      subTile: 'douban.com/people/ChinaBoy0618',
      icon: 'img:statics/douban.svg',
      url: 'https://www.douban.com/people/ChinaBoy0618',
    },
  ],
};
