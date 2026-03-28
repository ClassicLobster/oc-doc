---
layout: ../../layouts/DocsLayout.astro
title: Architecture
flashCards:
  - question: What are the major layers in OpenClaw architecture?
    answer: Gateway, agents, tools, channels, and workspace plus memory.
  - question: What does the gateway do?
    answer: It centralizes session state, routing, auth, connected channels, and reliable agent execution.
  - question: What is the request flow?
    answer: Channel → Gateway → Agent session → Model plus tools → Final response → Delivery.
---

# Architecture

At a high level, OpenClaw is made of a few major layers:

- **Gateway:** the runtime that owns sessions, delivery, and coordination.
- **Agents:** the personalities/instruction sets that actually do the work.
- **Tools:** the callable operations exposed to the model.
- **Channels:** Discord, Telegram, WhatsApp, local UI, and other surfaces.
- **Workspace + memory:** the file-based continuity system.

## Request flow

```text
Channel → Gateway → Agent session → Model + tools → Final response → Delivery
```

## Why the gateway matters

The gateway is what makes OpenClaw feel like a system instead of a script. It centralizes session state, controls routing, manages auth and connected channels, and provides the environment where agents can run reliably.
