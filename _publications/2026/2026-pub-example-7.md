---
title:          "SVGym (SciVerseGym): An Environment for Reinforcement Learning and Bayesian Optimization in Crystal Discovery"
i18n_key:      "pub.2026_pub_example_7"
date:           2026-06-23 00:01:00 +0800
selected:       true
pub:            "Technical Report"
pub_date:       "2026"
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Under Review</span>' 
# semantic_scholar_id: 11ac0b5634a282f1a0da204b98e7473d8b480dfb  # use this to retrieve citation count
abstract: >-
  We introduce SciVerseGym, a Gymnasium-compatible environment for sequential crystal discovery that frames crystal design as a Markov decision process. Agents observe an atomistic structure, apply chemically meaningful edits, and receive feedback from a configurable evaluator. SciVerseGym supports local and global actions, including elemental substitution, lattice perturbation, atomic displacement, vacancy creation, and atom insertion, along with configurable chemical spaces, structure pools, atomistic and graph-based observations, custom rewards, optional relaxation, and stability or phonon-related diagnostics. Each step applies an edit, evaluates the candidate using a machine-learned interatomic potential or any ASE-compatible calculator, and returns the standard (obs, reward, terminated, truncated, info) tuple. By decoupling agent logic from materials infrastructure, SciVerseGym provides an open, reproducible, and extensible testbed for reinforcement learning, Bayesian optimization, evolutionary search, and language-agent workflows in closed-loop crystal discovery. 
keywords:
  - SciVerseGym
  - SVGym
  - reinforcement learning
  - Bayesian optimization
  - crystal discovery
  - Gymnasium environment
 


cover:          /assets/images/covers/SVGym.jpg
authors:
  - <strong>Cao Bin</strong>





links:
  Paper: https://arxiv.org/abs/2606.22425
  Code: https://github.com/Bin-Cao/SciVerseGym
 
---
