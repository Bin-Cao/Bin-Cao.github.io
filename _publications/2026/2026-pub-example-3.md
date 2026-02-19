---
title:          "AI-Driven Structure Refinement of X-ray Diffraction"
date:           2026-02-19 00:01:00 +0800
selected:       true
pub:            "arXiv"
pub_date:       "2026"
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Under Review</span>' 
# semantic_scholar_id: 11ac0b5634a282f1a0da204b98e7473d8b480dfb  # use this to retrieve citation count
abstract: >-
  Artificial intelligence can rapidly propose candidate phases and structures from X-ray diffraction (XRD), but these hypotheses often fail in downstream refinement because peak intensities cannot be stably assigned under severe overlap and diffraction consistency is enforced only weakly. Here we introduce WPEM, a physics-constrained whole-pattern decomposition and refinement workflow that turns Bragg's law into an explicit constraint within a batch expectation--maximization framework. WPEM models the full profile as a probabilistic mixture density and iteratively infers component-resolved intensities while keeping peak centres Bragg-consistent, producing a continuous, physically admissible intensity representation that remains stable in heavily overlapped regions and in the presence of mixed radiation or multiple phases. We benchmark WPEM on standard reference patterns (\ce{PbSO4} and \ce{Tb2BaCoO5}), where it yields lower Rp/Rwp than widely used packages (FullProf and TOPAS) under matched refinement conditions. We further demonstrate generality across realistic experimental scenarios, including phase-resolved decomposition of a multiphase Ti--15Nb thin film, quantitative recovery of \ce{NaCl}--\ce{Li2CO3} mixture compositions, separation of crystalline peaks from amorphous halos in semicrystalline polymers, high-throughput operando lattice tracking in layered cathodes, automated refinement of a compositionally disordered Ru--Mn oxide solid solution (CCDC 2530452), and quantitative phase-resolved deciphering of an ancient Egyptian make-up sample from synchrotron powder XRD. By providing Bragg-consistent, uncertainty-aware intensity partitioning as a refinement-ready interface, WPEM closes the gap between AI-generated hypotheses and diffraction-admissible structure refinement on challenging XRD data.

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
  Paper: https://arxiv.org/abs/2602.16372v1
  Code: https://github.com/Bin-Cao/PyWPEM
 
---