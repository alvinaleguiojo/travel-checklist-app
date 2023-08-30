"use client";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();
  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button onClick={() => router.refresh()}>Refresh the page</Button>
    </div>
  );
}
