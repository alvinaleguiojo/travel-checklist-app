import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import supabase from "@/app/config/supabaseClient";

export async function PUT(request: Request) {
  const { subIsCompleted, id }: SubSection = await request.json();

  const { data } = await supabase
    .from("sublist")
    .update({ subIsCompleted })
    .match({ id })
    .order("created_at", { ascending: false });

  revalidatePath("/");

  return NextResponse.json(data);
}
