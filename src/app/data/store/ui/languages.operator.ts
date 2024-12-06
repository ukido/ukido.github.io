
import { StateOperator } from '@ngxs/store';
import { Language, Languages } from '../../model/ui.model';
import { produce } from "immer";


/**
 * Curried function returns StateOperator that set current language.
 * @param lang language code to set current
 * @returns State operator that set current language
 */
export function setLangCurrentOperator(lang: string): StateOperator<Languages> {
    return produce((draft: Languages) => {
        const idx = (draft || []).findIndex(l => lang === l.code);
        if (idx >= 0) {
            draft.forEach(l => l.current = false);
            draft[idx].current = true;
        }
    });;
}

export function currentLanguagePedicate(lang: Language | undefined): boolean {
    return lang ? lang.current : false;
}

export function byCodeLanguagePedicate(code: string): (lang: Language | undefined) => boolean {
    return (lang) => {
        return lang ? code === lang.code : false;
    };
}