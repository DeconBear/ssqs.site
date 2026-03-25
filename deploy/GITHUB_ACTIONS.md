# GitHub Actions 自动部署说明

这个仓库现在已经预留了 GitHub Actions workflow：

- `.github/workflows/deploy.yml`

它的逻辑是：

1. 当 `main` 分支有新提交，或者你手动触发 `workflow_dispatch`
2. GitHub 先执行 `npm ci` 和 `npm run build`
3. 构建通过后，再通过 SSH 把当前提交推到服务器上的 bare repo
4. 服务器 bare repo 的 `post-receive hook` 会自动执行部署

也就是说，后面你理想的更新流程会变成：

```bash
git add .
git commit -m "update website"
git push origin main
```

如果 GitHub Actions 配置完整，`git push origin main` 后网站会自动更新。

## 需要在 GitHub 仓库里配置的内容

打开：

- `GitHub -> 仓库 -> Settings -> Secrets and variables -> Actions`

### 1. Secret

新增下面这个 secret：

- `PRODUCTION_SSH_PRIVATE_KEY`

它的值是“服务器部署账号对应的私钥全文”。

### 2. Variables

新增下面这些 repository variables：

- `PRODUCTION_SSH_HOST`
- `PRODUCTION_SSH_PORT`
- `PRODUCTION_SSH_USER`
- `PRODUCTION_GIT_PATH`

对于你当前这个网站，通常可以填成：

- `PRODUCTION_SSH_HOST = ssqs.site`
- `PRODUCTION_SSH_PORT = 22`
- `PRODUCTION_SSH_USER = root`
- `PRODUCTION_GIT_PATH = /var/www/git/ssqs.git`

如果你以后把部署账号改成 `ubuntu`，这里只需要同步改变量值，不用改 workflow 文件。

## 如果 workflow 运行后显示 skipped

这通常不是代码错误，而是 GitHub Actions 还没拿到上述 secret/variable。

也就是说：

- workflow 文件已经生效
- 但 GitHub 还不知道该连接哪台服务器、用哪个账号、用哪把私钥

把 secret 和 variables 配齐后，再去：

- `GitHub -> Actions -> Deploy SSQS Site -> Run workflow`

手动重跑一次就可以。

## 服务器端前提

这个 workflow 依赖你服务器上已经存在下面这套发布链路：

- bare repo：`/var/www/git/ssqs.git`
- bare repo hook：`post-receive`
- 网站目录：`/var/www/ssqs/current`
- 更新脚本：`deploy/update-site.sh`

如果你以后重装服务器，除了恢复网站本身，还需要把这条 bare repo 自动部署链路一起恢复。

## 当前手动发布是否还能保留

可以保留。

即使 GitHub Actions 自动部署已经启用，你仍然可以继续手动执行：

```bash
git push production main
```

这相当于手动备用方案。
