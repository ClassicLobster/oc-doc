---
layout: ../../layouts/DocsLayout.astro
title: Claude Subagents
flashCards:
  - question: What is a Claude subagent?
    answer: A Claude subagent is a specialized helper agent that runs in its own context window with its own prompt, tool restrictions, and optionally a different model.
  - question: Why use subagents?
    answer: They help isolate context, specialize behavior, reduce prompt bloat, and let work happen in parallel.
  - question: What is a key limitation?
    answer: Subagents do not inherit the full parent conversation history, and in Anthropic's docs they cannot spawn their own subagents.
---

# Claude subagents

Claude subagents are specialized helper agents that Claude can delegate work to when a task matches the subagent's description. According to Anthropic's Claude Code docs, each subagent runs in its own separate context window with its own prompt, tool access, and permissions. That separation is the main reason subagents are useful: they keep focused work out of the main conversation.

## Why subagents matter

Subagents are useful when the main assistant would otherwise get overloaded with too much intermediate work. Instead of stuffing every file read, search result, and draft into the parent conversation, the parent can hand off a bounded task and get back a cleaner result.

Anthropic's docs highlight a few main benefits:

- **Context isolation** so exploration and intermediate tool output do not bloat the main session
- **Specialization** through focused instructions for a narrow job
- **Tool restrictions** so a subagent can be read-only or otherwise constrained
- **Model control** so cheaper or faster models can handle lower-stakes subtasks
- **Parallel work** in SDK scenarios where multiple subagents can run at once

## Built-in Claude Code subagents

Anthropic's Claude Code docs describe built-in subagents such as:

- **Explore** — a fast, read-only agent for searching and understanding a codebase
- **Plan** — a read-only research helper used while planning changes
- **General-purpose** — a broader helper for more complex multi-step tasks

The built-in agents are meant to reduce prompt clutter while still letting Claude divide work internally.

## How Claude decides to use one

Anthropic says Claude uses each subagent's **description** to decide when to delegate. That means the description is not just metadata — it is part of the routing logic.

A good description should make clear:

- what kind of task the subagent handles
- when it should be used
- what kind of output it should return

You can also explicitly request a specific subagent by name in prompts instead of relying on automatic delegation.

## What a subagent gets

A subagent starts with a fresh context, not the full parent conversation. Based on Anthropic's SDK docs, the subagent gets its own prompt and the task request sent to it, but it does **not** automatically inherit the full conversation history from the parent.

That means if the subagent needs:

- file paths
- errors
- prior decisions
- constraints

those details should be included in the handoff.

This is a big design point: subagents are not magic copies of the parent. They are isolated workers with a narrower brief.

## Tool and permission boundaries

One of the strongest reasons to use subagents is tighter control.

For example:

- a doc-review agent might get only read/search tools
- a test-runner agent might get shell access
- a code-reviewer agent might use a cheaper model with read-only tools

Anthropic's docs also note that subagents can be configured with different models and tool sets. In the SDK, this is done through agent definitions. In Claude Code, subagents can also be defined as markdown files with frontmatter.

## SDK angle: parallel and programmatic use

Anthropic's SDK docs make the subagent idea even clearer: the parent agent can define specialized subagents in code and let Claude invoke them when appropriate. The docs specifically call out three big uses:

- isolate context for focused subtasks
- run analyses in parallel
- apply specialized instructions without bloating the main prompt

That makes subagents especially useful in coding and review workflows. For example, one subagent can review security, another can inspect tests, and another can summarize architecture concerns.

## Important limitation

A useful constraint from Anthropic's docs: subagents cannot spawn their own subagents. That prevents runaway nesting and keeps the delegation model easier to reason about.

## Good use cases

Claude subagents are a strong fit for:

- codebase exploration
- code review
- documentation review
- test analysis
- security review
- migration planning
- bounded research tasks

They are less useful when the task is tiny or when the parent already has all the needed context and the overhead of delegation is not worth it.

## Practical takeaway

The simplest way to think about Claude subagents is this:

> the parent agent stays focused on orchestration, while subagents do narrower jobs in cleaner, isolated workspaces.

That pattern improves clarity, helps with cost and context management, and creates a more modular agent workflow.

## Sources

This page is based on Anthropic's official documentation:

- Claude Code subagents: <https://code.claude.com/docs/en/sub-agents>
- Claude Agent SDK subagents: <https://platform.claude.com/docs/en/agent-sdk/subagents>
