import { shallowMount } from '@vue/test-utils'
import Accueil from '@/views/Accueil.vue'

describe('Accueil.vue', () => {
  it('Le composant affiche les informations de profil si l\'utilisateur est non-connecté. *Doit échouer* ', () => {
    const wrapper = shallowMount(Accueil, {
      data() {
        return {
            showProfile: false,
        }
      }
    })

    expect(wrapper.find('.profile').exists()).toBeTruthy()
  })
})
