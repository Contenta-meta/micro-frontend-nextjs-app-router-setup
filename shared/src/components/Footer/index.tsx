import React from "react";
import { cn } from "../../utils/cn";
import "../../styles/globals.css";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer 
      className={cn(
        "bg-gray-800 text-white p-4 mt-auto shadow-md",
        className
      )}
      {...props}
    >
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-gray-300">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
              <li><a href="#" className="hover:text-gray-300">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-300">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} Guesty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
