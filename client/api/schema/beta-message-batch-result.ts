/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaSucceededResult } from './beta-succeeded-result.js';
import type { BetaErroredResult } from './beta-errored-result.js';
import type { BetaCanceledResult } from './beta-canceled-result.js';
import type { BetaExpiredResult } from './beta-expired-result.js';
/**
 * Processing result for this request.
 *
 * Contains a Message output if processing was successful, an error response if processing failed, or the reason why processing was not attempted, such as cancellation or expiration.
 */
export type BetaMessageBatchResult =
  | ({ type: 'canceled' } & BetaCanceledResult)
  | ({ type: 'errored' } & BetaErroredResult)
  | ({ type: 'expired' } & BetaExpiredResult)
  | ({ type: 'succeeded' } & BetaSucceededResult);
