export type NavItem = {
  href: string;
  label: string;
};

export type HomeCard = {
  href: string;
  title: string;
  summary: string;
};

export type Highlight = {
  year: string;
  title: string;
  summary: string;
};

export type NewsItem = {
  date: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  href?: string;
};

export type FacultyPublication = {
  title: string;
  citation: string;
  href?: string;
};

export type FacultyMember = {
  slug: string;
  name: string;
  role: string;
  email: string;
  portrait: string;
  portraitPosition?: string;
  office?: string;
  direction: string;
  officialHref: string;
  bio: string[];
  education: string[];
  experience: string[];
  focus: string[];
  selectedWorks: FacultyPublication[];
};

export type ResearchTheme = {
  title: string;
  systems: string;
  methods: string;
  goal: string;
};

export type Publication = {
  title: string;
  authors: string;
  publishedOn: string;
  sortDate: string;
  venue: string;
  year: string;
  result: string;
  significance: string;
  sourceHref?: string;
  image?: string;
};

export type CultivationTrack = {
  title: string;
  summary: string;
};

export type StudentMember = {
  name: string;
  email: string;
  role: string;
  school: string;
  portrait?: string;
  portraitPosition?: string;
};

export type JoinCategory = {
  title: string;
  details: string;
};

export type ResearchPlatform = {
  title: string;
  summary: string;
  details: string;
  image: string;
  equipment?: string[];
};

export type EquipmentItem = {
  title: string;
  image: string;
  summary: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/research-team", label: "Research Team" },
  { href: "/join-us", label: "Join Us" },
];

export const siteMeta = {
  shortName: "SSQS",
  groupName: "Solid-State Quantum Storage Laboratory",
  institution: "Shenzhen International Quantum Academy",
  affiliation: "Shenzhen Branch, Hefei National Laboratory",
  location: "Shenzhen, China",
  address:
    "\u6df1\u5733\u5e02\u798f\u7530\u533a\u798f\u4fdd\u8857\u9053\u798f\u7530\u4fdd\u7a0e\u533a\u69df\u6994\u905310\u53f7\uff0c\u5b9e\u9a8c\u5ba4108",
  primaryContact: "zhongmanjin@iqasz.cn",
  filingNumber: "\u9102ICP\u59072026011934\u53f7-1",
  filingHref: "https://beian.miit.gov.cn/#/Integrated/index",
  copyright: "Copyright \u00A9 2026 SSQS. All Rights Reserved.",
  headline: "Core hardware for next-generation quantum information using rare-earth-ion-doped crystals.",
  summary:
    "The Solid-State Quantum Storage Laboratory is dedicated to developing the core hardware for next-generation quantum information technologies using rare-earth-ion-doped crystals. Bringing together new material discovery, performance optimization of quantum memories, and the design of quantum network protocols, the laboratory serves as a multidisciplinary platform at the forefront of research.",
};

export const homeCards: HomeCard[] = [
  {
    href: "/research",
    title: "Research",
    summary: "Selected achievements and the experimental platforms supporting SSQS research.",
  },
  {
    href: "/research-team",
    title: "Research Team",
    summary: "Faculty leads and student researchers, with profile space reserved for portraits and individual details.",
  },
  {
    href: "/join-us",
    title: "Join Us",
    summary: "Open routes for students, engineers, postdoctoral researchers, and collaborators.",
  },
];

export const homeHighlights: Highlight[] = [
  {
    year: "2026",
    title: "Telecom-compatible node pathway",
    summary: "Erbium-doped stoichiometric materials extend the roadmap from storage physics to quantum-network interfaces.",
  },
  {
    year: "2025",
    title: "Ultra-long coherence in a solid",
    summary: "Nuclear-spin coherence beyond 10 hours defines the long-storage frontier of the lab.",
  },
  {
    year: "2025",
    title: "Ceramic route for quantum memories",
    summary: "Eu3+:Y2O3 oxide ceramics show that scalable materials can still preserve strong coherence properties.",
  },
];

export const homeNews: NewsItem = {
  date: "December 2025",
  category: "Laboratory",
  title: "Group portrait of the current SSQS research team",
  summary:
    "Members of SSQS gathered in the laboratory for a new group portrait. The image reflects the current research team working on rare-earth solid-state quantum storage, spectroscopy, and experimental platform development, and it will serve as a visual entry point for future laboratory updates on publications, honors, conferences, and student milestones.",
  image: "/assets/news/group-photo.jpg",
};

