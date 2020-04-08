import React from "react"

export const addLineBreaks = (string) =>
  string.split("\\n").map((text, index) => {
    return (
      <React.Fragment key={`${text}-${index}`}>
        {text}
        <br />
      </React.Fragment>
    )
  })
