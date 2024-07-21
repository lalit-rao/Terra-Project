"use client";

import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import {logoTextWhite, logoWord} from "@/public/images";
// import {ModeToggle} from "../dark-mode-toggle";

function Navbar() {
    const navRef = useRef();
    const [scrollOpacity, setScrollOpacity] = useState(0);

    useEffect(() => {
        const maxScroll = 100;
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const opacity = scrollY / maxScroll;
            setScrollOpacity(opacity);
        };

        window.addEventListener("scroll", handleScroll);
    }, []);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header className="bg-[#000]">
            <a href="/">
                <Image
                    className="logoContainer"
                    src={logoTextWhite}
                    alt="logo"
                    height={40}
                    priority
                />
            </a>
            {/*<ModeToggle classname="z-40"/>*/}
            <nav ref={navRef}>
                <Link className="hover-underline-animation font-poppins" href="/">
                    Home
                </Link>
                <Link className="hover-underline-animation font-poppins" href="/marketplace">
                    Marketplace
                </Link>
                <Link className="hover-underline-animation font-poppins" href="/eco-routes">
                    EcoRoutes
                </Link>
                <Link className="hover-underline-animation font-poppins" href="/eco-score">
                    EcoScore
                </Link>
                <Link className="hover-underline-animation font-poppins" href="/eco-swap">
                    EcoSwap
                </Link>
                <Link className="hover-underline-animation font-poppins" href="/health-assistant">
                    Health Assistant
                </Link>
                <Link className="hover-underline-animation font-poppins" href="/recycle-item-finder">
                    Recycle Item Finder
                </Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
