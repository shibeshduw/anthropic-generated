/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ToolChoiceAuto } from './tool-choice-auto.js';
import type { ToolChoiceAny } from './tool-choice-any.js';
import type { ToolChoiceTool } from './tool-choice-tool.js';
/**
 * How the model should use the provided tools. The model can use a specific tool, any available tool, or decide by itself.
 */
export type ToolChoice =
  | ({ type: 'any' } & ToolChoiceAny)
  | ({ type: 'auto' } & ToolChoiceAuto)
  | ({ type: 'tool' } & ToolChoiceTool);
