import Image from "next/image";
import { Tech } from "@/types/tech";

export default function SingleTech(props)
{
  const {title, techs} = props;
    
  return (
    <>
      <p className="text-xl my-3 min-h-6">{title}</p>
      <div className="h-0.5 w-full bg-gray-300"></div>
      <ul className="flex">
        {
          techs && techs.map((subtech: Tech) => (
            <div key={subtech.src}>
              <Image height={90} width={90} src={subtech.src} className="ring ring-gray-300 outline-none p-4 m-2 rounded-xl" alt={`${subtech.info}.png`}/>
              <span className="block text-center">{subtech.info}</span>
            </div>
          ))
        }
      </ul>

    </>
  )
}