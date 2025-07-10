import { Card, CardContent } from "@/components/ui/card";

export function QuoteCard({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <blockquote className="text-xl italic text-muted-foreground">
          &quot;{quote}&quot;
        </blockquote>
        <p className="mt-4 text-right font-semibold">— {author}</p>
      </CardContent>
    </Card>
  );
}
