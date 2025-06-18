import SectionHeader from "./SectionHeader";

export default function AboutSectionHeader({
  title,
  subtitle,
  description,
  highlight,
}) {
  return (
    <div className="text-center space-y-3 mb-12">
      <SectionHeader title={title} />
      {subtitle && (
        <p className="text-sm text-gray-600 font-semibold">{subtitle}</p>
      )}
      {description && (
        <p className="text-base text-gray-700 max-w-3xl mx-auto">
          {description}
        </p>
      )}
      {highlight && (
        <p className="text-sm text-yellow-600 font-medium">⭐ {highlight}</p>
      )}
    </div>
  );
}
