# SSQS 网站维护说明

本仓库用于维护 `SSQS` (`Solid-State Quantum Storage Laboratory`) 课题组网站。

- 公开访问域名：`ssqs.site`
- GitHub 仓库：`https://github.com/ilovewindsunny-create/ssqs.site`

这份说明面向“不会搭网站、但需要自己改主页内容”的维护者。你可以把它理解成一份日常使用手册，而不是开发教程。

它主要回答下面这些问题：

1. 网站不同内容分别在什么文件里
2. 老师、学生、论文、新闻、平台图片该改哪里
3. 页面布局、字体、间距、图片大小该改哪里
4. 怎么本地预览
5. 怎么更新 GitHub
6. 怎么把修改同步到线上网站

---

## 1. 先记住最重要的一句话

大多数“内容更新”，只需要改一个文件：

- `app/site-data.ts`

如果你只是想更新：

- 首页简介
- 老师信息
- 在读学生
- 毕业学生
- 论文成果
- 论文来源链接
- 首页新闻
- 实验平台介绍
- 导航栏名称

通常不需要改页面代码，优先打开：

- `app/site-data.ts`

---

## 2. 这个项目里最重要的文件

### 2.1 内容主文件

- `app/site-data.ts`

这是网站内容中心。课题组名称、机构信息、老师、学生、论文、平台、新闻、导航等内容基本都在这里。

### 2.2 页面文件

- `app/page.tsx`
  首页
- `app/research/page.tsx`
  Research 页面
- `app/research-team/page.tsx`
  Research Team 页面
- `app/research-team/[slug]/page.tsx`
  老师个人页模板
- `app/join-us/page.tsx`
  Join Us 页面

### 2.3 公共组件

- `app/components/site-header.tsx`
  顶部导航栏
- `app/components/site-footer.tsx`
  页脚
- `app/components/page-hero.tsx`
  内页顶部的大标题区域
- `app/components/research-sidebar.tsx`
  Research 和 Research Team 页左侧边栏
- `app/components/page-shell.tsx`
  页面公共外壳，负责把页头和页脚包起来

### 2.4 样式文件

- `app/globals.css`

全站字体、颜色、间距、按钮、卡片、边栏、图片显示方式、手机端适配都在这里。

### 2.5 图片目录

- `public/assets/faculty`
  老师照片
- `public/assets/lab`
  实验室和平台照片
- `public/assets/papers`
  论文配图

### 2.6 部署相关文件

- `deploy/update-site.sh`
  线上更新脚本
- `deploy/install-server.sh`
  服务器首次部署脚本
- `deploy/ssqs.nginx.conf`
  域名反向代理配置
- `deploy/post-receive.hook`
  自动部署 hook 模板

---

## 3. 三种最常见的修改类型

### 3.1 只改内容，不改排版

改：

- `app/site-data.ts`

适用场景：

- 换老师简介
- 加学生
- 改论文
- 改新闻
- 改平台介绍

### 3.2 改页面结构

改：

- `app/page.tsx`
- `app/research/page.tsx`
- `app/research-team/page.tsx`
- `app/join-us/page.tsx`

适用场景：

- 调整模块顺序
- 删除某个板块
- 新增一个板块
- 把一个板块从首页移到内页

### 3.3 改视觉样式

改：

- `app/globals.css`

适用场景：

- 改字体大小
- 改配色
- 改卡片宽度
- 改图片显示方式
- 改边栏样式
- 改页脚排版
- 改手机端显示效果

---

## 4. 日常内容更新：分别改哪里

### 4.1 首页名称、机构、主标题、简介

打开：

- `app/site-data.ts`

找到：

- `siteMeta`
- `homeHighlights`
- `homeNews`

这里可以修改：

- 课题组英文全称
- 机构名称
- 所在地
- 首页主标题下方的简介
- 首页 Highlights
- 首页 News 的标题、摘要、图片、链接

---

### 4.2 修改老师信息

打开：

- `app/site-data.ts`

找到：

- `facultyMembers`

每位老师是一组对象。常见字段如下：

- `slug`
  老师个人页链接的一部分。不要随便改，除非你要改网址。
- `name`
  姓名
- `role`
  职称
- `email`
  邮箱
- `portrait`
  头像路径
- `portraitPosition`
  头像位置微调
- `office`
  当前单位或办公室信息
- `direction`
  研究方向
- `cardSummary`
  团队页简短介绍
- `bio`
  个人简介
- `education`
  教育经历
- `experience`
  工作经历
- `focus`
  研究重点
- `selectedWorks`
  个人代表论文

如果要换老师照片：

1. 把照片放到：
   - `public/assets/faculty`
2. 改对应老师的：
   - `portrait: "/assets/faculty/xxx.jpg"`

如果照片显示不居中，不一定要裁图。先看这个字段：

- `portraitPosition`

