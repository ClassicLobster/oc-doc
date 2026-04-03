---
layout: ../../layouts/DocsLayout.astro
title: Embeddings
flashCards:
  - question: What is an embedding?
    answer: An embedding is a vector of numbers that represents the semantic meaning of text, code, or other content.
  - question: What are embeddings commonly used for?
    answer: Search, retrieval, clustering, recommendations, classification, and similarity matching.
  - question: How are embeddings usually compared?
    answer: They are often compared with cosine similarity or equivalent vector-distance measures.
---

# Embeddings

Embeddings are numeric vector representations of content such as text or code. The goal is to map meaning into a space where related things end up closer together and unrelated things end up farther apart.

That sounds abstract, but the practical idea is simple:

- similar text gets similar vectors
- different text gets more distant vectors

## Why embeddings matter

Embeddings are one of the most useful building blocks in modern AI systems because they turn fuzzy semantic similarity into something you can compute.

They are commonly used for:

- semantic search
- retrieval for RAG systems
- clustering related documents
- recommendations
- classification by similarity
- anomaly and outlier detection

OpenAI's embeddings docs describe an embedding as a vector of floating point numbers and note that the distance between vectors reflects relatedness.

## How they are used

A common workflow looks like this:

1. convert documents into embedding vectors
2. store those vectors in a vector database or index
3. embed a user query
4. retrieve the nearest vectors
5. return or use the matching content

That is the core of many semantic search and retrieval pipelines.

## Why they are powerful

Traditional keyword search depends heavily on exact words. Embeddings help systems find conceptually related content even when the wording is different.

For example, a search for:

- "how to reduce response delay"

might still find text about:

- "latency optimization"

because the meanings are related even if the words are not identical.

## Distance and similarity

Embeddings are usually compared using similarity or distance functions. OpenAI recommends cosine similarity in its docs, and also notes that normalized embeddings make cosine similarity and Euclidean ranking behave similarly.

The important idea is not the exact formula — it is that vector closeness is being used as a proxy for semantic closeness.

## Embeddings are not generation

Embeddings do not generate answers by themselves.

They are better thought of as:

- a semantic lookup tool
- a representation layer
- a way to measure closeness of meaning

A retrieval system might use embeddings first, then pass the retrieved text into an LLM for generation.

## Practical tradeoffs

Important tradeoffs include:

- model size and embedding quality
- dimensionality and storage cost
- retrieval speed
- chunking strategy for documents
- freshness of indexed content

Even a good embedding model can perform poorly if the surrounding retrieval pipeline is sloppy.

## Mental model

A simple way to think about embeddings is:

> they turn meaning into coordinates.

## Sources

- OpenAI embeddings guide: <https://developers.openai.com/api/docs/guides/embeddings>
- OpenAI embeddings API reference: <https://developers.openai.com/api/reference/resources/embeddings/methods/create>
