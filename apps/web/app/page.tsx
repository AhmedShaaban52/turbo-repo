export default async function Home() {
  let text = "API not connected yet";

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      cache: "no-store",
    });
    text = await res.text();
  } catch { }

  return (
    <main>
      <h1>Hello from Vercel! 🚀</h1>
      <p>Response from API: {text}</p>
    </main>
  );
}