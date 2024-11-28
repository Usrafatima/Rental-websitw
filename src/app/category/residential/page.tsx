import Card from '../../components/card';
import image from '../../public/image2 26.png';
import Ellipse from '../../public/Ellipse 38.png';
export default function Residential(){
    return(
        <div className=' flex gap-5 ml-[35%] mt-[10%] my-10'>
    <Card
          imageSrc={image}
          price="85,000 LKR / Month"
          house="Luxury Villa in Rego Park"
          description="5 Bedrooms | 2 Bathrooms | 2500 Square FT"
          seller="Anne Liza"
          imageSrc2={Ellipse}
        />
        <Card
          imageSrc={image}
          price="85,000 LKR / Month"
          house="Luxury Villa in Rego Park"
          description="5 Bedrooms | 2 Bathrooms | 2500 Square FT"
          seller="Anne Liza"
          imageSrc2={Ellipse}
        />
        </div>
    )
}