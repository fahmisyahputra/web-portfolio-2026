import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-white px-4 text-center">
            <h1 className="text-9xl font-bold text-gray-200">404</h1>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h2>
            <p className="mt-2 max-w-md text-gray-600">
                Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
            </p>
            <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
            >
                <ArrowLeft size={16} />
                Back to Portfolio
            </Link>
        </div>
    );
}
