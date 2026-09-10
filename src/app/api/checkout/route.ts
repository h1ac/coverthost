import { NextResponse } from "next/server";
import { ZodError, z } from "zod";

import { createKovepayInvoice, KovepayError } from "@/lib/kovepay";

const createInvoiceSchema = z.object({
  amountUsd: z.number().positive().max(10_000),
  description: z.string().trim().min(1).max(240),
});

export async function POST(request: Request) {
  try {
    const { amountUsd, description } = createInvoiceSchema.parse(
      await request.json(),
    );
    const formatted = amountUsd.toFixed(2);
    const invoice = await createKovepayInvoice(formatted, description);
    return NextResponse.json({ checkoutUrl: invoice.checkoutUrl });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid request", details: error.flatten().fieldErrors },
        { status: 400 },
      );
    }
    if (error instanceof KovepayError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }
    return NextResponse.json(
      { error: "Could not create invoice" },
      { status: 500 },
    );
  }
}
