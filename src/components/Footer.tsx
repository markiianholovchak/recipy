import { ContentContainer } from "./UI/ContentContainer";
import { NewsLetterForm } from "./NewsletterForm";

export const Footer = () => {
    return (
        <footer className="mb-16 mt-10">
            <ContentContainer>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                            <p className="text-2xl font-semibold">Recipy</p>
                            <ul className="flex gap-2">
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">LinkTree</a>
                                </li>
                            </ul>
                        </div>
                        <NewsLetterForm />
                    </div>
                    <hr className="border-black" />
                    <div className="flex justify-between font-light text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Recipy. All Rights Reserved.</p>
                        <ul className="flex gap-2">
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </ContentContainer>
        </footer>
    );
};
