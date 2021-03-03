import { shallowMount } from '@vue/test-utils'
import Projet from '@/views/Projet.vue'

describe('Projet.vue', () => {
  it('Le composant ne contient pas de liste. *Doit échouer*', () => {
    const wrapper = shallowMount(Projet)

    expect(wrapper.find('ul').exists()).toBeFalsy()
  })
})
