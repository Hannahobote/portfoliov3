import { Link } from 'react-router-dom';

export default function Mynavbar() {


  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-xl">Imhannao</span>
          </Link>

          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" class="mr-5 hover:text-gray-900">Home</Link>
            <Link to="/projects" class="mr-5 hover:text-gray-900">Projects</Link>
          </nav>
        </div>
      </header>
    </>

  )
}
