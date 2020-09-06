
import { HeaderBag, HttpRequest } from "../types/mod.ts";

import { ALWAYS_UNSIGNABLE_HEADERS, PROXY_HEADER_PATTERN, SEC_HEADER_PATTERN } from "./constants.ts";

/**
 * @internal
 */
export function getCanonicalHeaders(
  { headers }: HttpRequest,
  unsignableHeaders?: Set<string>,
  signableHeaders?: Set<string>
): HeaderBag {
  const canonical: HeaderBag = {};
  for (const headerName of Object.keys(headers).sort()) {
    const canonicalHeaderName = headerName.toLowerCase();
    if (
      canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS ||
      unsignableHeaders?.has(canonicalHeaderName) ||
      PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
      SEC_HEADER_PATTERN.test(canonicalHeaderName)
    ) {
      if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
        continue;
      }
    }

    canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
  }

  return canonical;
}
