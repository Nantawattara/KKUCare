import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-amber-700 h-16">
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="text-white text-xl font-bold">
            แดชบอร์ด
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link href="/" className="text-white hover:text-amber-200 font-medium">
              หน้าหลัก
            </Link>
            <Link href="/reports" className="text-white hover:text-amber-200 font-medium">
              รายงาน
            </Link>
            <Link href="/dashboard" className="text-white hover:text-amber-200 font-medium">
              แดชบอร์ด
            </Link>
            {/* <Link href="/settings" className="text-white hover:text-amber-200 font-medium">
              ตั้งค่า
            </Link> */}
          </div>

          {/* User Section */}
          {/* <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">ผู้ใช้งาน</span>
            </div>
            <span className="text-white">ผู้ใช้งาน</span>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;