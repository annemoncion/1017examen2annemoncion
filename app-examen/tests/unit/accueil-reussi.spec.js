import { shallowMount } from '@vue/test-utils'
import Accueil from '@/views/Accueil.vue'

describe('Accueil.vue', () => {
  it('Le composant affiche les informations de profil si l\'utilisateur est connecté.', () => {
    const wrapper = shallowMount(Accueil, {
      data() {
        return {
            showProfile: true,
        }
      }
    })

    expect(wrapper.find('.profile').exists()).toBeTruthy()
  })
})
