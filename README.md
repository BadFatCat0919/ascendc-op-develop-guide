# AscendC Guide

> 📖 **在线阅读**：[https://badfatcat0919.github.io/ascendc-op-develop-guide/](https://badfatcat0919.github.io/ascendc-op-develop-guide/)

用 Agent 总结的 AscendC 算子开发手册，摈弃高高在上的刻板技术语气，用更接地气的方式介绍算子开发，并配上了更适合中国宝宝体质的习题系统，帮助你更快理解算子开发！

## 📖 这是什么？

这是一本从零开始介绍华为昇腾 NPU 算子开发的实战指南。无论你是刚接触 AI 芯片的新手，还是想从 GPU 迁移到 NPU 的老司机，这本手册都能帮你快速上手。

## 📚 内容结构

### 第1章 基础概念
- 1.1 什么是算子
- 1.2 数据排布格式
- 1.3 数据类型
- 1.4 量化与反量化

### 第2章 编程语言
- 2.1 昇腾编程语言
- 2.2 编程模型
- 2.3 Ascend 软件栈

### 第3章 昇腾硬件
- 3.1 A5 通用架构
- 3.2 A5 新特性

### 第5章 核心开发
- 5.1 Tiling 设计
- 5.2 内存管理与数据搬运
- 5.3 Vector 计算
- 5.4 Cube 计算
- 5.5 同步与流水线

### 第6章 API 参考
- 6.1 Ascend C 常用 API 概览
- 6.2 数据搬运 API 详解
- 6.3 计算 API 详解
- 6.4 ACL 运行时 API
- 6.5 同步与队列 API 详解

### 第7章 调试与优化
- 7.1 精度不对怎么办
- 7.2 性能不达标怎么办
- 7.3 算子精度标准

### 第8章 进阶
- 8.1 常见踩坑与最佳实践
- 8.2 RegBase 编程模型
- 8.3 SIMT 混合编程
- 8.4 NDDMA 高维搬运
- 8.5 CCU 通算融合
- 8.6 跨架构兼容

### 第9章 实战演练
- 9.1 五分钟跑通一个算子
- 9.2 swap 算子开发
- 9.3 add 算子开发

### 附录
- A. 数据类型速查表

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
