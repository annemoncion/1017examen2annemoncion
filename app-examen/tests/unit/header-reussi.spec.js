import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('Le paragraphe dans le composant contient le html "<p>Header.</p>".', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.find('p').html()).toBe('<p>Header.</p>')
  })
})
