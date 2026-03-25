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
  institution: "International Quantum Academy, and Shenzhen Branch, Hefei National Laboratory, Shenzhen",
  location: "Shenzhen, China",
  filingNumber: "鄂ICP备2026011934号-1",
  filingHref: "https://beian.miit.gov.cn/#/Integrated/index",
  headline: "Rare-earth quantum memories for long coherence and network-ready interfaces.",
  summary:
    "We investigate rare-earth-ion-doped materials for quantum memory, coherence spectroscopy, and scalable solid-state interfaces, with a focus on long-lived storage and experimentally grounded routes toward future quantum networks.",
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
  date: "To be updated",
  category: "News",
  title: "Latest updates from SSQS will appear here",
  summary:
    "This space is reserved for new publications, awards, graduations, conference participation, hosted meetings, engineering progress, and other important milestones from the laboratory.",
  image: "/assets/lab/cryogenic-optics-lab.png",
};

export const facultyMembers: FacultyMember[] = [
  {
    slug: "manjin-zhong",
    name: "Manjin Zhong",
    role: "Associate Researcher",
    email: "zhongmanjin@iqasz.cn",
    portrait: "/assets/faculty/manjin-zhong.jpg",
    portraitPosition: "center 18%",
    office: "Hefei National Laboratory, Shenzhen International Quantum Academy",
    direction:
      "Rare-earth-ion-doped solid-state quantum memory, long-lived coherence, and precision spectroscopy.",
    officialHref: "https://faculty.sustech.edu.cn/zhongmj/en/",
    bio: [
      "Manjin Zhong leads SSQS research on rare-earth-ion-doped solid-state quantum memories, long-lived coherence, and precision spectroscopy in solid hosts.",
      "His academic path connects Xiamen University, the Laser Physics Centre at the Australian National University, and postdoctoral work at ANU before joining the group in Shenzhen, giving SSQS a strong foundation in both fundamental spectroscopy and quantum-memory-oriented experiments.",
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
        title: "Minimizing Zeeman sensitivity on optical and hyperfine transitions in EuCl3·6H2O to extend coherence times",
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
          "M. K. Alqedra, C. Deshmukh, S. Liu, D. Serrano, S. P. Horvath, S. Rafie-Zinedine, A. Abdelatief, L. Rippe, S. Kröll, B. Casabone, A. Ferrier, A. Tallaire, P. Goldner, H. de Riedmatten, and A. Walther, Physical Review B 108, 075107 (2023).",
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
    title: "Long-Lived Rare-Earth Quantum Memories",
    systems: "Eu3+-based solid-state hosts relevant to optical and hyperfine storage.",
    methods: "Cryogenic optical spectroscopy, coherence measurements, and quantum-memory-relevant control protocols.",
    goal: "Push storage lifetimes and coherence benchmarks that matter for real solid-state quantum memories.",
  },
  {
    title: "Coherence Spectroscopy and Structure",
    systems: "Rare-earth-ion-doped crystals and new hosts with narrow optical transitions.",
    methods: "Hyperfine-structure analysis, spectral characterization, and spin-dynamics measurements.",
    goal: "Understand the microscopic origins of decoherence and identify what limits storage fidelity and lifetime.",
  },
  {
    title: "New Material Platforms",
    systems: "Single crystals, oxide ceramics, and micro or nano rare-earth materials.",
    methods: "Host screening, material processing, and coherence benchmarking across scalable platforms.",
    goal: "Bridge benchmark coherence studies with materials that are easier to fabricate, process, or integrate.",
  },
  {
    title: "Toward Quantum Network Interfaces",
    systems: "Erbium-doped and stoichiometric rare-earth platforms with telecom relevance.",
    methods: "Interface-oriented spectroscopy, materials engineering, and architecture-driven platform design.",
    goal: "Move from isolated memory demonstrations toward network-compatible solid-state quantum nodes.",
  },
];

export const publications: Publication[] = [
  {
    title: "Towards telecom-compatible quantum nodes using erbium-doped stoichiometric EuCl3 hydrate crystals",
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
    title: "Cryogenic Optical Spectroscopy Platform",
    summary: "A low-temperature optics platform for coherence measurements, spectroscopy, and quantum-memory-relevant experiments in rare-earth systems.",
    details:
      "This platform supports long-coherence measurements, stable optical addressing, and experimental routines required for solid-state quantum storage studies.",
    image: "/assets/lab/cryogenic-optics-lab.png",
  },
  {
    title: "Solid-State Quantum Memory Setup",
    summary: "An integrated optical setup for rare-earth-ion quantum memory experiments, control sequences, and benchmarking of storage performance.",
    details:
      "The platform links laser control, sample handling, and detection workflows needed to evaluate memory lifetime, efficiency, and coherence preservation.",
    image: "/assets/lab/movable-solid-state-memory.png",
  },
  {
    title: "Crystal and Material Preparation Environment",
    summary: "Laboratory infrastructure for rare-earth materials preparation, host evaluation, and sample development connected to coherence studies.",
    details:
      "This part of the laboratory supports the transition from materials preparation to optical characterization and device-oriented screening.",
    image: "/assets/lab/crystal-growth-lab.png",
  },
];

export const studentMembers: StudentMember[] = [
  {
    name: "Weiye Sun",
    email: "12331503@mail.sustech.edu.cn",
    role: "Graduate Researcher",
    school: "Southern University of Science and Technology",
  },
  {
    name: "Miaomiao Ren",
    email: "12231257@mail.sustech.edu.cn",
    role: "Graduate Researcher",
    school: "Southern University of Science and Technology",
  },
  {
    name: "Mucheng Guo",
    email: "12331502@mail.sustech.edu.cn",
    role: "Graduate Researcher",
    school: "Southern University of Science and Technology",
  },
  {
    name: "Zhenqi Xu",
    email: "12333060@mail.sustech.edu.cn",
    role: "Graduate Researcher",
    school: "Southern University of Science and Technology",
  },
  {
    name: "Zhehao Xu",
    email: "12333073@mail.sustech.edu.cn",
    role: "Graduate Researcher",
    school: "Southern University of Science and Technology",
  },
  {
    name: "Xingmin He",
    email: "12531198@mail.sustech.edu.cn",
    role: "Graduate Researcher",
    school: "Southern University of Science and Technology",
  },
  {
    name: "Yuxin Zhang",
    email: "12532267@mail.sustech.edu.cn",
    role: "Graduate Researcher",
    school: "Southern University of Science and Technology",
  },
  {
    name: "Hanwen Liang",
    email: "12543047@mail.sustech.edu.cn",
    role: "Graduate Researcher",
    school: "Southern University of Science and Technology",
  },
  {
    name: "Yuhui Liu",
    email: "i.love.wind.sunny@gmail.com",
    role: "admitted direct-entry PhD student",
    school: "University of Science and Technology of China",
  },
];

export const currentStudents: StudentMember[] = studentMembers;

export const alumniStudents: StudentMember[] = [];

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
