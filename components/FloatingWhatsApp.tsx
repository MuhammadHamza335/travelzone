import Image from "next/image";
import Link from "next/link";
import React from "react";

const FloatingWhatsApp = () => {
  return (
    <Link
      className="fixed bottom-4 right-10 "
      href={
        "https://api.whatsapp.com/send/?phone=%2B923038195398&text&type=phone_number&app_absent=0"
      }
      rel="noopener noreferrer"
      target="_blank"
    >
      <Image src="/whatsApp.png" alt="close" width={100} height={100} />
    </Link>
  );
};

export default FloatingWhatsApp;