export const facultyMembers: FacultyMember[] = [
  {
    slug: "manjin-zhong",
    name: "Manjin Zhong",
    role: "Principal Investigator",
    email: "zhongmanjin@iqasz.cn",
    portrait: "/assets/faculty/manjin-zhong.jpg",
    portraitPosition: "center 18%",
    office: "Hefei National Laboratory, Shenzhen International Quantum Academy",
    direction:
      "Rare-earth-ion-doped solid-state quantum memory, long-lived coherence, and precision spectroscopy.",
    officialHref: "https://faculty.sustech.edu.cn/zhongmj/en/",
    bio: [
      "Manjin Zhong leads SSQS research on rare-earth-ion-doped solid-state quantum memories, long-lived coherence, and precision spectroscopy in solid hosts.",
      "Her academic path connects Xiamen University, the Laser Physics Centre at the Australian National University, and postdoctoral work at ANU before joining the group in Shenzhen, giving SSQS a strong foundation in both fundamental spectroscopy and quantum-memory-oriented experiments.",
    ],
    education: [
      "B.S., Xiamen University",
      "M.S., Xiamen University",
      "Ph.D., Laser Physics Centre, Australian National University",
    ],
    experience: [
      "Associate Researcher, Hefei National Laboratory, Shenzhen International Quantum Academy",
      "Postdoctoral Researcher, Laser Physics Centre, Australian National University",
    ],
    focus: [
      "Rare-earth-ion quantum memories in solid-state hosts",
      "Optical and hyperfine coherence in Eu-based systems",
      "Long-term storage architectures for future quantum networks",
    ],
    selectedWorks: [
      {
        title: "Nuclear Spins in a Solid Exceeding 10-Hour Coherence Times for Ultra-Long-Term Quantum Storage",
        citation:
          "F. Wang, M. Ren, W. Sun, M. Guo, M. J. Sellars, R. L. Ahlefeldt, J. G. Bartholomew, J. Yao, S. Liu, and M. Zhong, PRX Quantum 6, 010302 (2025).",
        href: "https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.6.010302",
      },
      {
        title: "Long-lived optical coherence and spin lifetimes in Eu3+:Y2O3 oxide ceramics for quantum memories",
        citation:
          "S. Liu, M. Ren, W. Xiao, J. Wang, Y. Liu, D. Serrano, P. Goldner, D. Tang, X. An, F. Wang, and M. Zhong, Communications Physics 8, 338 (2025).",
        href: "https://www.nature.com/articles/s42005-025-02259-y",
      },
      {
        title: "Optical coherence and hyperfine structure of the 7F0<->5D0 transition in Eu3+:CaWO4",
        citation:
          "X. An, W. Sun, Z. Xu, W. Xiao, M. Ren, M. Guo, S. Liu, F. Wang, and M. Zhong, Journal of Luminescence 281, 121209 (2025).",
        href: "https://www.sciencedirect.com/science/article/abs/pii/S0022231325001498",
      },
      {
        title: "Rare-earth quantum memories: The experimental status quo",
        citation:
          "M. Guo, S. Liu, W. Sun, M. Ren, F. Wang, and M. Zhong, Frontiers of Physics 18, 21303 (2023).",
        href: "https://journal.hep.com.cn/fop/EN/10.1007/s11467-022-1240-8",
      },
      {
        title: "Quantum information processing using frozen core Y3+ spins in Eu3+:Y2SiO5",
        citation: "M. Zhong, R. Ahlefeldt, M. Sellars, New Journal of Physics 21, 033019 (2019).",
        href: "https://doi.org/10.1088/1367-2630/ab0cb7",
      },
      {
        title: "Concept for single satellite global quantum key distribution using a solid-state quantum memory",
        citation: "S.-E. Wittig, S.-M. Wittig, A. Berquand, M. Zhong, and M. Sellars, IAC-17-B2.7.1 (2017).",
        href: "https://researchportalplus.anu.edu.au/en/publications/concept-for-single-satellite-global-quantum-key-distribution-usin/",
      },
      {
        title: "Optically addressable nuclear spins in a solid with a six-hour coherence time",
        citation:
          "M. Zhong, M. Hedges, R. Ahlefeldt, J. Bartholomew, S. Beavan, S. Wittig, J. Longdell, and M. Sellars, Nature 517, 177-180 (2015).",
        href: "https://www.nature.com/articles/nature14025",
      },
      {
        title: "Minimizing Zeeman sensitivity on optical and hyperfine transitions in EuCl3路6H2O to extend coherence times",
        citation:
          "R. Ahlefeldt, M. Zhong, J. Bartholomew, and M. Sellars, Journal of Luminescence 143, 193-200 (2013).",
        href: "https://www.sciencedirect.com/science/article/abs/pii/S0022231313002573",
      },
    ],
  },
  {
    slug: "shuping-liu",
    name: "Shuping Liu",
    role: "Associate Researcher",
    email: "liushuping@iqasz.cn",
    portrait: "/assets/faculty/shuping-liu.jpg",
    portraitPosition: "center 12%",
    office: "Room 325, Shenzhen International Quantum Academy",
    direction:
      "Rare earth-doped optical functional materials, solid-state quantum storage, quantum communication, and quantum computing.",
    officialHref: "https://www.sziqa.ac.cn/en/category/1089/detail/6956",
    bio: [
      "Shuping Liu conducts research in solid-state quantum memory, quantum communication, and quantum computing, with a particular focus on rare-earth-doped photonic materials, high-resolution spectroscopic characterization, and coherent control.",
      "Her work bridges materials preparation, microstructure engineering, and coherence benchmarking, helping SSQS connect quantum-memory physics with practical rare-earth material platforms and devices.",
    ],
    education: [
      "2011.09-2016.06, Ph.D., Shanghai Institute of Ceramics, Chinese Academy of Sciences",
      "2014.10-2015.10, Joint supervision, Institute of Physics, Academy of Sciences of the Czech Republic",
      "2011.09-2012.07, Joint supervision, University of Science and Technology of China",
      "2007.09-2011.06, B.E., School of Materials Science and Engineering, Wuhan University of Technology",
    ],
    experience: [
      "2023.02-present, Associate Researcher, Hefei National Laboratory, Shenzhen International Quantum Academy",
      "2019.08-2023.01, Research Assistant Professor, Southern University of Science and Technology",
      "2017.02-2019.07, Postdoctoral Researcher, CNRS / ENSCP / PSL University",
    ],
    focus: [
      "Rare-earth crystals and oxide ceramics",
      "Material optimization for optical coherence and spin lifetime",
      "Micro and nano rare-earth platforms for scalable devices",
    ],
    selectedWorks: [
      {
        title: "Long-lived optical coherence and spin lifetimes in Eu3+:Y2O3 oxide ceramics for quantum memories",
        citation:
          "S. Liu, M. Ren, W. Xiao, J. Wang, Y. Liu, D. Serrano, P. Goldner, D. Tang, X. An, F. Wang, and M. Zhong, Communications Physics 8, 338 (2025).",
        href: "https://www.nature.com/articles/s42005-025-02259-y",
      },
      {
        title: "Decoherence characterization and quantum memory design in 167Er3+:Y2SiO5",
        citation:
          "M. Guo, Q. Li, Z. Xu, S. Liu, F. Wang, and M. Zhong, Frontiers of Physics 21, 033201 (2026).",
        href: "https://doi.org/10.15302/frontphys.2026.033201",
      },
      {
        title: "Realization of strong coupling between Er3+:CaWO4 crystal and the loop-gap resonator for a hybrid quantum system",
        citation:
          "Q. Li, M. Ren, S. Liu, F. Wang, and M. Zhong, Applied Physics Letters 127, 114001 (2025).",
        href: "https://doi.org/10.1063/5.0285984",
      },
      {
        title: "Optical coherence and hyperfine structure of the 7F0<->5D0 transition in Eu3+:CaWO4",
        citation:
          "X. An, W. Sun, Z. Xu, W. Xiao, M. Ren, M. Guo, S. Liu, F. Wang, and M. Zhong, Journal of Luminescence 281, 121209 (2025).",
        href: "https://www.sciencedirect.com/science/article/abs/pii/S0022231325001498",
      },
      {
        title: "Multimodal Purcell enhancement and optical coherence of Eu3+ ions in a single nanoparticle coupled to a microcavity",
        citation:
          "T. Eichhorn, N. Jobbitt, S. Bieling, S. Liu, T. Krom, D. Serrano, R. Huber, U. Lemmer, H. de Riedmatten, P. Goldner, and D. Hunger, Nanophotonics 14, 1817-1826 (2025).",
        href: "https://doi.org/10.1515/nanoph-2024-0721",
      },
      {
        title: "Optical coherence properties of Kramers' rare-earth ions at the nanoscale for quantum applications",
        citation:
          "M. K. Alqedra, C. Deshmukh, S. Liu, D. Serrano, S. P. Horvath, S. Rafie-Zinedine, A. Abdelatief, L. Rippe, S. Kr枚ll, B. Casabone, A. Ferrier, A. Tallaire, P. Goldner, H. de Riedmatten, and A. Walther, Physical Review B 108, 075107 (2023).",
        href: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.108.075107",
      },
      {
        title: "Defect Engineering for Quantum Grade Rare-Earth Nanocrystals",
        citation: "S. Liu, A. Fossati, D. Serrano, A. Tallaire, A. Ferrier, and P. Goldner, ACS Nano 14, 9953-9962 (2020).",
        href: "https://pubs.acs.org/doi/10.1021/acsnano.0c03384",
      },
      {
        title: "A Frequency-Multiplexed Coherent Electro-optic Memory in Rare Earth Doped Nanoparticles",
        citation:
          "A. Fossati, S. Liu, J. Karlsson, A. Ikesue, A. Tallaire, A. Ferrier, D. Serrano, and P. Goldner, Nano Letters 20, 7087-7093 (2020).",
        href: "https://pubs.acs.org/doi/10.1021/acs.nanolett.0c02200",
      },
      {
        title: "Dynamic control of Purcell enhanced emission of erbium ions in nanoparticles",
        citation:
          "B. Casabone, C. Deshmukh, S. Liu, D. Serrano, A. Ferrier, T. Hummer, P. Goldner, D. Hunger, and H. de Riedmatten, Nature Communications 12, 3570 (2021).",
        href: "https://www.nature.com/articles/s41467-021-23632-9",
      },
      {
        title: "Towards Bright and Fast Lu3Al5O12:Ce,Mg Optical Ceramics Scintillators",
        citation:
          "S. Liu, J. A. Mares, X. Feng, A. Vedda, M. Fasoli, Y. Shi, H. Kou, A. Beitlerova, L. Wu, C. D'Ambrosio, Y. Pan, and M. Nikl, Advanced Optical Materials 4, 731-739 (2016).",
        href: "https://doi.org/10.1002/adom.201500691",
      },
    ],
  },
  {
    slug: "fudong-wang",
    name: "Fudong Wang",
    role: "Associate Researcher",
    email: "fdwang.phys@foxmail.com",
    portrait: "/assets/faculty/fudong-wang.jpg",
    portraitPosition: "center 14%",
    office: "Room 327, Shenzhen International Quantum Academy",
    direction: "Quantum optics and quantum memory implemented in rare-earth-based solid-state materials.",
    officialHref: "https://www.sziqa.ac.cn/en/category/1089/detail/7026",
    bio: [
      "Fudong Wang focuses on quantum optics, particularly quantum memory implemented in rare-earth-based solid-state materials.",
      "His recent work emphasizes ultralong coherence, ultra-high-efficiency quantum memories, optical and microwave cavity coupling with rare-earth ions, and the search for new materials for solid-state quantum storage.",
    ],
    education: [
      "2011.08-2016.06, Ph.D., Chinese University of Hong Kong",
      "2007.09-2011.06, B.S., University of Science and Technology of China",
    ],
    experience: [
      "2025.02-present, Associate Researcher, Hefei National Laboratory, Shenzhen International Quantum Academy",
      "2018.11-2025.01, Assistant Researcher, Southern University of Science and Technology",
      "2016.10-2018.09, Postdoctoral Researcher, University of Toronto",
    ],
    focus: [
      "Quantum optics and rare-earth solid-state memory",
      "Coherence engineering and cavity-coupled rare-earth ions",
      "Experimental instrumentation for ultralong storage",
    ],
    selectedWorks: [
      {
        title: "Nuclear Spins in a Solid Exceeding 10-Hour Coherence Times for Ultra-Long-Term Quantum Storage",
        citation:
          "F. Wang, M. Ren, W. Sun, M. Guo, M. J. Sellars, R. L. Ahlefeldt, J. G. Bartholomew, J. Yao, S. Liu, and M. Zhong, PRX Quantum 6, 010302 (2025).",
        href: "https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.6.010302",
      },
      {
        title: "Decoherence characterization and quantum memory design in 167Er3+:Y2SiO5",
        citation:
          "M. Guo, Q. Li, Z. Xu, S. Liu, F. Wang, and M. Zhong, Frontiers of Physics 21, 033201 (2026).",
        href: "https://doi.org/10.15302/frontphys.2026.033201",
      },
      {
        title: "Realization of strong coupling between Er3+:CaWO4 crystal and the loop-gap resonator for a hybrid quantum system",
        citation:
          "Q. Li, M. Ren, S. Liu, F. Wang, and M. Zhong, Applied Physics Letters 127, 114001 (2025).",
        href: "https://doi.org/10.1063/5.0285984",
      },
      {
        title: "Long-lived optical coherence and spin lifetimes in Eu3+:Y2O3 oxide ceramics for quantum memories",
        citation:
          "S. Liu, M. Ren, W. Xiao, J. Wang, Y. Liu, D. Serrano, P. Goldner, D. Tang, X. An, F. Wang, and M. Zhong, Communications Physics 8, 338 (2025).",
        href: "https://www.nature.com/articles/s42005-025-02259-y",
      },
      {
        title: "Optical coherence and hyperfine structure of the 7F0<->5D0 transition in Eu3+:CaWO4",
        citation:
          "X. An, W. Sun, Z. Xu, W. Xiao, M. Ren, M. Guo, S. Liu, F. Wang, and M. Zhong, Journal of Luminescence 281, 121209 (2025).",
        href: "https://www.sciencedirect.com/science/article/abs/pii/S0022231325001498",
      },
      {
        title: "Rare-earth quantum memories: The experimental status quo",
        citation:
          "M. Guo, S. Liu, W. Sun, M. Ren, F. Wang, and M. Zhong, Frontiers of Physics 18, 21303 (2023).",
        href: "https://journal.hep.com.cn/fop/EN/10.1007/s11467-022-1240-8",
      },
      {
        title: "Conductivity Spectrum of Ultracold Atoms in an Optical Lattice",
        citation:
          "R. Anderson, F. Wang, P. Xu, V. Venu, S. Trotzky, F. Chevy, and J. H. Thywissen, Physical Review Letters 122, 153602 (2019).",
        href: "https://doi.org/10.1103/PhysRevLett.122.153602",
      },
      {
        title: "Observation of resonant scattering between ultracold heteronuclear Feshbach molecules",
        citation:
          "F. Wang, X. Ye, M. Guo, D. Blume, and D. Wang, Physical Review A 100, 042706 (2019).",
        href: "https://doi.org/10.1103/PhysRevA.100.042706",
      },
      {
        title: "Creation of an Ultracold Gas of Ground-State Dipolar 23Na87Rb Molecules",
        citation:
          "M. Guo, B. Zhu, B. Lu, X. Ye, F. Wang, R. Vexiau, N. Bouloufa-Maafa, G. Quemener, O. Dulieu, and D. Wang, Physical Review Letters 116, 205303 (2016).",
        href: "https://doi.org/10.1103/PhysRevLett.116.205303",
      },
      {
        title: "Formation of ultracold NaRb Feshbach molecules",
        citation:
          "F. Wang, X. He, X. Li, B. Zhu, J. Chen, and D. Wang, New Journal of Physics 17, 035003 (2015).",
        href: "https://doi.org/10.1088/1367-2630/17/3/035003",
      },
    ],
  },
];

