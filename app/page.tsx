import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website List",
  description: "A simple list of websites.",
};

export default function Home() {
  const websites: string[] = ["https://jakub.kr/"];

  return (
    <main className="min-h-screen bg-slate-50 p-10 text-slate-900">
      <h1 className="text-2xl font-semibold">Website List</h1>
      <ul className="mt-4 space-y-2">
        {websites.length === 0 ? (
          <li className="text-sm text-slate-600">No websites yet.</li>
        ) : (
          websites.map((website) => (
            <li key={website}>
              <a
                href={website}
                className="text-sky-700 underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {website}
              </a>
            </li>
          ))
        )}
      </ul>
    </main>
  );
}
