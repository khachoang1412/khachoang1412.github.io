---
title: 'Our new paper *Unsourced Multiple Access With Random User Activity*'
date: 2022-02-16
read_time: false
excerpt: "Our paper *Unsourced Multiple Access With Random User Activity* has been submitted to IEEE Transactions on Information Theory."
categories:
  - news-post
tags:
  - journal
  - reproducibleresearch
  - massiverandomaccess
  - LANTERN
---

Unsourced Multiple Access (UMA) where all users employ a common codebook and the receiver decodes up to a permutation of messages is a relevant framework for the massive uncoordinated random access scenario in the Internet of Things (IoT). The proposal of UMA by Polyanskiy (2017) has triggered an active area of research in devising coding schemes that approach the achievable energy efficiency bound derived therein. However, it was assumed that the number of active users is fixed and known a priori to the receiver, which is typically farfetched in practical IoT scenarios due to time-varying and grant-free user activity.

In our recent work entitled "Unsourced Multiple Access With Random User Activity" submitted to IEEE Transactions on Information Theory, we extend Polyanskiy's seminal work to the case where the number of active users is random and unknown a priori. We define a random-access code accounting for both misdetection (MD) and false alarm (FA), and derive a random-coding achievability bound for the Gaussian multiple-access channel. Numerical results suggest that, when the target MD and FA probabilities are high, it is effective to estimate the number of active users, then treat this estimate as the true value, and use a coding scheme that performs well for the case of known number of active users. However, this approach becomes energy inefficient when the requirements on MD and FA probabilities are stringent due to the active-user estimation bottleneck. 

Our paper can be found here: [https://arxiv.org/pdf/2202.06365.pdf](https://arxiv.org/pdf/2202.06365.pdf).
We also make the simulation code available at: [https://github.com/khachoang1412/UMA_random_user_activity](https://github.com/khachoang1412/UMA_random_user_activity).

A presentation of a short version in ISIT 2021 can be seen below.

[![Massive Uncoordinated Access With Random User Activity](https://img.youtube.com/vi/6Vr5ZKZzIjw/0.jpg)](https://www.youtube.com/watch?v=6Vr5ZKZzIjw)

This work was jointly done with Alejandro Lancho, Giuseppe Durisi, and Alexandre Graell i Amat, under my MSCA project "LANTERN: Low-lAtency aNd privaTe Edge computing in Random-access Networks".
