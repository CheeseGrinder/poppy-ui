import { config } from '#config';

const POPPY_BADGE = [
  '%cPOPPY-UI',
  'color:white;background:#a50000;font-weight:bold;font-size:10px;padding:2px 6px;border-radius:5px',
];

let isDebugEnabled: boolean;

export function debug(...params: any[]): void {
  if (isDebugEnabled === undefined) {
    isDebugEnabled = config.get('debug', false);
  }
  if (isDebugEnabled) {
    console.debug(...POPPY_BADGE, ...params);
  }
}
