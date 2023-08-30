import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  const { data } = await supabase.from("checklist").select(`*`);

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  const { data } = await supabase.from("checklist").select(`*`);

  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  const { isCompleted, id }: any = await request.json();

  console.log(isCompleted, id);

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from("checklist")
    .update({ isCompleted })
    .match({ id });

  console.log(error);

  return NextResponse.json(data);
}
