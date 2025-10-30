"use client";

import { Suspense } from "react";
import PaymentPageContent from "./PaymentPageContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading payment details...</div>}>
      <PaymentPageContent />
    </Suspense>
  );
}
