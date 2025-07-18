export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="flex items-center justify-center md:justify-start">
          <h2 className="text-3xl font-extrabold">GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED</h2>
        </div>

        <nav className="flex justify-center">
          <ul className="space-y-4 md:space-y-0 md:flex md:space-x-10 text-lg">
            <li><a href="#" className="hover:text-yellow-300 ">Company</a></li>
            <li><a href="#" className="hover:text-yellow-300 ">Services</a></li>
            <li><a href="#" className="hover:text-yellow-300 ">Insights</a></li>
            <li><a href="#" className="hover:text-yellow-300 ">Contact</a></li>
            <li><a href="#" className="hover:text-yellow-300 ">Products</a></li>
          </ul>
        </nav>

        <div className="flex justify-center md:justify-end space-x-4">
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-yellow-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="currentColor">
              <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-yellow-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="currentColor">
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
            </svg>
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-yellow-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="currentColor">
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-yellow-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="currentColor">
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3-2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="border-t border-white mt-8"></div>

      <div className="max-w-7xl mx-auto my-20 grid grid-cols-1 lg:grid-cols-3 gap-4 opacity-80  text-gray-300">
        <p className="text-center lg:text-left">© 2025 GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED Construction Company. All rights reserved.</p>
        <p className="text-center">GATIH STRUCTIFORM ENGINEERS PRIVATE LIMITED is an Equal Opportunity Employer - race, color, religion, sex, sexual orientation, gender identity, national origin, disability, status as a protected veteran, or other characteristics protected by applicable law.</p>
        <div className="flex justify-center lg:justify-end space-x-4">
          <a href="#fraud" className="hover:text-yellow-300 transition">Fraud Alert</a>
          <a href="#privacy" className="hover:text-yellow-300 transition">Privacy Policy</a>
          <a href="#cookies" className="hover:text-yellow-300 transition">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}

