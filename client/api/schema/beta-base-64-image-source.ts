/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'BetaBase64ImageSource' schema.
 */
export type BetaBase64ImageSource = {
  type: 'base64';
  media_type: 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp';
  /**
   * Format: "byte".
   */
  data: string;
};