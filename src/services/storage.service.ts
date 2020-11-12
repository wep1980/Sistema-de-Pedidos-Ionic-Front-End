import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage_keys.config";
import { LocalUser } from "../models/local_user";


// Serviço que salva e obtem o usuario logado

@Injectable()
export class StorageService {

    /**
     * Método que obtem o usuario logado
     */
    getLocalUser(): LocalUser {
        let usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if (usr == null) {
            return null;
        } else {
            return JSON.parse(usr); // O localstorage armazena string, por esse motivo o parse
        }
    }


    /**
     * Recebe o localUser e armazena no storage
     * @param obj 
     */
    setLocalUser(obj: LocalUser) {
        if(obj == null){
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }else{
            /**Armazenando no localstorage que é convertido para string pois e o formato que ele aceita */
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }

    }
}