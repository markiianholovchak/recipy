import { ContentContainer } from "./UI/ContentContainer";
import { NewsLetterForm } from "./NewsletterForm";
import { Divider } from "./UI/Divider";

export const Footer = () => {
    return (
        <footer className="mb-8 mt-14 md:mb-16">
            <ContentContainer>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col justify-between gap-4 md:flex-row">
                        <div className="flex flex-col gap-2">
                            <p className="text-2xl font-semibold">Recipy</p>
                            <nav className="flex gap-2">
                                <a href="/">About Us</a>
                                <a href="/">Contact</a>
                                <a href="/">LinkTree</a>
                            </nav>
                        </div>
                        <NewsLetterForm />
                    </div>
                    <Divider />
                    <div className="flex flex-col font-light text-gray-500 md:flex-row md:justify-between">
                        <p>&copy; {new Date().getFullYear()} Recipy. All Rights Reserved.</p>
                        <nav className="flex gap-2">
                            <a href="#">Privacy</a>
                            <a href="#">Terms of Use</a>
                        </nav>
                    </div>
                </div>
            </ContentContainer>
        </footer>
    );
};
