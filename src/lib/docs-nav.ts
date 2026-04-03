export interface DocNavItem {
  label: string;
  href: string;
  match: string;
}

export interface DocNavSection {
  title: string;
  items: DocNavItem[];
}

export const docsNavSections: DocNavSection[] = [
  {
    title: 'OpenClaw',
    items: [
      { label: 'How OpenClaw Works', href: 'docs/how-openclaw-works/', match: '/docs/how-openclaw-works' },
      { label: 'Architecture', href: 'docs/architecture/', match: '/docs/architecture' },
      { label: 'Channels, Sessions, Memory', href: 'docs/channels-sessions-memory/', match: '/docs/channels-sessions-memory' },
      { label: 'Context', href: 'docs/context/', match: '/docs/context' },
      { label: 'Automation', href: 'docs/automation/', match: '/docs/automation' }
    ]
  },
  {
    title: 'Claude',
    items: [
      { label: 'Claude Subagents', href: 'docs/claude-subagents/', match: '/docs/claude-subagents' }
    ]
  },
  {
    title: 'AI',
    items: [
      { label: 'AI Inference', href: 'docs/ai-inference/', match: '/docs/ai-inference' },
      { label: 'Tokenization', href: 'docs/ai-tokenization/', match: '/docs/ai-tokenization' },
      { label: 'Transformers and Attention', href: 'docs/ai-transformers-attention/', match: '/docs/ai-transformers-attention' },
      { label: 'Attention Is All You Need', href: 'docs/ai-attention-is-all-you-need/', match: '/docs/ai-attention-is-all-you-need' },
      { label: 'Prompt Caching', href: 'docs/ai-prompt-caching/', match: '/docs/ai-prompt-caching' },
      { label: 'Embeddings', href: 'docs/ai-embeddings/', match: '/docs/ai-embeddings' },
      { label: 'Fine-Tuning', href: 'docs/ai-fine-tuning/', match: '/docs/ai-fine-tuning' },
      { label: 'Model Distillation', href: 'docs/ai-model-distillation/', match: '/docs/ai-model-distillation' },
      { label: 'Quantization', href: 'docs/ai-quantization/', match: '/docs/ai-quantization' },
      { label: 'Batching and KV Cache', href: 'docs/ai-batching-kv-cache/', match: '/docs/ai-batching-kv-cache' },
      { label: 'PyTorch vs TensorFlow', href: 'docs/ai-pytorch-vs-tensorflow/', match: '/docs/ai-pytorch-vs-tensorflow' }
    ]
  }
];
