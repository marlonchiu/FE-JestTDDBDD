import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld0.vue', () => {
  it('renders props.msg when passed', () => {
    const root = document.createElement('div')
    root.className = 'root'
    document.body.appendChild(root)
    new Vue({
      render: h => h(HelloWorld, {
        prop: {
          msg: 'dell lee'
        }
      })
    }).$mount('.root')
    expect(document.getElementsByClassName('hello').length).toBe(1)
  })
})
