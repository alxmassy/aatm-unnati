import Image from 'next/image';

type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  bgColor: string; // e.g., 'bg-blue-50'
  borderColor: string; // e.g., 'border-blue-200'
};

export const Card = ({ imageSrc, title, description, linkText, linkHref, bgColor, borderColor }: CardProps) => {
  return (
    <div className={`p-5 rounded-xl shadow-md border ${borderColor} ${bgColor} flex items-center gap-5`}>
      <div className="flex-shrink-0 w-32 h-32 relative rounded-lg overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title} 
          layout="fill" 
          objectFit="cover" // This ensures the image covers the container
        />
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-700 mt-1">{description}</p>
        <a href={linkHref} className="text-indigo-600 font-semibold mt-3 inline-block hover:underline">
          {linkText}
        </a>
      </div>
    </div>
  );
};