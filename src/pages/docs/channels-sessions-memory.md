---
layout: ../../layouts/DocsLayout.astro
title: Channels, Sessions, and Memory
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
