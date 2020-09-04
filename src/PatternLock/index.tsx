import React from 'react'
import { useCheckboxState, Checkbox } from 'reakit/Checkbox'
import LineTo from 'react-lineto'

export interface Props {
  initialState?: number[]
  gridSize: number
  fields: number[]
  handleResult?: (result: number[]) => void
}

export const PatternLock: React.FC<Props> = ({
  fields,
  initialState,
  gridSize,
  handleResult
}) => {
  const checkbox = useCheckboxState({
    state: initialState
  })
  const [activeSelect, setActiveSelect] = React.useState(false)

  React.useEffect(() => {
    handleResult && handleResult(checkbox.state as number[])
  }, [handleResult, checkbox.state])

  const renderLines = (resultArray: (string | number)[]) =>
    resultArray.map(
      (_, index) =>
        resultArray[index + 1] !== undefined && (
          <LineTo
            from={resultArray[index].toString()}
            to={resultArray[index + 1].toString()}
            key={index}
          />
        )
    )

  return (
    <>
      {fields.map((value) => (
        <React.Fragment key={value}>
          <Checkbox
            {...checkbox}
            value={value}
            className={value.toString()}
            onPointerEnter={() => {
              if (activeSelect) {
                if (Array.isArray(checkbox.state)) {
                  if (checkbox.state[checkbox.state.length - 1] !== value) {
                    checkbox.setState([...checkbox.state, value])
                  }
                }
              }
            }}
            onPointerDown={() => {
              setActiveSelect(true)
              checkbox.setState([value])
            }}
            onPointerUp={() => setActiveSelect(false)}
          />
          {value % gridSize === 0 && <div />}
        </React.Fragment>
      ))}

      {Array.isArray(checkbox.state) && renderLines(checkbox.state)}
    </>
  )
}
