---
layout: ../../layouts/DocsLayout.astro
title: Automation
flashCards:
  - question: When should you use cron jobs?
    answer: Use cron jobs when the schedule needs to be precise, like a daily brief at a specific time.
  - question: When are heartbeats a better fit?
    answer: Heartbeats work better for lightweight checks that can drift a bit and only need to speak up when something matters.
  - question: What is a simple equation for automation choice?
    answer: Precision needed plus fixed schedule points to cron; flexible periodic checking points to heartbeat.
---

# Automation

## Cron jobs

Cron jobs are best for precise schedules. If you want a morning brief every day at 7:30 AM, a cron job is the right tool.

## Heartbeats

Heartbeats are better for lightweight periodic checks that can drift a bit. They are useful when you want an agent to periodically check a short task list and only speak up when something needs attention.

## Example use cases

- Daily calendar + weather briefings
- Inbox summaries
- Recurring project status checks
- Quiet background memory maintenance
