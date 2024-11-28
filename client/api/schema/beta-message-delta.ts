/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'BetaMessageDelta' schema.
 */
export type BetaMessageDelta = {
  stop_reason: 'end_turn' | 'max_tokens' | 'stop_sequence' | 'tool_use' | any;
  stop_sequence: string | any;
} & Record<string, any>;
