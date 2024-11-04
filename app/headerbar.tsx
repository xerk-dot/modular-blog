'use client';
import { useState, useEffect } from "react";
import { JetBrains_Mono } from 'next/font/google';

const jetbrains = JetBrains_Mono({ subsets: ['latin'] });

export function HeaderBar() {
  const [color, setColor] = useState("text-orangered");
  const [formattedDate, setFormattedDate] = useState("");
  // Add new state for menu visibility
  const [isMenuVisible, setIsMenuVisible] = useState(true);


  useEffect(() => {
    const colors = ["text-orangered", "text-orange"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setColor(colors[index]);
    }, 400); // Change color every 400ms
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const date = new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "short",
    });
    setFormattedDate(date);
  }, []);


  return (
    <>
      <header className="flex flex-col mb-5 md:mb-10 w-full border-t border-b border-white">
        <div className="flex gap-2 items-center m-3">
          <button 
            onClick={() => setIsMenuVisible(!isMenuVisible)}
            className={`transition-colors duration-500 ${color}`}
          >[=]</button>
          <span className={`ml-2 ${jetbrains.className}`}>{formattedDate}</span>
        </div>
        
        <nav className={`font-mono text-xs px-3 pb-3 ${isMenuVisible ? 'block' : 'hidden'}`}>
          <div className="flex gap-4">
            <span>pages</span>
            <span>featured</span>
            <span>gooners</span>
            <span className="ml-auto">stats</span>
          </div>
        </nav>
      </header>
    </>
  );
}