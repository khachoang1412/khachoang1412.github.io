---
layout: archive
title: "Research"
permalink: /publications/
author_profile: true
---
## Interests and Goals
My research interests are in the areas of wireless communications, information theory, and decentralized learning, with an emphasis on massive random access, privacy of federated learning, age of information, MIMO, and noncoherent communications.

My goal is to gain fundamental insights into communication and learning systems and to leverage these insights for practical designs of communication and learning schemes.

## Research Profile
I have more than 10 years of experience in research, from the third year of my bachelor’s study to my current postdoctoral research. In the following, I retrace the main steps in my research career.

My postdoctoral research primarily focuses on massive random access, where a large number of sporadically active devices access the wireless medium in an uncoordinated fashion. First, I characterized
the energy efficiency achievable under the unsourced multiple access (UMA) framework, where the users employ the same codebook, and the decoder returns an unordered list of codewords. Specifically, I extended the random-coding achievability bound in the original UMA framework to the case in which the number of active devices is random and unknown to the receiver, and to the case with heterogeneous
traffic consisting of both standard and critical messages. Second, I explored practical advanced slotted ALOHA protocols. I analyzed irregular repetition slotted ALOHA (IRSA) over the binary adder
channel. I also investigated information freshness, measured in terms of the age of information metric, achieved with IRSA when devices belong to different classes, as well as with slotted ALOHA
when devices rely on harvested energy. Besides massive random access, I also conducted research on edge computing, reconfigurable intelligent surfaces, joint communication and sensing, mmWave channel estimation, and network deployment for rural connectivity. Furthermore, I am currently focusing on the privacy of federated learning, aiming to quantify the privacy guarantee of secure aggregation (where clients jointly mask their updates to reveal only the aggregate) through the lens of differential privacy.

The topic of my Ph.D. thesis was noncoherent wireless communications, where channel state information (CSI) is unavailable a priori. Conventional wireless communication methods involve pilot-based
channel estimation and coherent detection. However, when channel estimation is challenging and overconsumes communication resources, adopting communication strategies that operate without relying on CSI,
such as using Grassmannian constellations, proves to be more effective. In the first part of the thesis, I characterized the fundamental limits of noncoherent communications under generic fading conditions. Specifically, I derived the optimal/achievable degrees of freedom and data rates for the noncoherent point-to-point channel, multiple access channel, and broadcast channel. In the second
part, I designed practical schemes, including a structured Grassmannian constellation with high packing efficiency and low mapping/demapping complexity. For the multiple access channel, I proposed meaningful metrics to design joint constellations, along with a practical multiple access scheme. Moreover, I introduced a low-complexity and effective noncoherent multiuser detection scheme based on expectation propagation. For nonlinear channels, I presented a generalized Gaussian model to characterize the input-output relation.

My master’s thesis focused on coded caching, which reduces the traffic load in content delivery networks by prefetching content near/at the users and by employing coded multicast. I analyzed the performance of coded caching in practical scenarios, considering random demands, random user arrivals, and wireless channels. In MIMO broadcast channels, coded multicast is limited by the channel condition of the worst user, hindering scalability, i.e., the ability to guarantee a constant per-user delivery rate as the user population grows. I proposed methods to achieve scalability based on multiple-antenna transmission or opportunistic user scheduling, uncovering a synergy between coded caching and massive MIMO.

During my bachelor’s study, I actively engaged in research early by completing a summer internship at the National University of Singapore, focusing on solar panel charge controllers [R1]. Subsequently, I participated in a research project on network coding, aiming to increase the network throughput through transmitting message combinations. I implemented network coding and cognitive radio protocols using a real-time software-defined radio testbed with USRP and bladeRF devices.

---
## Book Chapters

