import Vue from 'vue'
import VueI18n from 'vue-i18n'

import tw from './subfolder/tw.json'
import en from './subfolder/en'
import fr from './subfolder/fr.json'

Vue.use(VueI18n)

const locale = 'tw'

const messages = {
    tw
}

const i18n = new VueI18n({
    /** 默认值 */
    locale,
    messages
})

export default i18n