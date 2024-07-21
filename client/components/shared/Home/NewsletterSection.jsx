import { newsletterImage } from "../../../public/images";
import Image from "next/image";
import "../ContactForm.css"; // Assuming this CSS file includes styles relevant to the newsletter section
import NewsletterForm from "./NewsletterForm";
import "./NewsletterForm.css"

const NewsletterSection = () => {
    return (
        <section className="newsletterSection">
            <div className="newsletterContent dark:text-customBgWhite">
                <div className="flex flex-col md:flex-row items-center max-w-[80%] mx-auto">
                    <div className="newsletterImageWrapper mb-12 md:mb-0 md:mr-12 flex-1">
                        <Image
                            src={newsletterImage}
                            alt="Newsletter"
                            className="newsletterImage"
                            layout="responsive"
                        />
                    </div>
                    <div className="newsletterFormWrapper min-w-[50%] flex-1">
                        <NewsletterForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
