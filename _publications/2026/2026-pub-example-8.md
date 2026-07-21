---
title:          "XMatcher: An Open-Source Framework for X-Ray Diffraction Phase Identification"
i18n_key:      "pub.2026_pub_example_8"
date:           2026-07-21 00:01:00 +0800
selected:       true
pub:            "Technical Report"
pub_date:       "2026"
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Under Review</span>' 
# semantic_scholar_id: 11ac0b5634a282f1a0da204b98e7473d8b480dfb  # use this to retrieve citation count
abstract: >-
  Powder X-ray diffraction (XRD) is widely used for crystalline phase identification, and recent machine learning approaches have demonstrated remarkable capabilities in accelerating diffraction interpretation. However, reliable phase assignment still requires transparent, evidence-based validation, particularly for complex samples where interpretability and expert assessment remain essential. Search-match methods provide a robust and complementary strategy, yet many implementations are proprietary, limiting accessibility and reproducibility. Here, we introduce XMatcher, an open-source, evidence-driven framework that integrates diffraction databases, matching algorithms, and interactive visualization into a portable workflow. XMatcher generates theoretical diffraction libraries from crystal structures, retrieves candidate phases through chemical and diffraction constraints, applies global angular-shift correction and one-to-one peak matching, and reports quantitative agreement metrics together with peak-level evidence. Its AutoMix module extends identification to multiphase patterns by evaluating candidate phase combinations, estimating non-negative diffraction contributions, and visualizing phase-specific peak distributions. Through a local graphical interface, XMatcher enables ranked candidate inspection, interactive pattern comparison, PDF/CIF-based whole-pattern validation, and reproducible analysis export. By exposing both supporting and conflicting evidence rather than relying on a single similarity score, XMatcher provides an interpretable and reproducible platform for crystalline phase identification.
keywords:
  - Powder X-Ray Diffraction
  - Phase Identification
  - Search-Match
  - Multiphase Analysis

 


cover:          /assets/images/covers/xmatcher2.jpg
authors:
  - <strong>Cao Bin</strong>





links:
  Paper: https://arxiv.org/abs/2607.17162
  Code: https://github.com/Asterbin/Asterbin-XMatcher
 
---
