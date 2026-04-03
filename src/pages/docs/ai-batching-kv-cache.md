---
layout: ../../layouts/DocsLayout.astro
title: Batching and KV Cache
flashCards:
  - question: What is batching?
    answer: Batching groups multiple requests or token-generation steps together so hardware can process them more efficiently.
  - question: What is KV cache?
    answer: KV cache stores previously computed attention keys and values so the model does not recompute them for every generated token.
  - question: What is the tradeoff of KV cache?
    answer: It improves generation speed but uses additional memory.
---

# Batching and KV cache

Batching and KV cache are two important ideas in inference engineering. They help explain why serving LLMs efficiently is not just about the model itself — it is also about how requests are scheduled and how repeated computation is avoided.

## Batching

Batching means grouping work together so hardware can process more efficiently.

In AI serving, that can mean:

- processing multiple requests together
- processing multiple sequences together
- combining token-generation work into larger compute steps

The goal is usually better throughput. If a GPU can handle several requests together more efficiently than one-by-one execution, batching can improve total system performance.

### The tradeoff with batching

Batching often improves throughput, but it can also affect latency.

That creates a tension:

- larger batches can improve efficiency
- smaller batches can feel more responsive per request

Good serving systems balance both depending on product goals.

## KV cache

KV cache stands for key-value cache. In transformer inference, the model repeatedly attends to previous tokens while generating new ones. Without caching, it would redo a lot of the same attention-related work every time a new token is produced.

KV caching avoids that by storing previously computed keys and values from earlier steps and reusing them for later generation.

Hugging Face's KV caching explanation describes this as reusing intermediate attention state instead of recomputing it from scratch.

## Why KV cache matters

KV cache is one of the biggest reasons autoregressive generation can be made practical.

Without it:

- long generations get slower faster
- repeated attention work piles up

With it:

- generation becomes much more efficient
- long outputs are more manageable
- token-by-token decoding speeds up significantly

## The tradeoff of KV cache

KV caching is not free.

The main tradeoff is memory.

You gain speed by storing more intermediate state, which means long contexts and large batches can become memory-heavy. That is why inference systems often have to balance:

- context length
- batch size
- latency
- throughput
- memory usage

## Why these two topics belong together

Batching and KV cache interact in real serving systems.

A system trying to serve many users at once often needs to think about:

- how many requests to batch together
- how much KV cache memory each active sequence consumes
- how long contexts affect batching efficiency

So even though the concepts are different, they meet in the same operational problem: how to serve transformer inference efficiently at scale.

## Mental model

A simple way to remember them:

- **batching** = do more work together
- **KV cache** = don't redo work you've already done

## Sources

- Hugging Face KV caching explainer: <https://huggingface.co/blog/not-lain/kv-caching>
- OpenAI latency optimization guide: <https://developers.openai.com/api/docs/guides/latency-optimization>
