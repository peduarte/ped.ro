import * as DialogPrimitive from '@radix-ui/react-dialog';
import { css, keyframes } from 'stitches.config';
import { Cross1Icon } from '@radix-ui/react-icons';
import React from 'react';
import { demoButton } from './DemoButton';
import { text } from '@styles/text';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const scaleIn = keyframes({
  from: { transform: 'translate(-50%, -50%) scale(0.9)' },
  to: { transform: 'translate(-50%, -50%) scale(1)' },
});

const fadeout = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const overlay = css({
  backgroundColor: 'rgba(0, 0, 0, .55)',
  position: 'fixed',
  inset: 0,

  variants: {
    animation: {
      true: {
        '&[data-state="open"]': {
          animation: `${fadeIn} 300ms ease-out`,
        },

        '&[data-state="closed"]': {
          animation: `${fadeout} 200ms ease-out`,
        },
      },
    },
  },
});

export function Dialog({ children, ...props }) {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Overlay className={overlay()} />
      {children}
    </DialogPrimitive.Root>
  );
}

const content = css({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '$7',
  background: '$white',
  padding: '$4',
  borderRadius: '$3',
  boxShadow: '0 0 10px black',
  color: '$black',

  variants: {
    animation: {
      fade: {
        '&[data-state="open"]': {
          animation: `${fadeIn} 300ms ease-out`,
        },

        '&[data-state="closed"]': {
          animation: `${fadeout} 200ms ease-out`,
        },
      },
      scale: {
        animation: `${fadeIn} 300ms ease-out, ${scaleIn} 200ms ease-out`,
      },
    },
  },

  '&:focus': {
    outline: 'none',
  },
});

const close = css({
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  width: '$4',
  height: '$4',
  borderRadius: '$round',
  position: 'absolute',
  top: '$2',
  right: '$2',

  '&:hover': {
    backgroundColor: '$turq',
  },

  '&:focus': {
    outline: 'none',
  },
});

export const DialogContent = React.forwardRef(({ children, animation, ...props }, forwardedRef) => (
  <DialogPrimitive.Content {...props} className={content({ animation })} ref={forwardedRef}>
    {children}
    <DialogPrimitive.Close className={close()}>
      <Cross1Icon />
    </DialogPrimitive.Close>
  </DialogPrimitive.Content>
));

export const DialogTrigger = DialogPrimitive.Trigger;

export const DemoDialog = ({ animation }) => (
  <Dialog animation={typeof animation !== 'string' ? false : true}>
    <DialogTrigger className={demoButton()}>Open dialog</DialogTrigger>
    <DialogContent animation={animation}>
      <p className={text({ size: '3' })}>Order complete.</p>
      <p className={text({ size: '2', css: { mt: '$2', color: '$gray' } })}>
        You'll receive a confirmation email in the next few minutes.
      </p>
    </DialogContent>
  </Dialog>
);
