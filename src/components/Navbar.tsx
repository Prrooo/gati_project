import Link from "next/link";

const menuItems = [
  {
    label: "Services",
    desp: "adslfjaslfdjlkajfljsfkasdjfklasjdflkajsdfjjjjjjjjjjjjjjjlakdsfjkasjdfljasdfkjdlfjljdflkajdfjaldjflkj",
    href: "#",
    submenu: [
      { label: "test", href: "#" },
      { label: "test", href: "#" },
      { label: "test", href: "#" },
    ],
  },
  {
    label: "About",
    href: "#",
    desp: "adslfjaslfdjlkajfljsfkadsjflajdflkajsdfkajsdfjakdjfksjflksajdfjasdfsahgasdfksajfajdfjadfljalkdjflk",
    submenu: [
      { label: "Overview", href: "about" },
      { label: "Vision & Mission", href: "VisionMission" },
      { label: "Executive Profile", href: "#" },
    ],
  },
  {
    label: "Services",
    href: "#",
    desp: "adslfjaslfdjlkajfljsfkasljdfkajsdf akdjfkasdfasdfjasdkf asldfjka dfjaskdfjadkfasjdflakjdffajdfflajdfkajsdfkaj",
    submenu: [
      { label: "test", href: "#" },
      { label: "test", href: "#" },
      { label: "test", href: "#" },
    ],
  },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between px-[3vw] py-[2vw]">
      <div>
        <Link href="/">
          <div>MyLogo</div>
        </Link>
      </div>

      <div className="flex gap-[2vw]">
        {menuItems.map((item) => (
          <div key={item.label} className="relative group">
            <Link href={item.href}>
              <div className="px-3 py-2">{item.label}</div>
            </Link>
            {item.submenu.length > 0 && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
                {item.submenu.map((sub) => (
                  <Link key={sub.label} href={sub.href}>
                    <div className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                      {sub.label}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
