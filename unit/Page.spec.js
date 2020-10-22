import { shallowMount } from '@vue/test-utils';
import Page from '@/views/Page.vue';


describe('Page', () => {
  test('find the tag with "You are now registered to meetup"', () => {
    const wrapper = shallowMount(Page)
    const msg = 'You are now registered to meetup'

    const element = wrapper.find('h4').text()

    expect(element).toBe(msg)
  })
})
