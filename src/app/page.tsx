"use client";

import {
  Book,
  Lock,
  Upload,
  CheckCircle,
  Mail,
  Zap,
  Database,
  Server,
  Cloud,
  Box,
  GitFork,
  TestTube,
  ArrowRight,
  Copy,
  Check,
  Package,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    title: "OpenAPI Docs",
    description: "Automatically generated Swagger docs through MagicRouter API and Zod",
    icon: Book,
  },
  {
    title: "Auth Module",
    description: "Includes Google Sign-In support for easy authentication",
    icon: Lock,
  },
  {
    title: "File Upload",
    description: "Handles file uploads with Multer and Amazon S3",
    icon: Upload,
  },
  {
    title: "Data Validation",
    description: "Zod for validation and serialization of data",
    icon: CheckCircle,
  },
  {
    title: "Type-safe Emails",
    description: "Emails managed using React Email and Mailgun",
    icon: Mail,
  },
  {
    title: "Background Jobs",
    description: "Powered by BullMQ with Redis for handling background jobs",
    icon: Zap,
  },
];

const roadmap = [
  { text: "Socket.io Support with Redis adapter", icon: Database },
  { text: "Notification Infrastructure via FCM and Novu", icon: Mail },
  { text: "Ansible Playbook for server configuration", icon: Server },
  { text: "AWS CDK Support for infrastructure", icon: Cloud },
  { text: "Monorepo Support with Turborepo", icon: GitFork },
  { text: "AWS Lambda Support", icon: Cloud },
  { text: "Cloudflare Workers Support", icon: Cloud },
  { text: "Postgres Support with Drizzle", icon: Database },
  { text: "Containerization with Docker", icon: Box },
  { text: "Kubernetes Support", icon: Server },
  { text: "CI/CD with GitHub Actions", icon: GitFork },
  { text: "Testing with Jest", icon: TestTube },
];

const TerminalLine = ({ command, delay }: { command: string; delay: number }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`terminal-line terminal-line-${delay}`}>
      <span className="text-indigo-500">$</span>
      <span className="flex-1">{command}</span>
      <button
        onClick={copyToClipboard}
        className="copy-button text-slate-400 hover:text-white transition-colors"
        title="Copy command"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <div className="gradient-blur gradient-blur-1" />
      <div className="gradient-blur gradient-blur-2" />
      <div className="gradient-blur gradient-blur-3" />

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-16 text-center relative">
        <div className="inline-block mb-12 animate-float">
          <div className="text-6xl font-bold font-mono bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 p-8 rounded-2xl text-white shadow-xl">
            {"{ TS }"}
          </div>
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          TypeScript Backend Toolkit
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
          A powerful backend toolkit designed for scalability and flexibility. 
          Equipped with modern technologies and best practices, it&apos;s the perfect starting point for your next backend project.
        </p>
        <div className="flex gap-6 justify-center flex-wrap mb-16">
          <a
            href="https://github.com/muneebhashone/typescript-backend-toolkit"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 p-[2px] rounded-full"
          >
            <div className="bg-slate-950 hover:bg-slate-900 text-white px-8 py-4 rounded-full font-medium transition-all group-hover:bg-opacity-90 flex items-center gap-2">
              View on GitHub <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
          {/* <a
            href="#get-started"
            className="group bg-gradient-to-r from-slate-800 to-slate-700 hover:from-indigo-500 hover:to-blue-500 px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a> */}
        </div>

        {/* Terminal UI */}
        <div className="max-w-4xl mx-auto terminal">
          <div className="terminal-header">
            <div className="terminal-button terminal-close" />
            <div className="terminal-button terminal-minimize" />
            <div className="terminal-button terminal-maximize" />
            <div className="flex-1 text-center text-sm text-slate-400">How to get started</div>
          </div>
          <div className="terminal-body text-left">
            <TerminalLine 
              command="git clone https://github.com/muneebhashone/typescript-backend-toolkit.git" 
              delay={1} 
            />
            <TerminalLine 
              command="cd typescript-backend-toolkit" 
              delay={2} 
            />
            <TerminalLine 
              command="docker compose up -d" 
              delay={3} 
            />
            <TerminalLine 
              command="pnpm i && pnpm run dev" 
              delay={4} 
            />
          </div>
        </div>
      </div>

      {/* Prerequisites Section */}
      <div className="container mx-auto px-4 py-24" id="get-started">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Prerequisites
        </h2>
        <p className="text-xl text-slate-300 text-center mb-16 max-w-2xl mx-auto">
          Before you begin, ensure you have the following tools installed on your system
        </p>
        <div className="max-w-3xl mx-auto prerequisites-section p-12">
          <ul className="space-y-8">
            <li className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Box className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Docker + Docker Compose</h3>
                <p className="text-slate-300">Required for running Redis and other services</p>
              </div>
            </li>
            <li className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">PNPM</h3>
                <p className="text-slate-300">Fast, disk space efficient package manager</p>
              </div>
            </li>
            <li className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Node.js 20+ (LTS)</h3>
                <p className="text-slate-300">Latest LTS version recommended for best performance</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold mb-16 text-center">What&apos;s Included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group gradient-border feature-card p-8 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-300 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold mb-16 text-center">Roadmap</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className="group gradient-border p-6 opacity-0 animate-fade-in hover:scale-[1.02] transition-transform"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-lg">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 mt-24 text-center border-t border-slate-800">
        <p className="text-slate-400 text-lg">
          Licensed under MIT - Feel free to contribute to this project!
        </p>
      </footer>
    </div>
  );
}
