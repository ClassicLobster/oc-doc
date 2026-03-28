---
layout: ../../layouts/DocsLayout.astro
title: Channels, Sessions, and Memory
flashCards:
  - question: What do channels do?
    answer: Channels are the entry and exit points for messages, like Discord, Telegram, WhatsApp, or a local UI.
  - question: What is a session?
    answer: A session stores continuity such as recent turns, tool traces, routing metadata, and the working context for a conversation.
  - question: What does memory usually contain?
    answer: File-based memory often includes daily notes, long-term memory files, and workspace documents the agent can read and update.
---

# Channels, sessions, and memory

## Channels

Channels are where messages come from and where replies go. A Discord DM, a Telegram chat, and a local TUI can all be different entry points into the same overall system.

## Sessions

Sessions are the continuity layer for conversations. They store recent turns, tool traces, routing metadata, and the working context that lets the assistant behave consistently.

## Memory

OpenClaw commonly uses file-based memory. That usually means a mix of daily notes, longer-term memory files, and workspace documents that the agent can read and update.

## Practical effect

Together, these pieces let an assistant answer in context, remember important details, and avoid starting from zero every time a new message arrives.
