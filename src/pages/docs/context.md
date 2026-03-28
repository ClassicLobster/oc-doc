---
layout: ../../layouts/DocsLayout.astro
title: How Context Works
flashCards:
  - question: What is context in OpenClaw?
    answer: Context is the working memory the agent sees during a run, including the current message, recent turns, instructions, files, memory, and tool output.
  - question: What can fill up context?
    answer: Long conversations, large tool outputs, long prompts, pasted logs, documents, and repeated memory or history injection.
  - question: How can you calculate available room in context?
    answer: Available room is the context window minus the tokens already used by instructions, messages, files, and tool output.
  - question: What is a practical way to reset context?
    answer: Start a new session, use a reset command like /new or /reset, or reduce what gets injected from memory and tools.
---

# How context works in OpenClaw

Context is the working memory the agent sees for a run. It usually includes the current user message, recent conversation turns, system instructions, workspace files, memory snippets, and any tool outputs that were pulled in.

## What can fill up context

- long conversations with lots of back-and-forth
- large tool outputs or file contents
- long system prompts or detailed instructions
- pasted logs, code, or documents
- repeated memory or history injection over many turns

When context gets too full, the model has less room for new messages and can start losing older details.

## How previous conversation is added

OpenClaw can keep a running session history so the model sees recent turns and relevant tool traces. Depending on the session settings, older turns may also be summarized or compacted so the conversation can continue without running out of room.

## How to prevent old context from taking over

A few practical ways:

- start a fresh session when the task changes a lot
- keep tool outputs concise
- avoid pasting huge logs unless they matter
- use targeted memory instead of re-sending old threads
- compact or summarize older parts of the conversation when appropriate

## How to reset or clear context

The main options are:

- start a new session
- use a reset command like `/new` or `/reset` if your surface supports it
- reduce what gets injected from memory or tools for future turns
- use a lighter-context job or isolated automation when the task doesn’t need the full history

## Practical rule

If the agent only needs the last few messages and one or two files, keep context small. If the task needs continuity, keep the current session but trim the noise.
