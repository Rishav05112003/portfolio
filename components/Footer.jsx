export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Rishavdeep Maity. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="mailto:rishavdeep.skills@gmail.com" className="hover:text-white transition">Email</a>
          <a href="https://www.linkedin.com/in/rishavdeep-maity-314b61256/" target="_blank" className="hover:text-white transition">LinkedIn</a>
          <a href="https://www.instagram.com/rishav.213.m/" target="_blank" className="hover:text-white transition">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=100076734696236" target="_blank" className="hover:text-white transition">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