export const facultyContacts = facultyMembers.map((member) => ({
  email: member.email,
  href: `/research-team/${member.slug}`,
  name: member.name,
}));

export function getFacultyMember(slug: string) {
  return facultyMembers.find((member) => member.slug === slug);
}

export const researchThemes: ResearchTheme[] = [
  {
    title: "Discovering New Materials",
    systems: "Novel rare-earth-ion-doped crystals and polycrystalline platforms, including nanoparticles and transparent ceramics.",
    methods: "Spectroscopic and coherence characterization across rare-earth hosts with different bandwidth, noise, and processing properties.",
    goal: "Identify material platforms for quantum memories with broader bandwidth, longer coherence times, and lower noise.",
  },
  {
    title: "Building High-Performance Quantum Memories",
    systems: "Rare-earth solid-state memories designed for high efficiency, long lifetime, and large multimode capacity.",
    methods: "High ion densities, impedance-matched optical cavities, ZEFOZ operation points, dynamical decoupling, and AFC-based multimode storage.",
    goal: "Develop next-generation quantum memories with record-breaking storage performance and scalable capacity.",
  },
  {
    title: "Towards Quantum Networks",
    systems: "Multiple interconnected memory nodes, repeater-style architectures, and secure communication demonstrations.",
    methods: "Prototype quantum repeaters, entanglement swapping and purification, routing protocols, and ultralong-lived portable memory concepts.",
    goal: "Build the foundations of the quantum internet around high-performance solid-state memory nodes.",
  },
  {
    title: "Hybrid Quantum Systems",
    systems: "Rare-earth-based memories coupled with quantum dots, single-photon sources, cold atoms, ion traps, and solid-state qubits.",
    methods: "Cross-platform interface design linking memory elements with quantum emitters and quantum processing units.",
    goal: "Create hybrid architectures that connect quantum memories with sources, transducers, and processors.",
  },
];

