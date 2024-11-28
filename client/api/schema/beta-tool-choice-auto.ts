/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The model will automatically decide whether to use tools.
 */
export type BetaToolChoiceAuto = {
  type: 'auto';
  /**
   * Whether to disable parallel tool use.
   *
   * Defaults to `false`. If set to `true`, the model will output at most one tool use.
   */
  disable_parallel_tool_use?: boolean;
};
