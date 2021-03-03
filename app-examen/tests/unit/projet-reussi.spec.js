import { shallowMount } from '@vue/test-utils'
import Projet from '@/views/Projet.vue'

describe('Projet.vue', () => {
  it('Le composant contient une liste.', () => {
    const wrapper = shallowMount(Projet)

    expect(wrapper.find('ul').exists()).toBeTruthy()
  })
})
