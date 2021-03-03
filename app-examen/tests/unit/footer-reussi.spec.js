import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
  it('Le composant affiche un paragraphe.', () => {
    const wrapper = shallowMount(Footer)

    expect(wrapper.find('p').exists()).toBeTruthy()
  })
})
