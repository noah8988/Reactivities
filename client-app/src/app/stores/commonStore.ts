import { makeAutoObservable } from "mobx";
import { error } from "node:console";
import { ServerError } from "../models/serverError";


export default class CommonStore {
    error: ServerError | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setServerError = (error: ServerError) => {
        this.error = error;
    }
}