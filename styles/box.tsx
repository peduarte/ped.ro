import { CSS, css } from 'stitches.config';

const _box = css({ boxSizing: 'border-box' });
export const box = (css: CSS) => _box({ css });