export const publications: Publication[] = [
  {
    title: "Towards telecom-compatible quantum nodes using erbium-doped stoichiometric EuCl3 hydrate crystals",
    authors:
      "Mucheng Guo, Wanting Xiao, Zongfeng Li, Weiye Sun, Matthew J. Sellars, Rose L. Ahlefeldt, Ping Wang, Shuping Liu, Fudong Wang, and Manjin Zhong",
    publishedOn: "25 Feb 2026",
    sortDate: "2026-02-25",
    venue: "npj Quantum Information",
    year: "2026",
    result:
      "Introduces an erbium-doped stoichiometric rare-earth platform aimed at telecom-compatible solid-state quantum nodes.",
    significance:
      "This is the clearest step from long-lived storage physics toward deployable quantum-network interfaces.",
    sourceHref: "https://www.nature.com/articles/s41534-026-01203-4",
    image: "/assets/papers/erbium-eucl3-node.png",
  },
  {
    title: "Nuclear Spins in a Solid Exceeding 10-Hour Coherence Times for Ultra-Long-Term Quantum Storage",
    authors:
      "Fudong Wang, Miaomiao Ren, Weiye Sun, Mucheng Guo, Matthew J. Sellars, Rose L. Ahlefeldt, John G. Bartholomew, Juan Yao, Shuping Liu, and Manjin Zhong",
    publishedOn: "3 Jan 2025",
    sortDate: "2025-01-03",
    venue: "PRX Quantum",
    year: "2025",
    result:
      "Demonstrates nuclear-spin coherence beyond 10 hours in a rare-earth solid, one of the strongest storage-time benchmarks for a solid-state quantum-memory-relevant system.",
    significance:
      "Defines the long-lived storage frontier of the lab and anchors the SSQS identity around coherence-limited quantum memory.",
    sourceHref: "https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.6.010302",
    image: "/assets/papers/prx-10hour-storage.png",
  },
  {
    title: "Long-lived optical coherence and spin lifetimes in Eu3+:Y2O3 oxide ceramics for quantum memories",
    authors:
      "Shuping Liu, Miaomiao Ren, Wanting Xiao, Jun Wang, Yuting Liu, Diana Serrano, Philippe Goldner, Dingyuan Tang, Xiantong An, Fudong Wang, and Manjin Zhong",
    publishedOn: "18 Aug 2025",
    sortDate: "2025-08-18",
    venue: "Communications Physics",
    year: "2025",
    result:
      "Shows that Eu3+:Y2O3 ceramics can support strong optical coherence and long-lived spin states relevant to quantum memory.",
    significance:
      "Expands the lab's platform portfolio beyond high-quality single crystals and points toward more scalable material routes.",
    sourceHref: "https://www.nature.com/articles/s42005-025-02259-y",
    image: "/assets/papers/eu3-y2o3-ceramics.png",
  },
  {
    title: "Optical coherence and hyperfine structure of the 7F0<->5D0 transition in Eu3+:CaWO4",
    authors:
      "Xiantong An, Xin An, Weiye Sun, Zhehao Xu, Wanting Xiao, Miaomiao Ren, Mucheng Guo, Shuping Liu, Fudong Wang, and Manjin Zhong",
    publishedOn: "1 Jun 2025",
    sortDate: "2025-06-01",
    venue: "Journal of Luminescence",
    year: "2025",
    result:
      "Characterizes optical coherence and hyperfine structure in Eu3+:CaWO4, establishing a new host candidate for rare-earth coherence studies.",
    significance:
      "Represents the host-screening direction of the lab and the search for alternative environments with favorable coherence behavior.",
    sourceHref: "https://www.sciencedirect.com/science/article/abs/pii/S0022231325001498",
    image: "/assets/papers/eu3-cawo4-hyperfine.png",
  },
  {
    title: "Rare-earth quantum memories: The experimental status quo",
    authors: "Mucheng Guo, Shuping Liu, Weiye Sun, Miaomiao Ren, Fudong Wang, and Manjin Zhong",
    publishedOn: "16 Jan 2023",
    sortDate: "2023-01-16",
    venue: "Frontiers of Physics",
    year: "2023",
    result:
      "Provides a concise review of experimental rare-earth quantum memories, including protocols, materials, limitations, and opportunities.",
    significance:
      "Positions the lab within the field and offers a clean conceptual entry point for students, collaborators, and supporters.",
    sourceHref: "https://journal.hep.com.cn/fop/EN/10.1007/s11467-022-1240-8",
    image: "/assets/papers/rare-earth-quantum-memory-review.png",
  },
  {
    title: "Quantum coherence and applications of micro and nano rare-earth-doped crystals: recent progress",
    authors:
      "Mucheng Guo, Fudong Wang, Zhaogao Hu, Miaomiao Ren, Weiye Sun, Wanting Xiao, Shuping Liu, and Manjin Zhong",
    publishedOn: "20 Jun 2023",
    sortDate: "2023-06-20",
    venue: "Acta Physica Sinica",
    year: "2023",
    result:
      "Reviews the coherence properties and application routes of micro and nano rare-earth-doped materials.",
    significance:
      "Shows how the lab's interests extend from benchmark memory materials to miniaturized and device-oriented platforms.",
    sourceHref: "https://wulixb.iphy.ac.cn/en/article/id/2ebe7c11-57d7-4e29-9803-241f2877068c",
    image: "/assets/papers/micro-nano-rare-earth-review.png",
  },
];

