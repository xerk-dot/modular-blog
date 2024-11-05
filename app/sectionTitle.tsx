import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '800'], // Added 400 weight for non-bold text
  subsets: ['latin'],
});

interface SectionTitleProps {
    title: string;
    exponent: string | number;
    align?: 'left' | 'right';
  }
  
  export default function SectionTitle({ title, exponent, align = 'left' }: SectionTitleProps) {
    return (
      <div className={`flex items-center ${jetBrainsMono.className} ${align === 'right' ? 'justify-end' : ''}`}>
        <span className="text-2xl font-extrabold">{title}</span>
        <span className="text-orangered text-lg translate-y-[-10px] ml-3 font-normal">[{exponent}]</span>
      </div>
    );
  }