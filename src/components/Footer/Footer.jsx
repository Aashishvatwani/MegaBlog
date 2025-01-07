import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="relative bottom-0 w-full bg-gray-900 text-gray-300">
      <section className="py-10">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="-m-6 flex flex-wrap">
            {/* Logo and Copyright */}
            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
              <div className="flex h-full flex-col justify-between">
                <div className="mb-4 inline-flex items-center">
                  <Logo width="100px" />
                </div>
                <div>
                  <p className="text-sm">
                    &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-widest mb-6 text-xs font-semibold uppercase text-gray-400">
                  Company
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className="text-base font-medium hover:text-blue-400"
                      to="/"
                    >
                      Features
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-base font-medium hover:text-blue-400"
                      to="/"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-base font-medium hover:text-blue-400"
                      to="/"
                    >
                      Affiliate Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-base font-medium hover:text-blue-400"
                      to="/"
                    >
                      Press Kit
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Support Links */}
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-widest mb-6 text-xs font-semibold uppercase text-gray-400">
                  Support
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className="text-base font-medium hover:text-blue-400"
                      to="/"
                    >
                      Account
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-base font-medium hover:text-blue-400"
                      to="/"
                    >
                      Help
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-base font-medium hover:text-blue-400"
                      to="/"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-base font-medium hover:text-blue-400"
                      to="/"
                    >
                      Customer Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Legal Links */}
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
              <div className="h-full">
                <h3 className="tracking-widest mb-6 text-xs font-semibold uppercase text-gray-400">
                  Legals
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className="text-base font-medium hover:text-blue-400"
                      to="/"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-base font-medium hover:text-blue-400"
                      to="/"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-base font-medium hover:text-blue-400"
                      to="/"
                    >
                      Licensing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