export const researchPlatforms: ResearchPlatform[] = [
  {
    title: "Laser Spectroscopy and Optical Control Platform",
    summary:
      "Ultra-stable optical benches and tunable laser systems for rare-earth spectroscopy, coherence control, and quantum-memory preparation sequences.",
    details:
      "This platform supports precise optical addressing, AFC-related preparation, and sensitive signal collection for crystals, ceramics, and device-oriented rare-earth samples.",
    image: "/assets/lab/cryogenic-optics-lab.png",
    equipment: [
      "Ultra-stable optical platforms",
      "Narrowband tunable laser system",
      "Single-frequency tunable laser",
      "Photoelectric signal detection equipment",
    ],
  },
  {
    title: "Cryogenic and Strong-Field Infrastructure",
    summary:
      "Low-temperature and magnetic-field environments for long-coherence measurements, ZEFOZ studies, and benchmarking solid-state quantum memories.",
    details:
      "These systems make it possible to probe long-lived storage, extend coherence with dynamical decoupling, and evaluate rare-earth memory performance under controlled cryogenic conditions.",
    image: "/assets/lab/movable-solid-state-memory.png",
    equipment: ["Vacuum cryostat", "Low-temperature strong magnetic platform", "Vector field dilution refrigerator"],
  },
  {
    title: "Materials Preparation and Device Screening",
    summary:
      "Laboratory space for exploring new rare-earth crystals, polycrystalline platforms, and sample-development routes linked to quantum memory.",
    details:
      "This environment supports the transition from new material discovery to spectroscopic evaluation, helping SSQS identify hosts with broader bandwidth, longer coherence, and lower noise.",
    image: "/assets/lab/crystal-growth-lab.png",
  },
];

