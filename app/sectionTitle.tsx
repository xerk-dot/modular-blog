import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  weight: ['800'],
  subsets: ['latin'],
});

interface SectionTitleProps {
    title: string;
    exponent: string | number;
  }
  
  export default function SectionTitle({ title, exponent }: SectionTitleProps) {
    return (
      <div className={`flex items-center ${jetBrainsMono.className}`}>
        <span>{title}</span>
        <span className="text-orangered text-lg translate-y-[-10px] ml-3">[{exponent}]</span>
      </div>
    );
  }