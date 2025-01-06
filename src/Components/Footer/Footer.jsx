export default function Footer() {
  return (
    <>
      <footer className="bg-slate-800 py-p-section">
        <div className="container px-10 md:px-0 text-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          <div>
            <div>
              <h3 className="text-white mb-4 text-xl">About Us</h3>
            </div>
            <p className="text-white/45 text-lg leading-8 mb-5">
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur. I am text block. Click edit
              button to change this text. Lorem ipsum dolor sit amet,
              consectetur.
            </p>
            <p className="text-white/45 text-lg leading-tight">
              We are the champions! We are the most amazing theme of all time,
              yeah.
            </p>
          </div>
          <div>
            <div>
              <h3 className="text-white mb-4 text-\xl capitalize">Why we are special?</h3>
            </div>
            <ul className="text-md flex flex-col gap-5 text-white/50">
                <li className="flex items-center gap-2  py-2 border-b-2 border-white/20"><i className="fa-solid fa-chevron-right fa-xs"></i>Our magical recipe.</li>
                <li className="flex items-center gap-2  py-2 border-b-2 border-white/20"><i className="fa-solid fa-chevron-right fa-xs"></i>We care about environment.</li>
                <li className="flex items-center gap-2  py-2 border-b-2 border-white/20"><i className="fa-solid fa-chevron-right fa-xs"></i>We are trusted by hundreds of clients.</li>
                <li className="flex items-center gap-2  py-2 border-b-2 border-white/20"><i className="fa-solid fa-chevron-right fa-xs"></i>Social media loves us!</li>
                <li className="flex items-center gap-2  py-2"><i className="fa-solid fa-chevron-right fa-xs"></i>This list is super easy to create.</li>
            </ul>
          </div>
          <div>
            <div>
              <h3 className="text-white mb-4 text-xl capitalize">Opening Hours</h3>
            </div>
            <ul className="text-md flex flex-col gap-5 text-white/50">
                <li className="flex items-center gap-2  py-2 border-b-2 border-white/20"><i className="fa-solid fa-chevron-right fa-xs"></i>Monday 10AM - 9PM</li>
                <li className="flex items-center gap-2  py-2 border-b-2 border-white/20"><i className="fa-solid fa-chevron-right fa-xs"></i>Tuesday 10AM - 9PM</li>
                <li className="flex items-center gap-2  py-2 border-b-2 border-white/20"><i className="fa-solid fa-chevron-right fa-xs"></i>Wednesday 10AM - 9PM</li>
                <li className="flex items-center gap-2  py-2 border-b-2 border-white/20"><i className="fa-solid fa-chevron-right fa-xs"></i>Thursday 10AM - 10PM</li>
                <li className="flex items-center gap-2  py-2 border-b-2 border-white/20"><i className="fa-solid fa-chevron-right fa-xs"></i>Friday 10AM - 10PM</li>
                <li className="flex items-center gap-2  py-2 "><i className="fa-solid fa-chevron-right fa-xs"></i>Weekends 10AM - 11PM</li>
            </ul>
          </div>
          <div>
            <div>
              <h3 className="text-white mb-4 text-xl capitalize">Contact Details</h3>
            </div>
            <div>
                <ul className={`text-md flex flex-col gap-5 text-white/50 relative after:content-[''] after:bg-[url('/src/assets/contact-details-map.png')] after:absolute after:bg-no-repeat after:opacity-20 after:top-0 after:start-0 after:end-0 after:bottom-0`}>
                    <li className="flex items-baseline gap-2 leading-7 py-2 border-b-2 border-white/20"><i className="fa-solid fa-location-dot"></i>Manchester Road 123-78B, Silictown 7854MD, Great Country</li>
                    <li className="flex items-center gap-2  py-2 border-b-2 border-white/20"><i className="fa-solid fa-phone"></i>+46 123 456 789</li>
                    <li className="flex items-center gap-2  py-2 border-b-2 border-white/20"><i className="fa-solid fa-envelope"></i>hello@sitename.com</li>
                    <li className="flex items-center gap-2  py-2 border-b-2 border-white/20"><i className="fa-solid fa-earth-americas"></i>http://www.sitename.com</li>
                </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
