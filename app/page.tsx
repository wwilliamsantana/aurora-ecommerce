import { Suspense } from "react";
import { StoreContent } from "@/components/StoreContent";

export default function Home() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-[#05050f]" />}>
      <StoreContent />
    </Suspense>
  );
}
