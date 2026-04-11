import Desktop from "@/components/desktop/desktop";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata();

export default function HomePage() {
  return <Desktop />;
}
