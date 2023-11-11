import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { EMAIL_REGEX } from "../lib/constants/regex.constants";

export const NewsLetterForm = () => {
    const [email, setEmail] = useState("");
    const isEmailValid = EMAIL_REGEX.test(email);
    const handleSubscribe = () => {
        setEmail("");
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
        </div>
    );
};