export const keyEquipment: EquipmentItem[] = [
  {
    title: "Vector Field Dilution Refrigerator",
    image: "/assets/equipment/vector-field-dilution-refrigerator.jpg",
    summary: "Cryogenic infrastructure for low-temperature experiments where long-lived coherence and memory performance must be measured under tightly controlled conditions.",
  },
  {
    title: "Vacuum Cryostat",
    image: "/assets/equipment/vacuum-cryostat.jpg",
    summary: "A compact cryogenic environment for rare-earth samples, used in optical and spectroscopic measurements relevant to solid-state quantum storage.",
  },
  {
    title: "Narrowband Tunable Laser System",
    image: "/assets/equipment/narrowband-tunable-laser-system.jpg",
    summary: "Laser source infrastructure for resolving narrow transitions and carrying out high-resolution spectroscopy in rare-earth hosts.",
  },
  {
    title: "Single-Frequency Tunable Laser",
    image: "/assets/equipment/single-frequency-tunable-laser.png",
    summary: "Precision optical control hardware used in preparation, addressing, and coherence-sensitive measurements.",
  },
  {
    title: "Photoelectric Signal Detection Equipment",
    image: "/assets/equipment/photoelectric-signal-detection-equipment.png",
    summary: "Detection and acquisition instrumentation for extracting weak optical signals from quantum-memory and spectroscopy experiments.",
  },
  {
    title: "Ultra-Stable Optical Platforms",
    image: "/assets/equipment/ultra-stable-optical-platforms.png",
    summary: "Low-vibration optical benches providing the mechanical stability required for long-running rare-earth experiments.",
  },
  {
    title: "Low-Temperature Strong Magnetic Platform",
    image: "/assets/equipment/low-temperature-strong-magnetic-platform.png",
    summary: "A strong-field experimental platform supporting magnetically tuned measurements in solid-state rare-earth systems.",
  },
];

