# 用户目录

基于 Next.js App Router 的用户目录练习项目。当前页面从本地数据源加载用户列表，后续按需求逐步完善搜索、筛选、排序及用户详情等能力。

## 当前状态

- 用户目录基础展示：待开发
- 用户搜索与筛选：待开发
- 用户详情：待开发
- 数据加载、错误与刷新：待开发

## 用户搜索与筛选需求

本迭代需要为用户列表提供以下能力：

- 按用户名搜索，支持与其他条件组合。
- 按性别筛选，选项包括“全部”“男”“女”，默认选择“全部”。
- 按年龄区间筛选，最小年龄和最大年龄均可单独填写或组合填写。
- 按年龄升序或降序排序，默认不排序。
- 所有搜索、筛选和排序条件同时生效，并实时更新列表。
- 在列表上方显示当前结果数量，格式为 `共 N 位用户`。
- 无匹配结果时显示 `共 0 位用户` 及适当的空结果提示。
- 提供“重置”按钮，恢复所有条件的默认值并显示完整用户列表。

### 输入校验

- 年龄必须是有效的非负整数。
- 最小年龄不能大于最大年龄。
- 年龄区间无效时显示明确错误提示，并阻止无效条件生效。

完整需求见：[用户搜索与筛选功能需求](requirements/2026-09-16-user-search-filter-requirements.md)。

## 项目结构

```text
src/
├── api/
│   └── dataSource.ts        # 本地用户数据源
└── app/
    ├── (default)/
    │   ├── page.tsx         # 用户目录页面
    │   └── component/
    │       └── UserList.tsx # 用户列表组件
    └── globals.css           # 全局样式
requirements/                 # 按功能拆分的需求文档
```

## 开始使用

安装依赖：

```bash
pnpm install
```

启动开发服务器：

```bash
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看页面。

## 常用命令

```bash
pnpm dev      # 启动开发服务器
pnpm build    # 构建生产版本
pnpm start    # 启动生产服务器
```

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- pnpm

## 需求索引

各功能需求及其状态见：[requirements/README.md](requirements/README.md)。