它是用来微调头像显示位置的。

---

### 4.3 修改在读学生

打开：

- `app/site-data.ts`

找到：

- `currentStudents`

常用字段：

- `name`
- `email`
- `role`
- `school`
- `cohort`
- `summary`
- `portrait`
- `portraitPosition`

如果学生暂时没有照片，可以不写 `portrait`，页面会自动显示预留区域。

---

### 4.4 修改毕业学生

打开：

- `app/site-data.ts`

找到：

- `alumniStudents`

这里是毕业学生区。后面你们只需要往里补对象即可。

建议字段：

- `name`
- `email`
- `role`
- `school`
- `cohort`
- `summary`
- `portrait`

---

### 4.5 修改论文成果

打开：

- `app/site-data.ts`

找到：

- `publications`

每篇论文目前常用字段：

- `title`
- `venue`
- `year`
- `result`
- `significance`
- `sourceHref`
- `image`

字段含义：

- `result`
  论文最核心的结果
- `significance`
  为什么重要
- `sourceHref`
  来源链接，通常是期刊页
- `image`
  论文图

如果要换论文图片：

1. 把图片放到：
   - `public/assets/papers`
2. 修改这篇论文的：

```ts
image: "/assets/papers/xxx.png"
```

---

### 4.6 修改首页 News

打开：

- `app/site-data.ts`

找到：

- `homeNews`

常见字段：

- `date`
- `category`
- `title`
- `summary`
- `image`
- `href`

适合更新的内容：

- 新论文发表
- 老师或学生获奖
- 学生毕业
- 参加会议
- 承办会议
- 工程或实验平台进展

新增一条首页 News 时，最简单的方法是直接把 `homeNews` 改成下面这种格式：

```ts
export const homeNews = {
  date: "March 2026",
  category: "Publication",
  title: "SSQS publishes a new result on rare-earth quantum memory materials",
  summary:
    "Our group reports a new publication on coherence properties in rare-earth-ion-doped materials, extending SSQS research on solid-state quantum storage and network-ready interfaces.",
  image: "/assets/papers/prx-10hour-storage.png",
  href: "https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.6.010302",
};
```

你实际修改时，只需要替换这 6 项：

- `date`
  新闻时间，例如 `March 2026`
- `category`
  类型，例如 `Publication`、`Award`、`Conference`、`Graduation`
- `title`
  新闻标题
- `summary`
  简短摘要，建议 1 到 3 句
- `image`
  配图路径，图片文件先放到 `public/assets/lab` 或 `public/assets/papers`
- `href`
  外部链接，可填论文页、会议页、获奖公告页；如果暂时没有链接，也可以删掉这一行

如果你要发“学生顺利毕业”这样的新闻，可以参考这个版本：

```ts
export const homeNews = {
  date: "June 2026",
  category: "Graduation",
  title: "A graduate member of SSQS successfully completed the degree program",
  summary:
    "The group congratulates our graduating student on completing the degree and wishes them continued success in future research and professional development.",
  image: "/assets/lab/cryogenic-optics-lab.png",
};
```

---

### 4.7 修改实验平台

打开：

- `app/site-data.ts`

找到：

- `researchPlatforms`

这里可以修改：

- 平台名称
- 平台简介
- 详细说明
- 平台图片

平台图片放在：

- `public/assets/lab`

---

### 4.8 修改 Join Us

打开：

- `app/site-data.ts`

找到：

- `joinCategories`

这里控制：

- 招收对象
- 对学生的要求
- 对工程师的要求
- 对博士后的要求
- 联系方式说明

---

### 4.9 修改导航栏名称

打开：

- `app/site-data.ts`

找到：

- `navItems`

这里控制顶部导航名字，例如：

- `Home`
- `Research`
- `Research Team`
- `Join Us`

如果你只是想改栏目名称，通常改这里就够了。

---

## 5. 图片怎么换

### 老师照片

放到：

- `public/assets/faculty`

### 实验室照片

放到：

- `public/assets/lab`

### 论文配图

放到：

- `public/assets/papers`

### 不要上传 PDF 到 GitHub

本项目现在默认不再把论文 PDF 存进仓库。

原因：

- 仓库后续可能公开
- PDF 体积大
- 版权风险更高
- 网站当前已经改成只展示论文图片和 `Source` 外链，不再直接提供本地 PDF

所以今后请遵守这个原则：

- 论文图片可以放进 `public/assets/papers`
- 论文来源链接写进 `app/site-data.ts`
- 不要把 PDF 放进 `public/pdfs`

### 一条必须记住的规则

代码里不要写 `public`。

错误写法：

```ts
portrait: "public/assets/faculty/test.jpg"
```

正确写法：

```ts
portrait: "/assets/faculty/test.jpg"
```

---

## 6. 如果你要改网站排版，重点看这里

如果你要改的是“内容”，改：

