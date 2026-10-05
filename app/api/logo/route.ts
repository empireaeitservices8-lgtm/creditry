import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const wordmarkPath = path.join(process.cwd(), "public", "credtree-wordmark.png");
    if (fs.existsSync(wordmarkPath)) {
      const buffer = fs.readFileSync(wordmarkPath);
      return new NextResponse(buffer, {
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }
    return NextResponse.json({ status: "ok" });
  } catch (err) {
    return NextResponse.json({ error: "Failed to load logo" }, { status: 500 });
  }
}

