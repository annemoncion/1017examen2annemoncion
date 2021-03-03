import { shallowMount } from '@vue/test-utils'
import Contact from '@/views/Contact.vue'

describe('Contact.vue', () => {
  it('Le formulaire contient des champs à remplir.', () => {
    const wrapper = shallowMount(Contact)

    const form = wrapper.find('form')

    expect(form.find('input').exists()).toBe(true)
  })
})
