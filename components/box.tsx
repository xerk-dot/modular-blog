interface TweetProps {
  content: string;
  date: string;
  inverted?: boolean;
}

const Tweet: React.FC<TweetProps> = ({ content, date, inverted = false }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div 
      className={`p-6 rounded-lg mb-4 border-2 border-black ${
        inverted ? 'bg-white text-black' : 'bg-black text-white'
      }`}
    >
      <p className="text-lg mb-2">{content}</p>
      <span className="text-sm opacity-75">{formattedDate}</span>
    </div>
  );
};

export default Tweet; 