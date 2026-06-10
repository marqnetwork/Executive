export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0f12] text-white">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-[#00f2ea] border-t-transparent" />
        <p className="text-sm text-white/60">Loading dashboard...</p>
      </div>
    </div>
  );
}
