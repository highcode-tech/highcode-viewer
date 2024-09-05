import Image from "next/image";
import { Tech } from "@/types/tech";

export default function SingleTech(props)
{
  const {title, techs} = props;
    
  return (
    <>
      <p className="text-xl my-3 min-h-6">{title}</p>
      <div className="h-0.5 w-full bg-gray-300"></div>
      <div className="grid grid-cols-3 items-center">
        {
          techs && techs.map((subtech: Tech) => (
            <div key={subtech.src} className="m-auto">
              <Image height={80} width={80} src={subtech.src} className="ring ring-gray-300 outline-none p-2 mx-auto my-2 rounded-xl" alt={`${subtech.info}.png`}/>
              <span className="block text-center">{subtech.info}</span>
            </div>
          ))
        }
      </div>

    </>
  )
}