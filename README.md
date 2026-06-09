# AscendC Guide

用 Agent 总结的 AscendC 算子开发手册，摈弃高高在上的刻板技术语气，用更接地气的方式介绍算子开发，并配上了更适合中国宝宝体质的习题系统，帮助你更快理解算子开发！

## 📖 这是什么？

这是一本从零开始介绍华为昇腾 NPU 算子开发的实战指南。无论你是刚接触 AI 芯片的新手，还是想从 GPU 迁移到 NPU 的老司机，这本手册都能帮你快速上手。

## 🎯 特色

- **接地气**：用雪王奶茶、蓝鹿咖啡、狗西购物、大绿书、音符软件、王者荣耀等你熟悉的场景来解释技术概念
- **实战导向**：以 ops-blas 仓库中的 sswap 算子为贯穿示例，从需求分析到上板测试全流程走一遍
- **分层学习**：按照 Diataxis 文档框架组织内容，Explanation（理解原理）、Tutorial（手把手做）、How-to Guide（解决问题）、Reference（查阅信息）四种类型清晰标注
- **A5 为核心**：以最新的 Ascend 950 (DAV_3510) 架构为主，同时说明与 A2/A3 的差异

## 📚 内容结构

### 第1章 基础概念
- 1.1 什么是算子与 Ascend C
- 1.2 数据类型、排布与量化
- 1.3 五分钟跑通第一个算子

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
- 3.6 实战：从零实现一个完整算子

### 第4章 调试与优化
- 4.1 精度不对怎么办
- 4.2 性能不达标怎么办
- 4.3 算子精度标准

### 第5章 进阶
- 5.1 常见踩坑与最佳实践
- 5.2 进阶主题（RegBase/SIMT/NDDMA/CCU）

### 附录
- A. 数据类型速查表
- B. 对齐规则速查
- C. 错误码速查

## 🚀 如何使用

直接在浏览器中打开 `index.html` 即可阅读。

```bash
# 克隆仓库
git clone https://gitcode.com/xutianze/AscendC-Guide.git

# 用浏览器打开
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

或者直接在 GitCode 上浏览：点击仓库根目录下的 `index.html` 文件。

## 🛠️ 技术栈

- 纯静态 HTML + CSS，无需构建工具
- 响应式设计，支持桌面和移动端
- 代码高亮，ASCII 图表特殊样式
- 侧边栏导航，方便跳转

## 📝 更新内容

如果你想重新生成 HTML 文件（比如修改了源 markdown 文件），运行：

```bash
python3 convert.py
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

本项目采用 [CANN Open Software License Agreement Version 2.0](https://www.hiascend.com/document/detail/zh/CANNCommunityEdition/8.0.0.alpha001/developmenttools/0000001862665073) 许可证。

## 🔗 相关资源

- [Ascend C 官方编程指南](https://hiascend.com/document/redirect/CannCommunityOpdevAscendC)
- [Ascend C API 文档](https://hiascend.com/document/redirect/CannCommunityAscendCApi)
- [cann-samples 算子样例仓](https://gitcode.com/cann/cann-samples)
- [asc-devkit Ascend C SDK](https://gitcode.com/cann/asc-devkit.git)
- [opbase 基础框架](https://gitcode.com/cann/opbase)

---

**Happy Coding! 🎉**
