import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.props('msg')).toBe(msg)
    expect(wrapper.text()).toMatch(msg)
    expect(wrapper.findAll('.mmm').length).toBe(1)
    wrapper.setProps({ msg: 'bar' })
    expect(wrapper.props('msg')).toBe('bar')
  })

  it ('组件渲染正常', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: 'marlon Chiu' }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
