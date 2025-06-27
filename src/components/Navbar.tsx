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
      { label: "Executive Profile", href: "executiveprofile" },
    ],
  },
  {
    label: "Media Centre",
    href: "#",
    desp: "adslfjaslfdjlkajfljsfkasljdfkajsdf akdjfkasdfasdfjasdkf asldfjka dfjaskdfjadkfasjdflakjdffajdfflajdfkajsdfkaj",
    submenu: [
      { label: "Newsletters", href: "newsletters" },
      { label: "Awards & Recognization", href: "awards" },
    ],
  },
  {
    label: "Career",
    desp: "adslfjaslfdjlkajfljsfkasdjfklasjdflkajsdfjjjjjjjjjjjjjjjlakdsfjkasjdfljasdfkjdlfjljdflkajdfjaldjflkj",
    href: "#",
    submenu: [
      { label: "Career Segment", href: "career" },
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
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg z-50">
                {item.submenu.map((sub, idx) => (
                  <Link
                    key={`${item.label}-${sub.label}-${sub.href}-${idx}`}
                    href={sub.href}
                  >
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