export const studentMembers: StudentMember[] = [
  {
    name: "Miaomiao Ren",
    email: "12231257@mail.sustech.edu.cn",
    role: "Ph.D student",
    school: "Southern University of Science and Technology",
    portrait: "/assets/students/Miaomiao-Ren.jpg",
  },
  {
    name: "Weiye Sun",
    email: "12331503@mail.sustech.edu.cn",
    role: "Ph.D student",
    school: "Southern University of Science and Technology",
    portrait: "/assets/students/Weiye-Sun.jpg",
  },
  {
    name: "Mucheng Guo",
    email: "12331502@mail.sustech.edu.cn",
    role: "Ph.D student",
    school: "Southern University of Science and Technology",
    portrait: "/assets/students/Mucheng-Guo.jpg",
  },
  {
    name: "Zhenqi Xu",
    email: "12333060@mail.sustech.edu.cn",
    role: "Ph.D student",
    school: "Southern University of Science and Technology",
    portrait: "/assets/students/Zhenqi-Xu.jpg",
  },
  {
    name: "Zhehao Xu",
    email: "12333073@mail.sustech.edu.cn",
    role: "M.Sc student",
    school: "Southern University of Science and Technology",
    portrait: "/assets/students/Zhehao-Xu.jpg",
  },
  {
    name: "Xingmin He",
    email: "12531198@mail.sustech.edu.cn",
    role: "Ph.D student",
    school: "Southern University of Science and Technology",
    portrait: "/assets/students/Xingmin-He.jpg",
  },
  {
    name: "Yuxin Zhang",
    email: "12532267@mail.sustech.edu.cn",
    role: "M.Sc student",
    school: "Southern University of Science and Technology",
    portrait: "/assets/students/Yuxin-Zhang.jpg",
  },
  {
    name: "Hanwen Liang",
    email: "12543047@mail.sustech.edu.cn",
    role: "Ph.D student",
    school: "Southern University of Science and Technology",
    portrait: "/assets/students/Hanwen-Liang.jpg",
  },
  {
    name: "Yuhui Liu",
    email: "i.love.wind.sunny@gmail.com",
    role: "Incoming Ph.D student",
    school: "University of Science and Technology of China",
    portrait: "/assets/students/Yuhui-Liu.jpg",
  },
];

