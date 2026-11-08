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

export interface Talk {
  title: string;
  /** Human-readable date shown on the site, e.g. "October 13, 2026" or "April 2025". */
  date: string;
  /** Machine-readable date (YYYY-MM-DD) used to decide whether a talk is upcoming or past. */
  isoDate: string;
  paperUrl?: string;
  announcementUrl?: string;
}

export interface LocationTalkGroup {
  id: string;
  institution: string;
  location: string;
  announcementUrl?: string;
  talks: Talk[];
}

/** True if the talk takes place today or later (compared by calendar day). */
export const isTalkUpcoming = (talk: Talk, now: Date = new Date()): boolean => {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [y, m, d] = talk.isoDate.split('-').map(Number);
  return new Date(y, m - 1, d) >= today;
};

export const isGroupUpcoming = (group: LocationTalkGroup, now: Date = new Date()): boolean =>
  group.talks.some((t) => isTalkUpcoming(t, now));

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
    "Data Curation"
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
  bio: "Hi! I'm a PhD candidate at MBZUAI under Dr Hanan Aldarmaki working on building speech models for real world impact, particularly in low-resource and atypical speech areas. My PhD thesis is on building models for automatic stutter severity assessment in collaboration with speech-language pathologists. I enjoy collaborating on interesting resource development projects and contributing open-source resource for the research community.",
  heroPunchline: "AI for Stuttered Speech · Speech Recognition, Multimodal & Multilingual NLP · Data Curation",
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
    techStack: ["PyTorch", "Transformers", "Speech-to-Text", "Text-to-Speech", "Task Fusion MLP"],
    links: {
      github: "https://github.com/mbzuai-nlp/sttatts",
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
    figureCaption: "Figure 1 from original paper: Intended vs Verbatim specialization of high performance ASR models evaluated on stuttered speech (Interspeech 2026).",
    description: "Pioneering benchmarking framework that decouples verbatim disfluency transcriptions from intended speaker targets to accurately evaluate ASR on atypical stuttered speech.",
    fullOverview: "Atypical speech, such as stuttering, has historically suffered from flawed ASR evaluations where disfluencies are conflated into a single ambiguous ground truth. This paper benchmarks 11 ASR architectures (encoder-decoder, CTC, and transducer) on atypical speech across both verbatim (clinical) and intended (assistive) references, revealing that model rankings shift dramatically depending on the transcription goal.",
    highlights: [
      "Solidifies the dual-reference evaluation standard (Verbatim vs Intended) for atypical ASR",
      "Benchmarks 11 modern ASR architectures on stuttered speech cohorts",
      "Demonstrates model ranking inversions when evaluating for assistive vs clinical use cases",
      "Published at Interspeech 2026"
    ],
    techStack: ["Python", "Whisper", "NVIDIA NeMo CTC", "Librosa"],
    links: {
      github: "https://github.com/Theehawau/usecase_asr",
      paper: "https://www.isca-archive.org/interspeech_2026/toyin26_interspeech.pdf"
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
    venue: "Interspeech [Long Track]",
    year: 2026,
    category: "stuttered-speech",
    award: "Speech Pathology Best Paper Award (Speech Pathology Australia at Interspeech 2026)",
    highlight: "Speech Pathology Best Paper Award · Interspeech 2026",
    abstract: "Atypical speech is receiving greater attention in speech technology research, but much of this work unfolds with limited interdisciplinary dialogue. For stuttered speech in particular, it is widely recognised that current speech recognition systems fall short in practice, and current evaluation methods and research priorities are not systematically grounded in end-user experiences and needs. In this work, we analyse these gaps through 1) a scoping review of papers that deal with stuttered speech and 2) a survey of 70 stakeholders, including adults who stutter and speech-language pathologists. By analysing these two perspectives, we propose a taxonomy of stuttered-speech research, identify where current research directions diverge from the needs articulated by stakeholders, and conclude by outlining concrete guidelines and directions towards addressing the real needs of the stuttering community.",
    links: {
      paper: "https://www.isca-archive.org/interspeech_2026/toyin26b_interspeech.pdf",
      project: "https://theehawau.github.io/stutterbank/",
    },
    bibtex: `@inproceedings{toyin26b_interspeech,
  title     = {{Aligning Stuttered-Speech Research with End-User Needs: Scoping Review, Survey, and Guidelines}},
  author    = {Hawau Olamide Toyin and Mutiah Apampa and Toluwani Aremu and Humaid Alblooshi and Ana Rita Valente and Gonçalo Leal and Zhengjun Yue and Zeerak Talat and Hanan Aldarmaki},
  year      = {2026},
  booktitle = {{Interspeech 2026 [Long Track]}},
  pages     = {4344--4353},
  doi       = {10.21437/Interspeech.2026-1704},
  issn      = {2958-1796},
}`
  },
  {
    id: "what-counts-as-error",
    title: "What Counts as an Error? Dual-Reference Benchmarking for Atypical ASR",
    authors: ["Hawau Olamide Toyin", "Srinivasan Umesh", "Hanan Aldarmaki"],
    venue: "Interspeech",
    year: 2026,
    category: "stuttered-speech",
    highlight: "Interspeech 2026",
    abstract: "ASR systems have been often reported to underperform on atypical speech. An often conflated compounding factor is the existence of two valid transcription references: verbatim (actual produced speech, including repetitions/prolongations) and intended (the canonical form of the text with disfluencies removed) in atypical speech recognition depending on context and use-case. Most ASR evaluations conflate this duality into a single ground truth and reward systems that delete disfluencies, ignoring verbatim faithfulness. We benchmark 11 ASR models from encoder-decoder, CTC and transducer families using both verbatim and intended references on atypical stuttered speech as a case study. Our quantitative assessment underlines the disparity in model performance and rankings using the two transcript styles. Through this analysis, we highlight the importance of selecting a suitable transcription reference for valid model selection depending on the use-case, particularly for atypical ASR.",
    figure: "/src/assets/images/original_papers/dualref_benchmarking.png",
    figureCaption: "Figure 1 from original paper: Intended vs Verbatim performance specialization.",
    links: {
      paper: "https://www.isca-archive.org/interspeech_2026/toyin26_interspeech.pdf",
      code: "https://github.com/Theehawau/usecase_asr",
      project: "https://theehawau.github.io/stutterbank/",
    },
    bibtex: `@inproceedings{toyin26_interspeech,
  title     = {{What Counts as an Error? Dual-Reference Benchmarking for Atypical ASR}},
  author    = {Hawau Olamide Toyin and S Umesh and Hanan Aldarmaki},
  year      = {2026},
  booktitle = {{Interspeech 2026}},
  pages     = {4848--4852},
  doi       = {10.21437/Interspeech.2026-750},
  issn      = {2958-1796},
}`
  },
  {
    id: "clinical-annotations-stuttering",
    title: "Clinical Annotations for Automatic Stuttering Severity Assessment",
    authors: ["Ana Rita Valente", "Rufael Marew", "Hawau Olamide Toyin", "Hamdan Al-Ali", "Anelise Bohnen", "Inma Becerra", "Elsa Marta Soares", "Gonçalo Leal", "Hanan Aldarmaki"],
    venue: "Interspeech",
    year: 2025,
    category: "stuttered-speech",
    highlight: "Interspeech 2025 · Clinical Stuttering Baselines",
    abstract: "Stuttering is a complex disorder that requires specialized expertise for effective assessment and treatment. This paper presents an effort to enhance the FluencyBank dataset with a new stuttering annotation scheme based on established clinical standards. To achieve high-quality annotations, we hired expert clinicians to label the data, ensuring that the resulting annotations mirror real-world clinical expertise. The annotations are multi-modal, incorporating audiovisual features for the detection and classification of stuttering moments, secondary behaviors, and tension scores. In addition to individual annotations, we additionally provide a test set with highly reliable annotations based on expert consensus for assessing individual annotators and machine learning models. Our experiments and analysis illustrate the complexity of this task that necessitates extensive clinical expertise for valid training and evaluation of stuttering assessment models.",
    links: {
      paper: "https://www.isca-archive.org/interspeech_2025/valente25_interspeech.pdf",
      dataset: "https://github.com/mbzuai-nlp/CASA/tree/main",
    },
    bibtex: `@inproceedings{valente25_interspeech,
  title     = {{Clinical Annotations for Automatic Stuttering Severity Assessment}},
  author    = {Ana Valente and Rufael Marew and Hawau Toyin and Hamdan Al-Ali and Anelise Bohnen and Inma Becerra and Elsa Soares and Gonçalo Leal and Hanan Aldarmaki},
  year      = {2025},
  booktitle = {{Interspeech 2025}},
  pages     = {4318--4322},
  doi       = {10.21437/Interspeech.2025-1916},
  issn      = {2958-1796},
}`
  },
  {
    id: "sttatts-emnlp",
    title: "STTATTS: Unified Model for Speech-to-Text and Text-to-Speech",
    authors: ["Hawau Olamide Toyin", "Hao Li", "Hanan Aldarmaki"],
    venue: "Findings of EMNLP",
    year: 2024,
    category: "speech-multilingual-nlp",
    highlight: "EMNLP 2024 Findings (Master's Thesis)",
    abstract: "Speech recognition and speech synthesis models are typically trained separately, each with its own set of learning objectives, training data, and model parameters, resulting in two distinct large networks. We propose a parameter-efficient approach to learning ASR and TTS jointly via a multi-task learning objective and shared parameters. Our evaluation demonstrates that the performance of our multi-task model is comparable to that of individually trained models while significantly saving computational and memory costs (~50% reduction in the total number of parameters required for the two tasks combined). We experiment with English as a resource-rich language, and Arabic as a relatively low-resource language due to shortage of TTS data. Our models are trained with publicly available data, and both the training code and model checkpoints are openly available for further research.",
    figure: "/src/assets/images/original_papers/sttatts_architecture.png",
    figureCaption: "Figure 1 from original paper: STTATTS task fusion architecture.",
    links: {
      paper: "https://arxiv.org/abs/2410.18607",
      code: "https://github.com/mbzuai-nlp/sttatts",
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
    venue: "ArabicNLP @ EMNLP",
    year: 2023,
    category: "speech-multilingual-nlp",
    isEqualContribution: true,
    award: "Best Paper Award at ArabicNLP 2023",
    highlight: "Best Paper Award at ArabicNLP 2023",
    abstract: "We present ArTST, a pre-trained Arabic text and speech transformer for supporting open-source speech technologies for the Arabic language. The model architecture follows the unified-modal framework, SpeechT5, that was recently released for English, and is focused on Modern Standard Arabic (MSA), with plans to extend the model for dialectal and code-switched Arabic in future editions. We pre-trained the model from scratch on MSA speech and text data, and fine-tuned it for the following tasks: Automatic Speech Recognition (ASR), Text-To-Speech synthesis (TTS), and spoken dialect identification. In our experiments comparing ArTST with SpeechT5, as well as with previously reported results in these tasks, ArTST performs on a par with or exceeding the current state-of-the-art in all three tasks. Moreover, we find that our pre-training is conducive for generalization, which is particularly evident in the low-resource TTS task. The pre-trained model as well as the fine-tuned ASR and TTS models are released for research use.",
    figure: "/src/assets/images/original_papers/artst_architecture.png",
    figureCaption: "Figure 1 from original paper: ArTST unified text and speech transformer architecture.",
    links: {
      paper: "https://aclanthology.org/2023.arabicnlp-1.5.pdf",
      code: "https://github.com/Theehawau/ArTST",
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
    venue: "EMNLP",
    year: 2025,
    category: "speech-multilingual-nlp",
    highlight: "EMNLP 2025 Main Track",
    abstract: "Africa’s rich linguistic diversity remains significantly underrepresented in speech technologies, creating barriers to digital inclusion. To alleviate this challenge, we systematically map the continent’s speech space of datasets and technologies, leading to a new comprehensive benchmark SimbaBench for downstream African speech tasks. Using SimbaBench, we introduce the Simba family of models, achieving state-of-the-art performance across multiple African languages and speech tasks. Our benchmark analysis reveals critical patterns in resource availability, while our model evaluation demonstrates how dataset quality, domain diversity, and language family relationships influence performance across languages. Our work highlights the need for expanded speech technology resources that better reflect Africa’s linguistic diversity and provides a solid foundation for future research and development efforts toward more inclusive speech technologies.",
    links: {
      paper: "https://aclanthology.org/2025.emnlp-main.559.pdf",
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
    abstract: "We investigate the effectiveness of large language models (LLMs) for text diacritization in two typologically distinct languages: Arabic and Yoruba. To enable a rigorous evaluation, we introduce a novel multilingual dataset MultiDiac, with diverse samples that capture a range of diacritic ambiguities. We evaluate 12 LLMs varying in size, accessibility, and language coverage, and benchmark them against 4 specialized diacritization models. Additionally, we fine-tune four small open-source models using LoRA for Yoruba. Our results show that many off-the-shelf LLMs outperform specialized diacritization models, but smaller models suffer from hallucinations. We find that fine-tuning on a small dataset can help improve diacritization performance and reduce hallucinations for Yoruba.",
    links: {
      paper: "https://arxiv.org/abs/2506.11602",
      dataset: "https://huggingface.co/datasets/herwoww/MultiDiac",
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
    venue: "ACL",
    year: 2025,
    category: "speech-multilingual-nlp",
    isEqualContribution: true,
    highlight: "ACL 2025 (*Equal Contribution)",
    abstract: "Developing robust automatic speech recognition (ASR) systems for Arabic requires effective strategies to manage its diversity. Existing ASR systems mainly cover the modern standard Arabic (MSA) variety and few high-resource dialects, but fall short in coverage and generalization across the multitude of spoken variants. Code-switching with English and French is also common in different regions of the Arab world, which challenges the performance of monolingual Arabic models. In this work, we introduce a suite of ASR models optimized to effectively recognize multiple variants of spoken Arabic, including MSA, various dialects, and code-switching. We provide open-source pre-trained models that cover data from 17 Arabic-speaking countries, and fine-tuned MSA and dialectal ASR models that include at least 11 variants, as well as multi-lingual ASR models covering embedded languages in code-switched utterances. We evaluate ASR performance across these spoken varieties and demonstrate both coverage and performance gains compared to prior models.",
    links: {
      paper: "https://aclanthology.org/2025.acl-long.1427.pdf",
      code: "https://github.com/Theehawau/ArTST",
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
    venue: "ACL",
    year: 2025,
    category: "speech-multilingual-nlp",
    highlight: "ACL 2025",
    abstract: "Africa’s rich linguistic heritage remains underrepresented in NLP, largely due to historical policies that favor foreign languages and create significant data inequities. In this paper, we integrate theoretical insights on Africa’s language landscape with an empirical evaluation using Sahara— a comprehensive benchmark curated from large-scale, publicly accessible datasets capturing the continent’s linguistic diversity. By systematically assessing the performance of leading large language models (LLMs) on Sahara, we demonstrate how policy-induced data variations directly impact model effectiveness across African languages. Our findings reveal that while a few languages perform reasonably well, many Indigenous languages remain marginalized due to sparse data. Leveraging these insights, we offer actionable recommendations for policy reforms and inclusive data practices. Overall, our work underscores the urgent need for a dual approach—combining theoretical understanding with empirical evaluation—to foster linguistic diversity in AI for African communities.",
    links: {
      paper: "https://aclanthology.org/2025.acl-long.1572.pdf",
    },
    bibtex: `@inproceedings{adebara2025wherearewe,
  title={Where Are We? Evaluating {LLM} Performance on African Languages},
  author={Adebara, Ife and Toyin, Hawau Olamide and Ghebremichael, Nahom Tesfu and Elmadany, AbdelRahim A. and Abdul-Mageed, Muhammad},
  booktitle={Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)},
  doi = "10.18653/v1/2025.acl-long.1572",
  pages={32704--32731},
  year={2025}
}`
  },
  {
    id: "all-languages-matter-cvpr",
    title: "All languages matter: Evaluating lmms on culturally diverse 100 languages",
    authors: ["Ashmal Vayani", "Dinura Dissanayake", "Hasindri Watawana", "Noor Ahsan", "Nevasini Sasikumar", "Omkar Thawakar","..." , "Hawau Olamide Toyin","..." , "Fahad Shahbaz Khan"],
    venue: "CVPR",
    year: 2025,
    category: "speech-multilingual-nlp",
    highlight: "CVPR 2025",
    abstract: "Existing Large Multimodal Models (LMMs) generally focus on only a few regions and languages. As LMMs continue to improve, it is increasingly important to ensure they understand cultural contexts, respect local sensitivities, and support low-resource languages, all while effectively integrating corresponding visual cues. In pursuit of culturally diverse global multimodal models, our proposed All Languages Matter Benchmark (ALM-bench) represents the largest and most comprehensive effort to date for evaluating LMMs across 100 languages. ALM-bench challenges existing models by testing their ability to understand and reason about culturally diverse images paired with text in various languages, including many low-resource languages traditionally underrepresented in LMM research. The benchmark offers a robust and nuanced evaluation framework featuring various question formats, including true/false, multiple choice, and open-ended questions, which are further divided into short and long-answer categories. ALM-bench design ensures a comprehensive assessment of a model's ability to handle varied levels of difficulty in visual and linguistic reasoning. To capture the rich tapestry of global cultures, ALM-bench carefully curates content from 13 distinct cultural aspects, ranging from traditions and rituals to famous personalities and celebrations. Through this, ALM-bench not only provides a rigorous testing ground for state-of-the-art open and closed-source LMMs but also highlights the importance of cultural and linguistic inclusivity, encouraging the development of models that can serve diverse global populations effectively. Our benchmark is publicly available.",
    links: {
      paper: "https://arxiv.org/abs/2411.16508",
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
    venue: "ICASSP",
    year: 2025,
    category: "speech-multilingual-nlp",
    highlight: "ICASSP 2025",
    abstract: "This paper addresses a major challenge in acoustic event detection, in particular infant cry detection in the presence of other sounds and background noises: the lack of precise annotated data. We present two contributions for supervised and unsupervised infant cry detection. The first is an annotated dataset for cry segmentation, which enables supervised models to achieve state-of-the-art performance. Additionally, we propose a novel unsupervised method, Causal Representation Spare Transition Clustering (CRSTC), based on causal temporal representation, which helps address the issue of data scarcity more generally. By integrating the detected cry segments, we significantly improve the performance of downstream infant cry classification, highlighting the potential of this approach for infant care applications.",
    links: {
      paper: "https://arxiv.org/abs/2503.06247",
      code: "https://github.com/danninglee/infant-cry-detection-causal-temporal-representation"
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
    venue: "COLING",
    year: 2025,
    category: "speech-multilingual-nlp",
    highlight: "COLING 2025",
    abstract: "Recent improvements in the quality of the generations by large language models have spurred research into identifying machine-generated text. Such work often presents high-performing detectors. However, humans and machines can produce text in different styles and domains, yet the performance impact of such on machine generated text detection systems remains unclear. In this paper, we audit the classification performance for detecting machine-generated text by evaluating on texts with varying writing styles. We find that classifiers are highly sensitive to stylistic changes and differences in text complexity, and in some cases degrade entirely to random classifiers. We further find that detection systems are particularly susceptible to misclassify easy-to-read texts while they have high performance for complex texts, leading to concerns about the reliability of detection systems. We recommend that future work attends to stylistic factors and reading difficulty levels of human-written and machine-generated text.",
    links: {
      paper: "https://arxiv.org/abs/2406.11073",
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
    venue: "ACL",
    year: 2026,
    category: "speech-multilingual-nlp",
    highlight: "ACL 2026 (Long Papers)",
    abstract: "Idiomatic expressions pose a major challenge for multilingual NLP because their meanings shift between figurative and literal usage, often requiring context for accurate interpretation. Prior work has focused on high-resource languages typically evaluates isolated idiom-meaning questions, overlooking realistic discourse. We introduce MIDI, a multilingual idiom dataset spanning 3 high-, 3 medium-, and 12 low-resource languages, curated by native speakers. Unlike previous datasets, MIDI provides idioms embedded in both sentence-level and conversational contexts, capturing both literal and figurative readings. Benchmarking state-of-the-art models shows that idiom comprehension degrades in low-resource languages and that, in all resource tiers, literal interpretations are substantially harder than figurative ones. Conversational context improves performance but does not eliminate these disparities. Through controlled tests and interventions on hidden representations, we further separate memorization from reasoning, exposing core limitations of current models.",
    links: {
      paper: "https://aclanthology.org/2026.acl-long.564.pdf",
      dataset: "https://huggingface.co/datasets/Almheiri/MultIdiom"
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
    venue: "Interspeech",
    year: 2025,
    category: "data-curation",
    highlight: "Interspeech 2025 · Curated Dataset",
    abstract: "We introduce ArVoice, a multi-speaker Modern Standard Arabic (MSA) speech corpus with diacritized transcriptions, intended for multi-speaker speech synthesis, and can be useful for other tasks such as speech-based diacritic restoration, voice conversion, and deepfake detection. ArVoice comprises: (1) a new professionally recorded set from six voice talents with diverse demographics, (2) a modified subset of the Arabic Speech Corpus; and (3) high-quality synthetic speech from two commercial systems. The complete corpus consists of a total of 83.52 hours of speech across 11 voices; around 10 hours consist of human voices from 7 speakers. We train three open-source TTS and two voice conversion systems to illustrate the use cases of the dataset. The corpus is available for research use.",
    links: {
      paper: "https://www.isca-archive.org/interspeech_2025/toyin25_interspeech.pdf",
      dataset: "https://huggingface.co/datasets/MBZUAI/ArVoice",
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
    abstract: "Code-switching in speech, particularly between languages that use different scripts, can potentially be correctly transcribed in various forms, including different ways of transliteration of the embedded language into the matrix language script. Traditional methods for measuring accuracy, such as Word Error Rate (WER), are too strict to address this challenge. In this paper, we introduce PolyWER, a proposed framework for evaluating speech recognition systems to handle language-mixing. PolyWER accepts transcriptions of code-mixed segments in different forms, including transliterations and translations. We demonstrate the algorithms use cases through detailed examples, and evaluate it against human judgement. To enable the use of this metric, we appended the annotations of a publicly available Arabic-English code-switched dataset with transliterations and translations of code-mixed speech. We also utilize these additional annotations for fine-tuning ASR models and compare their performance using PolyWER. In addition to our main finding on PolyWER’s effectiveness, our experiments show that alternative annotations could be more effective for fine-tuning monolingual ASR models.",
    figure: "/src/assets/images/original_papers/polywer_matrix.png",
    figureCaption: "Figure 1 from original paper: Lowest-cost PolyWER path alignment matrix.",
    links: {
      paper: "https://aclanthology.org/2024.findings-emnlp.356.pdf",
      code: "https://github.com/mbzuai-nlp/PolyWER",
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
    venue: "LREC",
    year: 2026,
    category: "data-curation",
    highlight: "LREC 2026 (ISTI CNR Fellowship)",
    abstract: "Semantic similarity search is a method for exploring large text corpora and retrieving conceptually related content. Although widely used in modern language applications, it remains underexplored in the context of classical literature, where it could provide scholars with tools to uncover meaningful connections across authors, genres, and languages, surpassing the limitations of rule-based or keyword search systems. To promote the adoption of semantic retrieval in classical languages, we introduce Gretino, the first benchmark dataset for evaluating semantic search systems in Latin, Ancient Greek, and cross-lingual settings. Gretino comprises 240 carefully designed queries, each paired with five semantically relevant passages in Latin and Greek. The dataset is divided into two subsets: Gretino Silver, consisting of 200 queries and 1,000 targets (evenly split between Latin and Greek), generated with the assistance of ChatGPT and subsequently reviewed; and Gretino Gold, a manually curated high-quality subset of 40 queries and 200 targets, fully based on authentic classical texts. We evaluate four pre-trained language models: GreBERTa, LaBERTa, PhilBERTA, and SPhilBERTa and demonstrate the potential of a contrastive learning approach based on SimCSE (Gao et al., 2021) for fine-tuning, showing that training on carefully curated bilingual corpora, with texts aligned in the two languages, can improve retrieval performance.",
    links: {
      paper: "https://aclanthology.org/2026.lrec-1.70.pdf",
      code: "https://github.com/gpucce/index_encoders_eval_itserr",
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
    venue: "Interspeech",
    year: 2025,
    category: "data-curation",
    highlight: "SDAIA HUMAIN Winter School · arXiv:2506.07722",
    abstract: "We present a unified benchmark for mispronunciation detection in Modern Standard Arabic (MSA) using Qur'anic recitation as a case study. Our approach lays the groundwork for advancing Arabic pronunciation assessment by providing a comprehensive pipeline that spans data processing, the development of a specialized phoneme set tailored to the nuances of MSA pronunciation, and the creation of the first publicly available test set for this task, which we term as the Qur'anic Mispronunciation Benchmark (QuranMB.v1). Furthermore, we evaluate several baseline models to provide initial performance insights, thereby highlighting both the promise and the challenges inherent in assessing MSA pronunciation. By establishing this standardized framework, we aim to foster further research and development in pronunciation assessment in Arabic language technology and related applications.",
    links: {
      paper: "https://www.isca-archive.org/interspeech_2025/elkheir25b_interspeech.pdf",
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
    announcementUrl: "https://lnkd.in/p/gzNc7vrw",
    talks: [
      {
        title: "Efficient Joint Crossmodal Language Modeling",
        date: "October 13, 2026",
        isoDate: "2026-10-13",
        announcementUrl: "https://lnkd.in/p/gzNc7vrw",
        paperUrl: "https://arxiv.org/abs/2410.18607"
      }
    ]
  },
  {
    id: "isti-cnr",
    institution: "ISTI-CNR",
    location: "Pisa, Italy",
    announcementUrl: "https://www.itserr.it/event/seminar-arabic-multimodal-language-modeling/",
    talks: [
      {
        title: "ArTST: Arabic Text and Speech Transformer",
        date: "April 2025",
        isoDate: "2025-04-01",
        announcementUrl: "https://www.itserr.it/event/seminar-arabic-multimodal-language-modeling/",
        paperUrl: "https://arxiv.org/abs/2310.16621"
      }
    ]
  },
  {
    id: "cuhk-sz",
    institution: "CUHK-SZ",
    location: "Shenzhen, China",
    announcementUrl: "https://lnkd.in/p/gRyksZFt",
    talks: [
      {
        title: "Efficient Joint Crossmodal Language Modeling",
        date: "July 2026",
        isoDate: "2026-07-01",
        announcementUrl: "https://lnkd.in/p/gRyksZFt",
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
    details: "Focus on AI for Stuttered Speech, and Multilingual Language Technologies under Dr Hanan Aldarmaki."
  },
  {
    degree: "MSc in Machine Learning",
    field: "Machine Learning",
    institution: "Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI)",
    period: "Aug 2022 – Jun 2024",
    details: "Thesis: STTATTS: Unified Model for Speech-to-Text and Text-to-Speech (Published at EMNLP 2024)."
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
    ]
  },
  {
    period: "June 2026 – August 2026",
    role: "Visiting Researcher",
    institution: "CUHK-Sz & SLAI",
    location: "Shenzhen, China",
    bullets: [
      "Worked on Multilingual Stutter Detection (under review)"
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
    period: "Mar 2025 - 2026",
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
