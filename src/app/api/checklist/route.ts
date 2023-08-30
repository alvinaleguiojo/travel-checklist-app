import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  const { data } = await supabase.from("checklist").select(`*, sublist (*)`);

  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  const { isCompleted, id }: any = await request.json();

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  const { data } = await supabase
    .from("checklist")
    .update({ isCompleted })
    .match({ id });

  return NextResponse.json(data);
}
