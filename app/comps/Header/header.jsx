import React from 'react'
import Link from "next/link";

export default function page() {
    return (
        <header className="grid">
            <h1> <Link href="/">
                NEXT.js
            </Link></h1>
            <nav>
                <Link href="/showcase" className="hover:underline">
                    Showcase
                </Link>
                <Link href="/docs" className="hover:underline">
                    Docs
                </Link>
                <Link href="/blog" className="hover:underline">
                    Blog
                </Link>
                <Link href="/templates" className="hover:underline">
                    Templates
                </Link>
                <Link href="/enterprise" className="hover:underline">
                    Enterprise
                </Link>
                <Link href="/axios" className="hover:underline">
                    Axios
                </Link>
                <Link href="/jsonplaceholder" className="hover:underline">
                    JsonPlaceholder
                </Link>
                <Link href="/supabase" className="hover:underline">
                    Supabase
                </Link>
            </nav>
        </header>
    )
}
