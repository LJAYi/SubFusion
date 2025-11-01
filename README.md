
# 🌐 SubFusion  
### *One link, dual power — local privacy or cloud speed.*  

🧩 **SubFusion** 是一个开源的混合订阅转换器项目：  
它让你在 **本地浏览器端（GitHub Pages）** 与 **Cloudflare Workers（边缘节点）** 之间自由切换，  
既能保障隐私安全，又能拥有媲美 subconverter 的自动化体验。  

---

## 🧱 项目特点 / Features

| 功能 | 说明 |
|------|------|
| 🔒 **本地转换模式** | 完全前端执行，不上传任何订阅 token，隐私安全。 |
| ☁️ **Cloudflare Worker 模式** | 后端实时转换，支持 Clash / Loon / Surge 直接导入订阅。 |
| 🧩 **混合架构** | 可在同一界面自由切换「Local」或「Cloudflare」模式。 |
| 💸 **永久免费** | 基于 GitHub Pages + Cloudflare Workers 免费额度。 |
| 🪶 **零依赖部署** | 无需数据库、无需构建、无需登录。 |
| 🌍 **全球可用** | Worker 部署在 Cloudflare 边缘节点，延迟极低。 |

---

## 🧩 架构原理 / Architecture

用户浏览器（GitHub Pages）
├── Local Mode：前端 JS 直接 fetch 订阅 → 生成 YAML
└── Cloudflare Mode：调用你的 Worker → Worker 拉取订阅 → 返回 Clash YAML

- GitHub Pages：静态网页前端，负责用户交互与安全生成。  
- Cloudflare Worker：可选后端，仅做一次性代理与格式拼装，不保存 token。  

---

## ⚙️ 文件结构 / Structure

SubFusion/
├── index.html       # 主网页（UI）
├── app.js           # 前端逻辑
└── worker.js        # 可选后端（Cloudflare Worker）

---

## 🚀 部署指南 / Deployment

### ✅ 方式一：GitHub Pages（本地模式）

1. 在 GitHub 创建仓库 `SubFusion`。  
2. 上传以下文件：`index.html`、`app.js`、`README.md`。  
3. 进入仓库 **Settings → Pages**：  
   - Source: **Deploy from a branch**  
   - Branch: **main / (root)**  
4. 点击 **Save**，等待几分钟。  
5. 打开：

https://你的用户名.github.io/SubFusion/

6. 输入订阅地址即可开始使用（选择 “本地生成” 模式）。

---

### ☁️ 方式二：Cloudflare Worker（可选）

1. 登录 Cloudflare → Workers & Pages → Create Worker。  
2. 粘贴 `worker.js` 代码并保存部署。  
3. 复制你的 Worker 地址，例如：

https://yourname-subfusion.workers.dev/sub

4. 回到网页（GitHub Pages），在输入框中填写该地址并选择“Cloudflare 生成模式”。

---

## 🧠 使用方法 / How to use

1️⃣ 打开网页  
👉 `https://你的用户名.github.io/SubFusion/`

2️⃣ 填写订阅链接  
> 示例：  
> ```
> https://api.example.com/subscribe?token=abcd1234
> ```

3️⃣ （可选）填写 Cloudflare Worker 地址  
> 例如：  
> ```
> https://yourname-subfusion.workers.dev/sub
> ```

4️⃣ 选择模式  
- 🔒 **本地生成（更安全）**：浏览器直接生成 YAML  
- ☁️ **Cloudflare Worker 生成**：后台实时转换，可导入 Clash  

5️⃣ 点击「开始转换」  
→ 下方文本框中即生成 Clash 配置文件。

---

## 📦 示例项目链接 / Demo

🔗 [https://LJAYi.github.io/SubFusion/](https://LJAYi.github.io/SubFusion/)

---

## 🧩 命名含义 / Name Meaning
> **SubFusion** = *Subscription + Fusion*  
> 意为“融合的订阅系统”，融合本地安全与云端性能。  

> *One link, dual power — Local privacy or cloud speed.*

---

## 🔐 安全原则 / Security Notes
- 「本地模式」永远不会上传你的订阅 token。  
- 「Cloudflare Worker 模式」仅代理一次请求，不保存、不记录日志。  
- 所有通信使用 HTTPS，建议使用你自己的 Worker 域名。

---

## ⚖️ License

MIT License © 2025 [LJAYi](https://github.com/LJAYi)

> 你可以自由使用、修改、二次分发，但请保留署名。

---

## 🌟 未来计划 / Roadmap

- [ ] 自动模板选择（Clash / Surge / Loon）  
- [ ] 本地保存最近使用配置（localStorage）  
- [ ] YAML 格式美化与导出  
- [ ] Worker 增强版：支持多协议解析  

---

## 💬 致谢 / Credits

- [subconverter](https://github.com/tindy2013/subconverter) — 原始设计灵感  
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)  
- [GitHub Pages](https://pages.github.com/)  
- Special thanks to the open-source community ❤️


