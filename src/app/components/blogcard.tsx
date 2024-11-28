import Image, { StaticImageData } from 'next/image';

export default function Blog({
  className = "",
  imageSrc,
  date,
  heading,
  paragraph
}: {
  className?: string;
  imageSrc: string | StaticImageData; 
  date: string;
  heading: string;
  paragraph: string;
}) {
  return (
    <div className={`blog-post ${className}`}>
      {/* Image */}
      <div className="blog-image  lg:ml-[60%] -mt-[15%]"  >
        <Image
          src={imageSrc}
          alt={heading}
          className="w-[5%] object-cover "
          width={100} 
          height={100} 
        />
      </div>

      {/* Post Content */}
      <div className="blog-content mt-4 " >
        <p className="text-red-500 text-sm ml-[38%] -mt-[25%]">{date}</p>
        <h2 className="text-[1.2rem] font-bold mt-2 ml-[38%]">{heading}</h2>
        <p className="mt-2 ml-[38%]">{paragraph}</p>
      </div>
    </div>
  );
}
