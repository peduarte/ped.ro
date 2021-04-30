import { box } from '@styles/box';

export function Preview(props) {
  return (
    <div
      className={box({
        mx: '-$4',
        padding: '$3',
        bc: 'hsla(206 50% 95% / 15%)',

        '@bp1': {
          mx: 0,
          padding: '$4',
          borderTopLeftRadius: '$3',
          borderTopRightRadius: '$3',
        },
      })}
      data-preview
      {...props}
    />
  );
}
