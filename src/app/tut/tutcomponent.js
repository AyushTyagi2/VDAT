"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Calendar,
  Clock,
  BookOpen,
  Target,
  Users,
  CheckCircle,
  Play,
  Award,
  Lightbulb,
  Sun,
  Moon,
  Linkedin,
  Globe
} from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function EnhancedTutorialComponent({
  title = "",
  date = "",
  duration = "",
  speakers = [],
  format = "",
  abstract = "",
  domain = "",
  keywords = "",
  learningOutcomes = "",
  targetAudience = "",
  prerequisites = "",
  speakerBiographies = [],
  speakerLinkedIns = [],
  speakerWebsites = [],
  basicStructure = "",
  keyLearningOutcomes = [],
  youtubeVideoId = "",
}) {
  const [darkMode, setDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-700 min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Dark Mode Toggle */}
      <button
        aria-label="Toggle Dark Mode"
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-105 transform transition"
      >
        {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
      </button>

      {/* Hero Header */}
      <header className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-indigo-900/80 to-blue-900/90" />
        <div className="relative z-10 px-8 py-32 text-center">
          <Calendar className="w-8 h-8 mx-auto mb-4 text-white" />
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-gray-100"
          >
            {date}
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        {/* Basic Info Grid */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            { icon: Clock, label: "Duration", value: duration },
            { icon: BookOpen, label: "Format", value: format },
            { icon: Target, label: "Domain", value: domain },
            { icon: Users, label: "Audience", value: targetAudience },
            { icon: Award, label: "Prerequisites", value: prerequisites || "None" },
            { icon: Lightbulb, label: "Keywords", value: keywords },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center mb-4 space-x-3">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {item.label}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                {item.value}
              </p>
            </div>
          ))}
        </motion.section>

        {/* Abstract & Learning Outcomes */}
        <Section icon={BookOpen} label="Abstract" isAlternate content={abstract} />
        <Section icon={Target} label="Learning Outcomes" content={learningOutcomes} />

        {/* Speakers Section: bios always visible + links */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl shadow-lg"
        >
          <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-900 dark:text-gray-100">
            {speakers.length > 1 ? "Speakers" : "Speaker"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {speakers.map((speaker, i) => {
              const bio = speakerBiographies[i] || "";
              const linkedIn = speakerLinkedIns[i] || null;
              const website = speakerWebsites[i] || null;
              return (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md hover:shadow-2xl transition"
                >
                  <div className="flex items-center mb-4 space-x-4">
                    <Image
                      src={`/avatars/${speaker.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                      alt={speaker}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                        {speaker}
                      </h3>
                      <div className="flex space-x-4 mt-1">
                        {linkedIn && (
                          <a
                            href={linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-blue-600 hover:underline"
                          >
                            <Linkedin className="w-5 h-5" />
                            <span>LinkedIn</span>
                          </a>
                        )}
                        {website && (
                          <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-indigo-600 hover:underline"
                          >
                            <Globe className="w-5 h-5" />
                            <span>Website</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  {bio && (
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                      {bio}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Key Learning Outcomes */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg"
        >
          <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-900 dark:text-gray-100">
            Key Takeaways
          </h2>
          <div className="space-y-4">
            {keyLearningOutcomes.map((outcome, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex items-start gap-3 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-300 mt-1" />
                <p className="text-gray-800 dark:text-gray-200">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Video Preview */}
        {youtubeVideoId && (
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-lg"
          >
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="Tutorial Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
}

function Section({ icon: Icon, label, content, isAlternate = false }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 ${
        isAlternate
          ? "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700"
          : "bg-white dark:bg-gray-800"
      }`}
    >
      <div className="flex items-center mb-6 space-x-4">
        <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          {label}
        </h2>
      </div>
      <div className="prose dark:prose-invert">
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
    </motion.div>
  );
}
