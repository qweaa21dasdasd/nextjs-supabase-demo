# 如何使用 Supabase-NextJS 部署 Skill

这份文档旨在指导你如何让 AI 助手（Agent）利用该 Skill 快速搭建并部署你的 Next.js + Supabase 项目。

## 1. 快速开始

当你开始一个新项目时，只需直接向 Agent 发送以下类似指令：

> **指令示例：**
> "帮我使用 `supabase-nextjs-deploy` Skill 初始化一个新项目，并部署到 Vercel。"

## 2. 你需要准备什么

在使用此 Skill 之前，请确保你手头有以下信息：
- **Supabase 项目地址 (URL)**
- **Supabase Anon Key**
- **GitHub 账户**（如果你需要自动推送到 GitHub）
- **Vercel 账户**（用于线上部署）

## 3. Agent 会自动为你做的事

一旦你触发了该 Skill，Agent 会按照以下流程自动工作：
1. **环境自检**：运行内置的 `check_env.sh` 脚本，确认当前目录是否适合部署。
2. **架构搭建**：
    - 初始化 Next.js (App Router)。
    - 安装 `@supabase/ssr` 等核心依赖。
    - 配置 `src/utils/supabase/` 下的客户端和服务端工具。
    - 配置 Next.js 16 规范的 `proxy.ts` (原 middleware)。
3. **自动化部署**：
    - 将代码推送到你指定的 GitHub 仓库。
    - 联动 Vercel CLI，自动同步环境变量并完成 Production 部署。
4. **功能验证**：自动访问线上 URL，确保数据库连接正常。

## 4. 常见问题 (FAQ)

- **Q: 为什么会有 `proxy.ts` 而不是 `middleware.ts`？**
  - **A**: 这是 Next.js 16 的最新规范。该 Skill 会自动为你处理这种版本差异，确保代码没有过时警告。
- **Q: 部署失败了怎么办？**
  - **A**: 检查你的 `.env.local` 环境变量是否正确，或者运行脚本进行手动诊断：
    ```bash
    bash /Users/meijin/.agent/skills/supabase-nextjs-deploy/scripts/check_env.sh
    ```

---
*你可以随时查看 [SKILL.md](./SKILL.md) 了解更详细的技术细节。*
