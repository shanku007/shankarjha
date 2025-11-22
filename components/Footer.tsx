import SocialLinks from "@/components/SocialLinks";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 mt-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Shankar Jha
            </h3>
            <p className="text-slate-400 text-sm">
              Engineering Lead & Product Builder
            </p>
            <p className="text-slate-500 text-xs mt-1">
              <ObfuscatedEmail className="hover:text-slate-400 transition-colors" />
            </p>
          </div>
          <SocialLinks />
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700/50 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Shankar Jha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

