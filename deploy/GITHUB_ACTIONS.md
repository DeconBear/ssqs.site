# GitHub Actions 自动部署说明

这个仓库已经带好自动部署 workflow：

- `.github/workflows/deploy.yml`

它的工作方式是：

1. 有新提交进入 `main`，或者你手动点击 `Run workflow`
2. GitHub 先执行 `npm ci` 和 `npm run build`
3. 构建通过后，GitHub 使用 SSH 把当前提交推送到服务器上的 bare repo
4. 服务器上的 `post-receive` hook 自动执行 `deploy/update-site.sh`
5. 网站更新到线上

也就是说，只要 GitHub Actions 的密钥和变量配置完整，后面你的日常流程就会变成：

```bash
git add .
git commit -m "update website"
git push origin main
```

如果这次提交是通过合并 PR 进入 `main`，也会触发同一套自动部署流程。

## 需要在 GitHub 仓库里配置的内容

打开：

- `GitHub -> 仓库 -> Settings -> Secrets and variables -> Actions`

### Secret

新增下面这个 secret：

- `PRODUCTION_SSH_PRIVATE_KEY`

它的值是 GitHub Actions 专用部署私钥的完整内容。

### Variables

新增下面这些 repository variables：

- `PRODUCTION_SSH_HOST`
- `PRODUCTION_SSH_PORT`
- `PRODUCTION_SSH_USER`
- `PRODUCTION_GIT_PATH`

当前这套网站应该填写成：

- `PRODUCTION_SSH_HOST = 111.230.186.141`
- `PRODUCTION_SSH_PORT = 22`
- `PRODUCTION_SSH_USER = ubuntu`
- `PRODUCTION_GIT_PATH = /var/www/git/ssqs.git`

## merge 后为什么没有自动更新

如果 `main` 已经有新提交，但网站没有更新，优先检查 GitHub Actions。

现在 workflow 已经改成：

- 缺少密钥或变量时直接失败
- 不再显示“绿色成功但实际跳过部署”

所以后面判断是否真的发版，看这三点就够了：

1. `Build` 是否成功
2. `Deploy to Production` 是否成功
3. 日志里是否真的执行了 `Push current commit to production bare repository`

## 服务器端依赖的部署链路

GitHub Actions 依赖服务器上已经存在这些内容：

- bare repo：`/var/www/git/ssqs.git`
- hook：`/var/www/git/ssqs.git/hooks/post-receive`
- 网站目录：`/var/www/ssqs/current`
- 更新脚本：`deploy/update-site.sh`
- systemd 服务：`ssqs.service`

如果以后服务器重装，除了恢复网站代码，也要把这条 bare repo 自动部署链路一起恢复。

## 手动发布仍然可以保留

自动部署启用后，你仍然可以继续手动发布：

```bash
git push production main
```

这可以作为 GitHub Actions 之外的备用方案。
