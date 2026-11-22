import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Información sobre el menú",
  "Servicio en establecimiento",
  "Pedido para llevar",
  "Información general",
] as const;

/** Keeps only digits and drops a leading Mexico country code (52) from 12-digit numbers. */
export function normalizePhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  return digits.length === 12 && digits.startsWith("52") ? digits.slice(2) : digits;
}

const PHONE_ALLOWED_CHARS = /^[+\d\s().-]+$/;

export const contactSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, "Por favor escribe tu nombre completo.")
    .min(3, "Tu nombre debe tener al menos 3 caracteres.")
    .max(80, "Tu nombre no puede superar 80 caracteres."),
  correo: z
    .string()
    .trim()
    .min(1, "Por favor escribe tu correo electrónico.")
    .email("Escribe un correo válido, por ejemplo: nombre@correo.com.")
    .max(120, "El correo no puede superar 120 caracteres."),
  telefono: z
    .string()
    .trim()
    .min(1, "Por favor escribe tu número de teléfono.")
    .refine((v) => PHONE_ALLOWED_CHARS.test(v), "El teléfono solo puede contener números.")
    .refine(
      (v) => normalizePhone(v).length === 10,
      "Escribe un teléfono de 10 dígitos, por ejemplo: 33 1234 5678.",
    ),
  servicio: z
    .string()
    .refine(
      (v) => (SERVICE_OPTIONS as readonly string[]).includes(v),
      "Selecciona el servicio de tu interés.",
    ),
  mensaje: z
    .string()
    .trim()
    .min(1, "Por favor escribe tu mensaje.")
    .min(10, "Tu mensaje debe tener al menos 10 caracteres.")
    .max(1000, "Tu mensaje no puede superar 1000 caracteres."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const EMPTY_CONTACT_FORM: ContactFormValues = {
  nombre: "",
  correo: "",
  telefono: "",
  servicio: "",
  mensaje: "",
};
