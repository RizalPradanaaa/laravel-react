import { Link } from "@inertiajs/react";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
