import { ArrowDownIcons, InstagrameIcons, TwitterIcons, YoutubeIcons } from "@/icons";
import {Image, Link} from "@packages/packages";
import BackToTop from "../elements/back-to-top-btn/back-to-top";
import React from "react";
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer-section bg-[#D9D9D9]">
        <div className="custom-container relative">
            <BackToTop />
           <div className="footer-wrapper grid grid-cols-16 gap-5 pt-[57px] pb-[54px] sm:pt-[45px] sm:pb-[45px] sm:block">
               <div className="footer-left-widgets col-span-5 md:col-span-7 sm:mb-[120px] text-left">
                <Image width={336} height={95} src="/images/footer-brand-logo.svg" className="footer-brand-logo mb-7 sm:mb-0 sm:object-cover flex justify-start items-start sm:w-[215px] sm:h-[48px]" alt="footer brand logo image" />
               <p className="footer-decription-text sm:hidden max-w-[393px] text-neu-black-2 text-left text-body-text-3 font-primary font-medium leading-normal mb-0">
               Particular Agency. Entrusted to create fitness for purpose. In spaces where results, delivery and creativity truly matter. 
               </p>
               </div> 
               <div className="footer-second-widgets col-span-2 md:col-span-4 pt-[17px] mb-12  sm:pt-0">
                <h6 className="widgets-title mb-[17px] text-body-text text-left text-neu-black font-bold font-primary leading-none">Menu</h6>
                <ul className="footer-link-widgtes flex flex-col gap-[17px]">
                <li className="footer-link-widgets-items"><Link href="/" className="flex items-center gap-1"><span className="link-text  text-body-text text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">Home</span> 
                </Link></li>
                <li className="footer-link-widgets-items"><Link href="/" className="flex items-center gap-1"><span className="link-text  text-body-text text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">Case Studies</span> 
                </Link></li>
                <li className="footer-link-widgets-items"><Link href="/" className="flex items-center gap-1"><span className="link-text  text-body-text text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">Services</span> 
                </Link></li>
                <li className="footer-link-widgets-items"><Link href="/" className="flex items-center gap-1"><span className="link-text  text-body-text text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">Our Approach</span> 
                </Link></li>
                <li className="footer-link-widgets-items"><Link href="/" className="flex items-center gap-1"><span className="link-text  text-body-text text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">Features</span> 
                <span className="w-[13] h-[13px]"><ArrowDownIcons /></span>
                </Link></li>
                </ul>
               </div>
               <div className="footer-third-widgets col-span-3 md:col-span-5 pt-[17px] sm:mb-[87px]  sm:pt-0">
               <h6 className="widgets-title mb-[17px] text-body-text text-left text-neu-black font-bold font-primary leading-none">Legals</h6>
                <ul className="footer-link-widgtes flex flex-col gap-[17px]">
                <li className="footer-link-widgets-items"><Link href="/" className="flex items-center gap-1"><span className="link-text  text-body-text text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">Terms and Conditions</span> 
                </Link></li>
                <li className="footer-link-widgets-items"><Link href="/" className="flex items-center gap-1"><span className="link-text  text-body-text text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">Privacy Policy</span> 
                </Link></li>
                <li className="footer-link-widgets-items"><Link href="/" className="flex items-center gap-1"><span className="link-text  text-body-text text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">FAQ’s</span> 
                </Link></li>
                <li className="footer-link-widgets-items"><Link href="/" className="flex items-center gap-1"><span className="link-text  text-body-text text-left text-neu-black font-medium font-primary leading-none md:text-[20px]">Articles</span> 
                </Link></li>
                </ul>
               </div>
               <div className="footer-right-widgets col-span-6 md:col-span-12 pt-[17px] sm:pt-0">
                <div className="footer-right-widgets-top-text mb-[23px] flex items-center justify-between gap-5">
                  <h4 className="footer-right-widgets-title sm:hidden text-neu-black text-left font-semibold font-primary leading-none text-sixth-heading md:text-[44px]">Lets Talk!</h4>
                <ul className="socials-widgets flex items-center gap-12">
                <li className="socials-widgets-list-item"><Link href="/"><TwitterIcons /></Link></li>
                <li className="socials-widgets-list-item"><Link href="/"><InstagrameIcons /></Link></li>
                <li className="socials-widgets-list-item"><Link href="/"><YoutubeIcons /></Link></li>
                </ul>
                </div>
                <div className="cta-subs-widgets relative sm:hidden">
                  <input className="cta-input-fild w-full text-left focus:border-none focus:outline-0 text-neu-black text-text-xs-small font-medium font-primary leading-none h-16 px-[9px] py-[7px]" type="email" name="email" placeholder="" />
                  <button type="button" className="absolute top-0 right-0 z-50 subs-btn py-[39px] pr-[9px] pb-[7px] pl-[9px] bg-neu-blue h-16 flex justify-start items-end w-[133px] text-left text-neu-white text-text-xs-small font-medium font-primary leading-none">Suscribe</button>
                </div>
               </div>
           </div>
           <div className="footer-bottom-box pt-6 pb-10 border-t-[.5px] border-t-[#A0A0A0]">
                 <p className="text-black text-left text-text-xs-small font-primary font-medium leading-none">© {new Date().getFullYear()}. All rights reserved.</p>
           </div>
        </div>
    </footer>
  );
};

export default Footer;
