# AscendC Guide

> 📖 **在线阅读**：[https://badfatcat0919.github.io/ascendc-op-develop-guide/](https://badfatcat0919.github.io/ascendc-op-develop-guide/)

用 Agent 总结的 AscendC 算子开发手册，摈弃高高在上的刻板技术语气，用更接地气的方式介绍算子开发，并配上了更适合中国宝宝体质的习题系统，帮助你更快理解算子开发！

## 📖 这是什么？

这是一本从零开始介绍华为昇腾 NPU 算子开发的实战指南。无论你是刚接触 AI 芯片的新手，还是想从 GPU 迁移到 NPU 的老司机，这本手册都能帮你快速上手。

## 📚 内容结构

### 第1章 基础概念
- 1.1 什么是算子与 Ascend C
- 1.2 数据类型、排布与量化

### 第2章 硬件与编程模型
- 2.1 A5 硬件架构
- 2.2 编程模型概述（SIMD/SIMT/SPMD/MPMD）
- 2.3 算子结构与直调开发

### 第3章 核心开发
- 3.1 Tiling 设计
- 3.2 内存管理与数据搬运
- 3.3 Vector 计算
- 3.4 Cube 计算
- 3.5 同步与流水线

### 第4章 实战演练
- 4.1 环境搭建
- 4.2 五分钟跑通第一个算子
- 4.3 直调开发：swap 算子
- 4.4 框架开发：add 算子
- 4.5 ACL 接口使用指南

### 第5章 调试与优化
- 5.1 精度不对怎么办
- 5.2 性能不达标怎么办
- 5.3 算子精度标准

### 第6章 进阶
- 6.1 常见踩坑与最佳实践
- 6.2 进阶主题（RegBase/SIMT/NDDMA/CCU）

### 附录
- A. 数据类型速查表
- B. 对齐规则速查
- C. 错误码速查

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
