---
layout: ../../layouts/DocsLayout.astro
title: Model Distillation
flashCards:
  - question: What is model distillation?
    answer: Model distillation is the process of training a smaller student model to imitate a larger teacher model.
  - question: Why do people use distillation?
    answer: To get a model that is cheaper, faster, and smaller while keeping as much useful performance as possible.
  - question: What is the main tradeoff?
    answer: You usually gain efficiency but lose some capability compared with the larger teacher model.
---

# Model distillation

Model distillation, often called **knowledge distillation**, is the process of transferring useful behavior from a larger model into a smaller one.

The usual setup is:

- a big **teacher** model
- a smaller **student** model

The student is trained to imitate the teacher as much as possible while using fewer resources.

## Why distillation matters

Big models are powerful, but they are also expensive.

They cost more to:

- run
- store
- serve
- scale
- deploy on smaller hardware

Distillation matters because it can produce a model that is:

- faster
- cheaper
- smaller
- easier to deploy

while still preserving a lot of the teacher model's useful behavior.

## The core idea

Instead of learning only from hard labels like:

- this example is class A
- this example is class B

the student can also learn from the teacher's softer output patterns.

That is useful because the teacher often contains richer information than the final correct label alone. The student is not just learning the answer — it is learning something about how the teacher spreads probability mass across possible answers.

## Distillation in modern AI

In the LLM era, distillation is often discussed as a way to compress behavior from a large model into a more efficient one.

That can help when you want:

- lower inference cost
- lower latency
- on-device or edge deployment
- better throughput at scale

## What you usually give up

Distillation is not free.

The usual tradeoff is:

- smaller model
n- faster inference
- lower cost
- but some loss of capability or flexibility

The goal is not to make the student equal in every way to the teacher. The goal is usually to preserve enough of the important behavior that the student is worth using in production.

## Why it is attractive

Distillation is attractive when the teacher is too expensive to use everywhere.

For example:

- use the big model to generate high-quality supervision
- train a smaller model on that behavior
- deploy the smaller model more broadly

That pattern can make a system much cheaper at large scale.

## Distillation vs fine-tuning

Distillation and fine-tuning are related but different.

- **Fine-tuning** adjusts a model for a specific task or style
- **Distillation** tries to transfer capability from a larger model to a smaller one

Sometimes a workflow uses both.

## Mental model

A simple way to think about distillation is:

> take a smart but expensive teacher, and train a cheaper student to imitate the parts that matter most.

## Sources

- PyTorch knowledge distillation tutorial: <https://docs.pytorch.org/tutorials/beginner/knowledge_distillation_tutorial.html>
- Hugging Face knowledge distillation overview: <https://huggingface.co/blog/Kseniase/kd>
- IBM knowledge distillation overview: <https://www.ibm.com/think/topics/knowledge-distillation>
