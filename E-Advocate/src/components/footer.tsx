import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link"
import { FaApple, FaGooglePlay } from "react-icons/fa6"; // You can also use simple images
import Image from "next/image";

const Footer = () => {
  const icons = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaGoogle />, link: "https://google.com" },
    { icon: <FaYoutube />, link: "https://youtube.com" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-black text-black dark:text-white py-12 px-2 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center">
            <Image
              src="/advocate-logoo.png"
              alt="Advocate Logo"
              width={200}
              height={70}
              className="h-[70px] w-[200px] object-contain invert-0 dark:invert -mt-[1px] ml-[-50px]"
              priority
            />
            <span className=" font-bold text-2xl mb-2 w-[500px]  ml-[-20px]">
              E‑Advocate Services
            </span>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-5">
            India&apos;s premier legal matchmaking platform connecting advocates
            and clients.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/advanced-search"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Advanced Feature
              </Link>
            </li>
            <li>
              <Link
                href="/success-stories"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Success Stories
              </Link>
            </li>
            <li>
              <Link
                href="/site-map"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Site Map
              </Link>
            </li>

            <li>
              <Link
                href="/create-blog"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Create Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">More</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <li>
              <Link
                href="/membership"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Membership Options
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/howitworks"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                href="/credites"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Credites
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-2">For Advocates</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <li>
              <Link
                href="/find-clients"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Find Clients
              </Link>
            </li>

            <li>
              <Link
                href="/advocate_works"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                How It Works
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-2">For Clients</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <li>
              <Link
                href="/find-advocates"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Find Advocates
              </Link>
            </li>

            <li>
              <Link
                href="/client_works"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                How it Works
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}

        <div>
          <h4 className="text-lg font-semibold mb-2">Help</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/help" className="hover:underline">
                Help
              </Link>
            </li>
            <li>
              <Link href="/e-advocate-centers" className="hover:underline">
                E-AdovacateCenters
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/frud-alert" className="hover:underline">
                Fraud Alert
              </Link>
            </li>
            <li>
              <Link href="/terms-service" className="hover:underline">
                Terms Of Use
              </Link>
            </li>
            <li>
              <Link href="/third-party" className="hover:underline">
                Third Party Terms Of Use
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:underline">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/privacy-features" className="hover:underline">
                Privacy Features
              </Link>
            </li>
            <li>
              <Link href="/summons-notices" className="hover:underline">
                Summons / Notices
              </Link>
            </li>
            <li>
              <Link href="/grievances" className="hover:underline">
                Grievances
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:underline">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center items-center space-x-4">
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
        border dark:border-white border-black
        text-black dark:text-white
        rounded-full p-3
        hover:bg-black dark:hover:bg-white
        hover:text-white dark:hover:text-black
        transition duration-300
      "
            >
              <span className="text-lg">{item.icon}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="overflow-hidden bg-black dark:bg-white py-4 mt-5">
        <div className="flex flex-row space-x-64 text-center justify-center">
          <h1 className="text-left text-white dark:text-black text-2xl font-semibold mb-4 mt-[-4px] text-[25px] fontweight-[600]">
            Approved By:
          </h1>
          <h1 className="text-left text-white dark:text-black text-2xl font-semibold mb-4 mt-[-4px] text-[25px] fontweight-[600]">
            Partnership:
          </h1>
          <h1 className="text-left text-white dark:text-black text-2xl font-semibold mb-4 mt-[-4px] text-[25px] fontweight-[600]">
            Collboration:
          </h1>
          <h1 className="text-left text-white dark:text-black text-2xl font-semibold mb-4 mt-[-4px] text-[25px] fontweight-[600]">
            Assositation:
          </h1>
        </div>
        <div className="whitespace-nowrap inline-block animate-marquee">
          <img src="/por.png" alt="Partner 1" className="h-12 inline mx-8" />
          <img src="/por1.png" alt="Partner 2" className="h-12 inline mx-8" />
          <img src="/por2.png" alt="Partner 3" className="h-12 inline mx-8" />
          <img src="/por3.png" alt="Partner 4" className="h-12 inline mx-8" />
          <img src="/por4.png" alt="Partner 4" className="h-12 inline mx-8" />
          <img src="/por5.png" alt="Partner 5" className="h-12 inline mx-8" />
          <img src="/por6.jpg" alt="Partner 6" className="h-12 inline mx-8" />

          {/* Repeat for seamless loop */}
          <img src="/por.png" alt="Partner 1" className="h-12 inline mx-8" />
          <img src="/por1.png" alt="Partner 2" className="h-12 inline mx-8" />
          <img src="/por2.png" alt="Partner 3" className="h-12 inline mx-8" />
          <img src="/por3.png" alt="Partner 4" className="h-12 inline mx-8" />
          <img src="/por4.png" alt="Partner 4" className="h-12 inline mx-8" />
          <img src="/por5.png" alt="Partner 5" className="h-12 inline mx-8" />
          <img src="/por6.jpg" alt="Partner 6" className="h-12 inline mx-8" />
        </div>
      </div>

      <div className="bg-gray-200 dark:bg-zinc-800 text-black dark:text-white py-6 px-4 transition-colors duration-300 mt-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* App Section */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold mb-2">App available on</p>
            <div className="flex space-x-4 text-2xl">
              <FaGooglePlay className="hover:text-blue-600 dark:hover:text-gray-300 cursor-pointer" />
              <FaApple className="hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer" />
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-end">
            <p className="font-semibold mb-2">Follow us on</p>
            <div className="flex space-x-4 text-2xl">
              <FaFacebookF className="hover:text-blue-600 dark:hover:text-gray-300 cursor-pointer" />
              <FaTwitter className="hover:text-sky-500 dark:hover:text-gray-300 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 dark:hover:text-gray-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
        © 2025 <span className="font-medium">E‑Advocate Services</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
