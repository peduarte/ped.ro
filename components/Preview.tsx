import { box } from '@styles/box';

export function Preview(props) {
  return (
    <div
      className={box({
        padding: '$5',
        bc: 'hsla(206 50% 95% / 15%)',
      })}
      data-preview
      {...props}
    />
  );
}
