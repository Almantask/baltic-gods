export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-amber-400 mb-4">Baltic Gods</h3>
            <p className="text-sm">
              Exploring and preserving the ancient mythology of the Baltic region.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-amber-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition">About</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Contributors</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Sources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-amber-400 mb-4">Connect</h3>
            <p className="text-sm">
              Help us expand our database by reporting new locations and artifacts.
            </p>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Baltic Gods Project. Open source under MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
