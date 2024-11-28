/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { MessageDelta } from './message-delta.js';
import type { MessageDeltaUsage } from './message-delta-usage.js';
/**
 * Representation of the 'MessageDeltaEvent' schema.
 */
export type MessageDeltaEvent = {
  /**
   * Default: "message_delta".
   */
  type: 'message_delta';
  delta: MessageDelta;
  /**
   * Billing and rate-limit usage.
   *
   * Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.
   *
   * Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.
   *
   * For example, `output_tokens` will be non-zero, even for an empty string response from Claude.
   */
  usage: MessageDeltaUsage;
} & Record<string, any>;
