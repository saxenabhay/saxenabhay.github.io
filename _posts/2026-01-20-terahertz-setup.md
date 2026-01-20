---
layout: default
title: "Correcting Phase Shifts in THz-TDS (dummy blog)"
date: 2026-01-20
---

HI , I am currently updating some parts of my webpage so here is a dummy blog post.

In Terahertz Time-Domain Spectroscopy (THz-TDS), substrate reflections often obscure the main signal. To resolve this, we utilize a modified **Transfer Matrix Method (TMM)**.

### The Mathematical Model

The electric field transmission $t(\omega)$ through a sample can be described as:

$$t(\omega) = \frac{2 \tilde{n}}{ \tilde{n} + 1 } e^{-i ( \tilde{n} - 1 ) \frac{\omega d}{c}}$$

Where $\tilde{n}$ is the complex refractive index. Using `scipy.optimize`, we can fit the phase directly to extract conductivity.

### Code Snippet

Here is how I implemented the phase correction in Python:

```python
import numpy as np
def phase_correct(data, thickness):
    # Apply Hilbert transform for phase retrieval
    return np.angle(data)
```

