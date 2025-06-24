"use client";

// const codeSnippets = [
//   {
//     text: `from agent_framework import ReasoningAgent

// class CodeReviewAgent:
//     def analyze_pr(self, diff):
//         issues = self.detect_patterns(diff)
//         suggestions = self.suggest_improvements()
//         return self.format_review(issues, suggestions)`,
//     top: "20%",
//     left: "5%",
//   },
//   {
//     text: `const agent = new SoftwareAgent({
//   codeGeneration: true,
//   testing: true,
//   debugging: true
// });
// await agent.processRequirements(userStory);`,
//     top: "15%",
//     left: "70%",
//   },
//   {
//     text: `async function orchestrateAgents() {
//   const swarm = new AgentSwarm();
//   return await swarm.collaborate(complexTask);
// }`,
//     top: "65%",
//     left: "10%",
//   },
//   {
//     text: `interface AgentOrchestrator {
//   delegate(task: Task): Promise<AgentResult>;
//   coordinate(agents: Agent[]): Workflow;
//   monitor(execution: ExecutionContext): void;
// }`,
//     top: "60%",
//     left: "75%",
//   },
// ];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen hero-section-bg text-white flex flex-col items-center justify-center overflow-hidden px-6 py-16">

      {/* Background Animated Code */}
      {/* {codeSnippets.map((snippet, idx) => (
        <motion.pre
          key={idx}
          initial={{ opacity: 0.5, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 8 + idx,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute font-mono text-sm whitespace-pre-wrap z-0 pointer-events-none blur-sm"
          style={{
            top: snippet.top,
            left: snippet.left,
            width: "300px",
          }}
        >
          {snippet.text}
        </motion.pre>
      ))} */}

      {/* Tag */}
      <div className="relative z-10 text-sm bg-indigo-600 px-4 py-1 rounded-full font-semibold mb-4">
        1st EDITION
      </div>

      {/* Title */}
      <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight">
        Winter School on AI-Infused Software Engineering
        <br />
        <span className="text-yellow-400">Research and Practice</span>
        <br />
        {/* <span className="text-2xl font-medium text-gray-200">
          for Software Engineering
        </span> */}
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 mt-4 text-black font-bold bg-white/50 px-4 py-2 rounded-full flex items-center gap-2 tracking-wide text-2xl">
        AISE 2026
      </p>

      {/* Info Badges */}
      <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-3 text-sm font-medium">
        <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
          📅 7-10 January
        </span>
        <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
          📍 Dhirubhai Ambani University , Gandhinagar
        </span>
        <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
          🧑‍🤝‍🧑 In-Person Event
        </span>
      </div>

      {/* Feature Tags */}
      <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-3 text-xs font-medium">
        {["AI-Powered Learning", "Expert Speakers", "Hands-on Sessions", "Grants"].map((item) => (
          <span
            key={item}
            className="bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition"
          >
            {item}
          </span>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#Registration"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 rounded-full text-white font-semibold shadow hover:scale-105 transition"
        >
          🚀 Register Now
        </a>
      </div>
    </section>
  );
}
