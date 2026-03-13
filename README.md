# SSQS Website Maintenance Guide

本仓库用于维护 `SSQS` (`Solid-State Quantum Storage Laboratory`) 课题组网站。

- 网站地址：`http://111.230.186.141`
- GitHub 仓库：`https://github.com/ilovewindsunny-create/ssqs.site.git`

这份 README 的目标不是讲网站开发原理，而是告诉一个完全不会建站的人：

1. 网站不同内容分别在哪个文件里
2. 想改老师、学生、论文、实验室图片时该改哪里
3. 改完以后如何本地预览
4. 如何把改动发布到 GitHub
5. 如何把改动同步到线上网站

---

## 1. 先记住最重要的一句话

这个项目里，**大部分内容更新都只需要改一个文件**：

- `app/site-data.ts`

如果你只是想更新：

- 老师介绍
- 学生名单
- 毕业学生
- 论文列表
- 论文来源链接
- 实验平台介绍
- 首页文案

通常都不需要改页面代码，只需要改 `app/site-data.ts`。

---

## 2. 仓库里最重要的文件和文件夹

### 页面文件

- `app/page.tsx`
  首页
- `app/research/page.tsx`
  Research 页面
- `app/research-team/page.tsx`
  Research Team 页面
- `app/research-team/[slug]/page.tsx`
  老师个人主页模板
- `app/join-us/page.tsx`
  Join Us 页面

### 主要内容文件

- `app/site-data.ts`
  网站内容主文件。老师、学生、论文、实验平台、导航等主要内容都在这里。

### 样式文件

- `app/globals.css`
  全站排版、字号、颜色、图片大小、按钮样式等都在这里。

### 图片文件夹

- `public/assets/faculty`
  老师照片
- `public/assets/lab`
  实验室照片
- `public/assets/papers`
  论文配图

### 其他参考文件

- `gmail.txt`
  邮箱参考

---

## 3. 你最常改的内容分别在哪里

### 3.1 改首页标题、简介、机构信息

打开：

- `app/site-data.ts`

找到：

- `siteMeta`
- `homeHighlights`
- `homeCards`

你可以修改：

- 课题组全称
- 首页主标题
- 首页简介文字
- 首页高亮内容

如果只是改首页文案，通常不需要改 `app/page.tsx`。

---

### 3.2 改老师信息

打开：

- `app/site-data.ts`

找到：

- `facultyMembers`

这里每一位老师都是一个对象。常见字段如下：

- `slug`
  老师个人页面网址的一部分，不建议随便改
- `name`
  老师英文名
- `role`
  职称
- `email`
  邮箱
- `portrait`
  老师照片路径
- `office`
  办公地点
- `direction`
  研究方向
- `cardSummary`
  在团队页展示的简短介绍
- `bio`
  个人简介
- `education`
  教育经历
- `experience`
  工作经历
- `focus`
  研究重点
- `selectedWorks`
  代表论文

### 如果要换老师照片

把新照片放进：

- `public/assets/faculty`

然后把对应老师的：

- `portrait: "/assets/faculty/xxx.jpg"`

改成新文件名。

建议：

- 照片竖版更适合当前页面
- 文件名用英文小写和连字符
- 尽量不要带空格

---

### 3.3 改在读学生信息

打开：

- `app/site-data.ts`

找到：

- `currentStudents`

每位学生建议维护这些字段：

- `name`
- `email`
- `role`
- `school`
- `cohort`
- `summary`
- `portrait`（可选）

例如：

```ts
{
  name: "Example Student",
  email: "example@mail.sustech.edu.cn",
  role: "Graduate Researcher",
  school: "Southern University of Science and Technology",
  cohort: "2025 Cohort",
  summary: "Working on rare-earth spectroscopy and quantum memory experiments.",
  portrait: "/assets/students/example-student.jpg",
}
```

如果暂时没有照片，可以不写 `portrait`，网站会自动显示占位区域。

---

### 3.4 改毕业学生信息

打开：

- `app/site-data.ts`

找到：

- `alumniStudents`

现在这个板块已经留好了。以后你只需要把毕业学生对象一条一条加进去即可。

建议毕业学生可以补这些内容：

- `name`
- `email`
- `school`
- `cohort`
- `summary`
- `portrait`

如果以后你还想加“毕业去向”这一类信息，也可以继续在对象里加字段，然后再调整页面显示。

---

### 3.5 改论文成果

打开：

- `app/site-data.ts`

找到：

- `publications`

每篇论文目前用这些字段：

- `title`
- `venue`
- `year`
- `result`
- `significance`
- `sourceHref`
- `image`

字段含义：

- `title`
  论文标题
- `venue`
  期刊或会议
- `year`
  年份
- `result`
  论文最核心结果
- `significance`
  这篇论文为什么重要
- `sourceHref`
  外部来源链接，通常是期刊页面
- `image`
  论文配图路径

### 如果要换论文配图

把图片放进：

- `public/assets/papers`

然后修改对应论文的：

- `image: "/assets/papers/xxx.png"`

---

### 3.6 改实验平台内容

打开：

- `app/site-data.ts`

找到：

- `researchPlatforms`

