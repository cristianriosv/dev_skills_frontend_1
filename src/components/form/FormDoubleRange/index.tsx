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
  min?: number;
  max?: number;
  onChange?: Function;
  showTags?: boolean
}

const FormDoubleRange: FC<TFormDoubleRange> = ({
  min = 0,
  max = 100,
  onChange,
  showTags = true,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const [limits, setLimits] = useState({ left: 0, width: 100 });
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  // const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      // Precede with '+' to convert the value from type string to type number
      const maxPercent = getPercent(+maxValRef.current.value);
      setLimits({ left: minPercent, width: maxPercent - minPercent });
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);
      setLimits({ ...limits, width: maxPercent - minPercent });
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    if (onChange) onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className={styles.container}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
        }}
        className={`${styles.thumb} ${styles.thumb__zindex_3} ${minVal > max - 100 && styles.thumb__zindex_5}`}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
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
                {minVal}
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
                {maxVal}
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
