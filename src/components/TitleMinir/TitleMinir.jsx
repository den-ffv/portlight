import React from 'react'
import "./TitleMinir.scss"
function TitleMinir({text, colorBackground, classicalTheme}) {
  return (
    <h2 className={classicalTheme ?'minir-title minir-title__dark': 'minir-title minir-title__light'}>{text}<span>{colorBackground}</span></h2>
  )
}

export default TitleMinir