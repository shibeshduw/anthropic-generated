/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaRequestCounts } from './beta-request-counts.js';
/**
 * Representation of the 'BetaMessageBatch' schema.
 */
export type BetaMessageBatch = {
  /**
   * Unique object identifier.
   *
   * The format and length of IDs may change over time.
   */
  id: string;
  /**
   * Object type.
   *
   * For Message Batches, this is always `"message_batch"`.
   * Default: "message_batch".
   */
  type: 'message_batch';
  /**
   * Processing status of the Message Batch.
   */
  processing_status: 'in_progress' | 'canceling' | 'ended';
  /**
   * Tallies requests within the Message Batch, categorized by their status.
   *
   * Requests start as `processing` and move to one of the other statuses only once processing of the entire batch ends. The sum of all values always matches the total number of requests in the batch.
   */
  request_counts: BetaRequestCounts;
  /**
   * RFC 3339 datetime string representing the time at which processing for the Message Batch ended. Specified only once processing ends.
   *
   * Processing ends when every request in a Message Batch has either succeeded, errored, canceled, or expired.
   */
  ended_at: string | any;
  /**
   * RFC 3339 datetime string representing the time at which the Message Batch was created.
   * Format: "date-time".
   */
  created_at: string;
  /**
   * RFC 3339 datetime string representing the time at which the Message Batch will expire and end processing, which is 24 hours after creation.
   * Format: "date-time".
   */
  expires_at: string;
  /**
   * RFC 3339 datetime string representing the time at which the Message Batch was archived and its results became unavailable.
   */
  archived_at: string | any;
  /**
   * RFC 3339 datetime string representing the time at which cancellation was initiated for the Message Batch. Specified only if cancellation was initiated.
   */
  cancel_initiated_at: string | any;
  /**
   * URL to a `.jsonl` file containing the results of the Message Batch requests. Specified only once processing ends.
   *
   * Results in the file are not guaranteed to be in the same order as requests. Use the `custom_id` field to match results to requests.
   */
  results_url: string | any;
} & Record<string, any>;
