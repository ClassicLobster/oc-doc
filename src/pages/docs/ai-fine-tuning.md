---
layout: ../../layouts/DocsLayout.astro
title: Fine-Tuning
flashCards:
  - question: What is fine-tuning?
    answer: Fine-tuning is additional training on a pretrained model so it behaves better for a specific task, format, tone, or domain.
  - question: What usually matters most in fine-tuning?
    answer: High-quality, consistent training data usually matters more than blindly increasing dataset size.
  - question: What is a common mistake?
    answer: Using messy, inconsistent, or unrealistic training examples that do not match real inference-time usage.
---

# Fine-tuning

Fine-tuning is the process of taking a pretrained model and training it further on a narrower dataset so it performs better for a specific use case.

Instead of training a model from scratch, you start with a model that already knows a lot about language or code and then push it toward a more specific behavior.

## What fine-tuning is good for

Fine-tuning is useful when you want a model to be better at:

- a particular response style
- a fixed output format
- a domain-specific task
- repeated instruction following patterns
- specialized classification or extraction behavior

It is especially attractive when prompt engineering alone is not enough or becomes too bulky.

## Fine-tuning vs prompting

Prompting tells a model what to do at inference time.
Fine-tuning changes the model so it is more likely to do that behavior naturally.

That means fine-tuning can reduce prompt size, improve consistency, and make a model better aligned to a recurring task.

## Data quality matters most

One of the strongest themes in OpenAI's fine-tuning best practices is that data quality matters a lot.

Good training data should be:

- consistent
- realistic
- high quality
- aligned with real usage
- complete enough for the expected response

If your dataset is noisy or contradictory, the model will learn that mess.

## Quantity matters too, but after quality

More data often helps, especially around edge cases. But a smaller high-quality dataset is often better than a larger low-quality one.

That is a useful rule of thumb: do not scale garbage.

## Hyperparameters still matter

Fine-tuning also involves choices like:

- number of epochs
- learning rate
- batch size

But for many teams, the first big gains come from better examples, better formatting, and better train/test splits rather than fancy tuning tricks.

## Training and test splits

You should not only create training data. You also want a test or eval set so you can measure whether the fine-tuned model actually got better.

Otherwise it is easy to overfit your intuition and assume progress where there is none.

## When fine-tuning is not the best answer

Fine-tuning is not always the first move.

Sometimes the better answer is:

- better prompting
- retrieval / RAG
- tool use
- a smaller workflow change
- post-processing around the model

If the missing information changes frequently, retrieval may be a better fit than fine-tuning. Fine-tuning is best for teaching behavior and format, not for constantly updating factual knowledge.

## Mental model

A useful way to think about it:

> prompting steers the model from the outside, fine-tuning reshapes it from the inside.

## Sources

- OpenAI model optimization guide: <https://developers.openai.com/api/docs/guides/model-optimization>
- OpenAI fine-tuning best practices: <https://developers.openai.com/api/docs/guides/fine-tuning-best-practices>