export const currentStudents: StudentMember[] = studentMembers;

export const alumniStudents: StudentMember[] = [];

export const joinContactInfo = {
  opening:
    "We are always looking for talented and passionate students, engineers, postdoctoral researchers, and collaborators in physics, quantum science, optics, materials science, and information science to join SSQS and help push the boundaries of the quantum world.",
  application:
    "Please email a brief introduction together with your CV. Supporting materials such as transcripts, publications, project summaries, or engineering experience are helpful for an initial discussion.",
  affiliation: `${siteMeta.institution}, ${siteMeta.affiliation}`,
  address: siteMeta.address,
  metro: "Recommended subway arrival: Fubao Station, Exit B",
  visitImage: "/assets/contact/visit-map.png",
  visitCaption:
    "The annotated map shows the recommended walking route from the subway station to the laboratory area, with LIA Hotel marked as a nearby accommodation option for visitors.",
  visitNotes: [
    "Use the highlighted route from Fubao Station Exit B to approach the laboratory area on foot.",
    "LIA Hotel, marked on the map, is a convenient nearby option for short academic visits.",
    "Please contact the laboratory by email before visiting so that arrival details can be coordinated in advance.",
  ],
};

export const joinCategories: JoinCategory[] = [
  {
    title: "Students",
    details:
      "We welcome students who are motivated by quantum information, optics, spectroscopy, materials, cryogenic experiments, or scientific programming. A strong willingness to learn experimental work matters as much as prior specialization.",
  },
  {
    title: "Engineers",
    details:
      "Applicants with strengths in optics, mechanics, control electronics, automation, instrumentation, or laboratory system integration are especially valuable for building stable experimental platforms.",
  },
  {
    title: "Postdoctoral researchers",
    details:
      "We are interested in researchers who can lead experiments, shape new material directions, and help bridge coherence physics with scalable solid-state quantum technology.",
  },
  {
    title: "How to apply",
    details:
      "Please prepare a CV, a brief statement of research interests, and supporting material such as transcripts or publications. Initial contact can be made by email to the relevant faculty member.",
  },
];

