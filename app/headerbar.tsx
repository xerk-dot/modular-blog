'use client';
import { useState, useEffect } from "react";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '800']
});

export function HeaderBar() {
  const [color, setColor] = useState("text-orangered");
  const [formattedDate, setFormattedDate] = useState("");
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
    const date = new Date();
    const formattedDateParts = [
      date.getDate(),
      date.toLocaleString('en-GB', { month: 'long' }),
      date.getFullYear(),
      date.toLocaleString('en-GB', { weekday: 'short' }).toUpperCase()
    ];
    setFormattedDate(formattedDateParts.join(' '));
  }, []);

  return (
    <>
      <header className={`${jetbrains.className} flex flex-col mb-5 md:mb-10 w-full border-t border-b border-white`}>
        <div className="flex gap-2 items-center m-3 text-sm">
          <button 
            onClick={() => setIsMenuVisible(!isMenuVisible)}
            className={`transition-colors duration-500 ${color} text-sm`}
          >[=]</button>
          <span className="ml-2 text-sm">{formattedDate}</span>
        </div>
        <nav className={`text-xs px-3 pb-3 ${isMenuVisible ? 'block' : 'hidden'}`}>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span>Pages</span>
              <a href="/about" className="text-orangered hover:underline">About Me</a>
              <a href="/archive" className="text-orangered hover:underline">Archive</a>
              <a href="/changelog" className="text-orangered hover:underline">Changelog</a>
              <a href="/resources" className="text-orangered hover:underline">Resources</a>
              <a href="/about-site" className="text-orangered hover:underline">About Site</a>
            </div>
            <div className="flex flex-col">
              <span>Featured</span>
              <a href="/calendar" className="text-orangered hover:underline">Calendar</a>
              <a href="/messages" className="text-orangered hover:underline">Community Messages</a>
              <a href="/guides" className="text-orangered hover:underline">Guides</a>
              <a href="/favorites" className="text-orangered hover:underline">Favorites</a>
              <a href="/tags" className="text-orangered hover:underline">All Tags</a>
            </div>
            <div className="flex flex-col">
              <span>Photos</span>
              <a href="/random-photo" className="text-orangered hover:underline">Random Photo</a>
              <a href="/photos" className="text-orangered hover:underline">All Photos</a>
              <span className="mt-2">Interactions</span>
              <a href="/likes" className="text-orangered hover:underline">My Likes</a>
              <a href="/comments" className="text-orangered hover:underline">My Comments</a>
            </div>
            <div className="flex flex-col text-right text-white">
              <span>Stats</span>
              <span>News Daily: ~142.8</span>
              <span>News Total: 857</span>
              <span>Readers Qtly: 12.4K</span>

              <span className="mt-2 text-orangered hover:underline">Acknowledgements</span>
              
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}