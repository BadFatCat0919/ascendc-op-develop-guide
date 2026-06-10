# AscendC Guide

> 📖 **在线阅读**：[https://badfatcat0919.github.io/ascendc-op-develop-guide/](https://badfatcat0919.github.io/ascendc-op-develop-guide/)

用 Agent 总结的 AscendC 算子开发手册，摈弃高高在上的刻板技术语气，用更接地气的方式介绍算子开发，并配上了更适合中国宝宝体质的习题系统，帮助你更快理解算子开发！

## 📖 这是什么？

这是一本从零开始介绍华为昇腾 NPU 算子开发的实战指南。无论你是刚接触 AI 芯片的新手，还是想从 GPU 迁移到 NPU 的老司机，这本手册都能帮你快速上手。

## 📚 内容结构

### 第1章 基础概念
- 1.1 算子
- 1.2 数据排布
- 1.3 数据类型
- 1.4 量化与反量化
- 1.5 融合算子

### 第2章 昇腾硬件
- 2.1 DaVinci 架构
- 2.2 A5 新特性

### 第3章 编程语言
- 3.1 昇腾编程语言
- 3.2 编程模型
- 3.3 Ascend 软件栈

### 第4章 核心开发
- 4.1 算子精度标准
- 4.2 Tiling 设计
- 4.3 内存管理与数据搬运
- 4.4 Vector 计算
- 4.5 Cube 计算
- 4.6 同步与流水线

### 第5章 API 参考
- 5.1 Ascend C 常用 API 概览
- 5.2 数据搬运 API 详解
- 5.3 计算 API 详解
- 5.4 ACL 运行时 API
- 5.5 同步与队列 API 详解

### 第6章 调试优化
- 6.1 精度调试
- 6.2 性能优化

### 第7章 进阶指南
- 7.1 常见踩坑与最佳实践
- 7.2 RegBase 编程模型
- 7.3 SIMT 混合编程
- 7.4 NDDMA 高维搬运
- 7.5 CCU 通算融合
- 7.6 跨架构兼容

### 第8章 实战演练
- 8.1 快速上手
- 8.2 swap 算子开发
- 8.3 add 算子开发

### 附录
- A. 数据类型速查表
- B. 专有名词速查表

## 🚀 如何使用

直接在浏览器中打开 `index.html` 即可阅读。

```bash
# 克隆仓库
git clone https://github.com/BadFatCat0919/ascendc-op-develop-guide.git

# 用浏览器打开
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

## 🛠️ 技术栈

- 纯静态 HTML + CSS + JavaScript，无需构建工具
- 响应式设计，支持桌面和移动端
- 代码高亮，ASCII 图表特殊样式
- 侧边栏导航，方便跳转
- 交互式习题系统，边学边练

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源。

## 🔗 相关资源

- [Ascend C 官方编程指南](https://hiascend.com/document/redirect/CannCommunityOpdevAscendC)
- [Ascend C API 文档](https://hiascend.com/document/redirect/CannCommunityAscendCApi)
- [cann-samples 算子样例仓](https://gitcode.com/cann/cann-samples)
- [asc-devkit Ascend C SDK](https://gitcode.com/cann/asc-devkit.git)
- [opbase 基础框架](https://gitcode.com/cann/opbase)

---

**Happy Coding! 🎉**
