export default function SectionHeader({ title }) {
  return (
    <div className="text-center my-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{title}</h2>
      <div className="mt-2 flex justify-center space-y-1 flex-col items-center">
        <div className="w-24 h-1 bg-indigo-600 rounded-full" />
        <div className="w-12 h-1 mt-1 bg-indigo-400 rounded-full" />
      </div>
    </div>
  );
}
