/// <reference types="node" />
import * as events from 'events';
import type { Zotero } from './typings/zotero';
declare type RemoteLibrary = {
    prefix: string;
    name?: string;
    version?: number;
};
export declare class Sync {
    static event: {
        library: string;
        collection: string;
        remove: string;
        item: string;
        error: string;
    };
    private headers;
    private batch;
    userID: number;
    libraries: Record<string, RemoteLibrary>;
    emitter: events.EventEmitter;
    constructor(batch?: number, emitter?: events.EventEmitter);
    on(event: any, handler: (...args: any[]) => void): void;
    login(api_key: string): Promise<void>;
    private fetch;
    private json;
    get(prefix: string, uri: string): Promise<any>;
    sync(store: Zotero.Store): Promise<void>;
    private update;
}
export {};
