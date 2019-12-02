import * as React from 'react'
import './index.less'

function Index({ text, extra }) {
  return (    
    <div className="extraModalTitle">
        <div className="leftTitle">{text}</div>
        <div className="rightTitle">{extra}</div>
    </div>
  );
}

export default Index;
