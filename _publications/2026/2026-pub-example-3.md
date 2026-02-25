---
title:          "AI-Driven Structure Refinement of X-ray Diffraction"
date:           2026-02-19 00:01:00 +0800
selected:       true
pub:            "arXiv"
pub_date:       "2026"
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Under Review</span>' 
# semantic_scholar_id: 11ac0b5634a282f1a0da204b98e7473d8b480dfb  # use this to retrieve citation count
abstract: >-
  AI can quickly propose candidate phases from X-ray diffraction (XRD), but refinement often fails due to unstable intensities under peak overlap and weak diffraction constraints. We introduce WPEM, a physics-constrained whole-pattern decomposition workflow that embeds Bragg's law in a batch expectation–maximization framework. WPEM models the full profile as a probabilistic mixture, iteratively inferring component intensities while keeping peak centers Bragg-consistent, producing a stable, physically valid representation. On \ce{PbSO4} and \ce{Tb2BaCoO5}, WPEM outperforms FullProf and TOPAS. It generalizes to multiphase Ti–15Nb films, \ce{NaCl}–\ce{Li2CO3} mixtures, semicrystalline polymers, operando cathodes, disordered Ru–Mn oxides (CCDC 2530452), and ancient Egyptian make-up, bridging AI-generated hypotheses and diffraction-ready structure refinement.

cover:          /assets/images/covers/wpem.jpg
authors:

  - <strong>Cao Bin</strong>
  - Zhang Qian
  - Feng Zhenjie
  - Zhang Taolue
  - Huang Jiaqiang 
  - Weng Lu-Tao
  - Zhang Tongyi#

links:
  Paper: https://arxiv.org/abs/2602.16372
  Code: https://github.com/Bin-Cao/PyWPEM
 
---