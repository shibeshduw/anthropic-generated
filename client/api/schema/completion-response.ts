/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Model } from './model.js';
/**
 * Representation of the 'CompletionResponse' schema.
 * @example {
 *   "completion": " Hello! My name is Claude.",
 *   "id": "compl_018CKm6gsux7P8yMcwZbeCPw",
 *   "model": "claude-2.1",
 *   "stop_reason": "stop_sequence",
 *   "type": "completion"
 * }
 */
export type CompletionResponse = {
  /**
   * Object type.
   *
   * For Text Completions, this is always `"completion"`.
   * Default: "completion".
   */
  type: 'completion';
  /**
   * Unique object identifier.
   *
   * The format and length of IDs may change over time.
   */
  id: string;
  /**
   * The resulting completion up to and excluding the stop sequences.
   */
  completion: string;
  /**
   * The reason that we stopped.
   *
   * This may be one the following values:
   * * `"stop_sequence"`: we reached a stop sequence â€” either provided by you via the `stop_sequences` parameter, or a stop sequence built into the model
   * * `"max_tokens"`: we exceeded `max_tokens_to_sample` or the model's maximum
   */
  stop_reason: string | any;
  model: Model;
} & Record<string, any>;
