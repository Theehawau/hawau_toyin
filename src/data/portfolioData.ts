export type ResearchCategory = 'stuttered-speech' | 'speech-multilingual-nlp' | 'data-curation';

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number | string;
  category: ResearchCategory;
  abstract?: string;
  figure?: string;
  figureCaption?: string;
  highlight?: string;
  award?: string;
  isEqualContribution?: boolean;
  links: {
    paper?: string;
    code?: string;
    project?: string;
    dataset?: string;
    scholar?: string;
  };
  bibtex?: string;
}

export interface LocationTalkGroup {
  id: string;
  institution: string;
  location: string;
  isUpcoming?: boolean;
  talks: {
    title: string;
    date: string;
    isUpcoming?: boolean;
    paperUrl?: string;
  }[];
}

export interface SharedTask {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  role: string;
  links?: {
    paper?: string;
    scholar?: string;
  };
  bibtex?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  category: string;
  description: string;
  fullOverview: string;
  highlights: string[];
  techStack: string[];
  originalFigure: string;
  figureCaption: string;
  award?: string;
  links: {
    github?: string;
    demo?: string;
    paper?: string;
  };
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  details?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  institution: string;
  location: string;
  description?: string;
  bullets: string[];
  link?: string;
}

export interface LeadershipItem {
  period: string;
  role: string;
  organization: string;
  detail?: string;
}

export interface AwardItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  badge?: string;
}

