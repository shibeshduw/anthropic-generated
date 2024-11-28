/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaToolChoiceAuto } from './beta-tool-choice-auto.js';
import type { BetaToolChoiceAny } from './beta-tool-choice-any.js';
import type { BetaToolChoiceTool } from './beta-tool-choice-tool.js';
/**
 * How the model should use the provided tools. The model can use a specific tool, any available tool, or decide by itself.
 */
export type BetaToolChoice =
  | ({ type: 'any' } & BetaToolChoiceAny)
  | ({ type: 'auto' } & BetaToolChoiceAuto)
  | ({ type: 'tool' } & BetaToolChoiceTool);