可以修改：

- 平台名称
- 平台简介
- 平台详细说明
- 平台图片

实验室图片放在：

- `public/assets/lab`

---

### 3.7 改 Join Us 页面内容

打开：

- `app/site-data.ts`

找到：

- `joinCategories`

这里可以更新：

- 招生对象
- 对工程师的要求
- 对博士后的要求
- 申请方式

---

### 3.8 改导航栏名字

打开：

- `app/site-data.ts`

找到：

- `navItems`

这里控制顶部导航栏，比如：

- `Home`
- `Research`
- `Research Team`
- `Join Us`

如果只是想改栏目名字，通常改这里就够了。

---

## 4. 如果你完全不会写代码，最安全的修改方式

推荐你这样做：

1. 打开 `app/site-data.ts`
2. 找到你想改的那一块，比如 `facultyMembers`
3. 不要自己从零写
4. 直接复制旁边现有的一条，修改文字内容
5. 保持逗号、引号、括号格式不要乱删

最常见的错误是：

- 少了逗号
- 多删了一个引号
- 把路径写错
- 图片文件名和代码里的名字不一致

所以最稳的方式永远是：

- 复制已有格式
- 只改内容，不改结构

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

### 换图的步骤

1. 先把图片文件复制到对应文件夹
2. 记住文件名
3. 再去 `app/site-data.ts` 里把路径改掉

例如：

```ts
portrait: "/assets/faculty/manjin-zhong.jpg"
```

或者：

```ts
image: "/assets/papers/prx-10hour-storage.png"
```

注意：

- 路径里不要写 `public`
- 因为网站访问路径是从 `/assets/...` 开始

---

## 6. 本地预览网站

第一次使用时，先安装依赖：

```bash
npm install
```

启动本地预览：

```bash
npm run dev
```

然后打开浏览器访问：

- `http://localhost:3000`

如果 3000 端口被占用，终端一般会自动换到别的端口，比如 3001、3011、3020，你只需要打开终端里显示的那个地址。

---

## 7. 提交前检查

在本地预览确认没问题后，运行：

```bash
npm run build
```

如果这个命令成功通过，一般说明网站结构没有被改坏。

---

## 8. 如何上传到 GitHub 仓库

在项目根目录执行：

```bash
git add .
git commit -m "update website content"
git push origin main
```

这一步会把改动上传到 GitHub 仓库，但**不会自动更新线上网站**。

---

## 9. 如何把改动发布到线上网站

在项目根目录继续执行：

```bash
git push production main
```

这一步会把代码推到服务器，并自动：

- 安装依赖
- 构建网站
- 重启网站服务
- 更新线上页面

执行完成后，刷新：

- `http://111.230.186.141`

如果浏览器还显示旧内容，按：

- `Ctrl + F5`

---

## 10. 推荐的完整更新流程

每次改网站，都可以照着下面做：

1. 改 `app/site-data.ts`
2. 如果换图，就把图片放进 `public/assets/...`
3. 运行 `npm run dev` 本地查看
4. 运行 `npm run build` 检查
5. 提交 Git：

```bash
git add .
git commit -m "update website"
git push origin main
git push production main
```

---

## 11. 完全新手最容易搞错的地方

### 不要轻易改这些文件，除非你真的在改页面结构

- `app/research/page.tsx`
- `app/research-team/page.tsx`
- `app/research-team/[slug]/page.tsx`
- `app/globals.css`

如果你只是改内容，不需要碰这些文件。

### 图片路径不要写错

错误写法：

```ts
portrait: "public/assets/faculty/test.jpg"
```

正确写法：

```ts
portrait: "/assets/faculty/test.jpg"
```

### 文件名一定要一致

如果图片文件叫：

- `fudong-wang.jpg`

代码里也必须写：

- `/assets/faculty/fudong-wang.jpg`

不能大小写不一致，也不要多空格。

---

## 12. 如果你只想改一种内容，看这里就够了

### 改老师

- 改 `app/site-data.ts` 里的 `facultyMembers`

### 改在读学生

- 改 `app/site-data.ts` 里的 `currentStudents`

### 改毕业学生

- 改 `app/site-data.ts` 里的 `alumniStudents`

### 改论文

- 改 `app/site-data.ts` 里的 `publications`

### 改实验平台

- 改 `app/site-data.ts` 里的 `researchPlatforms`

### 改首页文案

- 改 `app/site-data.ts` 里的 `siteMeta` 和 `homeHighlights`

### 改图片

- 把图片放进 `public/assets/...`
- 再去 `app/site-data.ts` 改路径

---

## 13. 当前推荐维护原则

- 能改 `app/site-data.ts` 就不要改页面代码
- 能复用现有格式就不要自己新写结构
- 改完先本地看，再发布
- 每次发布前先 `git push origin main`
- 再 `git push production main`

---

## 14. 联系维护者时最好一起提供什么

如果后面有人需要继续帮你维护网站，最好一次性提供：

- 要改的页面
- 要替换的文字
- 对应老师或学生照片
- 论文图片
- 来源链接
- 是否只更新 GitHub，还是要同步上线

这样维护会快很多。
