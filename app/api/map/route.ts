const token = process.env.STADIA_API_KEY;

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    console.log(token);
    console.log("test");
    const url = `https://tiles.stadiamaps.com/static/alidade_smooth.png?center=${lat},${lng}&zoom=11&size=1200x500@2x&api_key=${token}`;

    const res = await fetch(url, { cache: "no-store" });
    const buffer = await res.arrayBuffer();

    return new Response(buffer, {
        headers: { "Content-Type": "image/png" },
    });
}
