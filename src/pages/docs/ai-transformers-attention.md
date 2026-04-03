---
layout: ../../layouts/DocsLayout.astro
title: Transformers and Attention
flashCards:
  - question: What is attention in a transformer?
    answer: Attention is the mechanism that lets tokens weigh the relevance of other tokens when building their representations.
  - question: Why were transformers such a big deal?
    answer: They replaced recurrence with attention-based computation, which made training more parallelizable and scaled far better.
  - question: What is self-attention?
    answer: Self-attention is when a sequence attends to itself so each token can use information from other tokens in the same sequence.
---

# Transformers and attention

Transformers are the core architecture behind most modern large language models. The central idea that made them famous is **attention**.

Very roughly, attention is how the model decides:

- which other tokens matter right now
- how much they matter
- how to mix that information into the current token representation

## Why attention matters

Older sequence models like RNNs processed tokens in a more step-by-step fashion. Transformers changed the game by using attention to model relationships across the sequence more directly.

That gave two huge benefits:

- better handling of long-range relationships
- much better parallelization during training

That is a huge reason transformers scaled so well.

## What self-attention means

Self-attention means that tokens in a sequence can attend to other tokens in the same sequence.

So if the model is reading:

> The animal didn't cross the street because **it** was tired.

attention helps the model relate **it** to the right earlier concept.

Not perfectly, not magically — but much better than a naive left-to-right word-by-word mechanism.

## Queries, keys, and values

A common explanation of attention uses three learned components:

- **query**
- **key**
- **value**

The rough idea is:

- each token creates a query saying what it is looking for
- other tokens provide keys describing what they contain
- if a query and key match strongly, the corresponding value gets weighted more heavily

You do not need to memorize the full math to get the high-level point: attention is a learned relevance mechanism.

## Multi-head attention

Transformers usually use **multi-head attention**, which means the model can learn multiple kinds of relationships at once.

One attention head might focus more on local syntax, another might focus on long-range references, and another might track different structural patterns.

The exact behavior is more complex than that, but multi-head attention is part of why transformers are expressive.

## Attention is not the whole transformer

Attention is the star, but transformers also include:

- feed-forward layers
- residual connections
- normalization
- positional information

That last part matters because attention alone does not inherently know token order. Transformers need some way to represent position.

## Why this matters for LLMs

When people talk about modern AI, they are usually talking about systems built on transformer-style architectures or close descendants.

That means understanding transformers and attention gives you a clearer mental model for:

- token-by-token generation
- context handling
- KV cache
- context window limits
- why inference gets expensive

## Mental model

A useful way to think about attention is:

> each token asks, "who else in this sequence should I pay attention to right now?"

## Sources

- Attention Is All You Need: <https://arxiv.org/abs/1706.03762>
- Hugging Face attention docs: <https://huggingface.co/docs/transformers/en/attention>
