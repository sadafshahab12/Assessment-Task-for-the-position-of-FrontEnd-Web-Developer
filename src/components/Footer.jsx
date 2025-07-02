import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-2 rounded-tl-2xl rounded-tr-2xl">
      <div className="border-2 border-secondary p-2 rounded-2xl">
        <div className="border-3 border-primary py-10 px-6 rounded-2xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h2 className="text-2xl font-bold text-blue-400">ConnectDev</h2>
              <p className="mt-3 text-sm text-gray-400">
                Empowering developers and users to create the next era of
                technology.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Explore</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/get-started" className="hover:text-white">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white">
                    Docs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact / Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Stay Connect</h3>
              <p className="text-sm text-gray-400 mb-3">
                Get updates and news:
              </p>
              <form className="flex flex-col items-center gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="input pl-4"
                />
                <button className="auth-button shadow-sm border border-primary ">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ConnectDev. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
