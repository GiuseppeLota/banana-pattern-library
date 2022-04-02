import React from 'react'
import { CloudImage, Multileveldropdown, Dropdown } from 'banana-pattern-library'

import 'banana-pattern-library/dist/index.css'

const App = () => {

  const items = [
    {
      label: 'elem1',
      code: 'code1',
      subItems: [
        {
          label: 'sub element 1',
          code: 'sub code1',
          onClick: () => { console.log('miao') }
        }
      ]
    },
    {
      label: 'elem2',
      code: 'code2',
      subItems: [
        {
          label: 'sub element 2',
          code: 'sub code 2'
        },
        {
          label: 'sub element 2 alt',
          code: 'sub code 2.1'
        }
      ]
    },
    {
      label: 'elem3',
      code: 'code3',
      subItems: [
        {
          label: 'sub element 3',
          code: 'sub code 3'
        }
      ]
    }
  ]


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <Multileveldropdown id={'drp_test'} label='test' items={items} />
        </div>
        <div className='col-4 offset-5'>
          <Dropdown id={'drp_simple_id'}
            title={`move`}
            items={[
              <span>ffdf</span>,
              <span>sdsd</span>
            ]}
          />
        </div>
      </div>

      <CloudImage publicId='fabbro_rzi1bl' />
    </div>
  )
}

export default App
