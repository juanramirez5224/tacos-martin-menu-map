import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ContactFormValues } from "@/lib/contact-schema";

type SuccessDialogProps = {
  data: ContactFormValues | null;
  onClose: () => void;
};

export function SuccessDialog({ data, onClose }: SuccessDialogProps) {
  const rows: { label: string; value: string }[] = data
    ? [
        { label: "Nombre", value: data.nombre },
        { label: "Correo", value: data.correo },
        { label: "Teléfono", value: data.telefono },
        { label: "Servicio", value: data.servicio },
        { label: "Mensaje", value: data.mensaje },
      ]
    : [];

  return (
    <Dialog open={data !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90svh] w-[calc(100%-2rem)] overflow-y-auto rounded-3xl border-0 bg-card p-0 sm:max-w-lg sm:rounded-3xl">
        <div className="papel-divider" aria-hidden="true" />
        <div className="px-6 pb-6 pt-4 sm:px-8 sm:pb-8">
          <DialogHeader className="items-center text-center sm:text-center">
            <span className="grid size-16 place-items-center rounded-full bg-success/15 text-success">
              <CheckCircle2 className="size-9" aria-hidden="true" />
            </span>
            <DialogTitle className="mt-3 font-display text-2xl font-extrabold leading-tight">
              ¡Gracias por contactarnos! Hemos recibido tu mensaje.
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Estos son los datos que nos compartiste:
            </DialogDescription>
          </DialogHeader>

          <dl className="mt-6 divide-y rounded-2xl border bg-background">
            {rows.map((row) => (
              <div key={row.label} className="grid gap-1 px-4 py-3 sm:grid-cols-[6.5rem_1fr] sm:gap-3">
                <dt className="text-xs font-bold uppercase tracking-wide text-muted-foreground sm:pt-0.5">
                  {row.label}
                </dt>
                <dd className="whitespace-pre-line break-words text-sm text-foreground">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <DialogFooter className="mt-6 sm:justify-center">
            <Button variant="hero" size="xl" className="w-full sm:w-auto" onClick={onClose}>
              Cerrar
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
