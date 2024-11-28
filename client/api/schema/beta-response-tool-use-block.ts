/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'BetaResponseToolUseBlock' schema.
 */
export type BetaResponseToolUseBlock = {
  /**
   * Default: "tool_use".
   */
  type: 'tool_use';
  /**
   * Pattern: "^[a-zA-Z0-9_-]+$".
   */
  id: string;
  /**
   * Min Length: 1.
   */
  name: string;
  input: Record<string, any>;
} & Record<string, any>;
