import Image from "next/image";
import VideoRecommendations from "./components/VideoRecommendations";
import VideoBlock from "./components/VideoBlock";

// Set rule that users can't go back once they attach a video to their chain 
export default function Home() {
  return (
    <div className="min-h-screen bg-[#151515] text-white p-8">

    <header className='flex flex-row justify-start items-center'>
      <h1 className="text-4xl font-bold mr-[30%]">SpeedTube</h1>
      <h1 className="text-2xl font-bold mr-[1%]">Target Word:  </h1>
      <h1 className="text-2xl font-bold text-yellow-400"> Clocktower </h1>
    </header>

    <hr className="border-t border-white mt-4" />


    <div className="flex justify-between pt-8">
      <div className="bg-[#1f1f1f] rounded-lg p-6 w-[60%] h-[82.5vh] border-white border-1">
        <p></p>
      </div>

      <div className="bg-[#1f1f1f] rounded-lg p-6 w-[38.5%] h-[82.5vh] border-white border-1">
        <p></p>
        <VideoRecommendations/>
      </div>
    </div>

  </div>
  );

}
