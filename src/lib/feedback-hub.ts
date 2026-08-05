import fs from "node:fs";
import path from "node:path";
import JSON5 from "json5";

export type FeedbackHubEntry = {
  /** Stable id for this catalog row (usually mirrors Hub feedbackid). */
  id: string;
  title: string;
  /** Exact or near-exact text submitted to Feedback Hub. */
  body: string;
  /** aka.ms or insider.windows.com share URL, if any. */
  shareUrl?: string;
  feedbackId?: string;
  contextId?: string | number;
  submittedAt: string;
  /** Hub status banner when last checked (e.g. We've got it). */
  hubStatus?: string;
  statusCheckedAt?: string;
  /** Publicly shared in Feedback Hub. */
  sharePublicly?: boolean;
  /** Continuing-blog post id under /blog/posts/{slug}. */
  blogPostId?: string;
  tags?: string[];
  notes?: string;
};

export type FeedbackHubCatalog = {
  accountHint?: string;
  entries: FeedbackHubEntry[];
};

const catalogPath = path.join(
  process.cwd(),
  "src/content/feedback-hub/catalog.json5",
);

export function loadFeedbackHubCatalog(): FeedbackHubCatalog {
  const text = fs.readFileSync(catalogPath, "utf8");
  const raw = JSON5.parse(text) as FeedbackHubCatalog;
  if (!raw || !Array.isArray(raw.entries)) {
    throw new Error("feedback-hub catalog must have an entries array");
  }
  return raw;
}

export function listFeedbackHubEntries(): FeedbackHubEntry[] {
  return [...loadFeedbackHubCatalog().entries].sort((a, b) =>
    b.submittedAt.localeCompare(a.submittedAt),
  );
}

export function getFeedbackHubEntry(id: string): FeedbackHubEntry | undefined {
  return loadFeedbackHubCatalog().entries.find((e) => e.id === id);
}
