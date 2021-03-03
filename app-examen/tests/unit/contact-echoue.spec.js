import { shallowMount } from '@vue/test-utils'
import Contact from '@/views/Contact.vue'

describe('Contact.vue', () => {
  it('Le formulaire contient des paragraphes. *Doit échouer*', () => {
    const wrapper = shallowMount(Contact)

    const form = wrapper.find('form')

    expect(form.find('p').exists()).toBe(true)
  })
})
