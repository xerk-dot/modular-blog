import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '800']
});

export const metadata = {
  title: 'Changelog | xerk-dot',
  description: 'History of updates and changes to xerk-dot\'s blog',
};

export default function Changelog() {
  return (
    <div className={`${jetbrains.className} max-w-2xl mx-auto`}>
      <h1 className="text-3xl font-bold mb-8">Changelog</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-orangered">2024</h2>
        
        <div className="mb-8">
          <h3 className="text-xl mb-3">March</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Added Changelog page</li>
            <li>Added About page link to navigation</li>
            <li>Implemented dark mode toggle</li>
            <li>Added animated header menu toggle</li>
            <li>Added view counter for blog posts</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-orangered">2023</h2>
        
        <div className="mb-8">
          <h3 className="text-xl mb-3">December</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Initial release of blog</li>
            <li>Implemented basic blog functionality</li>
            <li>Added post listing with date sorting</li>
            <li>Set up responsive design</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 