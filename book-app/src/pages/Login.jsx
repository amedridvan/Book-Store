import img2 from '../images/books.jpg'
import Footer from "./footer"
export default function  App () {
    return(
        <>
       
<div class="flex h-screen ">
  <div class="hidden  lg:flex flex-1  text-black">
      <img src={img2} alt="" className=' ' />
  </div>

  <div class=" bg-gray-100 lg:w-1/2 flex items-center justify-center">
    <div class="max-w-md w-full p-6">
      <h1 class="text-3xl font-semibold mb-6 text-black text-center">Sign In</h1>
     
      
      <form action="#" method="POST" class="space-y-4">

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="text" id="email" name="email" class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
        </div>
        <div>
          <button type="submit" class="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign Up</button>
        </div>
      </form>
      <div class="mt-4 text-sm text-gray-600 text-center">
        <p>did you havent  an account? <a href="/Sigin Up" class="text-black hover:underline">Sign up here</a>
        </p>
      </div>
    </div>
  </div>
</div>
        </>
    )
}