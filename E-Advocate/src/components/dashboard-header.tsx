"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { FiSearch, FiFolder, FiFileText } from "react-icons/fi";
import { set } from "date-fns";

const rotatingPlaceholders = [
  "Search by Profile ID",
  "Search by Location",
  "Search by Specialization",
];

const indianLanguages = [
  "Angika",
  "Assamese",
  "Awadhi",
  "Bagheli",
  "Banjara",
  "Bhojpuri",
  "Bodo",
  "Bundeli",
  "Chhattisgarhi",
  "Chittagonian",
  "Coorgi-Kodagu",
  "Dakhini",
  "Dogri",
  "English",
  "Garhwali",
  "Gojri",
  "Gondi",
  "Gujarati",
  "Haryanvi",
  "Hindi",
  "Ho",
  "Kannada",
  "Kashmiri",
  "Khasi",
  "Kodava",
  "Konkani",
  "Ladakhi",
  "Lepcha",
  "Maithili",
  "Magahi",
  "Malayalam",
  "Manipuri/Meitei",
  "Marathi",
  "Marwari",
  "Mizo",
  "Nagamese",
  "Nepali",
  "Nicobarese",
  "Odia",
  "Pahari",
  "Pali",
  "Punjabi",
  "Rajasthani",
  "Rohingya",
  "Sanskrit",
  "Santali",
  "Sikkimese",
  "Sindhi",
  "Sylheti",
  "Tamil",
  "Telugu",
  "Tripuri",
  "Tulu",
  "Urdu",
].sort();

