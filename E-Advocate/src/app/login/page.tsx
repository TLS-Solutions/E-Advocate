import { LandingPage } from "@/components/landing-page";
import { Suspense } from "react";

function LoginPageContent() {
  return <LandingPage />;
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPageContent />
    </Suspense>
  );
}
