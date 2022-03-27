import Doodle from "~/random/doodle";

export default function Home() {
  return (
    <div className="w-full min-h-screen h-screen flex flex-col bg-slate-900">
      <div className="flex-grow flex flex-col base-element">
        <Doodle/>
        <div className="flex-grow flex flex-col relative bg-gradient-to-b from-slate-900 to-slate-600 forefront-element">
          <div className="flex-grow">
            <div className=""> 
              <div className="flex items-center space-x-2 absolute w-full -mt-12 z-40 justify-center">
                <svg className="lg:h-24 lg:w-24 md:h-20 md:w-20 w-12 h-12" viewBox="0 0 228 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M85.3624 180.258C66.3294 180.297 48.2909 176.754 32.5196 165.724C11.5674 151.081 -0.534492 131.402 0.430083 105.023C0.867622 93.157 4.82534 82.1873 9.33 71.3768C16.8676 53.2798 27.4481 37.1935 41.5488 23.5859C54.4761 11.1131 70.1579 3.7071 87.7489 0.680969C104.743 -2.24561 118.506 4.47354 129.534 16.8767C142.173 31.0816 151.142 47.4764 157.467 65.4739C163.652 83.0832 164.179 100.862 160.868 118.959C159.824 124.702 157.347 129.759 153.081 133.86C151.48 135.393 149.75 136.429 147.493 135.662C145.086 134.846 143.824 132.945 143.654 130.546C143.495 128.306 143.833 126.036 143.843 123.787C143.873 112.588 144.947 101.26 143.625 90.2304C141.258 70.5407 133.064 52.9015 120.554 37.4922C116.666 32.7041 112.042 28.4138 107.309 24.4221C100.776 18.8974 93.0491 17.9319 84.8055 19.8332C70.1678 23.1977 57.9764 30.6934 47.5351 41.3445C32.7582 56.4055 21.5712 73.7061 18.22 94.7099C14.2125 119.825 22.317 141.087 42.8316 156.606C54.5954 165.505 68.6265 167.665 83.1249 167.864C96.1218 168.044 108.572 165.107 121.131 162.479C127.485 161.155 133.929 160.05 140.383 159.413C151.043 158.368 158.819 163.027 164.04 172.334C165.75 175.38 167.769 178.287 169.947 181.014C171.637 183.134 174.014 183.383 176.221 181.681C180.935 178.048 185.867 174.623 190.123 170.502C193.673 167.068 197.333 165.804 202.096 166.491C206.531 167.128 211.045 167.237 215.51 167.765C218.444 168.113 221.387 168.611 224.221 169.397C226.439 170.015 227.99 171.677 227.911 174.186C227.831 176.833 226.001 178.217 223.704 178.894C217.38 180.745 210.886 181.054 204.363 180.447C202.394 180.258 200.893 180.526 199.441 181.89C196.935 184.239 194.349 186.509 191.694 188.679C190.163 189.933 188.522 191.118 186.772 192.014C175.257 197.937 165.979 196.234 157.387 186.519C155.309 184.16 153.41 181.572 151.838 178.844C149.223 174.325 145.454 172.672 140.462 173.419C131.612 174.733 122.802 176.256 113.922 177.351C104.425 178.516 94.8788 179.302 85.3624 180.258Z" fill="#FB7185"/>
                </svg>

                <h1 className="title font-semibold lg:text-9xl md:text-8xl text-6xl text-slate-50 text-center">Scrible</h1>
              </div>
              <p className="font-semibold lg:text-3xl md:text-2xl text-xl text-center lg:pt-24 md:pt-20 pt-8 text-white">Your notepad <span className="underline decoration-wavy decoration-4 decoration-red-400 italic">superchaged</span>.</p>
            </div>
            <div className="flex justify-center pt-12 font-semibold text-xl">
              <div className="flex ring-2 ring-white p-1 rounded-lg">
                <input className="apperance-none font-semibold w-full bg-transparent text-white placeholder:text-white focus:outline-none px-4 py-2" placeholder="Here's my email!"/>
                <div className="flex cursor-pointer hover:bg-slate-100 justify-center items-center space-x-2 px-4 py-1.5 bg-white rounded-lg text-slate-900 whitespace-nowrap">Join the Waitlist</div>
              </div>
            </div>
          </div>
          <div className="w-full text-xs p-4 italic flex justify-start items-center space-x-2 font-semibold text-white">
            <svg className="h-5 w-5 text-rose-400" viewBox="0 0 225 170" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.9559 106.152C30.657 106.272 31.98 106.441 33.3031 106.451C51.9151 106.67 70.5372 106.849 89.1492 107.078C93.0387 107.128 96.9282 107.187 100.798 107.546C103.335 107.785 104.588 107.088 105.623 104.599C107.532 100.03 109.791 95.5704 112.337 91.3197C113.69 89.06 115.719 87.0492 117.848 85.4565C121.071 83.0574 124.762 82.7588 128.243 85.0682C131.715 87.3678 132.372 90.842 131.596 94.6546C131.238 96.4166 130.521 98.0989 130.024 99.841C127.637 108.083 125.09 116.286 122.931 124.588C121.141 131.447 123.429 137.091 128.631 141.88C136.868 149.455 146.557 151.088 157.151 149.455C174.421 146.787 188.039 133.637 190.446 117.182C190.834 114.534 190.924 111.717 190.466 109.099C186.746 87.985 174.092 74.3072 154.326 67.11C143.125 63.0286 131.437 61.7544 119.609 63.8648C115.839 64.5417 112.079 65.8159 108.577 67.3987C102.598 70.0964 98.7487 74.6158 98.2016 81.5045C98.122 82.5198 97.4754 84.0827 96.7492 84.3017C95.9434 84.5506 94.5408 83.804 93.755 83.0972C85.0806 75.3027 84.0063 63.4865 91.4869 54.3979C98.9078 45.379 108.657 40.1727 120.226 38.4704C156.505 33.1248 198.862 58.0911 208.133 98.2084C214.997 127.943 197.927 157.329 167.875 166.746C155.052 170.768 142.11 171.246 129.198 167.025C121.121 164.387 114.237 159.848 108.418 153.686C101.713 146.588 98.8382 138.087 99.3754 128.381C99.4251 127.415 99.4748 126.45 99.5445 125.116C98.2214 125.116 97.167 125.066 96.1126 125.126C76.8141 126.281 57.5157 127.515 38.2072 128.56C31.6318 128.919 25.0167 128.899 18.4313 128.839C15.9245 128.819 13.358 128.441 10.9408 127.804C0.764299 125.126 -2.80692 116.157 2.60461 107.188C5.32032 102.698 8.01614 98.2084 10.7517 93.7288C25.5041 69.529 38.7146 44.5328 49.7565 18.4117C50.9203 15.6642 52.2334 12.9864 53.5465 10.3086C56.7198 3.81816 61.9822 0.274325 69.1743 0.692421C77.9979 1.20011 86.8115 2.17566 95.5953 3.23085C120.265 6.2073 144.876 9.73124 169.586 12.2398C181.225 13.4244 193.052 12.7674 204.791 12.9267C208.581 12.9765 212.401 12.7376 216.161 13.086C221.483 13.5738 224.517 16.5502 224.497 20.6515C224.477 24.8026 221.423 27.361 216.012 28.008C197.807 30.208 179.534 29.989 161.319 28.675C135.814 26.8334 110.348 24.4045 84.8618 22.2841C81.5393 22.0054 78.1769 21.9058 74.8445 22.0651C73.7801 22.1148 72.1984 23.0307 71.8204 23.9465C60.3308 51.7798 45.6282 77.9307 30.1795 103.693C29.7617 104.38 29.4633 105.107 28.9559 106.152Z" fill="currentColor"/>
            </svg>
            <p>
              <span>A project from </span>
              <span className="underline decoration-wavy decoration-2 decoration-cyan-400">Bavel</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}