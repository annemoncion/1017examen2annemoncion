import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
  it('Le composant ne contient aucun paragraphe. *Doit échouer*', () => {
    const wrapper = shallowMount(Footer)

    expect(wrapper.find('p')).toBeFalsy()
  })
})