export const PROFILE = {
  name: "Hawau Olamide Toyin",
  shortName: "Hawau Olamide",
  title: "PhD Researcher in Natural Language Processing",
  institution: "Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI)",
  department: "Department of Natural Language Processing",
  location: "Abu Dhabi, UAE",
  phone: "0568219615",
  email: "hawau.toyin@mbzuai.ac.ae",
  secondaryEmail: "hawau.olamide.TH@gmail.com",
  github: "https://github.com/Theehawau",
  linkedin: "https://www.linkedin.com/in/toyinhawau",
  huggingface: "https://huggingface.co/herwoww",
  scholar: "https://scholar.google.com/citations?user=JrSN5G0AAAAJ&hl=en",
  website: "https://theehawau.github.io",
  avatar: "funny_face.JPG",
  researchInterests: [
    "AI for Stuttered Speech",
    "Speech Recognition, Generation & Multimodal NLP",
    "Data Curation & Annotation"
  ],
  stutterbankUrl: "https://theehawau.github.io/stutterbank/",
  executiveProgramUrl: "https://mbzuai.ac.ae/news-events/news/mohamed-bin-zayed-university-artificial-intelligence-hosts-ai-leadership-training",
  awardNewsUrl: "https://mbzuai.ac.ae/news-events/news/award-winning-study-shows-how-speech-technology-can-better-serve-people-who",
  languages: [
    { language: "English", proficiency: "Fluent" },
    { language: "Yoruba", proficiency: "Native" },
    { language: "French", proficiency: "A2" },
    { language: "Arabic", proficiency: "A1" }
  ],
  bio: "a PhD student at MBZUAI under Dr Hanan Aldarmaki working on building speech models for real world impact, particularly in low-resource and atypical speech areas. My PhD thesis is on building models for automatic stutter severity assessment in collaboration with speech-language pathologists. I enjoy collaborating on interesting resource development projects and contributing open-source resource for the research community.",
  heroPunchline: "AI for Stuttered Speech · Speech Recognition, Generation & Multimodal NLP · Data Curation & Annotation",
  stats: [
    { label: "Best Paper Award", value: "Speech Pathology", detail: "Speech Pathology Australia @ Interspeech 2026" },
    { label: "Best Paper Award", value: "ArabicNLP", detail: "ArabicNLP @ EMNLP (for ArTST, 2023)" },
    { label: "Executive Facilitator", value: "MBZUAI", detail: "AI for Business Brainstorming & Leadership Training" },
    { label: "Research Fellowship", value: "ITSERR", detail: "Visiting Scholar at ISTI CNR, Pisa (2024-2025)" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "talktrain",
    title: "TalkTrain",
    subtitle: "AI-Powered Presentation and Public Speaking Practice Assistant",
    role: "Lead NLP & Speech Engineer",
    period: "2023",
    category: "Speech Recognition, Generation & 3D Avatars",
    award: "Champion at GITEX x Ali Baba Cloud Hackathon (2023)",
    originalFigure: "/src/assets/images/original_papers/talktrain_showcase.jpg",
    figureCaption: "Original presentation title slide from the winning Alibaba Cloud x GITEX AI Hackathon pitch by Hawau Olamide Toyin and Kane James Lindsay.",
    description: "Generatively animated virtual assistant that listens to speeches, calculates pacing and cadence metrics, and generates dynamic questions to mimic a human presentation coach.",
    fullOverview: "TalkTrain was developed for the Alibaba Cloud AI Hackathon during GITEX 2023, winning 1st Place. Built at the MBZUAI Metaverse Lab, it combines real-time Automatic Speech Recognition (ASR), Text-To-Speech (TTS), Question Generation (QG), and Face Animation (FA) into an integrated coach that analyzes rehearsal deliveries and poses audience follow-up questions.",
    highlights: [
      "Champion at GITEX x Ali Baba Cloud Hackathon (2023)",
      "Combines Automatic Speech Recognition, Neural Text-To-Speech, and generative question formulation",
      "Features real-time facial animation synchronized with speech synthesis for interactive coaching",
      "Developed on Alibaba Cloud compute and deep learning infrastructure"
    ],
    techStack: ["Alibaba Cloud AI", "Whisper ASR", "Neural TTS", "Question Generation", "3D Face Animation", "Python", "FastAPI"],
    links: {
      github: "https://github.com/Theehawau/TalkTrain"
    }
  },
  {
    id: "sttatts",
    title: "STTATTS",
    subtitle: "Unified Model for Speech-to-Text and Text-to-Speech",
    role: "First Author (MSc Thesis & EMNLP 2024)",
    period: "2024",
    category: "Speech Recognition & Generation",
    originalFigure: "/src/assets/images/original_papers/sttatts_architecture.png",
    figureCaption: "Figure 1 from original paper: STTATTS architecture featuring the task fusion module with shared encoder-decoder backbone (EMNLP 2024 Findings).",
    description: "A parameter-efficient unified model that jointly learns Speech-to-Text (ASR) and Text-to-Speech (TTS) using a joint multi-task sequence-to-sequence objective.",
    fullOverview: "Published at EMNLP 2024 Findings (and representing Hawau's Master's thesis at MBZUAI), STTATTS overcomes the traditional separation of ASR and TTS models. By using an MLP-based task fusion module and a unified transformer encoder-decoder backbone, STTATTS reduces total parameter footprint by ~50% while matching individual state-of-the-art model performance across English and Arabic.",
    highlights: [
      "Published in EMNLP 2024 Findings",
      "Hawau's Master of Science Thesis in Machine Learning at MBZUAI",
      "Reduces total parameters across both tasks by ~50% via a parameter-efficient task fusion module",
      "Evaluated across English (high-resource) and Arabic (low-resource TTS) with open code and checkpoints"
    ],
    techStack: ["PyTorch", "Transformers", "Speech-to-Text", "Text-to-Speech", "Task Fusion MLP", "Discrete Acoustic Tokens"],
    links: {
      github: "https://github.com/Theehawau",
      paper: "https://arxiv.org/abs/2410.18607"
    }
  },
  {
    id: "artst",
    title: "ArTST",
    subtitle: "Arabic Text and Speech Transformer",
    role: "First Author (Equal Contribution with Amirbek Djanibekov)",
    period: "2023",
    category: "Multilingual & Dialectal Speech Processing",
    award: "Best Paper Award at ArabicNLP @ EMNLP (2023)",
    originalFigure: "/src/assets/images/original_papers/artst_architecture.png",
    figureCaption: "Figure 1 from original paper: Model architecture of ArTST pre-trained unified text and speech transformer (ArabicNLP @ EMNLP 2023).",
    description: "Foundational pre-trained text and speech transformer model for Arabic, fine-tuned for Automatic Speech Recognition (ASR), Text-To-Speech (TTS), and Spoken Dialect Identification.",
    fullOverview: "Presented at ArabicNLP @ EMNLP 2023 where it won the prestigious Best Paper Award, ArTST is a pre-trained Arabic speech-text transformer based on a unified modal framework. Pre-trained from scratch on Modern Standard Arabic speech and text, it achieves state-of-the-art accuracy across Arabic ASR and low-resource Arabic TTS synthesis.",
    highlights: [
      "Won Best Paper Award at ArabicNLP @ EMNLP 2023",
      "Unified pre-trained speech-text transformer specifically trained on Arabic data",
      "Fine-tuned for ASR, Text-to-Speech synthesis, and Spoken Dialect Identification",
      "Open-source model checkpoints, tokenizer, and dictionary released on Hugging Face"
    ],
    techStack: ["PyTorch", "Fairseq", "SpeechT5 Architecture", "Hugging Face", "wav2vec 2.0"],
    links: {
      github: "https://github.com/Theehawau/ArTST",
      paper: "https://arxiv.org/abs/2310.16621"
    }
  },
  {
    id: "dualref",
    title: "What Counts as an Error?",
    subtitle: "Dual-Reference Benchmarking for Atypical ASR",
    role: "First Author",
    period: "2026",
    category: "AI for Stuttered Speech",
    originalFigure: "/src/assets/images/original_papers/dualref_benchmarking.png",
    figureCaption: "Figure 1 from original paper: Intended vs Verbatim specialization of high performance ASR models evaluated on stuttered speech (Under Review / arXiv:2606.31112).",
    description: "Pioneering benchmarking framework that decouples verbatim disfluency transcriptions from intended speaker targets to accurately evaluate ASR on atypical stuttered speech.",
    fullOverview: "Atypical speech, such as stuttering, has historically suffered from flawed ASR evaluations where disfluencies are conflated into a single ambiguous ground truth. This paper benchmarks 11 ASR architectures (encoder-decoder, CTC, and transducer) on atypical speech across both verbatim (clinical) and intended (assistive) references, revealing that model rankings shift dramatically depending on the transcription goal.",
    highlights: [
      "Solidifies the dual-reference evaluation standard (Verbatim vs Intended) for atypical ASR",
      "Benchmarks 11 modern ASR architectures on stuttered speech cohorts",
      "Demonstrates model ranking inversions when evaluating for assistive vs clinical use cases",
      "Under review for top speech conference (arXiv:2606.31112)"
    ],
    techStack: ["Python", "Whisper", "NVIDIA NeMo CTC", "Librosa"],
    links: {
      github: "https://github.com/Theehawau/usecase_asr",
      paper: "https://arxiv.org/abs/2606.31112"
    }
  },
  {
    id: "polywer",
    title: "PolyWER",
    subtitle: "A Holistic Evaluation Framework for Code-Switched Speech Recognition",
    role: "Co-Author",
    period: "2024",
    category: "Multilingual & Code-Switched Speech",
    originalFigure: "/src/assets/images/original_papers/polywer_matrix.png",
    figureCaption: "Figure 1 from original paper: Dynamic programming alignment matrix for lowest-cost PolyWER path across transliterations and translations (EMNLP 2024 Findings).",
    description: "A robust evaluation metric addressing the pitfalls of standard WER when evaluating code-switching between Arabic and English, allowing for valid transliterations and translations.",
    fullOverview: "Standard Word Error Rate (WER) severely penalizes code-switched audio because valid cross-script transliterations and loanwords are flagged as errors. PolyWER formulates a dynamic programming alignment matrix that accepts transcriptions in multiple valid forms, validated by human judgment experiments.",
    highlights: [
      "Published in EMNLP 2024 Findings",
      "Novel metric that supports transliteration and translation equivalents in code-switched speech",
      "Outperforms standard WER and CER in correlating with human evaluators",
      "Released with augmented Arabic-English Emirati dataset on Hugging Face"
    ],
    techStack: ["Python", "Dynamic Programming", "Levenshtein Alignment", "EMNLP 2024", "Mixat Dataset"],
    links: {
      github: "https://github.com/mbzuai-nlp/PolyWER",
      paper: "https://aclanthology.org/2024.findings-emnlp.356.pdf"
    }
  }
];

export const ALL_PUBLICATIONS: Publication[] = [
  {
    id: "aligning-stuttered-speech",
    title: "Aligning Stuttered-Speech Research with End-User Needs: Scoping Review, Survey, and Guidelines",
    authors: ["Hawau Olamide Toyin", "Mutiah Apampa", "Toluwani Aremu", "Humaid Alblooshi", "Ana Rita Valente", "Gonçalo Leal", "Zhengjun Yue", "Zeerak Talat", "Hanan Aldarmaki"],
    venue: "Interspeech 2026",
    year: 2026,
    category: "stuttered-speech",
    award: "Speech Pathology Best Paper Award (Speech Pathology Australia at Interspeech 2026)",
    highlight: "Speech Pathology Best Paper Award · Interspeech 2026",
    abstract: "Despite advancements in speech recognition and assistive voice technologies, existing models frequently underperform for individuals who stutter due to acoustic variations, prolongations, repetitions, and blocks. We conduct an extensive scoping review and empirical survey involving both people who stutter (PWS) and speech-language pathologists (SLPs). We identify fundamental disconnects between mainstream ASR metrics and real-world communicative or diagnostic needs, establishing evidence-based guidelines and open survey datasets to steer assistive voice AI toward genuine clinical and user alignment.",
    links: {
      paper: "https://arxiv.org/abs/2604.20535",
      project: "https://theehawau.github.io/stutterbank/",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:Zph67rFs4hoC"
    },
    bibtex: `@inproceedings{toyin2026aligning,
  title={Aligning Stuttered-Speech Research with End-User Needs: Scoping Review, Survey, and Guidelines},
  author={Toyin, Hawau Olamide and Apampa, Mutiah and Aremu, Toluwani and Alblooshi, Humaid and Valente, Ana Rita and Leal, Gon{\\c{c}}alo and Yue, Zhengjun and Talat, Zeerak and Aldarmaki, Hanan},
  booktitle={Proceedings of Interspeech},
  year={2026}
}`
  },
  {
    id: "what-counts-as-error",
    title: "What Counts as an Error? Dual-Reference Benchmarking for Atypical ASR",
    authors: ["Hawau Olamide Toyin", "Srinivasan Umesh", "Hanan Aldarmaki"],
    venue: "Interspeech 2026",
    year: 2026,
    category: "stuttered-speech",
    highlight: "Interspeech 2026 · arXiv:2606.31112",
    abstract: "Automatic speech recognition (ASR) evaluations for atypical speech routinely conflate two fundamentally distinct ground truth targets into a single reference: verbatim transcription (which preserves all disfluencies, crucial for speech-language diagnostics and clinical monitoring) and intended transcription (which removes disfluencies to capture fluent message intent, essential for command-and-control and dictation). Benchmarking 11 modern ASR architectures across encoder-decoder, CTC, and transducer families on stuttered speech, we discover that model performance and rankings invert depending on the transcription target, demonstrating that single-reference evaluation produces deceptive model rankings.",
    figure: "/src/assets/images/original_papers/dualref_benchmarking.png",
    figureCaption: "Figure 1 from original paper: Intended vs Verbatim performance specialization.",
    links: {
      paper: "https://arxiv.org/abs/2606.31112",
      code: "https://github.com/Theehawau/usecase_asr",
      project: "https://theehawau.github.io/stutterbank/",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:4TOpqqG69KYC"
    },
    bibtex: `@article{toyin2026whatcounts,
  title={What Counts as an Error? Dual-Reference Benchmarking for Atypical ASR},
  author={Toyin, Hawau Olamide and Umesh, Srinivasan and Aldarmaki, Hanan},
  journal={arXiv preprint arXiv:2606.31112},
  year={2026}
}`
  },
  {
    id: "clinical-annotations-stuttering",
    title: "Clinical Annotations for Automatic Stuttering Severity Assessment",
    authors: ["Ana Rita Valente", "Rufael Marew", "Hawau Olamide Toyin", "Hamdan Al-Ali", "Anelise Bohnen", "Inma Becerra", "Elsa Marta Soares", "Gonçalo Leal", "Hanan Aldarmaki"],
    venue: "Interspeech 2025",
    year: 2025,
    category: "stuttered-speech",
    highlight: "Interspeech 2025 · Clinical Stuttering Baselines",
    abstract: "Standardized clinical assessment of stuttering severity—such as the Stuttering Severity Instrument (SSI-4)—depends upon detailed acoustic labeling of stuttering events including repetitions, prolongations, and postural fixations. We introduce a dataset of expert clinical annotations for automatic stuttering severity assessment, providing validated acoustic baselines to train neural architectures capable of automated severity profiling and clinical progress monitoring.",
    links: {
      paper: "https://arxiv.org/abs/2506.00644",
      project: "https://theehawau.github.io/stutterbank/",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:LkGwnXOMwfcC"
    },
    bibtex: `@inproceedings{valente2025clinical,
  title={Clinical Annotations for Automatic Stuttering Severity Assessment},
  author={Valente, Ana Rita and Marew, Rufael and Toyin, Hawau Olamide and Al-Ali, Hamdan and Bohnen, Anelise and Becerra, Inma and Soares, Elsa Marta and Leal, Gon{\\c{c}}alo and Aldarmaki, Hanan},
  booktitle={Proceedings of Interspeech},
  year={2025}
}`
  },
  {
    id: "sttatts-emnlp",
    title: "STTATTS: Unified Model for Speech-to-Text and Text-to-Speech",
    authors: ["Hawau Olamide Toyin", "Hao Li", "Hanan Aldarmaki"],
    venue: "Findings of ACL: EMNLP 2024",
    year: 2024,
    category: "speech-multilingual-nlp",
    highlight: "EMNLP 2024 Findings (Master's Thesis)",
    abstract: "Speech recognition (ASR) and text-to-speech (TTS) models are traditionally treated as separate systems with independent parameters, doubling computational and storage overhead. STTATTS introduces a parameter-efficient multi-task framework that jointly learns ASR and multi-speaker TTS using a shared transformer encoder-decoder backbone connected via an MLP-based task fusion module. STTATTS cuts overall parameter count by approximately 50% while matching or outperforming independently trained single-task baselines across English and Arabic.",
    figure: "/src/assets/images/original_papers/sttatts_architecture.png",
    figureCaption: "Figure 1 from original paper: STTATTS task fusion architecture.",
    links: {
      paper: "https://aclanthology.org/2024.findings-emnlp.398.pdf",
      code: "https://github.com/Theehawau",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:zYLM7Y9cAGgC"
    },
    bibtex: `@inproceedings{toyin2024sttatts,
  title={{STTATTS}: Unified Speech-to-Text and Text-to-Speech Model},
  author={Toyin, Hawau Olamide and Li, Hao and Aldarmaki, Hanan},
  booktitle={Findings of the Association for Computational Linguistics: EMNLP 2024},
  pages={6853--6863},
  year={2024}
}`
  },
  {
    id: "artst-arabicnlp",
    title: "ArTST: Arabic Text and Speech Transformer",
    authors: ["Hawau Olamide Toyin*", "Amirbek Djanibekov*", "Ajinkya Kulkarni", "Hanan Aldarmaki"],
    venue: "ArabicNLP @ EMNLP 2023",
    year: 2023,
    category: "speech-multilingual-nlp",
    isEqualContribution: true,
    award: "Best Paper Award at ArabicNLP 2023",
    highlight: "Best Paper Award at ArabicNLP 2023",
    abstract: "We present ArTST, a pre-trained Arabic text and speech transformer based on a unified modal framework. Pre-trained from scratch on Modern Standard Arabic acoustic and textual data, ArTST unifies Speech-to-Text (ASR), Text-to-Speech synthesis (TTS), and Spoken Dialect Identification within a single shared representation. ArTST establishes state-of-the-art benchmarks in Arabic speech tasks and demonstrates exceptional parameter transfer in low-resource speech synthesis.",
    figure: "/src/assets/images/original_papers/artst_architecture.png",
    figureCaption: "Figure 1 from original paper: ArTST unified text and speech transformer architecture.",
    links: {
      paper: "https://aclanthology.org/2023.arabicnlp-1.5.pdf",
      code: "https://github.com/Theehawau/ArTST",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:u-x6o8ySG0sC"
    },
    bibtex: `@inproceedings{toyin2023artst,
  title={{ArTST}: Arabic Text and Speech Transformer},
  author={Toyin, Hawau Olamide and Djanibekov, Amirbek and Kulkarni, Ajinkya and Aldarmaki, Hanan},
  booktitle={Proceedings of ArabicNLP 2023},
  pages={41--51},
  year={2023}
}`
  },
  {
    id: "voice-of-a-continent",
    title: "Voice of a Continent: Mapping Africa’s Speech Technology Frontier",
    authors: ["AbdelRahim A. Elmadany", "Sang Yun Kwon", "Hawau Olamide Toyin", "Alcides Alcoba Inciarte", "Hanan Aldarmaki", "Muhammad Abdul-Mageed"],
    venue: "EMNLP 2025 Main",
    year: 2025,
    category: "speech-multilingual-nlp",
    highlight: "EMNLP 2025 Main Track",
    abstract: "Africa is home to over 2,000 languages representing approximately one-third of the world’s linguistic diversity, yet African languages remain severely underrepresented in global speech processing benchmarks. We present an empirical survey and research map exploring speech technologies across Africa, reviewing dataset availability, dialectal density, acoustic modeling frontiers, and strategic recommendations for equitable speech research.",
    links: {
      paper: "https://aclanthology.org/2025.emnlp-main.559.pdf",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:ufrVoPGSRksC"
    },
    bibtex: `@inproceedings{elmadany2025voice,
  title={Voice of a Continent: Mapping Africa's Speech Technology Frontier},
  author={Elmadany, AbdelRahim A. and Kwon, Sang Yun and Toyin, Hawau Olamide and Inciarte, Alcides Alcoba and Aldarmaki, Hanan and Abdul-Mageed, Muhammad},
  booktitle={Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing},
  pages={11039--11061},
  year={2025}
}`
  },
  {
    id: "are-llms-good-diacritizers",
    title: "Are LLMs Good Text Diacritizers? An Arabic and Yorùbá Case Study",
    authors: ["Hawau Olamide Toyin", "Samar Mohamed Magdy", "Hanan Aldarmaki"],
    venue: "LREC 2026",
    year: 2026,
    category: "speech-multilingual-nlp",
    highlight: "LREC 2026",
    abstract: "Text diacritization is essential for disambiguating pronunciation, grammatical morphology, and lexical semantics in morphologically complex and tonal orthographies. This study presents a comparative evaluation of state-of-the-art Large Language Models (LLMs) on automatic text diacritization using Modern Standard Arabic and Yoruba as case studies. We analyze zero-shot, few-shot, and fine-tuned capabilities, highlighting phonetic nuances, tonal diacritic recovery, and common failure modes in low-resource African and Afroasiatic languages.",
    links: {
      paper: "https://arxiv.org/abs/2506.11602",
      dataset: "https://huggingface.co/datasets/herwoww/MultiDiac",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:Se3iqnhoufwC"
    },
    bibtex: `@inproceedings{toyin2026llmsdiacritizers,
  title={Are {LLMs} Good Text Diacritizers? An Arabic and Yoruba Case Study},
  author={Toyin, Hawau Olamide and Magdy, Samar Mohamed and Aldarmaki, Hanan},
  booktitle={Proceedings of the Language Resources and Evaluation Conference (LREC)},
  year={2026}
}`
  },
  {
    id: "dialectal-coverage-arabic",
    title: "Dialectal Coverage and Generalization in Arabic Speech Recognition",
    authors: ["Amirbek Djanibekov*", "Hawau Olamide Toyin*", "Raghad Alshalan", "Abdullah Alatir", "Hanan Aldarmaki"],
    venue: "ACL 2025",
    year: 2025,
    category: "speech-multilingual-nlp",
    isEqualContribution: true,
    highlight: "ACL 2025 (*Equal Contribution)",
    abstract: "Automatic Speech Recognition for Arabic faces significant acoustic and lexical challenges due to the stark diglossic divergence between Modern Standard Arabic (MSA) and diverse regional spoken dialects. We investigate dialectal coverage, acoustic robustness, and cross-dialectal transfer across major Arabic dialect groups, evaluating both foundational pre-trained encoders and fine-tuned architectures to establish generalization benchmarks across dialectal continua.",
    links: {
      paper: "https://arxiv.org/abs/2505.18731",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:IjCSPb-OGe4C"
    },
    bibtex: `@inproceedings{djanibekov2025dialectal,
  title={Dialectal Coverage and Generalization in Arabic Speech Recognition},
  author={Djanibekov, Amirbek and Toyin, Hawau Olamide and Alshalan, Raghad and Alatir, Abdullah and Aldarmaki, Hanan},
  booktitle={Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)},
  pages={29490--29502},
  year={2025}
}`
  },
  {
    id: "where-are-we-african",
    title: "Where are we? Evaluating LLM performance on African languages",
    authors: ["Ife Adebara", "Hawau Olamide Toyin", "Nahom Tesfu Ghebremichael", "AbdelRahim A. Elmadany", "Muhammad Abdul-Mageed"],
    venue: "ACL 2025",
    year: 2025,
    category: "speech-multilingual-nlp",
    highlight: "ACL 2025",
    abstract: "Although Large Language Models demonstrate state-of-the-art performance on mainstream benchmarks, their capabilities on indigenous African languages remain critically under-benchmarked. We conduct a rigorous multi-task evaluation of leading proprietary and open-weight LLMs across African languages, evaluating performance in machine translation, question answering, reasoning, and sentiment analysis.",
    links: {
      paper: "https://arxiv.org/abs/2502.14819",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:eQOLeE2rZwMC"
    },
    bibtex: `@inproceedings{adebara2025wherearewe,
  title={Where Are We? Evaluating {LLM} Performance on African Languages},
  author={Adebara, Ife and Toyin, Hawau Olamide and Ghebremichael, Nahom Tesfu and Elmadany, AbdelRahim A. and Abdul-Mageed, Muhammad},
  booktitle={Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)},
  pages={32704--32731},
  year={2025}
}`
  },
  {
    id: "all-languages-matter-cvpr",
    title: "All languages matter: Evaluating lmms on culturally diverse 100 languages",
    authors: ["Ashmal Vayani", "Dinura Dissanayake", "Hasindri Watawana", "Noor Ahsan", "Nevasini Sasikumar", "Omkar Thawakar", "Hawau Olamide Toyin", "Fahad Shahbaz Khan"],
    venue: "CVPR 2025",
    year: 2025,
    category: "speech-multilingual-nlp",
    highlight: "CVPR 2025",
    abstract: "While vision-language models (LMMs) have demonstrated impressive multimodal reasoning, their training and evaluation pipelines remain heavily centered on English and Western cultural contexts. We present a systematic benchmark evaluating vision-language models across 100 culturally diverse languages, analyzing cross-lingual visual question answering, cultural concepts, and failure modes across low-resource language communities.",
    links: {
      paper: "https://arxiv.org/abs/2503.01824",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:W7OEmFMy1HYC"
    },
    bibtex: `@inproceedings{vayani2025alllanguages,
  title={All Languages Matter: Evaluating {LMMs} on Culturally Diverse 100 Languages},
  author={Vayani, Ashmal and Dissanayake, Dinura and Watawana, Hasindri and Ahsan, Noor and Sasikumar, Nevasini and Thawakar, Omkar and Toyin, Hawau Olamide and Khan, Fahad Shahbaz},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  pages={19565--19575},
  year={2025}
}`
  },
  {
    id: "infant-cry-detection",
    title: "Infant Cry Detection Using Causal Temporal Representation",
    authors: ["Minghao Fu", "Danning Li", "Aryan Gadhiya", "Benjamin Lambright", "Mohamed Alowais", "Mohab Bahnassy", "Saad El Dine Elletter", "Hawau Olamide Toyin", "Haiyan Jiang", "Kun Zhang", "Hanan Aldarmaki"],
    venue: "ICASSP 2025",
    year: 2025,
    category: "speech-multilingual-nlp",
    highlight: "ICASSP 2025",
    abstract: "Detecting infant distress cries in natural home environments requires isolating transient cry acoustics from continuous environmental noise. We propose a causal temporal representation framework that models sequential acoustic dependencies without future temporal leakage. Our architecture achieves superior classification accuracy and significantly fewer false positives compared to standard non-causal spectral baselines.",
    links: {
      paper: "https://arxiv.org/abs/2410.19830",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:YsMSGLbcyi4C"
    },
    bibtex: `@inproceedings{fu2025infantcry,
  title={Infant Cry Detection Using Causal Temporal Representation},
  author={Fu, Minghao and Li, Danning and Gadhiya, Aryan and Lambright, Benjamin and Alowais, Mohamed and Bahnassy, Mohab and Elletter, Saad El Dine and Toyin, Hawau Olamide and Jiang, Haiyan and Zhang, Kun and Aldarmaki, Hanan},
  booktitle={IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  pages={1--5},
  year={2025}
}`
  },
  {
    id: "detecting-machine-generated-text",
    title: "Exploring the Limitations of Detecting Machine-Generated Text",
    authors: ["Jad Doughman", "Osama Mohammed Afzal", "Hawau Olamide Toyin", "Shady Shehata", "Preslav Nakov", "Zeerak Talat"],
    venue: "COLING 2025",
    year: 2025,
    category: "speech-multilingual-nlp",
    highlight: "COLING 2025",
    abstract: "As neural text generation becomes increasingly fluent and indistinguishable from human writing, reliable detection of machine-generated text is vital for academic integrity and information security. We investigate the boundaries and failure modes of current detector architectures under domain distribution shift, iterative paraphrasing, adversarial perturbations, and multilingual generation.",
    links: {
      paper: "https://arxiv.org/abs/2411.02324",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:5nxA0vEk-isC"
    },
    bibtex: `@inproceedings{doughman2025detecting,
  title={Exploring the Limitations of Detecting Machine-Generated Text},
  author={Doughman, Jad and Afzal, Osama Mohammed and Toyin, Hawau Olamide and Shehata, Shady and Nakov, Preslav and Talat, Zeerak},
  booktitle={Proceedings of the 31st International Conference on Computational Linguistics (COLING)},
  pages={4274--4281},
  year={2025}
}`
  },
  {
    id: "multilingual-idioms-acl",
    title: "Multilingual Idioms in Sentences and Conversations Across High-, Medium-, and Low-Resource Languages",
    authors: ["Saeed Almheiri", "Bilal Elbouardi", "Salsabila Zahirah Pranida", "Irina Nikishina", "Parameswari Krishnamurthy", "Muhammad Cendekia Airlangga", "Rifo Ahmad Genadi", "Nguyen Phan Gia Bao", "Amir Hossein Yari", "Hawau Olamide Toyin", "Nurdaulet Mukhituly", "Mena Attia", "Besher Hassan", "Ahmad Fathan Hidayatullah", "Tatsuki Kuribayashi", "Haonan Li", "Suma Bhat", "Fajri Koto"],
    venue: "ACL 2026",
    year: 2026,
    category: "speech-multilingual-nlp",
    highlight: "ACL 2026 (Long Papers)",
    abstract: "Idiomatic expressions present profound challenges for cross-lingual NLP models due to their non-compositional figurative meanings. We present a comprehensive cross-lingual study of idioms in sentences and dialogic conversations across high-, medium-, and low-resource languages, benchmarking LLMs on comprehension, contextual sense disambiguation, and cross-cultural communicative intent.",
    links: {
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:YOwf2qJgpHMC"
    },
    bibtex: `@inproceedings{almheiri2026multilingual,
  title={Multilingual Idioms in Sentences and Conversations Across High-, Medium-, and Low-Resource Languages},
  author={Almheiri, Saeed and Elbouardi, Bilal and Pranida, Salsabila Zahirah and Nikishina, Irina and Krishnamurthy, Parameswari and Airlangga, Muhammad Cendekia and Genadi, Rifo Ahmad and Bao, Nguyen Phan Gia and Yari, Amir Hossein and Toyin, Hawau Olamide and Mukhituly, Nurdaulet and Attia, Mena and Hassan, Besher and Hidayatullah, Ahmad Fathan and Kuribayashi, Tatsuki and Li, Haonan and Bhat, Suma and Koto, Fajri},
  booktitle={Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)},
  pages={12363--12389},
  year={2026}
}`
  },
  {
    id: "arvoice-dataset",
    title: "ArVoice: A Multi-Speaker Dataset for Arabic Speech Synthesis",
    authors: ["Hawau Olamide Toyin", "Rufael Marew", "Humaid Alblooshi", "Samar Mohamed Magdy", "Hanan Aldarmaki"],
    venue: "Interspeech 2025",
    year: 2025,
    category: "data-curation",
    highlight: "Interspeech 2025 · Curated Dataset",
    abstract: "Neural text-to-speech synthesis (TTS) for Arabic is hindered by the scarcity of high-fidelity, phonetically balanced, multi-speaker corpora. We present ArVoice, a multi-speaker speech dataset engineered specifically for expressive Arabic speech synthesis. ArVoice incorporates diverse native speaker identities, balanced phonetic distribution, and rigorous recording standards to serve as an open benchmark for low-resource and multi-speaker Arabic speech synthesis.",
    links: {
      paper: "https://arxiv.org/abs/2505.20506",
      dataset: "https://huggingface.co/datasets/MBZUAI/ArVoice",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:KlAtU1dfN6UC"
    },
    bibtex: `@inproceedings{toyin2025arvoice,
  title={{ArVoice}: A Multi-Speaker Dataset for Arabic Speech Synthesis},
  author={Toyin, Hawau Olamide and Marew, Rufael and Alblooshi, Humaid and Magdy, Samar Mohamed and Aldarmaki, Hanan},
  booktitle={Proceedings of Interspeech},
  year={2025}
}`
  },
  {
    id: "polywer-emnlp",
    title: "PolyWER: A Holistic Evaluation Framework for Code-Switched Speech Recognition",
    authors: ["Karima Kadaoui", "Maryam Al Ali", "Hawau Olamide Toyin", "Ibrahim Mohammed", "Hanan Aldarmaki"],
    venue: "Findings of ACL: EMNLP 2024",
    year: 2024,
    category: "data-curation",
    highlight: "EMNLP 2024 Findings",
    abstract: "Standard Word Error Rate (WER) is inherently rigid when evaluating code-switched speech because valid transliterations (writing loanwords in the matrix language script) and immediate translations are penalized as transcription errors. We propose PolyWER, an evaluation framework that formulates dynamic programming alignment matrices to accept multiple valid lexical, transliterated, and translated realizations. Human evaluation experiments confirm PolyWER aligns much closer with human perceptual judgments than conventional WER or CER.",
    figure: "/src/assets/images/original_papers/polywer_matrix.png",
    figureCaption: "Figure 1 from original paper: Lowest-cost PolyWER path alignment matrix.",
    links: {
      paper: "https://aclanthology.org/2024.findings-emnlp.356.pdf",
      code: "https://github.com/mbzuai-nlp/PolyWER",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:UeHWp8X0CEIC"
    },
    bibtex: `@inproceedings{kadaoui2024polywer,
  title={{PolyWER}: A Holistic Evaluation Framework for Code-Switched Speech Recognition},
  author={Kadaoui, Karima and Ali, Maryam Al and Toyin, Hawau Olamide and Mohammed, Ibrahim and Aldarmaki, Hanan},
  booktitle={Findings of the Association for Computational Linguistics: EMNLP 2024},
  pages={6144--6153},
  year={2024}
}`
  },
  {
    id: "gretino-greek-latin",
    title: "Gretino: a Greek and Latin Dataset to Benchmark Retrieval Systems in Classical Languages",
    authors: ["Hawau Olamide Toyin", "Federico Iezzi", "Elia Scapini", "Giulio Federico", "Giovanni Puccetti"],
    venue: "LREC 2026",
    year: 2026,
    category: "data-curation",
    highlight: "LREC 2026 (ISTI CNR Fellowship)",
    abstract: "Information retrieval and dense semantic search benchmarks have largely concentrated on modern high-resource languages, leaving classical historical textual traditions underserved. We introduce Gretino, a curated evaluation benchmark in Ancient Greek and Latin designed to evaluate dense retrievers, sparse lexical matchers, and cross-lingual alignment pipelines across classical philology and humanities corpora.",
    links: {
      paper: "https://aclanthology.org/2026.lrec-1.70.pdf",
      dataset: "https://huggingface.co/datasets/Theehawau/Gretino",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:_kc_bZDykSQC"
    },
    bibtex: `@inproceedings{toyin2026gretino,
  title={Gretino: A Greek and Latin Dataset to Benchmark Retrieval Systems in Classical Languages},
  author={Toyin, Hawau Olamide and Iezzi, Federico and Scapini, Elia and Federico, Giulio and Puccetti, Giovanni},
  booktitle={Proceedings of the Language Resources and Evaluation Conference (LREC)},
  pages={919--928},
  year={2026}
}`
  },
  {
    id: "arabic-pronunciation-assessment",
    title: "Towards a Unified Benchmark for Arabic Pronunciation Assessment: Qur’anic Recitation as Case Study",
    authors: ["Yassine El Kheir", "Omnia Ibrahim", "Amit Meghanani", "Nada Almarwani", "Hawau Olamide Toyin", "Sadeen Alharbi", "Modar Alfadly", "Lamya Alkanhal", "Ibrahim Selim", "Shehab Elbatal", "Salima Mdhaffar", "Thomas Hain", "Yasser Hifny", "Mostafa Shahin", "Ahmed Ali"],
    venue: "Interspeech / arXiv 2025",
    year: 2025,
    category: "data-curation",
    highlight: "SDAIA HUMAIN Winter School · arXiv:2506.07722",
    abstract: "Arabic pronunciation assessment presents rigorous phonetic, phonological, and tajweed constraints. We present a unified evaluation benchmark for automatic pronunciation assessment using Qur'anic recitation as a high-fidelity case study, comparing state-of-the-art acoustic encoders across phoneme-level and rule-level pronunciation validation.",
    links: {
      paper: "https://arxiv.org/abs/2506.07722",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:roLk4NBRz8UC"
    },
    bibtex: `@article{elkheir2025towards,
  title={Towards a Unified Benchmark for Arabic Pronunciation Assessment: Qur'anic Recitation as Case Study},
  author={El Kheir, Yassine and Ibrahim, Omnia and Meghanani, Amit and Almarwani, Nada and Toyin, Hawau Olamide and Alharbi, Sadeen and Alfadly, Modar and Alkanhal, Lamya and Selim, Ibrahim and Elbatal, Shehab and Mdhaffar, Salima and Hain, Thomas and Hifny, Yasser and Shahin, Mostafa and Ali, Ahmed},
  journal={arXiv preprint arXiv:2506.07722},
  year={2025}
}`
  }
];

export const TALKS_BY_LOCATION: LocationTalkGroup[] = [
  {
    id: "alexandria-uni",
    institution: "Alexandria University",
    location: "Alexandria, Egypt",
    isUpcoming: true,
    talks: [
      {
        title: "STTATTS: Unified Model for Speech-to-Text and Text-to-Speech",
        date: "October 13, 2026",
        isUpcoming: true,
        paperUrl: "https://arxiv.org/abs/2410.18607"
      }
    ]
  },
  {
    id: "isti-cnr",
    institution: "ISTI-CNR",
    location: "Pisa, Italy",
    talks: [
      {
        title: "ArTST: Arabic Text and Speech Transformer",
        date: "April 2025",
        paperUrl: "https://arxiv.org/abs/2310.16621"
      },
      {
        title: "STTATTS: Unified Model for Speech-to-Text and Text-to-Speech",
        date: "April 2025",
        paperUrl: "https://arxiv.org/abs/2410.18607"
      }
    ]
  },
  {
    id: "cuhk-sz",
    institution: "CUHK-SZ",
    location: "Shenzhen, China",
    talks: [
      {
        title: "ArTST: Arabic Text and Speech Transformer",
        date: "2024",
        paperUrl: "https://arxiv.org/abs/2310.16621"
      },
      {
        title: "STTATTS: Unified Model for Speech-to-Text and Text-to-Speech",
        date: "2024",
        paperUrl: "https://arxiv.org/abs/2410.18607"
      }
    ]
  }
];

export const SHARED_TASKS: SharedTask[] = [
  {
    id: "nadi-2025",
    title: "NADI 2025: The First Multidialectal Arabic Speech Processing Shared Task",
    authors: ["Bashar Talafha", "Hawau Olamide Toyin", "Peter Sullivan", "AbdelRahim A. Elmadany", "Abdurrahman Juma", "Amirbek Djanibekov", "Chiyu Zhang", "Hamad Alshehhi", "Hanan Aldarmaki", "Mustafa Jarrar", "Nizar Habash", "Muhammad Abdul-Mageed"],
    venue: "Proceedings of ArabicNLP: Shared Tasks (2025)",
    year: 2025,
    role: "Co-Organizer & Author",
    links: {
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:8k81kl-MbHgC"
    },
    bibtex: `@inproceedings{talafha2025nadi,
  title={{NADI} 2025: The First Multidialectal Arabic Speech Processing Shared Task},
  author={Talafha, Bashar and Toyin, Hawau Olamide and Sullivan, Peter and Elmadany, AbdelRahim A. and Juma, Abdurrahman and Djanibekov, Amirbek and Zhang, Chiyu and Alshehhi, Hamad and Aldarmaki, Hanan and Jarrar, Mustafa and Habash, Nizar and Abdul-Mageed, Muhammad},
  booktitle={Proceedings of The Third Arabic Natural Language Processing Conference: Shared Tasks},
  pages={720--733},
  year={2025}
}`
  },
  {
    id: "iqra-eval-2025",
    title: "Iqra’Eval: A Shared Task on Qur’anic Pronunciation Assessment",
    authors: ["Yassine El Kheir", "Amit Meghanani", "Hawau Olamide Toyin", "Nada Almarwani", "Omnia Ibrahim", "Yousseif Ahmed Elshahawy", "Mostafa Shahin", "Ahmed Ali"],
    venue: "Proceedings of ArabicNLP: Shared Tasks (2025)",
    year: 2025,
    role: "Co-Organizer & Author",
    links: {
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JrSN5G0AAAAJ&citation_for_view=JrSN5G0AAAAJ:kNdYIx-mwKoC"
    },
    bibtex: `@inproceedings{elkheir2025iqraeval,
  title={{Iqra'Eval}: A Shared Task on Qur'anic Pronunciation Assessment},
  author={El Kheir, Yassine and Meghanani, Amit and Toyin, Hawau Olamide and Almarwani, Nada and Ibrahim, Omnia and Elshahawy, Yousseif Ahmed and Shahin, Mostafa and Ali, Ahmed},
  booktitle={Proceedings of The Third Arabic Natural Language Processing Conference: Shared Tasks},
  pages={443--452},
  year={2025}
}`
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "PhD in Natural Language Processing",
    field: "Natural Language Processing",
    institution: "Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI)",
    period: "Aug 2024 – present",
    details: "Focus on AI for Stuttered Speech, Speech Recognition, and Multilingual Language Technologies under Dr Hanan Aldarmaki."
  },
  {
    degree: "MSc in Machine Learning",
    field: "Machine Learning",
    institution: "Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI)",
    period: "Aug 2022 – Jun 2024",
    details: "Thesis: STTATTS: Unified Model for Speech-to-Text and Text-to-Speech (Published at EMNLP 2024 Findings)."
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2024 – Present",
    role: "Executive AI Facilitator & Brainstorming Lead",
    institution: "MBZUAI Executive Program & AI Leadership Training",
    location: "Abu Dhabi, UAE",
    link: "https://mbzuai.ac.ae/news-events/news/mohamed-bin-zayed-university-artificial-intelligence-hosts-ai-leadership-training",
    bullets: [
      "Facilitate high-impact 'AI for Business Brainstorming' immersion workshops for UAE government officials, C-suite executives, and organizational transformation leaders",
      "Guide executive cohorts through strategic AI roadmaps, multimodal applications, and generative AI enterprise problem solving",
      "Translate frontier NLP and speech AI research into actionable enterprise frameworks in collaboration with MBZUAI leadership faculty"
    ]
  },
  {
    period: "April 2025 – May 2025",
    role: "Visiting Researcher",
    institution: "ISTI CNR",
    location: "Pisa, Italy",
    bullets: [
      "Supported by the ITSERR (Italian Strengthening of the Esfri Ri Resilience) Trans-National Program grant",
      "Co-authored 'Gretino: a Greek and Latin Dataset to Benchmark Retrieval Systems in Classical Languages' (LREC 2026)"
    ]
  },
  {
    period: "Dec 2024",
    role: "Winter School Researcher",
    institution: "SDAIA (now HUMAIN)",
    location: "Riyadh, KSA",
    bullets: [
      "Co-authored 'Towards a Unified Benchmark for Arabic Pronunciation Assessment: Qur’anic Recitation as Case Study' (Interspeech / arXiv 2025)",
      "Co-organized 'Iqra’Eval: A Shared Task on Qur’anic Pronunciation Assessment' (ArabicNLP 2025)"
    ]
  },
  {
    period: "Jun – Aug 2024",
    role: "Research Associate",
    institution: "MBZUAI",
    location: "Abu Dhabi, UAE",
    bullets: [
      "Co-authored 'Dialectal Coverage and Generalization in Arabic Speech Recognition' (ACL 2025)"
    ]
  },
  {
    period: "Jan – May 2024",
    role: "Teaching Assistant",
    institution: "MBZUAI",
    location: "Abu Dhabi, UAE",
    bullets: [
      "Assisted graduate machine learning and natural language processing courses at MBZUAI"
    ]
  },
  {
    period: "May – Jul 2023",
    role: "Research Assistant Intern",
    institution: "MBZUAI",
    location: "Abu Dhabi, UAE",
    bullets: [
      "Co-authored 'ArTST: Arabic Text and Speech Transformer' (ArabicNLP @ EMNLP 2023)",
      "Won Best Paper Award for ArTST at ArabicNLP 2023"
    ]
  },
  {
    period: "March – Jul 2022",
    role: "Data Scientist",
    institution: "Izifin",
    location: "Lagos, Nigeria",
    bullets: [
      "Developed data science and machine learning pipelines for fintech credit analytics"
    ]
  }
];

export const LEADERSHIP_VOLUNTEERING: LeadershipItem[] = [
  {
    period: "Mar 2025 - present",
    role: "Program Committee",
    organization: "Speakable 2026 (Co-located with LREC)",
    detail: "Reviewing speech accessibility and assistive speech technology research"
  },
  {
    period: "Aug 2025 - present",
    role: "Residential Life Assistant",
    organization: "MBZUAI",
    detail: "Supporting campus student life and residential community at MBZUAI"
  },
  {
    period: "2024 - 2025",
    role: "Board Member",
    organization: "MBZUAI Alumni Advisory Board",
    detail: "Advising university leadership on alumni relations and career initiatives"
  },
  {
    period: "2025",
    role: "Peer Reviewer",
    organization: "ACL ARR 2025",
    detail: "Reviewing submissions across computational linguistics and speech tracks"
  },
  {
    period: "Jan 2025",
    role: "Birds of Feathers Program Co-Chair",
    organization: "COLING 2025",
    detail: "Organizing Birds of a Feather community sessions for conference attendees"
  },
  {
    period: "Jul 2024",
    role: "Program Facilitator",
    organization: "AI Summer School, MBZUAI",
    detail: "Mentoring international students on deep learning and NLP fundamentals"
  },
  {
    period: "2024 - Present",
    role: "Executive AI Facilitator",
    organization: "MBZUAI Executive Program & AI Leadership Training",
    detail: "Delivering applied 'AI for Business Brainstorming' workshops and leadership immersion sessions to C-suite and government leaders"
  },
  {
    period: "Aug 2023 - Apr 2024",
    role: "President",
    organization: "Graduate Student Council, MBZUAI",
    detail: "Represented student body across academic governance, welfare, and student life"
  },
  {
    period: "Sep 2022 - Aug 2023",
    role: "Public Relations Coordinator",
    organization: "Graduate Student Council, MBZUAI",
    detail: "Managed council communications, event outreach, and student publications"
  }
];

export const HONORS_AND_AWARDS: AwardItem[] = [
  {
    year: "2026",
    title: "Speech Pathology Best Paper Award",
    organization: "Speech Pathology Australia at Interspeech 2026",
    description: "Awarded Speech Pathology Best Paper Award by Speech Pathology Australia for 'Aligning Stuttered-Speech Research with End-User Needs: Scoping Review, Survey, and Guidelines' presented at Interspeech 2026.",
    badge: "Best Paper Award"
  },
  {
    year: "2026",
    title: "Fee Waiver Recipient",
    organization: "Advanced Language Processing Winter School ALPS",
    description: "Competitive fee waiver award to attend the ALPS winter school.",
    badge: "Fellowship"
  },
  {
    year: "2024",
    title: "Research Fellowship Grant",
    organization: "ITSERR - Italian Strengthening of the Esfri Ri Resilience (Trans-National Program)",
    description: "Awarded transnational research fellowship for research residency at ISTI CNR in Pisa, Italy.",
    badge: "Research Grant"
  },
  {
    year: "2024",
    title: "Inspirational Leader Award",
    organization: "MBZUAI Commencement",
    description: "Awarded during MBZUAI graduation in recognition of exceptional leadership and service to the student and research community.",
    badge: "Commencement Honor"
  },
  {
    year: "2023",
    title: "Best Paper Award",
    organization: "ArabicNLP @ EMNLP",
    description: "Awarded Best Paper for 'ArTST: Arabic Text and Speech Transformer'.",
    badge: "Best Paper Award"
  },
  {
    year: "2023",
    title: "Champion at GITEX x Ali Baba Cloud Hackathon",
    organization: "GITEX GLOBAL & Alibaba Cloud",
    description: "Won 1st Place Champion out of international teams for TalkTrain, an AI-powered presentation practice assistant with 3D avatar animation.",
    badge: "1st Place Champion"
  },
  {
    year: "2022",
    title: "Recipient, United Arab Emirates Government Graduate Scholarship",
    organization: "UAE Government / MBZUAI",
    description: "Awarded prestigious full graduate scholarship covering graduate studies and research at MBZUAI.",
    badge: "Full Scholarship"
  },
  {
    year: "2021",
    title: "Selected Scholar",
    organization: "Cornell, Maryland, Max Planck Pre-Doctoral Research School (CMMRS)",
    description: "Selected as one of the rising pre-doctoral computer science scholars for the CMMRS program.",
    badge: "Selected Scholar"
  }
];
