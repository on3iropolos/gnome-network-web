---
title: "Hugo, Decided"
date: 2026-04-16
summary: "Sub-second builds, Markdown content, Git-based workflow. Static sites for engineers who think in infrastructure."
---

# Hugo, Decided

## The Problem

Next.js requires npm and a build pipeline that takes minutes. Jekyll requires Ruby and Gemfile management. These are fine for their use cases. They are not fine for a simple site where content changes twice a year.

I wanted to write Markdown and deploy. That's it.

## Why Static

Static files load fast. No database means no SQL injection, no phpMyAdmin vulnerabilities. Content in Git means every change is tracked, reviewable, and reversible. If something breaks, `git revert` fixes it.

Hosting is trivial. S3 + CloudFront, Netlify, GitHub Pages—pick one. No server to maintain, no runtime to patch.

## What I Evaluated

**Next.js** — A framework for web applications. A blog is not a web application. JavaScript-based, requires npm. Build times climb as dependencies compound.

**Jekyll** — The original GitHub Pages generator. Ruby-based, which means Ruby installed, gems managed, and builds that slow noticeably on larger sites. It works. It is not fast.

**Astro** — JavaScript-based, component-driven with the islands architecture. Astro targets content-focused sites alongside interactive ones. Requires npm. Launched in 2022.

**Zola** — Rust-based. Single binary, no dependencies, fast builds, Tera templates. I almost chose Zola. Theme selection is smaller than Hugo. Community is smaller. I have more Go experience than Rust. Avoiding JavaScript as a build dependency reinforced this choice.

**Hugo** — Go-based. Single binary, no dependencies, builds in under a second, handles thousands of pages without complaint. Go templates are strict but predictable. The documentation is complete. The source is readable. Themes exist. It just works. And I wanted to get more familiar with Go.

## The Decision

I evaluated each tool against one question: will I still want to maintain this in five years?

Next.js: no. Jekyll: no. Astro: maybe. Zola: yes. Hugo: yes.

I went with Hugo.
