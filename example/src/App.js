import React from 'react'
import { CloudImage, Multileveldropdown } from 'banana-pattern-library'

import 'banana-pattern-library/dist/index.css'

const App = () => {
  return (
    <div>
      <Multileveldropdown id={'drp_test'} />
      <CloudImage publicId='fabbro_rzi1bl' />
    </div>
  )
}

export default App
