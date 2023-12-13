import {Image} from "@packages/packages";
import React from "react";
interface CaseStudyBannerProps {
	CaseStudyBannerData: {
		StudyBannerModalImg?: string;
		BannerTitle?: string;
		BannerDesc?: string;
	};
}

const CaseStudyBanner: React.FC<CaseStudyBannerProps> = ({
	CaseStudyBannerData,
}) => {
	if (!CaseStudyBannerData) {
		// If CaseStudyBannerData is undefined or null, return null or an error message
		return null; // Or display an error message
	}

	const { StudyBannerModalImg, BannerTitle, BannerDesc } = CaseStudyBannerData;

	return (
		<section className="case-study-banner-section pt-[113px] pb-[100px] sm:pb-10 sm:pt-0 h-[773px] sm:h-[344px] relative">
			<div className="case-study-banner-modal-image max-w-[1920px] mx-auto absolute top-0 left-0 right-0 w-full h-full">
				<Image
					src={StudyBannerModalImg || ''}
					alt="case study banner image"
					width={1722}
					height={773}
					className="case-study-banner-modal-image w-full h-full"
				/>
			</div>
			<div className="custom-container h-full">
				<div className="case-study-content-main-wrapper relative grid grid-cols-16 gap-5 w-full h-full">
					<div className="case-study-content-text-box col-span-full mt-auto">
						<h1 className="case-study-banner-title mb-10 sm:mb-[15px] text-primary-heading-4 laptop-x:text-[100px] lg:text-[84px] md:text-[64px] uppercase text-left text-neu-white font-primary font-black tracking-[4.5px] leading-[1.1] sm:text-text--large">
							{BannerTitle || ''}
						</h1>
						<p className="banner-description max-w-[737px] sm:max-w-[318px] w-full text-[30px] text-left sm:text-[13px] text-neu-white font-primary font-bold leading-normal tracking-[1px]">
							{BannerDesc || ''}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CaseStudyBanner;
