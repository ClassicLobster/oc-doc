---
layout: ../../layouts/DocsLayout.astro
title: How OpenClaw Works
flashCards:
  - question: What is OpenClaw in one sentence?
    answer: OpenClaw is a self-hosted AI agent system that routes messages into sessions, uses tools, and replies through different channels.
  - question: What are the core parts of the basic loop?
    answer: Message in, route to session, load context, let the model decide on tools or a direct reply, then deliver the result back out.
  - question: Why does OpenClaw matter as a system?
    answer: It provides coordination, persistence, routing, automation, and tool access instead of behaving like a one-shot chatbot.
---

# How OpenClaw works

OpenClaw is a self-hosted AI agent system that sits between language models, tools, and communication channels. Instead of treating the assistant as a one-shot chatbot, it treats the assistant more like a long-running operator that can receive messages, use tools, manage sessions, remember context, and act across multiple surfaces.

## The basic loop

1. A message comes in from a chat surface like Discord, Telegram, WhatsApp, or a local UI.
2. OpenClaw routes that message into an agent session.
3. The agent receives system guidance, workspace files, and relevant session context.
4. The model decides whether to respond directly or use tools.
5. The final result is delivered back to the right destination.

## Why this matters

That design means OpenClaw is not just a text wrapper around a model API. It is the coordination layer: it handles routing, persistence, delivery, automation, and access to tools.

## Core ideas

- **Sessions:** conversations have continuity and state.
- **Workspaces:** agents can read and update real files.
- **Tools:** agents can inspect files, run commands, search the web, and integrate with services.
- **Channels:** the same agent can communicate through different apps.
- **Automation:** recurring tasks can be driven by cron jobs or heartbeat checks.
