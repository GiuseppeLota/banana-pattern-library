import React from 'react'
import { CloudImage, Multileveldropdown } from 'banana-pattern-library'

import 'banana-pattern-library/dist/index.css'

const App = () => {

  const items = [
    {
      label: 'elem1',
      code: 'code1',
      subItems: [
        {
          label: 'sub element 1',
          code: 'sub code1'
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
    <div>
      <Multileveldropdown id={'drp_test'} label='test' items={items}/>
      <CloudImage publicId='fabbro_rzi1bl' />
    </div>
  )
}

export default App
