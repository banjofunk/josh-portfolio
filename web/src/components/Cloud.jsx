import { animated, useSpring } from 'react-spring';

const Cloud = ({ className }) => {
  const style = useSpring({
    strokeDashoffset: 0,
    strokeDasharray: [100, 6],
    from: { strokeDashoffset: 60, strokeDasharray: [40, 20] },
    loop: { reverse: true },
    config: {
      tension: 80,
      friction: 120,
    },
  });

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.99 62.94" className={className}>
      <animated.path
        style={style}
        fill="none"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M28.69 20.44c-1-16 17.01-22.25 27.8-14.85 5.43 3.72 7.21 9.35 8.19 15.86 17.85-3.65 23 18 8 22h-11c11-2 11.78 8.1 11.78 8.1.01 4.91-3.96 8.89-8.86 8.9H14.28c-.15 0-.31 0-.46-.01-6.53-.29-11.6-5.82-11.31-12.36.29-6.53 5.82-11.6 12.36-11.31 1.41.07 2.67-.86 3.02-2.22 2.35-9.17 10.62-15.58 20.09-15.57 11.45 0 20.72 9.29 20.71 20.74v.33c0 .26.03.53.09.78.41 1.58 2.02 2.54 3.6 2.13"
      />
    </svg>
  );
};

export { Cloud };
