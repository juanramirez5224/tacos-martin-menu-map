import { describe, expect, it } from "vitest";

import {
  BUSINESS,
  BUSINESS_COORDINATES,
  MAPS_EMBED_URL,
  MAPS_PLACE_URL,
} from "./business";

describe("Exact location from the owner's Google Maps link", () => {
  it("opens the owner's own place page, not a search of the street", () => {
    expect(MAPS_PLACE_URL).toBe("https://maps.app.goo.gl/RewUSQSspEu9RWU96");
  });

  it("centers the embedded map on the business pin", () => {
    expect(BUSINESS_COORDINATES).toEqual({ lat: 20.6362047, lng: -103.468758 });
    expect(MAPS_EMBED_URL).toContain("20.6362047,-103.468758");
    expect(MAPS_EMBED_URL).toContain("output=embed");
  });

  it("keeps the phone and hours stated in the brief", () => {
    expect(BUSINESS.phoneHref).toBe("tel:+523335512254");
    expect(BUSINESS.hours).toBe("2:00 PM – 12:00 AM");
  });
});
