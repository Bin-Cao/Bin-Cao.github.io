---
title: "Harnessing Large Language Models to Compile Task-Relevant Context into Bayesian Optimisation"
i18n_key: "pub.2026_pub_example_10"
date: 2026-09-29 00:01:00 +0800
selected: false
pub: "arXiv preprint"
pub_date: "2026"
abstract: >-
  Incorporating rich task-relevant context, such as domain knowledge and external observations, is a key capability yet remains challenging for Bayesian optimisation (BO). Recently, practitioners have started to use large language models (LLMs) to generate and execute BO programs through coding harnesses.
  In such emerging practices, the posterior belief is shaped not only by Bayesian inference but also by LLM-generated model and data artefacts, offering a flexible route for task context to enter BO as executable code. To study whether and how LLMs can be harnessed to compile diverse contextual signals for BO, we formulate LLM-compiled BO as generalised-context decision making.
  We propose HarBO, a BO-specialised harness that compiles generalised context into the core artefacts of standard BO through a validated multi-stage workflow. Our theory analyses the regret under imperfect compilation and the effect of adding new context.
  Across synthetic functions and real-world benchmarks, we find that LLM harnesses can effectively compile context into standard BO, achieving competitive performance with specialised LLM-embedding-based and direct LLM-in-the-loop BO methods. General coding harnesses can be effective in familiar domains such as hyperparameter optimisation, but fall short in unfamiliar, context-rich domains.
  Together, these results establish LLM harnesses as a promising, but not automatically reliable, route for making rich task context usable in BO.
keywords:
  - Large Language Models
  - Bayesian Optimization
  - Context Compilation
  - LLM Harnesses
  - HarBO
cover: /assets/images/covers/HLLM-BO.jpg
cover_fit: contain
authors:
  - Zhongwei Yu
  - Sourabh Roy
  - Bin Cao
  - Xue Yan
  - Anjie Liu
  - Jun Wang#
links:
  Paper: https://arxiv.org/abs/2609.36788
  PDF: https://arxiv.org/pdf/2609.36788
---
