/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaMessageStartEvent } from './beta-message-start-event.js';
import type { BetaMessageDeltaEvent } from './beta-message-delta-event.js';
import type { BetaMessageStopEvent } from './beta-message-stop-event.js';
import type { BetaContentBlockStartEvent } from './beta-content-block-start-event.js';
import type { BetaContentBlockDeltaEvent } from './beta-content-block-delta-event.js';
import type { BetaContentBlockStopEvent } from './beta-content-block-stop-event.js';
/**
 * Representation of the 'BetaMessageStreamEvent' schema.
 */
export type BetaMessageStreamEvent =
  | ({ type: 'content_block_delta' } & BetaContentBlockDeltaEvent)
  | ({ type: 'content_block_start' } & BetaContentBlockStartEvent)
  | ({ type: 'content_block_stop' } & BetaContentBlockStopEvent)
  | ({ type: 'message_delta' } & BetaMessageDeltaEvent)
  | ({ type: 'message_start' } & BetaMessageStartEvent)
  | ({ type: 'message_stop' } & BetaMessageStopEvent);
