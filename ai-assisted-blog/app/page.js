

export default function Home() {
  return (
    <>
    
  <main className="">
 

<section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
      <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
        <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
          A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary">Tailwind CSS
</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
        </p>
        <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
          <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
            <input type="search" name="query" placeholder="Search Components" required className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />
            <button type="submit" className="flex items-center bg-violet-500 justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
        <Image src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" width={500} height={500} />
      </div>
    </section>

    <section className="container px-4 py-10 mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose a plan that fits your needs.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Basic Plan */}
        <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
          <p className="mb-4 text-gray-500 dark:text-gray-300">For individuals just getting started.</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">$10</span>
            <span className="text-base font-medium text-gray-500 dark:text-gray-300">/month</span>
          </div>
          <ul className="mb-6 space-y-4 text-left">
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Feature 1
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Feature 2
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Feature 3
            </li>
          </ul>
          <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Get Started</button>
        </div>

        {/* Pro Plan */}
        <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Pro</h3>
          <p className="mb-4 text-gray-500 dark:text-gray-300">For professionals who need more features.</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">$30</span>
            <span className="text-base font-medium text-gray-500 dark:text-gray-300">/month</span>
          </div>
          <ul className="mb-6 space-y-4 text-left">
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Feature 1
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Feature 2
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Feature 3
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Feature 4
            </li>
          </ul>
          <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Get Started</button>
        </div>

        {/* Enterprise Plan */}
        <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Enterprise</h3>
          <p className="mb-4 text-gray-500 dark:text-gray-300">For large organizations with advanced needs.</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">$50</span>
            <span className="text-base font-medium text-gray-500 dark:text-gray-300">/month</span>
          </div>
          <ul className="mb-6 space-y-4 text-left">
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Feature 1
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Feature 2
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Feature 3
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Feature 4
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Feature 5
            </li>
          </ul>
          <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Get Started</button>
        </div>
      </div>
    </section>



    <section className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://images.pexels.com/photos/2169427/pexels-photo-2169427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Reviewer"
              />
              <div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600">Software Engineer</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
            </p>
            <div className="mt-4">
              <span className="text-yellow-500">★★★★★</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://images.pexels.com/photos/2052858/pexels-photo-2052858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Reviewer"
              />
              <div>
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-600">Product Manager</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            </p>
            <div className="mt-4">
              <span className="text-yellow-500">★★★★☆</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://images.pexels.com/photos/9955205/pexels-photo-9955205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Reviewer"
              />
              <div>
                <h3 className="text-xl font-semibold">Alice Johnson</h3>
                <p className="text-gray-600">Designer</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            </p>
            <div className="mt-4">
              <span className="text-yellow-500">★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
 


<section className="py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">"Great service and friendly staff!"</p>
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src="https://via.placeholder.com/150"
            alt="Customer"
          />
          <div>
            <p className="text-gray-900 font-bold">John Doe</p>
            <p className="text-gray-600">CEO, Company</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">"Highly recommend their services!"</p>
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src="https://via.placeholder.com/150"
            alt="Customer"
          />
          <div>
            <p className="text-gray-900 font-bold">Jane Smith</p>
            <p className="text-gray-600">Manager, Business</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">"Exceptional quality and support!"</p>
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src="https://via.placeholder.com/150"
            alt="Customer"
          />
          <div>
            <p className="text-gray-900 font-bold">Alice Johnson</p>
            <p className="text-gray-600">Director, Organization</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold">Your Company</h2>
            <p className="mt-2 text-gray-400">Providing quality services since 2020.</p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.6 8.6 0 01-2.72 1.04 4.27 4.27 0 00-7.29 3.89A12.13 12.13 0 013 4.79a4.27 4.27 0 001.32 5.7 4.24 4.24 0 01-1.94-.54v.05a4.27 4.27 0 003.42 4.18 4.27 4.27 0 01-1.93.07 4.27 4.27 0 003.99 2.97A8.56 8.56 0 012 19.54a12.07 12.07 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0024 4.56a8.5 8.5 0 01-2.54.7z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.19 8.95v-6.34h-2.46v-2.61h2.46v-1.99c0-2.43 1.48-3.76 3.64-3.76 1.04 0 1.93.08 2.19.11v2.54h-1.5c-1.18 0-1.41.56-1.41 1.38v1.81h2.82l-.37 2.61h-2.45v6.34c4.59-.89 8.19-4.54 8.19-8.95 0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.19 8.95v-6.34h-2.46v-2.61h2.46v-1.99c0-2.43 1.48-3.76 3.64-3.76 1.04 0 1.93.08 2.19.11v2.54h-1.5c-1.18 0-1.41.56-1.41 1.38v1.81h2.82l-.37 2.61h-2.45v6.34c4.59-.89 8.19-4.54 8.19-8.95 0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.19 8.95v-6.34h-2.46v-2.61h2.46v-1.99c0-2.43 1.48-3.76 3.64-3.76 1.04 0 1.93.08 2.19.11v2.54h-1.5c-1.18 0-1.41.56-1.41 1.38v1.81h2.82l-.37 2.61h-2.45v6.34c4.59-.89 8.19-4.54 8.19-8.95 0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>

  
   
  </main>
    </>
  );
}

import Image from 'next/image';






   