1. "Two-Way Relay Communications: Theory and Implementation," L.-T. Nguyen, N.-Q.-B. Vo, and T.-T.-Q. Tran, Eds., Languague: Vietnamese, Hanoi, Vietnam: VNU Publishing House, to be published in 2023.
    * Chapter 8: L.-T. Nguyen, T.-T.-Q. Tran, **Khac-Hoang Ngo**, and V.-L. Nguyen, “Cogitive physical-layer network coding";
    * Chapter 9: T.-T.-Q. Tran, **Khac-Hoang Ngo**, V.-L. Nguyen, H.-S. Do, and L.-T. Nguyen, “Setting up an SDR testbed for OFDM systems”;
    * Chapter 10: V.-L. Nguyen, **Khac-Hoang Ngo**, T.-T.-Q. Tran, V.-H. Le, and L.-T. Nguyen, “Physical-layer network coding for SDR-based multimedia transmissions";
    * Chapter 11:  T.-T.-Q. Tran, V.-L. Nguyen, **Khac-Hoang Ngo**, L.-T. Nguyen, Q.-T. Nguyen, V.-H. Le, N.-Q.-B. Vo, and X.-N. Tran, “Implementation of cognitive physical-layer network coding based on OFDM/VFDM”. 

---
## Patents

1. **Khac-Hoang Ngo**, A. Decurninge, M. Guillaud, and S. Yang, "Transmitter and receiver communication apparatus for non-coherent communication." *U.S. Patent Application 17/243,679*, filed August 19, 2021.

---
## Journal Papers

1. **Khac-Hoang Ngo**, G. Durisi, A. Graell i Amat, P. Popovski, A. E. Kalor, and B. Soret, “Unsourced multiple access with common alarm messages: Network slicing for massive and critical IoT,” submitted to _IEEE Trans. Commun._, Feb. 2023.

