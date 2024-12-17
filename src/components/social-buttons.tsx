import React from "react";
import { Button } from "@/components/ui/button"; // Shadcn's Button
import { IoLogoFacebook, IoLogoInstagram} from "react-icons/io";
import { IoCall } from "react-icons/io5";


export const SocialButtons: React.FC = () => {
  return (
    <div className="flex gap-4 justify-center items-center py-4">
      {/* Facebook Button */}
      <Button
        variant="outline"
        className="bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-300"
        onClick={() => window.open("https://facebook.com", "_blank")}
      >
        <IoLogoFacebook className="mr-2 h-5 w-5" />
        Facebook
      </Button>

      {/* Twitter Button */}
      <Button
        variant="outline"
        className="bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-300"
        onClick={() => window.open("https://twitter.com", "_blank")}
      >
        <IoLogoInstagram className="mr-2 h-5 w-5" />
        Twitter
      </Button>

      {/* Instagram Button */}
      <Button
        variant="outline"
        className="bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-300"
        onClick={() => window.open("https://instagram.com", "_blank")}
      >
        <IoCall className="mr-2 h-5 w-5" />
        Instagram
      </Button>
    </div>
  );
};
