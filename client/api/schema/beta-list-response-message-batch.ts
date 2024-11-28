/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaMessageBatch } from './beta-message-batch.js';
/**
 * Representation of the 'BetaListResponseMessageBatch' schema.
 */
export type BetaListResponseMessageBatch = {
  data: BetaMessageBatch[];
  /**
   * Indicates if there are more results in the requested page direction.
   */
  has_more: boolean;
  /**
   * First ID in the `data` list. Can be used as the `before_id` for the previous page.
   */
  first_id: string | any;
  /**
   * Last ID in the `data` list. Can be used as the `after_id` for the next page.
   */
  last_id: string | any;
} & Record<string, any>;
