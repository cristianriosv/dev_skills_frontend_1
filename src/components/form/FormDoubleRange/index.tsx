import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';
import { Badge } from 'react-bootstrap';
import styles from './formDoubleRange.module.scss';

export type TFormDoubleRange = {
  min?: number,
  max?: number,
  currentMin?: number,
  currentMax?: number,
  minTag?: string,
  maxTag?: string,
  onChange?: Function,
  showTags?: boolean,
  name?: string,
}

const FormDoubleRange: FC<TFormDoubleRange> = ({
  min = 0,
  max = 100,
  currentMin,
  currentMax,
  minTag,
  maxTag,
  onChange,
  showTags = true,
  name = 'range',
}) => {
  // const [minVal, setMinVal] = useState(currentMin);
  // const [maxVal, setMaxVal] = useState(currentMax);
  const [values, setVaules] = useState({ minVal: currentMin, maxVal: currentMax });
  const { minVal, maxVal } = values;
  const [limits, setLimits] = useState({ left: 0, width: 100 });
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  // const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  const calculateRange = () => {
    const newLimits = { ...limits };
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);
      newLimits.width = maxPercent - minPercent;
    }
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);
      newLimits.left = minPercent;
      newLimits.width = maxPercent - minPercent;
    }
    setLimits({ ...newLimits });
  };

  // Set width of the range to decrease from the left side
  // useEffect(() => {
  //   if (maxValRef.current) {
  //     const minPercent = getPercent(minVal);
  //     // Precede with '+' to convert the value from type string to type number
  //     const maxPercent = getPercent(+maxValRef.current.value);
  //     setLimits({ left: minPercent, width: maxPercent - minPercent });
  //   }
  // }, [minVal, getPercent]);

  // // Set width of the range to decrease from the right side
  // useEffect(() => {
  //   if (minValRef.current) {
  //     const minPercent = getPercent(+minValRef.current.value);
  //     const maxPercent = getPercent(maxVal);
  //     setLimits({ ...limits, width: maxPercent - minPercent });
  //   }
  // }, [maxVal, getPercent]);

  useEffect(() => {
    calculateRange();
  }, [minVal, maxVal]);

  // Get min and max values when their state changes
  useEffect(() => {
    if (currentMin !== minVal || currentMax !== maxVal) {
      setVaules({ minVal: currentMin, maxVal: currentMax });
    }
  }, [currentMin, currentMax, setVaules]);

  return (
    <div className={styles.container}>
      <input
        name={`${name}From`}
        type="range"
        min={min}
        max={max}
        value={currentMin || minVal}
        ref={minValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          const simulateEvent = { ...event };
          simulateEvent.target.value = value.toString();
          setVaules({ ...values, minVal: value });
          if (onChange) onChange(simulateEvent);
        }}
        className={`${styles.thumb} ${styles.thumb__zindex_3} ${minVal > max - 100 && styles.thumb__zindex_5}`}
      />
      <input
        name={`${name}To`}
        type="range"
        min={min}
        max={max}
        value={currentMax || maxVal}
        ref={maxValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(+event.target.value, minVal + 1);
          const simulateEvent = { ...event };
          simulateEvent.target.value = value.toString();
          setVaules({ ...values, maxVal: value });
          if (onChange) onChange(simulateEvent);
        }}
        className={`${styles.thumb} ${styles.thumb__zindex_4}`}
      />

      {showTags && (
        <>
          <div
            className={styles.slider__left_value}
            style={{
              left: `${limits.left}%`,
            }}
          >
            <div className={styles.badgeContainer} style={{ left: `-${(limits.left / 100) * 20}px` }}>
              <Badge bg="info">
                {minTag || minVal}
              </Badge>
            </div>
          </div>
          <div
            className={styles.slider__right_value}
            style={{
              left: `${(limits.left + limits.width)}%`,
            }}
          >
            <div className={styles.badgeContainer} style={{ left: `-${((limits.left + limits.width) / 100) * 20}px` }}>
              <Badge bg="info">
                {maxTag || maxVal}
              </Badge>
            </div>
          </div>
        </>
      )}

      <div className={styles.slider}>
        <div className={styles.slider__track} />
        <div
          className={styles.slider__range}
          style={{
            left: `${limits.left}%`,
            width: `${limits.width}%`,
          }}
        />
      </div>
    </div>
  );
};

export default FormDoubleRange;
