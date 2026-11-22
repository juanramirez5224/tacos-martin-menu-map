import { describe, expect, it } from "vitest";

import { contactSchema, normalizePhone } from "./contact-schema";

const valid = {
  nombre: "Juan Pérez",
  correo: "juan@correo.com",
  telefono: "33 3551 2254",
  servicio: "Pedido para llevar",
  mensaje: "Quisiera saber si tienen gringas hoy.",
};

describe("contact form rules", () => {
  it("accepts a complete, valid submission", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects an empty required field", () => {
    const r = contactSchema.safeParse({ ...valid, nombre: "  " });
    expect(r.success).toBe(false);
  });

  it("rejects an invalid email format", () => {
    expect(contactSchema.safeParse({ ...valid, correo: "juan@correo" }).success).toBe(false);
  });

  it("requires a 10-digit phone, allowing +52 prefix and separators", () => {
    expect(contactSchema.safeParse({ ...valid, telefono: "+52 (33) 3551-2254" }).success).toBe(true);
    expect(contactSchema.safeParse({ ...valid, telefono: "3355122" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, telefono: "33abc51225" }).success).toBe(false);
    expect(normalizePhone("+52 33 3551 2254")).toBe("3335512254");
  });

  it("requires a service chosen from the list", () => {
    expect(contactSchema.safeParse({ ...valid, servicio: "" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, servicio: "Otro" }).success).toBe(false);
  });
});