- `app/site-data.ts`

如果你要改的是“排版和风格”，改：

- `app/globals.css`

如果你要改的是“板块顺序和结构”，改：

- `app/page.tsx`
- `app/research/page.tsx`
- `app/research-team/page.tsx`
- `app/join-us/page.tsx`

---

## 7. `app/globals.css` 里最常改的地方

### 7.1 全站字体、颜色、字号比例

在 `app/globals.css` 最上面的 `:root` 里，你会看到这些变量：

- `--blue-950`
- `--blue-900`
- `--blue-800`
- `--gold`
- `--copy-size`
- `--title-card`
- `--title-block`
- `--title-panel`
- `--title-section`
- `--title-publication`
- `--font-sans`
- `--font-serif`

它们分别控制：

- 主色
- 强调色
- 正文字号
- 各级标题字号
- 字体

如果你想让网站整体显得更大气，最优先改这里，而不是一条条到处改。

---

### 7.2 页面宽度

变量：

- `--site-width`

它控制整个页面主体区域最大宽度。

如果你觉得页面太窄或太宽，可以先改它。

---

### 7.3 模块上下间距

常见选择器：

- `.page-content`
- `.content-section`
- `.home-secondary-section`
- `.side-panel-section`

如果你觉得页面太挤、呼吸感不够，优先改这些 `margin` 和 `padding`。

---

### 7.4 按钮样式

选择器：

- `.action-row a`

如果你想改按钮颜色、圆角、大小、字重，改这里。

---

## 8. 首页排版怎么改

首页文件：

- `app/page.tsx`

首页常用样式类：

- `.home-hero`
- `.home-hero-content`
- `.home-hero h1`
- `.hero-tagline`
- `.hero-text`
- `.news-card`
- `.news-image`
- `.news-copy`
- `.highlight-list`
- `.feature-panel`
- `.feature-image`
- `.feature-copy`

常见修改示例：

- 想让首页大标题更大：改 `.home-hero h1`
- 想让 News 模块更高：改 `.news-card-featured`
- 想让 Featured Paper 图片区更高：改 `.feature-image`
- 想让首页副标题更宽松：改 `.hero-tagline`

---

## 9. Research 页面排版怎么改

文件：

- `app/research/page.tsx`

常用样式类：

- `.research-sidebar`
- `.sidebar-link-top`
- `.sidebar-link-sub`
- `.publication-stack`
- `.publication-card`
- `.publication-media`
- `.publication-figure-image`
- `.platform-card`
- `.platform-image`
- `.platform-cover-image`

常见修改示例：

- 论文图太小：调大 `.publication-media`
- 论文图四周留白太多：减小 `.publication-figure-image` 的 `padding`
- 平台图区太小：改 `.platform-image`
- 左边栏太宽或太窄：改 `.sidebar-layout`

---

## 10. Research Team 页面排版怎么改

文件：

- `app/research-team/page.tsx`

常用样式类：

- `.faculty-grid`
- `.faculty-card-featured`
- `.faculty-portrait`
- `.faculty-card-copy`
- `.student-grid`
- `.student-card`
- `.student-photo`
- `.student-card-copy`
- `.student-contact-line`

常见修改示例：

- 老师照片太大：改 `.faculty-card-featured` 和 `.faculty-portrait`
- 学生照片区域太扁：改 `.student-photo`
- 学生邮箱显示太挤：改 `.student-contact-line`
- 老师卡片左右比例不协调：改 `.faculty-card-featured` 的 `grid-template-columns`

---

## 11. 页头、页脚、边栏在哪里改

### 页头

文件：

- `app/components/site-header.tsx`

样式：

- `.site-header`
- `.header-inner`
- `.brand-link`
- `.brand-mark`
- `.brand-copy`
- `.main-nav`

### 页脚

文件：

- `app/components/site-footer.tsx`

样式：

- `.site-footer`
- `.footer-grid`
- `.footer-brand h2`
- `.footer-column`

### 左边栏

文件：

- `app/components/research-sidebar.tsx`

这个文件控制：

- 当前蓝色高亮项如何切换
- 分组边栏怎么渲染
- 点击后高亮如何移动

如果你要改的是“功能”，改这个文件。  
如果你要改的是“颜色、大小、留白”，改 `app/globals.css`。

---

## 12. 图片显示方式怎么调

最重要的两个概念：

- `object-fit: cover`
  图片会铺满区域，但可能裁切
- `object-fit: contain`
  图片会完整显示，但可能留白

当前常见相关选择器：

- `.cover-image`
- `.news-cover-image`
- `.publication-figure-image`
- `.platform-cover-image`
- `.faculty-portrait img`
- `.student-photo img`

如果图片被裁得太厉害，不一定先去裁原图。更好的排查顺序通常是：

