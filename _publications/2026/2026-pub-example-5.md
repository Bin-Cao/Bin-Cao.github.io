---
title:          "XDecomposer: Learning Prior-Free Set Decomposition for Multiphase X-ray Diffraction"
date:           2026-05-7 00:01:00 +0800
selected:       true
pub:            "arXiv"
pub_date:       "2026"
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Under Review</span>' 
# semantic_scholar_id: 11ac0b5634a282f1a0da204b98e7473d8b480dfb  # use this to retrieve citation count
abstract: >-
  Multiphase powder X-ray diffraction (PXRD) analysis remains a fundamental bottleneck in structure identification, as real-world synthesis often produces complex mixtures whose constituent phases (components) cannot be reliably disentangled. While recent advances in representation-based crystal retrieval and generation suggest the possibility of inferring structures directly from PXRD, existing approaches largely assume single-phase inputs and break down in multiphase settings. Here, we present XDecomposer, a prior-free framework for joint decomposition and identification of multiphase XRD patterns without requiring candidate phase lists, structural templates, or prior knowledge of phase number. We formulate multiphase diffraction analysis as a set prediction problem, where the model infers an unordered set of phase-resolved components, their mixture proportions, and corresponding structural representations within a unified architecture. A phase-query-driven decomposition mechanism, together with diffraction-consistent physical reconstruction, enables accurate source separation while preserving crystallographic fidelity. Extensive experiments on both simulated and experimental datasets show that XDecomposer substantially improves reconstruction accuracy and phase identification across diverse chemical systems, while maintaining strong generalization to unseen mixtures. These results provide a practical route toward data-driven, source-resolved multiphase XRD analysis and reduce long-standing dependence on prior-guided iteratively phase matching. 


cover:          /assets/images/covers/XDecomposer.jpg
authors:
  - Hanyu Gao*
  - <strong>Cao Bin</strong>*,#
  - Yunyue Su
  - Tong-Yi Zhang 
  - Qiang Liu#




links:
  Paper: https://arxiv.org/abs/2605.05866
  Code: https://github.com/Licht0812/XDecomposer
 
---