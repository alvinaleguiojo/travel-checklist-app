"use client";
import React from "react";
import { Skeleton } from "@chakra-ui/react";

function LoadingSkeleton() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
      <div>
        <Skeleton height="80px"></Skeleton>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Skeleton height="40px"></Skeleton>
        <Skeleton height="40px"></Skeleton>
        <Skeleton height="40px"></Skeleton>
      </div>
    </div>
  );
}

export default LoadingSkeleton;