1. **Khac-Hoang Ngo**, A. Lancho, G. Durisi, and A. Graell i Amat, “Unsourced multiple access with random user activity,” *IEEE Trans. Inf. Theory*, Feb. 2023. [[arXiv]](https://arxiv.org/pdf/2202.06365.pdf) [[Simulation code]](https://github.com/khachoang1412/UMA_random_user_activity)

1. **Khac-Hoang Ngo**, S. Yang, M. Guillaud, and A. Decurninge, "Joint constellation design for the non-coherent MIMO multiple-access channel," *IEEE Trans. Inf. Theory*, 68, (11), 7281-7305, Nov. 2022. [[arXiv]](https://arxiv.org/abs/2009.11548.pdf)

1. A. U. Rahman, F. Fourati, **Khac-Hoang Ngo**, A. Jindal, and M.-S. Alouini, “Network graph generation through adaptive clustering and infection dynamics: A step towards global connectivity,” *IEEE Commun. Lett.*, 26, (4), 783–787, Jan. 2022. [[arXiv]](https://arxiv.org/pdf/2111.10690.pdf) 

1. G. Gur, A. Kalla, C. de Alwis, Q.-V. Pham, **Khac-Hoang Ngo**, M. Liyanage, and P. Porambage, “Integration of ICN and MEC in 5G and beyond networks: Mutual benefits, use cases, challenges, standardization, and future research,” _IEEE Open J. Commun. Soc._, 3, 1382–1412, Aug. 2022.

1. F. Zhang, **Khac-Hoang Ngo**, M. Guillaud, S. Yang, and A. Nosratinia, "Transmit correlation diversity: Generalization, new techniques, and improved bounds," *IEEE Trans. Inf. Theory*,  68, (6), 3841–3869, Jan. 2022. [[arXiv]](https://arxiv.org/abs/2104.09711.pdf). (Zhang and Ngo contributed equally to the technical content)

1. T.-T.-Q. Tran, L. V. Nguyen, **Khac-Hoang Ngo**, L.-T. Nguyen, Q.-T. Nguyen, N.-Q.-B. Vo, X.-N. Tran, E. Bastug, S. Azarian, M. Debbah, and P. Duhamel, "Network coding with multimedia transmission and cognitive networking: An implementation based on software-defined radio," *REV Journal on Electronics and Communications*, 10, (3-4), 72–84, 2020, **Invited Article**.

1. **Khac-Hoang Ngo**, M. Guillaud, A. Decurninge, S. Yang, and P. Schniter, "Multi-user detection based on expectation propagation for the non-coherent SIMO multiple access channel," *IEEE Trans. Wireless Commun.*, vol. 19, no. 9, pp. 6145-6161, Sept. 2020. [[arXiv]](https://arxiv.org/pdf/1905.11152.pdf)

1. **Khac-Hoang Ngo**, A. Decurninge, M. Guillaud, and S. Yang, "Cube-split: A structured Grassmannian constellation for non-coherent SIMO communications," *IEEE Trans. Wireless Commun.*, vol. 19, no. 3, pp. 1948-1964, March 2020 [[arXiv]](https://arxiv.org/pdf/1905.08745.pdf)

1. **Khac-Hoang Ngo**, S. Yang and M. Kobayashi, "Scalable Content Delivery With Coded Caching in Multi-Antenna Fading Channels," in *IEEE Trans. Wireless Commun.*, vol. 17, no. 1, pp. 548-562, Jan. 2018. [[arXiv]](https://arxiv.org/pdf/1703.06538.pdf)

---
## Conference papers

1.  N.-S. Duong, Q.-T. Nguyen, **Khac-Hoang Ngo**, and T.-M. Dinh-Thi, “Sparse Bayesian learning with atom refinement for mmWave MIMO channel estimation,” in submitted to _IEEE Statistical Signal Processing Workshop (SSP)_, Hanoi, Vietnam, Jul. 2023.

1. N. T. Nguyen, N. Shlezinger, **Khac-Hoang Ngo**, V.-D. Nguyen, and M. Juntti, “Joint communications and sensing design for multi-carrier MIMO systems,” in submitted to _IEEE Statistical Signal Processing Workshop (SSP)_, Hanoi, Vietnam, Jul. 2023.

1. **Khac-Hoang Ngo**, A. Graell i Amat, and G. Durisi, “Irregular repetition slotted ALOHA over the binary adder channel,” in _IEEE International Conference on Communications (ICC)_, Rome, Italy, May 2023. [[arXiv]](https://arxiv.org/pdf/2302.11720.pdf)

1. **Khac-Hoang Ngo,** G. Durisi, A. Graell i Amat, P. Popovski, B. Soret, and A. E. Kalør, “Unsourced multiple access for heterogeneous traffic requirements,” in 56th _Asilomar Conference on Signals, Systems, and Computers_, **Invited Paper**, CA, USA, Oct. 2022

1. **Khac-Hoang Ngo**, G. Durisi, and A. Graell i Amat, “Age of Information in Prioritized Random Access,” in *55rd Asilomar Conference on Signals, Systems, and Computers*, CA, USA, Nov. 2021, **invited paper**. [[arXiv]](https://arxiv.org/pdf/2112.01182.pdf) [[Video]](https://youtu.be/xtyOsdLLIso) [[Simulation code]](https://github.com/khachoang1412/AoI_prioritized_random_access)

1. **Khac-Hoang Ngo**, A. Lancho, G. Durisi, and A. Graell i Amat, "Massive uncoordinated access with random user activity," in *IEEE International Symposium on Information Theory (ISIT)*, 2021. [[arXiv]](https://arxiv.org/pdf/2103.09721.pdf) [[Video]](https://youtu.be/6Vr5ZKZzIjw) [[Simulation code]](https://github.com/khachoang1412/UMA_random_user_activity)

1. **Khac-Hoang Ngo**, N. T. Nguyen, T. Q. Dinh, T.-M. Hoang, and M. Juntti, "Low-latency and secure computation offloading assisted by hybrid relay-reflecting intelligent surface," in *International Conference on Advanced Technologies for Communications (ATC)*, Hanoi, Vietnam, Oct. 2021, **Best Paper Award**. [[arXiv]](https://arxiv.org/pdf/2109.01335.pdf) [[Video]](https://youtu.be/B1Y-CbGewAw) [[Simulation code]](https://github.com/khachoang1412/HRRIS_for_MEC)

1. **Khac-Hoang Ngo** and S. Yang, "A generalized Gaussian model for wireless communications," in *IEEE International Symposium on Information Theory (ISIT)*, 2021. [[PDF]](https://research.chalmers.se/publication/522211/file/522211_AdditionalFile_2ad4209d.pdf) [[Video]](https://youtu.be/8ViFwzyItFc)

1. **Khac-Hoang Ngo** and S. Yang, “A Riemannian metric for non-coherent constellation design and its application to multiple access channel,” in *25th International ITG Workshop on Smart Antennas*, French Riviera, France, Nov. 2021. 

1. **Khac-Hoang Ngo**, F. Zhang, S. Yang, and A. Nosratinia, “Two-user MIMO broadcast channel with transmit correlation diversity: Achievable rate regions,” in *IEEE Information Theory Workshop (ITW)*, 2021. [[Video]](https://youtu.be/IrTPDHCO9O4)

1. **Khac-Hoang Ngo**, S. Yang, and M. Guillaud, “The optimal DoF for the noncoherent MIMO channel with generic block fading,” in *2020 IEEE Information Theory Workshop (ITW)*, Apr. 2021. [[arXiv]](https://arxiv.org/pdf/2009.11556.pdf) [[Video]](https://youtu.be/4gbvQplQITA)

1. **Khac-Hoang Ngo**, S. Yang, M. Guillaud, and A. Decurninge, “Noncoherent MIMO multiple-access channels: A joint constellation design,” in 2020 *IEEE Information Theory Workshop (ITW)*, Apr. 2021. [[Video]](https://youtu.be/owQ7qkDbH3g)

1. **Khac-Hoang Ngo**, M. Guillaud, A. Decurninge, S. Yang, S. Sarkar, and P. Schniter, “Non-coherent multiuser detection based on expectation propagation,” in *53rd Asilomar Conference on Signals, Systems, and Computers*, CA, USA, Nov. 2019.

1. **Khac-Hoang Ngo**, A. Decurninge, M. Guillaud, and S. Yang, “A multiple access scheme for non-coherent SIMO communications,” in *52nd Asilomar Conference on Signals, Systems, and Computers*, Oct. 2018, pp.1846–1850.

1. **Khac-Hoang Ngo**, S. Yang, and M. Guillaud, “The optimal DoF region for the two-user non-coherent SIMO multiple-access channel,” in *IEEE Information Theory Workshop (ITW)*, Guangzhou, China, Nov. 2018. [[arXiv]](https://arxiv.org/pdf/1806.04102.pdf)

1. A. Ghorbel, **Khac-Hoang Ngo**, R. Combes, M. Kobayashi, and S. Yang, “Opportunistic content delivery in fading broadcast channels,” in *IEEE Global Communications Conference (GLOBECOM)*, Singapore, Dec. 2017, pp.1–6. [[arXiv]](https://arxiv.org/pdf/1702.02179.pdf)

1. **Khac-Hoang Ngo**, A. Decurninge, M. Guillaud, and S. Yang, “Design and analysis of a practical codebook for non-coherent communications,” in *51st Asilomar Conference on Signals, Systems, and Computers*, CA, USA, Oct. 2017, pp.1237–1241.

1. **Khac-Hoang Ngo**, S. Yang, and M. Guillaud, “An achievable DoF region for the two-user non-coherent MIMO broadcast channel with statistical CSI,” in *2017 IEEE Information Theory Workshop (ITW)*, Taiwan, Nov. 2017, pp.604–608.

1. **Khac-Hoang Ngo**, S. Yang, and M. Kobayashi, “Cache-aided content delivery in MIMO channels,” in *54th Annual Allerton Conference on Communication, Control, and Computing (Allerton)*, IL, USA, Sep. 2016, pp.93–100.

1. **Khac-Hoang Ngo**, S. Yang, M. Kobayashi, and K. Huang, “On the complementary roles of massive MIMO and coded caching for content delivery,” in *International Conference on Advanced Technologies for Communications (ATC)*, Hanoi, Vietnam, Oct. 2016, pp.237–242.

1. S. Yang, **Khac-Hoang Ngo**, and M. Kobayashi, “Content delivery with coded caching and massive MIMO in 5G,” in *9th International Symposium on Turbo Codes and Iterative Information Processing (ISTC)*, Brest, France, Sep. 2016, pp.370–374.

1. **Khac-Hoang Ngo** and Quoc-Tuan Nguyen, “Implementation of network coding scheme in universal software radio peripheral,” in *IEICE International Conference on Integrated Circuits, Design, and Verification (ICDV)*, Hanoi, Vietnam, Nov. 2014.

1. Thai-Mai Dinh Thi, Quoc-Tuan Nguyen, and **Khac-Hoang Ngo**, “Implementation of spectrum sensing scheme in software-defined radio testbed,” in *IEICE International Conference on Integrated Circuits, Design, and Verification (ICDV)*, Hanoi, Vietnam, Nov. 2014.

---
## Conference posters

1.  F. Fourati, A. U. Rahman, **Khac-Hoang Ngo**, E. J. Oughton, A. Jindal, and M.-S. Alouini, “Optimal network deployment for global connectivity,” in _The European Conference on Networks and Communications (EuCNC) & 6G Summit_, Grenoble, France, Jun. 2022.

1. **Khac-Hoang Ngo**, “Age of information in prioritized random-access,” in _IEEE SPS - EURASIP Summer School on “Defining 6G: Theory, Applications, and Enabling Technologies”_, Linkoping, Sweden, Aug. 2022.

1. **Khac-Hoang Ngo**, “Massive uncoordinated access for the Internet of Things: A novel information theoretic framework,” in _9th Heidelberg Laureate Forum (HLF)_, Heidelberg, Germany, Sep. 2022.

1. **Khac-Hoang Ngo**, S. Yang, and M. Guillaud, “Generalized Gaussian model for data-driven learning in communications,” in *International Zurich Seminar on Information and Communication (IZS)*, Zurich, Switzerland, Feb. 2020.

1. T. T. Q. Tran, V.-L. Nguyen, **Khac-Hoang Ngo**, L.-T. Nguyen, Q.-T. Nguyen, E. Bastug, S. Azarian, M. Debbah, and P. Duhamel, “Network coding and information security in industry 4.0,” in *1st ASEAN IVO Workshop on Cybersecurity and Information Security in Industry 4.0*, Hanoi, Vietnam, Mar. 2019.

---
## Technical reports

1. **Khac-Hoang Ngo**, “Solar panel charge controller,” Dept. of Electrical and Computer Engineering, National University of Singapore, Singapore, Internship report, Aug. 2012.

---
## Theses

* [Ph.D.] Khac-Hoang Ngo, "Noncoherent Wireless Communications: Fundamental Limits and System Design", CentraleSupélec, University of Paris-Saclay, France, Sep. 2016. [**(2021 "Signal, Image & Vision Ph.D. Thesis Prize" by Club EEA, GRETSI and GdR-ISIS, France)**](http://gretsi.fr/prix-de-these2021/resultats.php) [**(Impact Science 2nd Prize, CentraleSupélec Foundation, France)**](https://www.fondation-centralesupelec.fr/ceremonie-de-remise-des-prix-de-these-2021-de-la-fondation-centralesupelec/) [[PDF]](https://tel.archives-ouvertes.fr/tel-02900446/document) [[Short Presentation]](https://youtu.be/EbpBFH7-kpY)

* [MSc] Khac-Hoang Ngo, “Performance Analysis of Coded Caching”, CentraleSupélec, University of Paris-Saclay, France, Sep. 2016. [[PDF]](https://www.researchgate.net/publication/308636446_Performance_Analysis_of_Coded_Caching)

* [BSc] Khac-Hoang Ngo, “SDR Implementation of OFDM-based Physical Layer Network Coding”, University of Engineering and Technology, Vietnam national University Hanoi, Vietnam, Jun. 2014. [[PDF]](https://www.researchgate.net/publication/308636526_SDR_Implementation_of_OFDM-based_Physical_Layer_Network_Coding)
