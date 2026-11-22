import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, ChevronDown, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  EMPTY_CONTACT_FORM,
  SERVICE_OPTIONS,
  contactSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { cn } from "@/lib/utils";
import { SuccessDialog } from "./SuccessDialog";

const fieldBase =
  "block w-full rounded-xl border bg-card px-4 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-ring";

function fieldClass(hasError: boolean) {
  return cn(
    fieldBase,
    hasError ? "border-destructive bg-destructive/5 focus:ring-destructive/30" : "border-input",
  );
}

type FieldProps = {
  id: keyof ContactFormValues;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
  hint?: string;
};

function Field({ id, label, error, children, hint }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-foreground">
        {label}{" "}
        <span className="text-primary" aria-hidden="true">
          *
        </span>
        <span className="sr-only">(obligatorio)</span>
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-destructive"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState<ContactFormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: EMPTY_CONTACT_FORM,
    mode: "onTouched",
  });

  const onValid = async (values: ContactFormValues) => {
    // Front-end only: no email or order is sent. A short pause shows the sending state.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitted(values);
    reset(EMPTY_CONTACT_FORM);
  };

  const describedBy = (id: keyof ContactFormValues, hint?: boolean) =>
    errors[id] ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit(onValid)}
        aria-label="Formulario de contacto"
        className="rounded-4xl border bg-card p-6 shadow-card sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Field id="nombre" label="Nombre completo" error={errors.nombre?.message}>
              <input
                id="nombre"
                type="text"
                autoComplete="name"
                placeholder="Ej. María López García"
                aria-invalid={!!errors.nombre}
                aria-describedby={describedBy("nombre")}
                className={cn(fieldClass(!!errors.nombre), "h-12")}
                {...register("nombre")}
              />
            </Field>
          </div>

          <Field id="correo" label="Correo electrónico" error={errors.correo?.message}>
            <input
              id="correo"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="nombre@correo.com"
              aria-invalid={!!errors.correo}
              aria-describedby={describedBy("correo")}
              className={cn(fieldClass(!!errors.correo), "h-12")}
              {...register("correo")}
            />
          </Field>

          <Field
            id="telefono"
            label="Teléfono"
            error={errors.telefono?.message}
            hint="10 dígitos, con o sin espacios."
          >
            <input
              id="telefono"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="33 1234 5678"
              aria-invalid={!!errors.telefono}
              aria-describedby={describedBy("telefono", true)}
              className={cn(fieldClass(!!errors.telefono), "h-12")}
              {...register("telefono")}
            />
          </Field>

          <div className="sm:col-span-2">
            <Field id="servicio" label="Servicio de interés" error={errors.servicio?.message}>
              <div className="relative">
                <select
                  id="servicio"
                  aria-invalid={!!errors.servicio}
                  aria-describedby={describedBy("servicio")}
                  className={cn(fieldClass(!!errors.servicio), "h-12 cursor-pointer appearance-none pr-11")}
                  {...register("servicio")}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
                />
              </div>
            </Field>
          </div>

          <div className="sm:col-span-2">
            <Field id="mensaje" label="Mensaje" error={errors.mensaje?.message}>
              <textarea
                id="mensaje"
                rows={5}
                placeholder="Cuéntanos en qué podemos ayudarte..."
                aria-invalid={!!errors.mensaje}
                aria-describedby={describedBy("mensaje")}
                className={cn(fieldClass(!!errors.mensaje), "resize-y py-3")}
                {...register("mensaje")}
              />
            </Field>
          </div>
        </div>

        <div className="mt-6 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            <span className="text-primary" aria-hidden="true">
              *
            </span>{" "}
            Campos obligatorios
          </p>
          <Button
            type="submit"
            variant="hero"
            size="xl"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                Enviar mensaje
                <Send />
              </>
            )}
          </Button>
        </div>
      </form>

      <SuccessDialog data={submitted} onClose={() => setSubmitted(null)} />
    </>
  );
}