1. 先看能不能把容器变大
2. 再看能不能减小内边距
3. 最后再决定是否从 `cover` 改成 `contain`

---

## 13. 手机端排版怎么改

`app/globals.css` 末尾有几组媒体查询：

- `@media (max-width: 1100px)`
- `@media (max-width: 780px)`
- `@media (max-width: 560px)`
- `@media (min-width: 1024px)`

如果桌面正常、手机端不正常，优先检查这些区块。

常见场景：

- 手机导航太挤：看 `.header-inner`、`.main-nav`
- 页脚标题换行太奇怪：看 `.footer-brand h2`
- 卡片在手机上堆叠不自然：看 `.faculty-grid`、`.student-grid`、`.publication-card`、`.platform-card`

---

## 14. 页面结构怎么改

如果你要：

- 调整模块顺序
- 删除一个板块
- 新增一个板块
- 把某个区块挪到别的页面

就要改页面文件，而不是只改 `site-data.ts`。

### 首页模块顺序

改：

- `app/page.tsx`

它控制：

- Hero
- News
- Highlights
- Featured Paper

### Research 页面模块顺序

改：

- `app/research/page.tsx`

它控制：

- Achievements
- Research Platforms
- 左侧边栏入口

### Research Team 页面模块顺序

改：

- `app/research-team/page.tsx`

它控制：

- Faculty
- Current Students
- Graduated Students
- 左侧边栏入口

---

## 15. 完全不会写代码时，最安全的改法

推荐做法：

1. 打开 `app/site-data.ts`
2. 找到你要修改的那一段
3. 复制旁边已有的一条
4. 只改文字、链接、图片路径
5. 不要乱删逗号、引号、花括号

最常见错误：

- 少逗号
- 少引号
- 图片路径写错
- 图片文件名和代码里的名字不一致

最稳的原则永远是：

- 复制现有格式
- 只改内容
- 不随便改结构

---

## 16. 本地预览

第一次使用先安装依赖：

```bash
npm install
```

启动本地预览：

```bash
npm run dev
```

然后打开：

- `http://localhost:3000`

如果 `3000` 被占用，终端会自动换到别的端口。直接打开终端里显示的那个地址即可。

---

## 17. 发布前检查

在本地预览确认没问题后，运行：

```bash
npm run build
```

如果这个命令能通过，通常说明页面结构没有被改坏。

---

## 18. 如何更新 GitHub

在项目根目录执行：

```bash
git add .
git commit -m "update website content"
git push origin main
```

这一步会更新 GitHub 仓库，但不会自动更新线上网站。

---

## 19. 如何发布到线上网站

在项目根目录继续执行：

```bash
git push production main
```

这一步会自动：

- 安装依赖
- 构建网站
- 重启网站服务
- 重载反向代理

发布后刷新：

- `http://ssqs.site`

如果浏览器还是旧页面，按：

- `Ctrl + F5`

---

## 20. 推荐的完整更新流程

每次改网站都按下面做：

1. 改 `app/site-data.ts` 或需要的页面 / 样式文件
2. 如果换图片，就把图片放进 `public/assets/...`
3. 运行 `npm run dev`
4. 运行 `npm run build`
5. 提交 Git
6. 推到 GitHub
7. 推到 production

推荐命令顺序：

```bash
git add .
git commit -m "update website"
git push origin main
git push production main
```

如果 GitHub 临时连不上，但你又急着更新线上网站，也可以先：

```bash
git push production main
```

等网络恢复后再补：

```bash
git push origin main
```

---

## 21. 如果只想查“该改哪里”，看这个速查表

### 改老师

- `app/site-data.ts` -> `facultyMembers`

### 改在读学生

- `app/site-data.ts` -> `currentStudents`

### 改毕业学生

- `app/site-data.ts` -> `alumniStudents`

### 改论文

- `app/site-data.ts` -> `publications`

### 改首页 News

- `app/site-data.ts` -> `homeNews`

### 改实验平台

- `app/site-data.ts` -> `researchPlatforms`

### 改首页简介

- `app/site-data.ts` -> `siteMeta`

### 改导航名字

- `app/site-data.ts` -> `navItems`

### 改页面顺序

- `app/page.tsx`
- `app/research/page.tsx`
- `app/research-team/page.tsx`

### 改字体、颜色、间距、卡片大小、图片显示方式

- `app/globals.css`

### 改页头

- `app/components/site-header.tsx`

### 改页脚

- `app/components/site-footer.tsx`

### 改左边栏行为

- `app/components/research-sidebar.tsx`

---

## 22. 如果后面让别人帮你维护网站，最好一次性提供什么

如果之后有别人帮你维护网站，最好一次性提供：

- 要改哪个页面
- 旧文字和新文字
- 要替换的图片
- 对应来源链接
- 是只更新 GitHub，还是要同时更新线上网站

这样维护会快很多，也更不容易出错。
