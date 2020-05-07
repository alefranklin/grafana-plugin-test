import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory, useTheme } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme();
  const styles = getStyles();
  console.log(options.shapeSize);
  let color: any;
  switch (options.shapeColor) {
    case 'green':
      color = theme.palette.greenShade;
      break;
    case 'red':
      color = theme.palette.redBase;
      break;
    case 'blue':
      color = theme.palette.blue85;
      break;
  }
  let shape;
  if (options.shapeType === 'square') {
    shape = (
      <rect
        style={{ fill: color }}
        x={-options.shapeSize}
        y={-options.shapeSize}
        width={options.shapeSize * 2}
        height={options.shapeSize * 2}
      />
    );
  }
  if (options.shapeType === 'circle') {
    shape = <circle style={{ fill: color }} r={options.shapeSize} />;
  }

  return (
    <div
      id="wrapper"
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <svg
        className={styles.svg}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
      >
        <g>{shape}</g>
      </svg>
      <div
        className={cx(
          styles.centeredLow,
          css`
            width: ${width}px;
          `
        )}
      >
        <span>
          Look at me Morty! I've turned myself into a {options.shapeColor} {options.shapeType}.
        </span>
      </div>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      postition: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
    centeredLow: css`
      position: absolute;
      bottom: 0;
      font-weight: bolder;
      font-size: 50;
      text-align: center;
    `,
  };
});
