
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaMapMarkedAlt, FaClock, FaStar } from "react-icons/fa";
import Footer from "@/components/footer";

/* Dummy Data */
const advocateData = [
  {
    name: "Adv. Priya Sharma",
    location: "Mumbai, Maharashtra",
    practice: "Family Law",
    rating: 4.8,
    experience: "8 years",
    fee: "₹2,000/hr",
    img: "https://via.placeholder.com/120?text=PS",
  },
  {
    name: "Adv. Rajesh Kumar",
    location: "Delhi, NCR",
    practice: "Criminal Law",
    rating: 4.9,
    experience: "12 years",
    fee: "₹3,500/hr",
    img: "https://via.placeholder.com/120?text=RK",
  },
  {
    name: "Adv. Meera Patel",
    location: "Bangalore, Karnataka",
    practice: "Corporate Law",
    rating: 4.7,
    experience: "15 years",
    fee: "₹4,000/hr",
    img: "https://via.placeholder.com/120?text=MP",
  },
];

const clientRequests = [
  {
    name: "Amit Singh",
    location: "Pune, Maharashtra",
    priority: "High Priority",
    title: "Property Dispute",
    description:
      "Need help with property documentation and legal dispute resolution",
  },
  {
    name: "Sana Verma",
    location: "Lucknow, Uttar Pradesh",
    priority: "Medium Priority",
    title: "Divorce Settlement",
    description:
      "Looking for legal guidance on mutual divorce process and settlements",
  },
  {
    name: "Rohit Kapoor",
    location: "Chandigarh",
    priority: "High Priority",
    title: "Criminal Defense",
    description: "Need urgent assistance for a bail plea and court hearing",
  },
];