export function DashboardHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageSearch, setLanguageSearch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % rotatingPlaceholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearchSubmit = (e: any) => {
    if ((e.key === "Enter" || e.type === "click") && searchText.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchText.trim())}`);
    }
  };

  const scrollToSection = (id: any) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const navLink =
    "relative text-lg font-medium transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:text-lighttext/80 dark:hover:text-darktext/80";

  const dropdownClass = `absolute left-0 mt-2 w-64 rounded-lg shadow-xl z-50 border-2 ${mounted && resolvedTheme === "dark"
    ? "border-white bg-black text-white"
    : "border-black bg-black text-white"
    }`;

  const dropdownItemClass =
    "flex items-center gap-3 px-4 py-3 text-base rounded-md hover:bg-gray-700 cursor-pointer";

  const filteredLanguages = indianLanguages.filter((lang) =>
    lang.toLowerCase().includes(languageSearch.toLowerCase())
  );

  return (
    <main>
      <motion.header
        className="glass-navbar w-full sticky top-0 z-50 bg-lightbg/70 shadow-md dark:bg-darkbg/40 backdrop-blur-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-2xl font-bold tracking-wide hover:text-lighttext dark:hover:text-darktext"
            >
              <div className="flex items-center gap-3">
                <img
                  src="/advocate-logoo.png"
                  alt="Logo"
                  className="h-[50px] w-[50px] object-contain dark:invert"
                />
                <span className="text-lg font-semibold">
                  E-Advocate Services
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 items-center">
              <div
                className="relative ml-6"
                onMouseEnter={() => setProfileMenuOpen(true)}
                onMouseLeave={() => {
                  setProfileMenuOpen(false);
                }}
              >
                <Link href="/dashboard/results" className={navLink}>Browse Profiles</Link>
                <AnimatePresence>
                  {profileMenuOpen && (
                    <motion.div
                      {...dropdownAnimation}
                      className={dropdownClass}
                    >
                      <div className="py-3 px-2 space-y-2 text-center">
                        {/* Select Language Row */}
                        <div
                          className={`${dropdownItemClass} justify-between relative whitespace-nowrap`}
                          onMouseEnter={() => setLanguageMenuOpen(true)}
                          onMouseLeave={() => setLanguageMenuOpen(false)}
                        >
                          <span>Select Language</span>
                          <span>›</span>

                          <AnimatePresence>
                            {languageMenuOpen && (
                              <motion.div
                                {...dropdownAnimation}
                                className="absolute left-full top-0 w-[300px] max-w-[300px] min-w-0 text-left max-h-64 overflow-y-auto z-50 border border-white bg-black text-white rounded-lg shadow-md"
                                onMouseEnter={() => setLanguageMenuOpen(true)}
                                onMouseLeave={() => setLanguageMenuOpen(false)}
                              >
                                <div className="p-3">
                                  <input
                                    type="text"
                                    placeholder="Search language..."
                                    className="w-full mb-3 px-3 py-2 rounded border border-white bg-black text-white"
                                    onChange={(e) =>
                                      setLanguageSearch(e.target.value)
                                    }
                                  />
                                  <div className="grid grid-cols-3 gap-x-2 gap-y-3 px-2">
                                    {filteredLanguages.map((lang) => (
                                      <button
                                        key={lang}
                                        className="w-full py-2 flex items-center justify-center text-sm  hover:underline break-words whitespace-normal"
                                        onClick={() => {
                                          console.log(`Selected: ${lang}`);
                                          setLanguageMenuOpen(false)
                                          setLanguageSearch("")
                                          setProfileMenuOpen(false);
                                        }}
                                      >
                                        {lang}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className={dropdownItemClass}>Department</div>
                        <div className={dropdownItemClass}>Sub-department</div>
                        <div className={dropdownItemClass}>Experience</div>
                        <div className={dropdownItemClass}>Location</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* More Tasks */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span className={navLink}>More Tasks</span>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      {...dropdownAnimation}
                      className={dropdownClass}
                    >
                      <div className="py-3 px-2 space-y-2">
                        <Link href="/file-case" className={dropdownItemClass}>
                          <FiFolder /> File a Case
                        </Link>
                        <Link href="/case-status" className={dropdownItemClass}>
                          <FiFileText /> Case Status
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/about"
                className={navLink}
              >
                About
              </Link>
              <Link
                href="/blog"
                className={navLink}
              >
                Blog
              </Link>
              <Link href="/contact" className={navLink}>
                Help
              </Link>
            </nav>

            {/* Search */}
            <div className="relative w-[200px] sm:w-[200px]">
              <FiSearch
                onClick={handleSearchSubmit}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-lg text-white"
              />
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleSearchSubmit}
                className="w-full pl-9 pr-3 py-2 rounded-md border bg-black text-white text-sm border-white"
                placeholder={rotatingPlaceholders[placeholderIndex]}
              />
            </div>
          </div>

          {/* Right Controls */}
          <div className="hidden md:flex gap-4">
            <Link
              href="/login"
              className="px-5 py-2 text-sm rounded border border-white text-white bg-black hover:bg-gray-800 flex items-center justify-center"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-5 py-2 text-sm rounded bg-white text-black hover:bg-gray-300 hover:opacity-80 flex items-center justify-center"
            >
              Register
            </Link>
            <button
              onClick={() =>
                setTheme(mounted && resolvedTheme === "dark" ? "light" : "dark")
              }
              className="px-3 py-2 rounded-full border hover:bg-gray-600 border-white"
            >
              {mounted ? resolvedTheme === "dark" ? <Sun /> : <Moon /> : null}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-lightbg dark:bg-darkbg border-t border-lightborder dark:border-darkborder overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-4">
                <Link
                  href="/dashboard/results"
                  className="text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  Browse Profiles
                </Link>
                <Link
                  href="/file-case"
                  className="text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  File a Case
                </Link>
                <Link
                  href="/case-status"
                  className="text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  Case Status
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  Help
                </Link>
                <div className="flex flex-col gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="px-5 py-2 text-sm rounded border border-white text-white bg-black hover:bg-gray-800 w-full flex items-center justify-center"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setOpen(false)}
                    className="px-5 py-2 text-sm rounded bg-white text-black hover:bg-gray-300 hover:opacity-80 w-full flex items-center justify-center"
                  >
                    Register
                  </Link>
                  <button
                    onClick={() =>
                      setTheme(mounted && resolvedTheme === "dark" ? "light" : "dark")
                    }
                    className="px-3 py-2 rounded-full border hover:bg-gray-600 border-white w-full flex justify-center items-center gap-2"
                  >
                    {mounted ? (
                      resolvedTheme === "dark" ? (
                        <>
                          <Sun className="h-4 w-4" /> Light Mode
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4" /> Dark Mode
                        </>
                      )
                    ) : null}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </main>
  );
}

const dropdownAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.2 },
};
