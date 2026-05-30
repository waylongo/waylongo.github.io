---
author: Wenlong Wu
pubDatetime: 2026-05-30T10:00:00+08:00
title: Wearables Tech Frontiers：一个可控的穿戴健康情报系统
featured: true
draft: false
tags:
  - skill
  - agent
description: 把穿戴健康领域的厂商动态、学术论文和 FDA 信号汇总成每周摘要——固定信息源，规则过滤，交由 Claude Code 或 Codex 生成，输出可复现。
---

穿戴设备领域的信息极度分散：Apple Watch / watchOS 的平台更新、Google/Fitbit 的 Health Connect 动向、Oura 和 WHOOP 的产品迭代、arXiv 上的 PPG/ECG/IMU 论文、FDA 的 510(k) 审批信号……每个来源都有价值，但每天单独去刷根本不现实。

**Wearables Tech Frontiers**（简称 `/wtf`）是我为这个场景做的一个轻量情报工具：维护固定的信息源，每周自动生成中心 feed，经过规则过滤后交给 Claude Code 或 Codex 生成结构化摘要——不做临场搜索，输出可复现。

![信息源覆盖](/images/wtf-skill/wtf-source-map.png)

## 适合谁用

三类人会觉得它有用：

- **穿戴 / 健康 / 运动科技产品团队**：快速判断平台和品类方向，把信息流转成月报或同步材料
- **研究者**：系统追踪 PPG、HRV、睡眠、IMU、digital biomarker 的论文和公司研究动态
- **需要定期做行业 review 的团队**：把分散的信息流变成结构化的周期性摘要

## 覆盖哪些信息源

分四个类别：

- **Industry News**：产品发布、健康功能、平台 API（HealthKit、WorkoutKit、Health Connect、Wear OS）、融资并购、厂商官方更新
- **Company Research**：Apple Machine Learning Research、Google Research、DeepMind 等官方研究频道
- **Academic**：arXiv、PubMed、medRxiv、bioRxiv 及数字健康期刊的论文、预印本、验证研究、数据集
- **Clinical / Regulatory**：ClinicalTrials.gov、FDA MedWatch、openFDA 510(k)/PMA/召回信号

## 输出长什么样

默认窗口是过去 30 天。在本月实际运行中，原始 feed 有 1010 条，经过黑名单、关键词、日期和来源质量过滤后，42 条进入摘要——过滤比约 96%，保留的都是真正有信号价值的内容。

![Digest 输出预览](/images/wtf-skill/wtf-digest-preview.png)

摘要按固定栏目组织：

- **Top Signals**：最值得先看的 1-3 条信号
- **Industry News**：产品、平台 API、市场动作
- **Company Research**：Apple、Google、DeepMind 等官方研究
- **Academic**：论文、验证研究、数据集
- **Clinical / Regulatory**：FDA、ClinicalTrials.gov、openFDA 等硬信号

每条都保留 URL，方便继续追原文。生成摘要后，还可以选择导出为 16:9 的 HTML slide report 或 PDF。

![Slide Report 预览](/images/wtf-skill/wtf-slide-preview.png)

## 为什么"可控"是核心

市面上不缺 AI 帮你搜索再总结的工具，但那类方案有个根本问题：每次运行的信息来源不固定，结果不可复现，也难以审计、追溯。

`/wtf` 的设计思路相反——来源可查，过滤规则可改，输出格式可复用，每次运行读取的是同一份由 GitHub Actions 定时生成的数据。这种结构让情报摘要更像"产品/研究同步材料"，而不是一串随机抓取的新闻标题。

---

如果你也在关注 wearables、sports health、Apple Watch、Google/Fitbit、Oura、PPG、HRV、sleep tracking 或 digital biomarkers，`/wtf` 可以作为一个稳定、可维护的情报入口。

>  [github.com/waylongo/wearables-tech-frontiers](https://github.com/waylongo/wearables-tech-frontiers)
