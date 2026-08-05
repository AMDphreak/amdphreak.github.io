---
title: "Access Feedback from API and clearweb"
description: "Feedback Hub filing asking Microsoft for authenticated owner APIs and clear-web (redacted) access to Feedback Hub posts — plus notes on what share links actually expose today."
pubDate: 2026-08-04
draft: false
tags:
  - microsoft/feedback-hub
  - apis
  - privacy
---

Microsoft Feedback Hub is where Windows users file bugs and suggestions. The posts mostly live inside the Hub app. Share links exist, but they are deep links — not crawler-friendly articles on the open web. There is still no supported owner API for agentic review, update, or compose workflows.

This page mirrors a Feedback Hub item I filed, so the request is readable and discussable outside the app.

## Hub link

- Share URL: [https://aka.ms/AA130yqs](https://aka.ms/AA130yqs)
- Feedback id: `d80c94a5-be5e-4d3e-aea7-61fc1ce80691`
- Context id: `240`

Resolving the short link lands on a Windows Insider shell that tries to hand off into Feedback Hub. Unauthenticated fetch does not return the title or body for search engines or scripts.

## What I asked Microsoft for

```
# Access Feedback from API and clearweb

Provide users with an authenticated API endpoint to retrieve and interact with Feedback Hub posts for verified account holders. Allow account owner to see all content submitted and update/manage their account and feedback.

Access as owner:
1. API
2. Web page with all content

Access as a visitor:
1. API with redacted content. No screenshots.
2. Web page with redacted content. Include Title, user-selected public alias (not same field as username), content redacted by AI analysis and string matching.
```

## Share publicly

The **Share publicly** checkbox controls discoverability inside Feedback Hub (and whether a share link is useful to others with the app). It is not the same as publishing a clear-web document with title, body, and stable HTML for blogs and forums.

## Why this blog post exists

Until Microsoft ships owner APIs and real public web pages for feedback, this site is the source of truth for filings I want to track, cite, and automate around. Tag pages under [/tags](/tags) group related posts; this one sits under Microsoft → Feedback Hub, APIs, and Privacy.
