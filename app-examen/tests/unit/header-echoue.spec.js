import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('Le paragraphe dans le header contient le html <div><p>Header.</p></div>. *Doit échouer*', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.find('p').html()).toBe('<div><p>Header.</p></div>')
  })
})
