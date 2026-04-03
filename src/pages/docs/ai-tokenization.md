---
layout: ../../layouts/DocsLayout.astro
title: Tokenization
flashCards:
  - question: What is tokenization?
    answer: Tokenization is the process of splitting text into units the model can map to IDs and process numerically.
  - question: Why does tokenization matter?
    answer: It affects context length, cost, model behavior, and how text is represented before inference.
  - question: Are tokens the same as words?
    answer: No. Tokens may be whole words, parts of words, punctuation, whitespace patterns, or other subword pieces.
---

# Tokenization

Tokenization is the process of converting raw text into smaller pieces that a model can turn into numbers. Models do not read text directly — they operate on token IDs.

That makes tokenization one of the most fundamental steps in the NLP pipeline.

## Why tokenization exists

A model needs a numerical representation of input text. Tokenization is the bridge between:

- human-readable text
- machine-readable IDs

The tokenizer takes text, splits it into tokens, and maps those tokens to vocabulary entries the model understands.

## Tokens are not the same as words

This is one of the biggest beginner misconceptions.

A token might be:

- a full word
- part of a word
- punctuation
- whitespace-related text pieces
- a special marker

So the sentence "unbelievable!" might be one token in one tokenizer, but several tokens in another.

## Why tokenization matters in practice

Tokenization affects a lot of real system behavior:

- **cost** because many APIs charge by token count
- **context length** because model limits are usually in tokens, not characters
- **latency** because more tokens usually mean more work
- **quality** because token boundaries influence how text is represented

That is why two prompts with similar visual length can have different token counts.

## Common tokenizer strategies

Modern models often use subword tokenization instead of plain word splitting.

Popular ideas include:

- byte-pair encoding (BPE)
- WordPiece
- unigram tokenization

The shared idea is that tokenizers try to balance vocabulary size and flexibility by breaking text into reusable pieces.

## Tokenization and unknown text

Subword tokenization is useful because it handles rare or unseen words better than rigid word-level vocabularies. Instead of failing on a new word, the tokenizer can often break it into familiar pieces.

That is one reason modern LLM tokenization works much better across varied text than older simple word-based schemes.

## A Hugging Face example

A tokenizer usually outputs things like:

- `input_ids`
- `attention_mask`

For example:

```python
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")
encoded = tokenizer("Tokenization turns text into token IDs.")

print(encoded["input_ids"])
print(encoded["attention_mask"])
```

The exact IDs depend on the tokenizer vocabulary for that model.

## Why different models tokenize differently

Each model family may use a different tokenizer and vocabulary. That means the same exact string can produce different token counts for different models.

So token counts are not universal. They are tokenizer-specific.

## Mental model

A useful way to think about tokenization is:

> it is how text gets chopped into model-sized pieces before the math begins.

## Sources

- Hugging Face tokenizer summary: <https://huggingface.co/docs/transformers/en/tokenizer_summary>
- Hugging Face LLM course tokenizers chapter: <https://huggingface.co/learn/llm-course/en/chapter2/4>
