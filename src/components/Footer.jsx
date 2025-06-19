export default function Footer() {
  return (
    <footer className="text-center py-8 text-sm text-gray-600 bg-white">
      <p className="mb-1">
        © 2025 LLM-Based Agents for SE Summer School | University of Extremadura
      </p>
      <p className="mb-4">
        Organized by <span className="font-medium">i3Lab (Quercus Group)</span> & INTIA
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
        <p>
          Developed and Managed by{" "}
          <a
            href="https://portfolio-rahul-tiwari.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Rahul Tiwari
          </a>
        </p>
       
      </div>
    </footer>
  );
}
