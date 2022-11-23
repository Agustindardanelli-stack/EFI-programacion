import es from './es.json';
import en from './en.json';

export const getTexts = (language, from) => {
    switch(language) {
        case 'ES':
            return es[from]
        case 'EN':
            return en[from]
        default:
            return
    } 
}