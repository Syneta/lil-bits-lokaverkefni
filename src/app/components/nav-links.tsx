'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
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

                <Link className={`link ${pathname === '/loginone' ? 'active' : ''}`}
                    href="/">
                    Home
                </Link>

                <Link
                    className={`link ${pathname === '/drinkstwo' ? 'active' : ''}`}
                    href="/meals">
                    Meals
                </Link>

                <Link
                    className={`link ${pathname === '/mealsthree' ? 'active' : ''}`}
                    href="/drinks">
                    Drinks
                </Link>

                <Link
                    className={`link ${pathname === '/checkoutfour' ? 'active' : ''}`}
                    href="/drinks">
                    Drinks
                </Link>
            </nav>
        </>
    )
}