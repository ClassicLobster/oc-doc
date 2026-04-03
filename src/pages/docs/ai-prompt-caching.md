---
layout: ../../layouts/DocsLayout.astro
title: Prompt Caching
flashCards:
  - question: What is prompt caching?
    answer: Prompt caching reuses processing work for repeated prompt prefixes so repeated requests can be faster and cheaper.
  - question: When is prompt caching most useful?
    answer: It helps most when prompts share a large stable prefix such as long instructions, documents, examples, or multi-turn history.
  - question: What must stay the same for caching to help?
    answer: The reused prefix has to remain consistent enough for the provider or serving system to recognize and reuse it.
---

# Prompt caching

Prompt caching is a technique for reducing latency and cost when many requests share the same prompt prefix. Instead of reprocessing the same long instructions, examples, tools, or background context every time, the system can reuse previously processed work for the repeated portion.

That makes prompt caching especially useful for applications with:

- long system prompts
- repeated few-shot examples
- big reference documents
- repeated tool definitions
- growing multi-turn conversations

## Core idea

A lot of prompts are partly static and partly dynamic.

For example:

- a large system prompt stays the same
- a long policy document stays the same
- only the latest user question changes

Without caching, the model stack has to process that shared prefix again and again. With prompt caching, the repeated prefix can be reused so the system spends more effort only on the new part.

## Why it matters

Prompt caching helps with two things users feel immediately:

- **lower latency**
- **lower cost**

Anthropic's prompt caching docs describe this as resuming from cached prompt prefixes. That is a good mental model: if the front part of the request is unchanged, the serving system can skip redundant work.

## Where it helps most

Prompt caching tends to shine when the shared prefix is large.

Examples:

- a coding assistant with a huge instruction block
- a chatbot with repeated tool schemas
- document analysis where the same source text is referenced across several questions
- long conversations where most earlier context stays the same

If the prompt is tiny or changes completely every time, caching helps much less.

## Automatic vs explicit caching

Anthropic documents two broad approaches:

- **automatic caching**, where the system manages the reusable prefix for you
- **explicit cache breakpoints**, where you mark exactly what should be cached

That distinction matters because some systems expose caching as a feature you can control, while others mainly optimize it behind the scenes.

## Prompt caching vs response caching

Prompt caching is not the same as response caching.

- **Prompt caching** reuses work for the prompt prefix
- **Response caching** reuses a previously generated answer

Those sound similar, but they solve different problems. Prompt caching still allows the model to generate a fresh answer to a new question; it just avoids redoing the same prefix processing work.

## Practical design advice

If you want caching to help, structure prompts so the stable parts stay stable:

- keep reusable instructions near the front
- avoid unnecessary churn in large shared sections
- append dynamic content later when possible
- keep tool definitions and policy blocks consistent

This lines up with latency guidance from model providers: shared prompt prefixes are easier to optimize.

## Limitations

Prompt caching is not magic.

Some limits:

- cache entries expire
- small prompt changes can reduce cache hits
- caching can still involve provider-specific pricing rules
- the biggest wins happen only when the repeated prefix is large enough

So prompt caching is most valuable in systems with heavy prompt reuse, not in one-off tiny requests.

## Mental model

A useful way to think about prompt caching is:

> don't keep paying full price to reread the same book before every new question about it.

## Sources

- Anthropic prompt caching docs: <https://platform.claude.com/docs/en/build-with-claude/prompt-caching>
- OpenAI latency optimization guide: <https://developers.openai.com/api/docs/guides/latency-optimization>
