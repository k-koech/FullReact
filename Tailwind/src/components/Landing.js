import jd from "../images/jd.jpg"
import img2 from "../images/img2.jpg";
import img4 from "../images/img4.jpg";
import img3 from "../images/img3.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import hero from "../images/hero-img.png";

export default function Landing({name, id, data, arr}) 
{
  const people = [
    {
      name: 'Calvin Hawkins',
      email: 'calvin.hawkins@example.com',
      image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]
 

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-lg underline">Portfolio</h1>
      <ul className="divide-y divide-gray-600">
        <li>My name is Kelvin</li>
        <li>My name is Kelvin</li>
      </ul>

      <div className="xs:colums-1 sm:columns-3 md:columns-4 gap-x bg-light-900 ...">
        {/* <img className="w-full aspect-video ..." src={jd} /> */}
        <img className="w-full aspect-square hover:bg-sky-900" src={jd} />
        <img className="w-full aspect-square hover:bg-sky-900" src={img2} />
        <img className="w-full aspect-square hover:bg-sky-900" src={img3} />
        <img className="w-full aspect-square hover:bg-sky-900" src={img4} />
        <img className="w-full aspect-square hover:bg-sky-900" src={img5} />
        <img className="w-full aspect-square hover:bg-sky-900" src={img6} />
        <img className="w-full aspect-square hover:bg-sky-900" src={img7} />
      </div>


      <div class="columns-2 mt-20 gap-x h-[80vh] bg-sky-2dsd00">
          <div className="p-10 h-full flex justify-center items-center">
             <img className="w-full aspect-square hover:bg-sky-900" src={hero} />
          </div>
          <div className="h-full flex items-center justify-center">
            <div className="h-fit px-5 font-sans">
              <h2 className="text-3xl">Maybe we can live without...</h2>
              <button className="bg-red-600 hover:bg-red-800 text-sm text-white mt-5 px-5 py-2 rounded-r-full rounded-tl-full">Get Started</button>
            </div>
            
          </div>
      </div>
    </div>
  )
}

