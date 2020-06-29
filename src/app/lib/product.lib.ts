import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export default class ProductLib{ 
    
    public getValue({value}){
        return value[this.currency].toFixed(2);
    }

    get currency(){
        return window.localStorage['currency'] || 'USD';
    }

    set currency(type){
        window.localStorage['currency'] = type;
    }
}