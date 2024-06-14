import Characters from "@/app/character/page";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ characters: Characters })
  }