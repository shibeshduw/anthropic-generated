/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { RequestTextBlock } from './request-text-block.js';
import type { RequestImageBlock } from './request-image-block.js';
/**
 * Representation of the 'RequestToolResultBlock' schema.
 */
export type RequestToolResultBlock = {
  type: 'tool_result';
  /**
   * Pattern: "^[a-zA-Z0-9_-]+$".
   */
  tool_use_id: string;
  is_error?: boolean;
  content?:
    | string
    | (
        | ({ type: 'image' } & RequestImageBlock)
        | ({ type: 'text' } & RequestTextBlock)
      )[];
};
