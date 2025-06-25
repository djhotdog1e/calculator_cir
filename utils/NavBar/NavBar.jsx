"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from './routes.js';


export default function NavBar() {
    const pathname = usePathname();
    return (
        <nav className="flex justify-center gap-5 pt-9">
            {navItems.map((item) =>  {
                const isActive = pathname === item.href;
                return(
                <Link key={item.href} href={item.href} className={"px-6 py-4 rounded-xl text-3xl font-medium transition-colors " + 
                        (isActive
                            ? "bg-blue-100 text-black "
                            : "bg-gray-100 text-gray-500 hover:bg-blue-100 hover:text-black ")
                        }
                >
                    {item.label}
                </Link>
                );
                })}
        </nav>
    );
}