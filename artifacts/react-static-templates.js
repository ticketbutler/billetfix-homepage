

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/veronikam/Desktop/billetfix-homepage/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('../node_modules/react-static/lib/browser/components/Default404'), universalOptions)
      t_0.template = '../node_modules/react-static/lib/browser/components/Default404'
      
const t_1 = universal(import('../src/pages/index.js'), universalOptions)
      t_1.template = '../src/pages/index.js'
      
const t_2 = universal(import('../src/layouts/cms_page'), universalOptions)
      t_2.template = '../src/layouts/cms_page'
      

// Template Map
export default {
  '../node_modules/react-static/lib/browser/components/Default404': t_0,
'../src/pages/index.js': t_1,
'../src/layouts/cms_page': t_2
}
// Not Found Template
export const notFoundTemplate = "../node_modules/react-static/lib/browser/components/Default404"

