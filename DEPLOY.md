# 部署清单 — 从代码到上线

这份文档教你把网站发布到互联网上。**全程大约 30 分钟**，零成本起步。

---

## 当前状态

✅ 代码已写好
✅ 生产构建已测试通过
✅ Git 仓库已初始化（首次提交完成）
⏳ 等你完成以下步骤即可上线

---

## 路线总览

```
你的电脑（代码）  ──①──→  GitHub（代码托管）  ──②──→  Vercel（自动部署）  ──③──→  互联网用户可访问
                                                             │
                                                             └──④──→  绑定你自己的域名（可选）
```

---

## 第一步：注册 GitHub 账号（你做，3 分钟）

GitHub 是全球最大的代码托管平台，免费。Vercel 通过 GitHub 拉代码自动部署。

1. 打开 https://github.com
2. 右上角点击 **Sign up**
3. 用邮箱 `3676898@qq.com` 注册
4. 起一个用户名，建议：`inkingcg` 或 `tjyinchen`（这个名字会出现在仓库地址里）
5. 验证邮箱完成注册

**完成后，把你的 GitHub 用户名告诉我**，下一步要用到。

---

## 第二步：在 GitHub 创建仓库（你做，2 分钟）

登录 GitHub 后：

1. 右上角点 **"+"** → **New repository**
2. 填写：
   - **Repository name**：`inking-website`
   - **Description**（可选）：`天津砚宸科技官网`
   - **Public**（公开） — 选这个就行，免费版 Private 也可以但 Vercel 配置稍麻烦
   - **不要勾选** "Add a README file" / "Add .gitignore" / "Choose a license"（我们本地已经有了）
3. 点 **Create repository**

创建完成后会看到一个页面，上面有几行命令（类似 `git remote add origin ...`），**把整页保留，我下一步要照着配置**。

---

## 第三步：把代码推到 GitHub（我帮你做）

完成上面两步后告诉我你的 GitHub 用户名和仓库名（默认就是 `inking-website`），我会执行：

```bash
cd /Volumes/transfer/claude\ code/inking-website
git remote add origin https://github.com/<你的用户名>/inking-website.git
git push -u origin main
```

第一次推送会让你输入 GitHub 用户名 + 密码（实际是 **Personal Access Token**，不是密码）。

如果系统弹出要求 token：
1. 浏览器打开 https://github.com/settings/tokens
2. 点 **Generate new token (classic)**
3. Note 写 `inking-deploy`，过期时间选 **No expiration** 或 90 天
4. 权限只勾 **repo** 即可
5. 生成后复制那串字符（关闭页面就再也看不到了）
6. 把这串字符粘到终端密码栏

---

## 第四步：用 Vercel 自动部署（你做，5 分钟）

1. 打开 https://vercel.com/signup
2. 点 **Continue with GitHub**（用刚才的 GitHub 账号登录授权）
3. 进入控制台后点 **Add New...** → **Project**
4. 找到 `inking-website` 仓库，点 **Import**
5. 配置页面什么都不用改，Vercel 会自动识别这是 Next.js 项目，直接点 **Deploy**
6. 等约 2 分钟，构建完成后会显示一个网址，类似：
   ```
   https://inking-website-xxxxx.vercel.app
   ```

**到这里网站已经在互联网上了！** 任何人都能访问。

以后改代码 → `git push` → Vercel 自动重新部署，不用再点任何按钮。

---

## 第五步：绑定你自己的域名（可选，但推荐）

Vercel 给的 `xxx.vercel.app` 网址不专业，建议买个自己的域名。

### 5.1 注册域名（你做，5 分钟，¥75/年起）

打开 https://wanwang.aliyun.com（阿里云万网）：

1. 搜索框输入想要的名字，例如 `inkingcg`
2. 看 `.com` `.cn` 哪个可注册
3. 加入清单 → 立即结算
4. **需要做实名认证**（上传营业执照或个人身份证，1-3 天审核）

**推荐域名**：
- `inkingcg.com`（首选，简短好记）
- `inking-cg.com`
- `tjyinchen.com`（中文拼音）

### 5.2 把域名指向 Vercel（你做，5 分钟）

域名买到手后：

1. Vercel 控制台进入你的项目
2. 上方 **Settings** → 左侧 **Domains**
3. 输入你的域名 `inkingcg.com`，点 **Add**
4. Vercel 会显示几条 **DNS 记录**（类似 `A 76.76.21.21` 和 `CNAME cname.vercel-dns.com`）
5. 打开阿里云的"域名控制台" → 找到你的域名 → **解析** → 添加记录
6. 把 Vercel 给你的记录抄过去（一般 `@` 用 A 记录，`www` 用 CNAME）
7. 保存。10 分钟到 1 小时内生效。

完成后，访问 `https://inkingcg.com` 就能看到网站，**HTTPS 证书 Vercel 自动配置**。

---

## 关于"备案"

- **不绑国内域名 / 用 Vercel** → 不需要备案，今天就能上线 ✅
- **绑 `.cn` 域名 + 想用国内服务器** → 必须备案，需要营业执照，审核 7-20 天
- **绑 `.com` 域名 + 用 Vercel** → 不需要备案（服务器在海外）

**建议路线**：先用 Vercel + `.com` 域名上线，业务跑起来后如果国内访问需求大，再考虑迁移到国内服务器（那时再备案）。

---

## 维护：以后改内容怎么操作

### 添加新视频作品

1. 用编辑器打开 `lib/works.ts`，照着现有条目格式加新作品（README.md 有说明）
2. 在终端执行：
   ```bash
   cd "/Volumes/transfer/claude code/inking-website"
   git add lib/works.ts
   git commit -m "add new work: 项目名"
   git push
   ```
3. 1-2 分钟后 Vercel 自动重新部署，刷新网站就能看到

### 改公司信息 / 联系方式

- 邮箱、电话：改 `components/Footer.tsx` 和 `app/contact/page.tsx`
- 公司数字：改 `app/about/page.tsx`
- 主标题文案：改 `app/page.tsx`

改完同样是 `git add . && git commit -m "..." && git push`。

### 本地预览改动

```bash
cd "/Volumes/transfer/claude code/inking-website"
export PATH="$PWD/.node/bin:$PATH"
npm run dev
```

浏览器打开 http://localhost:3000 查看。改文件会自动刷新。

---

## 你现在需要做的

最少必要操作：

1. ⏳ **注册 GitHub 账号**（3 分钟）→ 把用户名告诉我
2. ⏳ **创建 GitHub 仓库**（2 分钟）
3. 然后告诉我，**我帮你推代码**
4. ⏳ **注册 Vercel 并点击 Import 部署**（5 分钟）

走完这 4 步，网站就在线上了。域名是之后的事，不影响先把网站跑起来。
