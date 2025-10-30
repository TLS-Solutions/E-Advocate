"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentPageContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("id");

  return (
    <div>
      <h1>Payment Page</h1>
      <p>Payment ID: {paymentId}</p>
    </div>
  );
}