export function WelcomePage() {
  const router = useRouter();
  const [tab, setTab] = useState("advocates");

  return (
    <motion.div
      className="min-h-screen bg-lightbg dark:bg-darkbg text-lighttext dark:text-darktext flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center px-4 relative overflow-hidden">
        <motion.div
          className="text-center max-w-2xl z-10 pt-24"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6"
            animate={{ scale: [1, 1.15, 0.9, 1.05, 0.98, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          >
            Welcome to E‑Advocate Services
          </motion.h1>
          <p className="text-lg md:text-xl mb-10 text-lighttextSecondary dark:text-darktextSecondary">
            Find qualified advocates, get legal consultation, and resolve your
            legal matters with confidence.
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-lightcard dark:bg-darkcard text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">
            Why Choose E‑Advocate Services?
          </h2>
          <p className="text-lg text-lighttextSecondary dark:text-darktextSecondary mb-12">
            E‑Advocate Services bridges the gap between individuals seeking
            legal help and professional advocates.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaCheckCircle size={36} />,
                title: "Verified Professionals",
                text: "All advocates are verified with Bar Council credentials",
              },
              {
                icon: <FaMapMarkedAlt size={36} />,
                title: "Smart Matching",
                text: "Find the perfect advocate based on specialization",
              },
              {
                icon: <FaClock size={36} />,
                title: "Quick Response",
                text: "Get responses from advocates within 24 hours",
              },
              {
                icon: <FaStar size={36} />,
                title: "Quality Assured",
                text: "Experienced professionals with proven track records",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -4 }}
                className="p-6 rounded-lg shadow-md bg-lightbg dark:bg-darkbg border border-lightborder dark:border-darkborder space-y-3 text-center"
              >
                <div className="mx-auto">{card.icon}</div>
                <h3 className="font-semibold text-xl">{card.title}</h3>
                <p className="text-sm text-lighttextSecondary dark:text-darktextSecondary">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Profiles Section */}
      <section
        id="profiles"
        className="py-20 px-6 bg-lightbg dark:bg-darkbg text-center"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Browse Profiles</h2>
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setTab("advocates")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold border ${tab === "advocates"
                ? "bg-darkbg text-darktext dark:bg-lightbg dark:text-lighttext"
                : "bg-transparent text-lighttext dark:text-darktext border-lightborder dark:border-darkborder"
                }`}
            >
              Browse Advocates
            </button>
            <button
              onClick={() => setTab("clients")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold border ${tab === "clients"
                ? "bg-darkbg text-darktext dark:bg-lightbg dark:text-lighttext"
                : "bg-transparent text-lighttext dark:text-darktext border-lightborder dark:border-darkborder"
                }`}
            >
              Browse Client Requests
            </button>
          </div>

          {/* Advocates */}
          {tab === "advocates" && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {advocateData.map((a) => (
                <motion.div
                  key={a.name}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-lg shadow-md bg-lightcard dark:bg-darkcard border border-lightborder dark:border-darkborder space-y-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={a.img}
                      alt={a.name}
                      className="w-16 h-16 rounded-full border border-lightborder dark:border-darkborder"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{a.name}</h3>
                      <p className="text-sm text-lighttextSecondary dark:text-darktextSecondary">
                        {a.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{a.practice}</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <p>Experience: {a.experience}</p>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Link href="/dashboard/profile" className="flex-1 px-3 py-2 text-sm rounded border border-lightborder dark:border-darkborder hover:bg-accent flex items-center justify-center">
                      View Profile
                    </Link>
                    <Link href="/contact" className="flex-1 px-3 py-2 text-sm rounded bg-accent text-white hover:bg-accentHover flex items-center justify-center">
                      Contact
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Clients */}
          {tab === "clients" && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-left">
              {clientRequests.map((c, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-lg shadow-md bg-lightcard dark:bg-darkcard border border-lightborder dark:border-darkborder space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">{c.name}</h3>
                      <p className="text-sm text-lighttextSecondary dark:text-darktextSecondary">
                        {c.location}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                      {c.priority}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold">{c.title}</h4>
                  <p className="text-sm text-lighttextSecondary dark:text-darktextSecondary">
                    {c.description}
                  </p>
                  <div className="pt-3 text-center">
                    <Link href="/dashboard/file-a-case" className="px-4 py-2 text-sm font-semibold rounded bg-accent text-white hover:bg-accentHover inline-block">
                      Apply for this Case
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className="bg-lightcard dark:bg-darkcard text-lighttext dark:text-darktext py-12 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">📢 Latest Legal Blogs</h2>
          <p className="text-lighttextSecondary dark:text-darktextSecondary mb-6">
            Stay informed with the latest updates, legal tips, and awareness
            articles from verified advocates.
          </p>
          <Link
            href="/blog"
            target="_blank"
            className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accentHover inline-block"
          >
            Open Blog
          </Link>
        </div>
      </section>

      {/* Ready to Get Connect Section */}
      <section className="bg-black text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Connect?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of legal professionals and clients who trust E-Advocate Services
          </p>
          <Link
            href="/register"
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 inline-block transition-colors"
          >
            Create Your Profile Today
          </Link>
        </div>
      </section>

      {/* Help Section */}
      <section
        id="help"
        className="bg-lightbg dark:bg-darkbg text-lighttext dark:text-darktext py-12 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-lg text-lighttextSecondary dark:text-darktextSecondary mb-8">
            Contact our support team for any inquiries or guidance.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accentHover inline-block"
          >
            Contact Support
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};




// export function WelcomePage() {
//   const router = useRouter();
//   const [typedText, setTypedText] = useState("");
//   const fullText = "Welcome to E-Advocate";

//   useEffect(() => {
//     if (typedText.length < fullText.length) {
//       const timeoutId = setTimeout(() => {
//         setTypedText(fullText.slice(0, typedText.length + 1));
//       }, 100);
//       return () => clearTimeout(timeoutId);
//     }
//   }, [typedText, fullText]);

//   return (
//     <div className="flex flex-col min-h-screen w-full bg-background text-foreground">
//         <div className="flex-1 flex flex-col items-center justify-center p-8">
//             <div>
//                  <video
//                     src="https://videos.pexels.com/video-files/853877/853877-hd_1280_720_25fps.mp4"
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="rounded-full object-cover h-48 w-48"
//                     width="200"
//                     height="200"
//                  />
//             </div>

//             <div className="flex flex-col items-center text-center mt-8">
//               <h1 className="text-3xl font-bold font-headline text-foreground h-10">
//                 {typedText}
//                 <span className="inline-block w-1 animate-pulse bg-foreground h-8 ml-1"></span>
//               </h1>
//               <p className="mt-2 max-w-sm text-muted-foreground">
//                   Your trusted platform for legal services. Connect with verified advocates and find the help you need.
//               </p>
//             </div>
//         </div>

//         <div className="flex flex-col gap-4 p-8 pt-0">
//             <Button
//                 className="w-full"
//                 onClick={() => router.push("/register")}
//             >
//                 New user? Register for Free
//             </Button>
//             <div className="flex gap-4">
//                 <Button
//                 variant="outline"
//                 className="w-full bg-background/80"
//                 onClick={() => router.push("/dashboard")}
//                 >
//                 Explore the App
//                 </Button>
//                 <Button
//                 variant="outline"
//                 className="w-full bg-background/80"
//                 onClick={() => router.push("/login?tab=login&from=login")}
//                 >
//                 Existing user? Login
//                 </Button>
//             </div>
//         </div>
//     </div>
//   );
// }
