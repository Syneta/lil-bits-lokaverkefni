'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import Router from "next/router"
import Image from "next/image"

export function Links() {
    const pathname = usePathname()

    return (
        <>
            <nav className="gap-2 flex">

                <Image src='/lil-bits-logo.png' alt='logo' width={150} height={150} />

                <Link className={`link ${pathname === '/' ? 'active' : ''}`}
                    href="/">
                    Home
                </Link>

                <Link className={`link ${pathname === '/login' ? 'active' : ''}`}
                    href="/">
                    Login
                </Link>

                <Link
                    className={`link ${pathname === '/drinks' ? 'active' : ''}`}
                    href="/meals">
                    Meals
                </Link>

                <Link
                    className={`link ${pathname === '/meals' ? 'active' : ''}`}
                    href="/drinks">
                    Drinks
                </Link>

                <Link
                    className={`link ${pathname === '/date' ? 'active' : ''}`}
                    href="/drinks">
                    Date
                </Link>

                <Link
                    className={`link ${pathname === '/checkout' ? 'active' : ''}`}
                    href="/drinks">
                    Drinks
                </Link>
            </nav>
        </>
    )
}