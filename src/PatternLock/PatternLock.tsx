import React from "react";
import { useCheckboxState, Checkbox as CheckboxReakit } from "reakit/Checkbox";
import LineTo from "react-lineto";

interface LineStyles {
  borderColor?: string;
  borderStyle?: string;
  borderWidth?: number;
  className?: string;
  zIndex?: number;
}

export interface Props {
  /** Set initial pattern field. */
  initialState?: number[];
  /** Set the width of the grid. */
  gridSize?: number;
  /** Number of available fields  */
  fields: number[];
  /** Callback for returning the result */
  handleResult?: (result: number[]) => void;
  /** Styles the component */
  Component?: React.ComponentType<any>;
  /** Styles the line */
  lineStyles?: LineStyles;
}

export const PatternLock: React.FC<Props> = ({
  fields,
  initialState,
  gridSize = 3,
  handleResult,
  Component,
  lineStyles,
}) => {
  const Checkbox = Component || CheckboxReakit;

  const checkbox = useCheckboxState({
    state: initialState,
  });
  const [activeSelect, setActiveSelect] = React.useState(false);

  React.useEffect(() => {
    handleResult && handleResult(checkbox.state as number[]);
  }, [handleResult, checkbox.state]);

  const renderLines = (resultArray: (string | number)[]) =>
    resultArray.map(
      (_, index) =>
        resultArray[index + 1] !== undefined && (
          <LineTo
            from={resultArray[index].toString()}
            to={resultArray[index + 1].toString()}
            key={index}
            {...lineStyles}
          />
        )
    );

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
                    checkbox.setState([...checkbox.state, value]);
                  }
                }
              }
            }}
            onPointerDown={() => {
              setActiveSelect(true);
              checkbox.setState([value]);
            }}
            onPointerUp={() => setActiveSelect(false)}
          />
          {value % gridSize === 0 && <div />}
        </React.Fragment>
      ))}

      {Array.isArray(checkbox.state) && renderLines(checkbox.state)}
    </>
  );
};
