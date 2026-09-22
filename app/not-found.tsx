import Link from "next/link";
import { IconArrow } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-5 text-6xl text-bone-50 sm:text-7xl">
        Time lost
      </h1>
      <p className="mt-6 max-w-md text-base leading-8 text-bone-400">
        The page you&apos;re looking for has slipped off the dial. Let us wind
        you back to the collection.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className="btn btn-gold">
          Back to home
        </Link>
        <Link href="/shop" className="btn btn-ghost">
          Shop all watches <IconArrow className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}