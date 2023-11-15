import { NEWSLETTER_STORAGE_KEY } from "../constants/general.constants";
import storage from "../storage";

export const getNewsletterStorage = async (): Promise<string[] | null> => {
    return await storage.getItem(NEWSLETTER_STORAGE_KEY);
};

export const saveEmailsToStorage = async (emails: string[]) => {
    return storage.setItem(NEWSLETTER_STORAGE_KEY, emails);
};

export const addEmailToNewsletter = async (email: string): Promise<boolean> => {
    const storage = (await getNewsletterStorage()) || [];
    return await saveEmailsToStorage([...storage, email]);
};
