export function CoursesListSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="isa-card p-4 space-y-2">
          <div className="h-3 w-24 bg-isa-cream-dark rounded" />
          <div className="h-4 w-2/3 bg-isa-cream-dark rounded" />
        </div>
      ))}
    </div>
  );
}