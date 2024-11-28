/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { PromptCachingBetaMessageStartEvent } from './prompt-caching-beta-message-start-event.js';
import type { MessageDeltaEvent } from './message-delta-event.js';
import type { MessageStopEvent } from './message-stop-event.js';
import type { ContentBlockStartEvent } from './content-block-start-event.js';
import type { ContentBlockDeltaEvent } from './content-block-delta-event.js';
import type { ContentBlockStopEvent } from './content-block-stop-event.js';
/**
 * Representation of the 'PromptCachingBetaMessageStreamEvent' schema.
 */
export type PromptCachingBetaMessageStreamEvent =
  | ({ type: 'content_block_delta' } & ContentBlockDeltaEvent)
  | ({ type: 'content_block_start' } & ContentBlockStartEvent)
  | ({ type: 'content_block_stop' } & ContentBlockStopEvent)
  | ({ type: 'message_delta' } & MessageDeltaEvent)
  | ({ type: 'message_start' } & PromptCachingBetaMessageStartEvent)
  | ({ type: 'message_stop' } & MessageStopEvent);
