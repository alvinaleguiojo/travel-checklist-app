import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const { subIsCompleted, id }: SubSection = await request.json();

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  const { data } = await supabase
    .from("sublist")
    .update({ subIsCompleted })
    .match({ id });

  return NextResponse.json(data);
}
