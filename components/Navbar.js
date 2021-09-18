import React from "react";
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={77} alt="logo" />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninjas</Link>
    </nav>
  );
};

export default Navbar;


// Image component lazily loads the images, so it will only will be downloaded once 
// the image is in view or when the user scrolls down to that image in the page.