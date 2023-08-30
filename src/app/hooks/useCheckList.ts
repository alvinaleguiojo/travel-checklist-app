"use client";
import { useRequest } from "ahooks";

async function getData() {
  const response = await fetch("/api/checklist");
  const data = await response.json();
  return data;
}

export default function useCheckList(refresh: boolean) {
  const { data, loading, error } = useRequest(getData, {
    refreshDeps: [refresh],
    pollingInterval: 1000,
  });
  return { data, loading, error };
}
