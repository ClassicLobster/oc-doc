---
layout: ../../layouts/DocsLayout.astro
title: AI Inference
flashCards:
  - question: What is inference in AI?
    answer: Inference is the process of using a trained model to generate predictions or outputs from new input.
  - question: How is inference different from training?
    answer: Training updates the model's weights from data, while inference uses the already-trained model to answer, classify, generate, or predict.
  - question: What usually affects inference speed?
    answer: Model size, prompt length, output length, hardware, batching, and system optimizations like caching all affect inference latency and throughput.
---

# AI inference

Inference is the phase where a trained AI model is actually used to do work. If training is the part where the model learns patterns from data, inference is the part where the model applies what it learned to a new input.

For a language model, inference is what happens when you send a prompt and get back text. For an image model, inference is what happens when you ask for classification, captioning, detection, or image generation. In both cases, the model is no longer learning in real time — it is producing an output from learned parameters.

## Training vs. inference

The easiest distinction is:

- **Training** changes the model
- **Inference** uses the model

Training is expensive because it involves many passes over large datasets, gradient updates, and weight changes. Inference is usually cheaper per request, but it is the part users feel directly because it determines how fast and how well the system responds.

## What inference looks like in an LLM

In a large language model, inference usually means:

1. tokenize the input text
2. run the tokens through the model
3. predict the next token
4. repeat until the response is complete

That repeated next-token prediction loop is why generation speed is often discussed in tokens per second. The model is not generating the whole answer in one magical burst — it is producing one token at a time.

## Why inference matters in real systems

Inference is where product quality becomes real for users. A model can be impressive on paper, but if inference is too slow, too expensive, or too unstable, the user experience still feels bad.

In production systems, inference is often judged on:

- **Latency** — how long it takes to start and finish a response
- **Throughput** — how many requests or tokens a system can handle over time
- **Cost** — how expensive each call is to serve
- **Quality** — whether the output is actually useful
- **Reliability** — whether the system responds consistently under load

## Common factors that affect inference

Several things strongly affect inference behavior:

### Model size

Larger models tend to be slower and more expensive, though often more capable. Smaller models are usually faster and cheaper, which is why many systems route simpler work to cheaper models.

### Input length

Longer prompts mean more tokens to process before generation even starts. That often increases both cost and latency.

### Output length

If the model generates a long answer, total response time goes up because generation is token-by-token.

### Hardware and infrastructure

Inference performance depends heavily on the serving stack: GPUs, memory bandwidth, batching strategy, model quantization, and caching all matter.

### System design

Retrieval, reranking, safety filters, tool calls, and post-processing can all add time around the core model call.

## Inference in transformers

Modern LLMs are usually transformer-based models. During inference, the model processes tokens through layers of attention and feed-forward computation to estimate what token should come next.

One important optimization is caching intermediate attention state so the model does not recompute everything from scratch for each newly generated token. That is part of why inference engineering matters so much in practice.

## Why people talk about latency so much

For end users, inference quality is not only about correctness. It is also about responsiveness. A slower but slightly smarter model may feel worse than a faster model in some workflows. That is why practical AI systems often balance:

- quality
- speed
- cost

instead of optimizing only one of them.

## Practical examples

Inference shows up in a lot of normal AI features:

- autocomplete in code editors
- chat assistants answering prompts
- document summarization
- image captioning
- speech transcription
- classification and moderation

All of those are different forms of using a trained model to produce an output from fresh input.

## A useful mental model

A simple way to think about it:

> training is how the model gets its knowledge, inference is how that knowledge gets used.

That makes inference the operational side of AI — the part that actually turns a model into a product.

## Sources

This page was informed by public docs and references including:

- Hugging Face Transformers documentation: <https://huggingface.co/docs/transformers/en/index>
- OpenAI latency optimization guide: <https://platform.openai.com/docs/guides/latency-optimization>
