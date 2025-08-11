export default function Footer() {
  return (
    <footer className="bg-[#060010] text-cyan-100 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
