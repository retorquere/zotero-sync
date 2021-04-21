import type { Zotero } from './typings/zotero';
export declare class Library implements Zotero.Library {
    private path;
    private collections;
    private items;
    name: string;
    version: number;
    load(path: string): Promise<Library>;
    add_collection(collection: Zotero.Collection): Promise<void>;
    remove_collections(keys: string[]): Promise<void>;
    add(item: Zotero.Item.Any): Promise<void>;
    remove(keys: string[]): Promise<void>;
    save(name: string, version: number): Promise<void>;
}
export declare class Store implements Zotero.Store {
    libraries: string[];
    private path;
    load(path: any): Promise<Store>;
    remove(user_or_group_prefix: string): Promise<void>;
    get(user_or_group_prefix: any): Promise<Library>;
}
