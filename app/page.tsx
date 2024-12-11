import { BackgroundLines } from "@/components/ui/background-lines";
import { FeaturesSectionDemo } from "@/components/ui/FeaturesSection";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FaHome, FaInfoCircle, FaCog } from "react-icons/fa";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Cover } from "@/components/ui/cover";
import { Tabs } from "@/components/ui/tabs";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function Home() {
  const navItems = [
    { name: "Home", link: "/", icon: <FaHome /> },
    { name: "About", link: "/about", icon: <FaInfoCircle /> },
    { name: "Settings", link: "/settings", icon: <FaCog /> },
  ];

  const testimonials = [
    {
      quote: "This website is amazing! It helped me connect with my gang effortlessly.",
      name: "DEMON",
      designation: "Gang Leader",
      src: "https://www.gta-multiplayer.cz/screenshots/medium-165862.jpg",
    },
    {
      quote: "The design and features are top-notch. Highly recommend it!",
      name: "ZORO",
      designation: "Co Founder",
      src: "https://www.gta-multiplayer.cz/screenshots/medium-165863.jpg",
    },
    {
      quote: "I've never seen such a sleek and functional website before.",
      name: "Pasha",
      designation: "Gang Member",
      src: "https://www.gta-multiplayer.cz/screenshots/medium-165864.jpg",
    },
    {
      quote: "I love this gang.",
      name: "RDX",
      designation: "Gang Member",
      src: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/165356390/original/108ec8cc662b1977736cfcca5dd99bdb5d3ec46d/create-cinematic-videos-for-fivem-and-gta-5-server-trailers-char-intros.png",
    },
    {
      quote: "Oh yess",
      name: "QARI",
      designation: "Gang Member",
      src: "https://s3-gallery.int-cdn.lcpdfrusercontent.com/monthly_2020_11/large.489876136_pic23.png.1b6cb12c02675cdaaf8ea3aee0a556da.png",
    },
    {
      quote: "I love it bro.",
      name: "Shameer",
      designation: "Gang Member",
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d540d1166730489.641cec8618b91.png",
    },
  ];

  const tabs = [
    {
      title: "Fighters.",
      value: "tab1",
      content: (
        <div className="flex justify-center">
          <img
            src="https://i.ytimg.com/vi/lUCDnxyFwdg/maxresdefault.jpg"
            alt="Image 1"
            className="rounded-lg shadow-lg w-[800px] h-auto" // Set width and auto height
          />
        </div>
      ),
    },
    {
      title: "Gang Cars.",
      value: "tab2",
      content: (
        <div className="flex justify-center">
          <img
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/231933870/original/f0c524793b837862a373b864605f91d6bffcae91/do-cinematic-fivem-video-for-you.png"
            alt="Image 2"
            className="rounded-lg shadow-lg w-[800px] h-auto" // Set width and auto height
          />
        </div>
      ),
    },
    {
      title: "Celebration.",
      value: "tab3",
      content: (
        <div className="flex justify-center">
          <img
            src="https://i.ytimg.com/vi/PH3B8JVIsco/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAJr0sM0TAozTizdz0krnXMMF_8Gw"
            alt="Image 3"
            className="rounded-lg shadow-lg w-[800px] h-auto" // Set width and auto height
          />
        </div>
      ),
    },
  ];

  return (
    <div className="relative h-screen flex flex-col items-center justify-between">
      <FloatingNav navItems={navItems} className="custom-nav-class" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <TextGenerateEffect
          words="Welcome To Silver Shark's Gang Website"
          className="font-bold text-white"
          duration={1}
          filter={true}
          fontSize="text-6xl"
        />
      </div>
      <BackgroundLines />

      {/* Features Section */}
      <div className="w-full flex justify-center mt-[500px]">
        <div className="max-w-3xl w-full px-4">
          <FeaturesSectionDemo />
        </div>
      </div>

      {/* Animated Testimonials */}
      <div className="mt-30">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Team Members
        </h4>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>

      {/* Updated ContainerScroll with Image */}
      <ContainerScroll
        titleComponent={<h2 className="text-xl font-bold">NOTICEBOARD</h2>}
      >
        <div className="space-y-2 p-4">
          <p className="text-lg">Explore our exciting content as you scroll.</p>
          <div className="w-full flex justify-center">
            <img
              src="https://i.ytimg.com/vi/Vz0QkEIoakk/maxresdefault.jpg"
              alt="Sample Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </ContainerScroll>

      {/* Add MacbookScroll with props */}
      <MacbookScroll
        src="https://images.squarespace-cdn.com/content/v1/5e274e34949f6c4d0d11d53f/1580226389676-0JKMGMZQ2Z5DSHUNSZG5/2%2C+Pakistan+-+Khusras.jpg" // Example source URL
        showGradient={true} // Show the gradient overlay
      />

      {/* Updated Cover with Props */}
      <Cover className="">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Paradise On Top Asia's No 1 Server</h2>
          <p className="mt-2 text-lg">
            Paradise Roleplay Pakistan ka sabsa bara fivem server hai and isme
            kafi zyada log khelte hai.
          </p>
        </div>
      </Cover>

      {/* Tabs Component with Images */}
      <div className="">
        <Tabs tabs={tabs} />
      </div>

      {/* Discord Boxes */}
      <div className="mt-[170px]">
      <div className="mt-[1000px] mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
      <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
        <div className="flex items-center space-x-4">
          <img
            src="https://i.imgur.com/OyAFhY3.png"
            alt="Discord Logo"
            className="w-12 h-12"
          />
          <h3 className="text-2xl font-bold">Paradise RP Discord</h3>
        </div>
        <p className="mt-4 text-center text-lg">
          Join our Paradise RP server, Pakistan's No. 1 FiveM server, and be
          part of the action!
        </p>
        <a
          href="https://discord.gg/prpk"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold shadow-lg hover:bg-gray-100"
        >
          Join Paradise RP
        </a>
      </div>
      <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-gray-700 to-black text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
        <div className="flex items-center space-x-4">
          <img
            src="https://i.imgur.com/OyAFhY3.png"
            alt="Discord Logo"
            className="w-12 h-12"
          />
          <h3 className="text-2xl font-bold">Silver Sharks Discord</h3>
        </div>
        <p className="mt-4 text-center text-lg">
          Join the Silver Sharks community for exciting updates and
          gang-related activities!
        </p>
        <a
          href="https://discord.gg/zeupxsx4"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:bg-gray-100"
        >
          Join Silver Sharks
        </a>
      </div>
    </div>
      </div>
    </div>
  );
}
