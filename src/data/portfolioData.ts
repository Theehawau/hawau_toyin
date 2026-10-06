export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number | string;
  category: 'stuttered-speech' | 'multilingual-nlp' | 'data-curation' | 'speech-rec-gen';
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
  scholar: "https://scholar.google.com/citations?user=hawau_olamide",
  website: "https://theehawau.github.io",
  avatar: "hawau_profile.jpg",
  researchInterests: [
    "AI for stuttered speech",
    "Efficient, Multilingual & Multimodal NLP",
    "Data Curation & Annotation",
    "Speech Recognition & Generation"
  ],
  stutterbankUrl: "https://theehawau.github.io/stutterbank/",
  languages: [
    { language: "English", proficiency: "Fluent" },
    { language: "Yoruba", proficiency: "Native" },
    { language: "French", proficiency: "A2" },
    { language: "Arabic", proficiency: "A1" }
  ],
  bio: "a PhD student at MBZUAI under Dr Hanan Aldarmaki working on building speech models for real world impact, particularly in low-resource and atypical speech areas. My PhD thesis is on building models for automatic stutter severity assessment in collaboration with speech-language pathologists. I enjoy collaborating on interesting resource development projects and contributing open-source resource for the research community.",
  heroPunchline: "AI for stuttered speech · Efficient, Multilingual & Multimodal NLP · Data Curation & Annotation · Speech Recognition & Generation",
  stats: [
    { label: "Best Paper Award", value: "Speech Pathology", detail: "Speech Pathology Australia @ Interspeech 2026" },
    { label: "Best Paper Award", value: "ArabicNLP", detail: "ArabicNLP @ EMNLP (for ArTST, 2023)" },
    { label: "Hackathon Champion", value: "1st Place", detail: "GITEX x Ali Baba Cloud Hackathon (2023)" },
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
    category: "Speech Recognition & Speech Generation",
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
      github: "https://github.com/Theehawau",
      paper: "https://arxiv.org/abs/2310.16621"
    }
  },
  {
    id: "dualref",
    title: "What Counts as an Error?",
    subtitle: "Dual-Reference Benchmarking for Atypical ASR",
    role: "First Author",
    period: "2024 - 2026",
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
    techStack: ["Python", "Whisper", "NVIDIA NeMo CTC", "Kaldi", "Librosa", "usecase_asr"],
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
    authors: ["Hawau Olamide Toyin", "Mutiah Apampa", "Zeerak Talat", "Zhengjun Yue", "Hanan Aldarmaki"],
    venue: "Interspeech 2026",
    year: 2026,
    category: "stuttered-speech",
    award: "Speech Pathology Best Paper Award (Speech Pathology Australia at Interspeech 2026)",
    highlight: "Speech Pathology Best Paper Award · Interspeech 2026",
    abstract: "Despite advancements in speech recognition and assistive voice technologies, existing models frequently underperform for individuals who stutter due to acoustic variations, prolongations, repetitions, and blocks. We conduct an extensive scoping review and empirical survey involving both people who stutter (PWS) and speech-language pathologists (SLPs). We identify fundamental disconnects between mainstream ASR metrics and real-world communicative or diagnostic needs, establishing evidence-based guidelines and open survey datasets to steer assistive voice AI toward genuine clinical and user alignment.",
    links: {
      project: "https://theehawau.github.io/stutterbank/"
    }
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
      project: "https://theehawau.github.io/stutterbank/"
    }
  },
  {
    id: "are-llms-good-diacritizers",
    title: "Are LLMs Good Text Diacritizers? An Arabic and Yoruba Case Study",
    authors: ["Hawau Olamide Toyin", "Samar Magdy", "Hanan Aldarmaki"],
    venue: "LREC 2026",
    year: 2026,
    category: "multilingual-nlp",
    highlight: "LREC 2026",
    abstract: "Text diacritization is essential for disambiguating pronunciation, grammatical morphology, and lexical semantics in morphologically complex and tonal orthographies. This study presents a comparative evaluation of state-of-the-art Large Language Models (LLMs) on automatic text diacritization using Modern Standard Arabic and Yoruba as case studies. We analyze zero-shot, few-shot, and fine-tuned capabilities, highlighting phonetic nuances, tonal diacritic recovery, and common failure modes in low-resource African and Afroasiatic languages.",
    links: {}
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
    links: {}
  },
  {
    id: "voice-of-a-continent",
    title: "Voice of a Continent: Mapping Africa’s Speech Technology Frontier",
    authors: ["AbdelRahim A. Elmadany", "Sang Yun Kwon", "Hawau Olamide Toyin", "Muhammad Abdul-Mageed"],
    venue: "EMNLP 2025",
    year: 2025,
    category: "speech-rec-gen",
    highlight: "EMNLP 2025",
    abstract: "Africa is home to over 2,000 languages representing approximately one-third of the world’s linguistic diversity, yet African languages remain severely underrepresented in global speech processing benchmarks. We present an empirical survey and research map exploring speech technologies across Africa, reviewing dataset availability, dialectal density, acoustic modeling frontiers, and strategic recommendations for equitable speech research.",
    links: {}
  },
  {
    id: "arvoice-dataset",
    title: "ArVoice: A Multi-Speaker Dataset for Arabic Speech Synthesis",
    authors: ["Hawau Olamide Toyin", "Rufael Fekadu Marew", "Humaid Alblooshi", "Samar Magdy", "Hanan Aldarmaki"],
    venue: "Interspeech 2025",
    year: 2025,
    category: "data-curation",
    highlight: "Interspeech 2025",
    abstract: "Neural text-to-speech synthesis (TTS) for Arabic is hindered by the scarcity of high-fidelity, phonetically balanced, multi-speaker corpora. We present ArVoice, a multi-speaker speech dataset engineered specifically for expressive Arabic speech synthesis. ArVoice incorporates diverse native speaker identities, balanced phonetic distribution, and rigorous recording standards to serve as an open benchmark for low-resource and multi-speaker Arabic speech synthesis.",
    links: {}
  },
  {
    id: "clinical-annotations-stuttering",
    title: "Clinical Annotations for Automatic Stuttering Severity Assessment",
    authors: ["Anna Rita Valente", "Rufael Fekadu Marew", "Hawau Olamide Toyin", "Hanan Aldarmaki"],
    venue: "Interspeech 2025",
    year: 2025,
    category: "stuttered-speech",
    highlight: "Interspeech 2025",
    abstract: "Standardized clinical assessment of stuttering severity—such as the Stuttering Severity Instrument (SSI-4)—depends upon detailed acoustic labeling of stuttering events including repetitions, prolongations, and postural fixations. We introduce a dataset of expert clinical annotations for automatic stuttering severity assessment, providing validated acoustic baselines to train neural architectures capable of automated severity profiling and clinical progress monitoring.",
    links: {
      project: "https://theehawau.github.io/stutterbank/"
    }
  },
  {
    id: "all-languages-matter-cvpr",
    title: "All languages matter: Evaluating lmms on culturally diverse 100 languages",
    authors: ["Ashmal Vayani", "Dinura Dissanayake", "Hawau Olamide Toyin", "Fahad Shahbaz Khan"],
    venue: "CVPR 2025",
    year: 2025,
    category: "multilingual-nlp",
    highlight: "CVPR 2025",
    abstract: "While vision-language models (LMMs) have demonstrated impressive multimodal reasoning, their training and evaluation pipelines remain heavily centered on English and Western cultural contexts. We present a systematic benchmark evaluating vision-language models across 100 culturally diverse languages, analyzing cross-lingual visual question answering, cultural concepts, and failure modes across low-resource language communities.",
    links: {}
  },
  {
    id: "dialectal-coverage-arabic",
    title: "Dialectal Coverage and Generalization in Arabic Speech Recognition",
    authors: ["Amirbek Djanibekov*", "Hawau Olamide Toyin*", "Raghad Alshalan", "Abdullah Alitr", "Hanan Aldarmaki"],
    venue: "ACL 2025",
    year: 2025,
    category: "speech-rec-gen",
    isEqualContribution: true,
    highlight: "ACL 2025 (*Equal Contribution)",
    abstract: "Automatic Speech Recognition for Arabic faces significant acoustic and lexical challenges due to the stark diglossic divergence between Modern Standard Arabic (MSA) and diverse regional spoken dialects. We investigate dialectal coverage, acoustic robustness, and cross-dialectal transfer across major Arabic dialect groups, evaluating both foundational pre-trained encoders and fine-tuned architectures to establish generalization benchmarks across dialectal continua.",
    links: {}
  },
  {
    id: "where-are-we-african",
    title: "Where are we? Evaluating LLM performance on African languages",
    authors: ["Ife Adebara", "Hawau Olamide Toyin", "Muhammed Abdul-Mageed"],
    venue: "ACL 2025",
    year: 2025,
    category: "multilingual-nlp",
    highlight: "ACL 2025",
    abstract: "Although Large Language Models demonstrate state-of-the-art performance on mainstream benchmarks, their capabilities on indigenous African languages remain critically under-benchmarked. We conduct a rigorous multi-task evaluation of leading proprietary and open-weight LLMs across African languages, evaluating performance in machine translation, question answering, reasoning, and sentiment analysis.",
    links: {}
  },
  {
    id: "infant-cry-detection",
    title: "Infant Cry Detection Using Causal Temporal Representation",
    authors: ["Minghao Fu", "Danning Li", "Hawau Olamide Toyin", "Haiyan Jiang", "Kun Zhang", "Hanan Aldarmaki"],
    venue: "ICASSP 2025",
    year: 2025,
    category: "speech-rec-gen",
    highlight: "ICASSP 2025",
    abstract: "Detecting infant distress cries in natural home environments requires isolating transient cry acoustics from continuous environmental noise. We propose a causal temporal representation framework that models sequential acoustic dependencies without future temporal leakage. Our architecture achieves superior classification accuracy and significantly fewer false positives compared to standard non-causal spectral baselines.",
    links: {}
  },
  {
    id: "detecting-machine-generated-text",
    title: "Exploring the Limitations of Detecting Machine-Generated Text",
    authors: ["Jad Doughman", "Osama Mohammed Afzal", "Hawau Olamide Toyin", "Shady Shehata", "Preslav Nakov", "Zeerak Talat"],
    venue: "COLING 2025",
    year: 2025,
    category: "multilingual-nlp",
    highlight: "COLING 2025",
    abstract: "As neural text generation becomes increasingly fluent and indistinguishable from human writing, reliable detection of machine-generated text is vital for academic integrity and information security. We investigate the boundaries and failure modes of current detector architectures under domain distribution shift, iterative paraphrasing, adversarial perturbations, and multilingual generation.",
    links: {}
  },
  {
    id: "sttatts-emnlp",
    title: "STTATTS: Unified Model for Speech-to-Text and Text-to-Speech",
    authors: ["Hawau Olamide Toyin", "Hao Li", "Hanan Aldarmaki"],
    venue: "EMNLP 2024 Findings",
    year: 2024,
    category: "speech-rec-gen",
    highlight: "EMNLP 2024 Findings (MSc Thesis)",
    abstract: "Speech recognition (ASR) and text-to-speech (TTS) models are traditionally treated as separate systems with independent parameters, doubling computational and storage overhead. STTATTS introduces a parameter-efficient multi-task framework that jointly learns ASR and multi-speaker TTS using a shared transformer encoder-decoder backbone connected via an MLP-based task fusion module. STTATTS cuts overall parameter count by approximately 50% while matching or outperforming independently trained single-task baselines across English and Arabic.",
    figure: "/src/assets/images/original_papers/sttatts_architecture.png",
    figureCaption: "Figure 1 from original paper: STTATTS task fusion architecture.",
    links: {
      paper: "https://arxiv.org/abs/2410.18607"
    }
  },
  {
    id: "polywer-emnlp",
    title: "PolyWER: A Holistic Evaluation Framework for Code-Switched Speech Recognition",
    authors: ["Karima Kadaoui", "Maryam Ali", "Hawau Olamide Toyin", "Ibrahim Mohammed", "Hanan Aldarmaki"],
    venue: "EMNLP 2024 Findings",
    year: 2024,
    category: "data-curation",
    highlight: "EMNLP 2024 Findings",
    abstract: "Standard Word Error Rate (WER) is inherently rigid when evaluating code-switched speech because valid transliterations (writing loanwords in the matrix language script) and immediate translations are penalized as transcription errors. We propose PolyWER, an evaluation framework that formulates dynamic programming alignment matrices to accept multiple valid lexical, transliterated, and translated realizations. Human evaluation experiments confirm PolyWER aligns much closer with human perceptual judgments than conventional WER or CER.",
    figure: "/src/assets/images/original_papers/polywer_matrix.png",
    figureCaption: "Figure 1 from original paper: Lowest-cost PolyWER path alignment matrix.",
    links: {
      paper: "https://aclanthology.org/2024.findings-emnlp.356.pdf",
      code: "https://github.com/mbzuai-nlp/PolyWER"
    }
  },
  {
    id: "artst-arabicnlp",
    title: "ArTST: Arabic Text and Speech Transformer",
    authors: ["Hawau Olamide Toyin*", "Amirbek Djanibekov*", "Ajinkya Kulkarni", "Hanan Aldarmaki"],
    venue: "ArabicNLP @ EMNLP 2023",
    year: 2023,
    category: "speech-rec-gen",
    isEqualContribution: true,
    highlight: "Best Paper Award at ArabicNLP 2023",
    abstract: "We present ArTST, a pre-trained Arabic text and speech transformer based on a unified modal framework. Pre-trained from scratch on Modern Standard Arabic acoustic and textual data, ArTST unifies Speech-to-Text (ASR), Text-to-Speech synthesis (TTS), and Spoken Dialect Identification within a single shared representation. ArTST establishes state-of-the-art benchmarks in Arabic speech tasks and demonstrates exceptional parameter transfer in low-resource speech synthesis.",
    figure: "/src/assets/images/original_papers/artst_architecture.png",
    figureCaption: "Figure 1 from original paper: ArTST unified text and speech transformer architecture.",
    links: {
      paper: "https://arxiv.org/abs/2310.16621"
    }
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
    authors: ["Bashar Talafha", "Hawau Olamide Toyin", "Muhammad Abdul-Mageed"],
    venue: "ArabicNLP 2025",
    year: 2025,
    role: "Co-Organizer & Author"
  },
  {
    id: "iqra-eval-2025",
    title: "Iqra’Eval: A Shared Task on Qur’anic Pronunciation Assessment",
    authors: ["Yassine El Kheir", "Amit Meghanani", "Hawau Olamide Toyin", "Ahmed Ali"],
    venue: "ArabicNLP 2025",
    year: 2025,
    role: "Co-Organizer & Author"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "PhD in Natural Language Processing",
    field: "Natural Language Processing",
    institution: "Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI)",
    period: "Aug 2024 – present",
    details: "Focus on AI for Stuttered Speech, Speech Recognition, and Multilingual Language Technologies."
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
      "Co-authored 'Towards a Unified Benchmark for Arabic Pronunciation Assessment: Qur’anic Recitation as Case Study' (Interspeech 2025)",
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
    period: "2024",
    role: "AI Training Facilitator",
    organization: "MBZUAI Executive Program (The Academy)",
    detail: "Delivering applied AI workshops to industry executives"
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
