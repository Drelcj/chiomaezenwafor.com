import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar px-10 bg-base-100 fixed w-full bg-blend-color shadow-2xl z-20">
      {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/school">School</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
              <ul className="p-2">
                <li>
                  <Link href="/blog">News Content</Link>
                </li>
                <li>
                  <Link href="/blog">Trending</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/shop">For You</Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709590726/Tempblog3_ctqczs.png"
            alt="Chioma Ezenwafor Blog's Temporal logo"
            width={80}
            height={80}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
          <Link href="/school">School</Link>
          </li>
          <li>
            <details>
              <summary><Link href="/blog">Blog</Link></summary>
              <ul className="p-2">
                <li>
                  <Link href="/blog">News Content</Link>
                </li>
                <li>
                <Link href="/blog">Trending</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/shop">For You</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn"> Log In </a>
      </div>
    </div>
  );
};

export default Navbar;
