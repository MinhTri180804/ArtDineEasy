export const getFinalSegments = (str: string, count: number): any => {
  const parts = str.trim().split(' ');

  if (parts.length >= 2) {
    const lastTwoSegments = parts.slice(-count).join(' ');
    const remainingSegments = parts.slice(0, -count).join(' ');
    return [remainingSegments, lastTwoSegments];
  } else {
    return ['', str];
  }
};
