import localforage from "localforage";

class Storage {
    async getItem<T>(key: string): Promise<T | null> {
        try {
            const value = await localforage.getItem<T>(key);
            return value;
        } catch (error) {
            return null;
        }
    }

    async setItem<T>(key: string, value: T): Promise<boolean> {
        try {
            await localforage.setItem<T>(key, value);
            return true;
        } catch (error) {
            return false;
        }
    }

    async removeItem(key: string): Promise<boolean> {
        try {
            await localforage.removeItem(key);
            return true;
        } catch (error) {
            return false;
        }
    }
}

const storage = new Storage();

export default storage;
