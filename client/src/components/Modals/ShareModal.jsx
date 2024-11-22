import React from "react";
import MainModal from "./MainModal";
import {
  FaFacebook,
  FaPinterest,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ShareModal = ({ modalOpen, setModalOpen, movie }) => {
  // Construct the dynamic URL for the movie
  const url = `${window.location.protocol}//${window.location.host}/movie/${
    movie?.id || movie?.name
  }`;

  // Custom share URLs
  const customUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=Check out ${movie?.name}!`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      `Check out this movie: ${movie?.name} ${url}`
    )}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(
      url
    )}&text=Check out ${movie?.name}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      url
    )}&media=${encodeURIComponent(
      movie?.image
    )}&description=${encodeURIComponent(movie?.desc)}`,
    email: `mailto:?subject=Check out ${movie?.name}&body=I thought you might be interested in this movie! ${url}`,
  };

  // Icon data with direct URLs
  const shareData = [
    { icon: FaFacebook, url: customUrls.facebook },
    { icon: FaTwitter, url: customUrls.twitter },
    { icon: FaTelegram, url: customUrls.telegram },
    { icon: FaWhatsapp, url: customUrls.whatsapp },
    { icon: FaPinterest, url: customUrls.pinterest },
    { icon: MdEmail, url: customUrls.email },
  ];

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 cursor-pointer rounded-2xl md:w-3/5 lg:w-full w-full align-middle p-10 h-full  text-white">
        <h2 className="text-2xl text-center">
          Share <span className="text-xl font-bold">'{movie?.name}'</span>
        </h2>
        <div className="flex-rows flex-wrap  gap-6 mt-6">
          {shareData.map((data, index) => (
            <a
              key={index}
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 transitions hover:bg-groon flex-colo text-lg h-12 bg-white  cursor-pointer rounded bg-opacity-30"
            >
              <data.icon />
            </a>
          ))}
        </div>
      </div>
    </MainModal>
  );
};

export default ShareModal;
