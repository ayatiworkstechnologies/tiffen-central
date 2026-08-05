import { generateLlmsFullTxt } from "../llms-config";

export async function GET() {
  const content = generateLlmsFullTxt();
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
