import { QuoteCard } from "@/components/quote-card";

export default function Home() {
  const url = process.env.NEXT_PUBLIC_COMPONENT_REGISTRY_URL;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <QuoteCard
        quote="The best way to get started is to quit talking and begin doing."
        author="Walt Disney"
      />

      <div className="mt-10 text-center max-w-md">
        <p className="mb-4 text-lg font-medium">Install this component:</p>
        <code className="block p-4 bg-gray-900 text-green-400 rounded font-mono">
          npx shadcn add {url}
        </code>
      </div>
    </div>
  );
}
