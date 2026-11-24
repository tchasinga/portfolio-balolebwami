export default function Footer() {
  return (
    <footer className="w-full px-6 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-3 text-sm text-slate-500 sm:flex-row sm:items-center dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Tchasinga Balolebwami Jack. All rights reserved.</p>
        <p>Nairobi, Kenya</p>
      </div>
    </footer>
  );
}
