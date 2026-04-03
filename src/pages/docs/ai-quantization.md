---
layout: ../../layouts/DocsLayout.astro
title: Quantization
flashCards:
  - question: What is quantization?
    answer: Quantization reduces model precision, such as moving from fp32 to int8 or int4, to save memory and improve inference efficiency.
  - question: Why do people quantize models?
    answer: To fit larger models into available hardware, reduce memory usage, and often improve inference speed or deployment practicality.
  - question: What is the tradeoff?
    answer: Lower precision can introduce some quality loss or compatibility issues depending on the method and workload.
---

# Quantization

Quantization is a technique for making models smaller and often cheaper to run by representing weights or activations with lower-precision numbers.

Instead of storing everything in something like:

- `fp32`

you might use:

- `fp16`
- `bf16`
- `int8`
- `int4`

The basic idea is simple:

> use fewer bits to represent the model.

## Why quantization matters

Modern models are huge. Memory is one of the main bottlenecks in inference.

Quantization helps because it can:

- reduce model memory footprint
- make larger models fit on smaller hardware
- improve deployment practicality
- sometimes speed up inference
- reduce bandwidth and storage needs

This is one of the biggest reasons quantization shows up constantly in practical LLM serving.

## What gets quantized

Depending on the method, a system may quantize:

- weights
- activations
- sometimes both

Different methods make different tradeoffs between speed, memory savings, and output quality.

## Why the tradeoff exists

Higher precision preserves more numerical detail. Lower precision saves memory and often compute cost, but can lose information.

That means quantization is always balancing:

- efficiency
- model quality
- hardware compatibility
- implementation complexity

## Common levels people talk about

A rough intuition:

- **fp32** = high precision, heavier
- **fp16/bf16** = common reduced-precision formats
- **int8** = substantial savings with often manageable quality tradeoffs
- **int4** = even more aggressive compression, but with more risk of quality loss depending on model and method

## Why this matters for local and edge inference

Quantization is especially important when you want to run models on limited hardware.

For example:

- a GPU with limited VRAM
- edge hardware
- local laptops or workstations

Without quantization, some models simply will not fit.

## Quantization does not mean "free speed"

People sometimes think quantization always makes everything faster. That is not automatically true in every environment.

Real results depend on:

- hardware support
- runtime implementation
- model architecture
- quantization method

So quantization is often a huge practical win, but the details matter.

## Mental model

A simple way to think about quantization is:

> compress the math enough to make the model easier to run, without breaking it too badly.

## Sources

- Hugging Face quantization overview: <https://huggingface.co/docs/transformers/main/en/quantization/overview>
- Hugging Face Optimum quantization guide: <https://huggingface.co/docs/optimum/concept_guides/quantization>
- ONNX Runtime quantization docs: <https://onnxruntime.ai/docs/performance/model-optimizations/quantization.html>
