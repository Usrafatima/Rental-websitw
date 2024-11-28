import Image, { StaticImageData } from 'next/image';

export default function CarCard({
  className = '', 
  description,
  price,
  house,
  seller,
  imageSrc2,
  imageSrc,
}: {
  className?: string; 
  description: string;
  price: string;
  house: string;
  seller: string;
  imageSrc2: string | StaticImageData;  
  imageSrc: string | StaticImageData;  
}) {
  return (
<div
  className={`bg-white border h-auto sm:h-[400px] w-full sm:w-[50%] xl:w-[30%] border-gray-200 rounded-lg shadow-md p-4 ${className}`}
>
  <Image
    src={imageSrc}
    alt={house}
    className="w-full h-40 object-cover rounded-lg mb-4"
    width={400}
    height={160}
  />
  <p className="text-lg font-semibold text-orange-500 mb-2">{price}</p>
  <h3 className="text-lg font-bold text-gray-800 mb-2">{house}</h3>
  <p className="text-sm text-gray-600 mb-4">{description}</p>
  <div className="flex items-center space-x-2">
    <Image
      src={imageSrc2}
      alt={seller}
      className="w-10 h-10 rounded-full border border-gray-300"
      width={40}
      height={40}
    />
    <p className="text-sm font-medium text-gray-700">{seller}</p>
    <div className="px-7">
      <button className="border-2 px-3 bg-red-500 text-white">See details</button>
    </div>
  </div>
</div>


  );
}

  