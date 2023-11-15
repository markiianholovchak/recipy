import { Alert, Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { EMAIL_REGEX } from "../lib/constants/regex.constants";
import { useDisclosure } from "../lib/hooks/useDisclosure";
import { addEmailToNewsletter } from "../lib/calls/newsletter.calls";

export const NewsLetterForm = () => {
    const [email, setEmail] = useState("");
    const isEmailValid = EMAIL_REGEX.test(email);
    const alertDisclosure = useDisclosure();
    const handleSubscribe = async () => {
        setEmail("");
        const success = await addEmailToNewsletter(email);
        if (success) {
            alertDisclosure.onOpen();
            setTimeout(() => {
                alertDisclosure.onClose();
            }, 1500);
        }
    };
    return (
        <div>
            <p>Our Newsletter</p>
            <div className="flex gap-2">
                <Input
                    type="email"
                    label="Enter your email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    crossOrigin={""}
                    height={"10px"}
                    error={!!email && !isEmailValid}
                />
                <Button
                    className="bg-green-500"
                    ripple={false}
                    onClick={handleSubscribe}
                    disabled={!email || !isEmailValid}
                >
                    Subscribe
                </Button>
            </div>
            <div className="fixed bottom-10 right-5">
                <Alert
                    open={alertDisclosure.isOpen}
                    animate={{
                        mount: { x: 0 },
                        unmount: { x: 200 }
                    }}
                    className="mx-4 bg-green-400"
                    onClose={alertDisclosure.onClose}
                >
                    Your email was added to our newsletter!
                </Alert>
            </div>
        </div>
    );
};
