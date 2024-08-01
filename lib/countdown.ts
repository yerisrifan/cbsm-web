// countdown.ts

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const RELEASE_DATE = new Date("2024-08-30T00:00:00");

export const getTimeLeft = (): TimeLeft => {
  const now = new Date();
  const difference = +RELEASE_DATE - +now;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
};

export const formatTime = (value: number): string => {
  return value.toString().padStart(2, "0");
};

export const pluralize = (value: number, unit: string): string => {
  const formattedValue = formatTime(value);
  return `${formattedValue} ${value === 1 ? unit.slice(0, -1) : unit}`;
};

export const generateTriangles = (
  count: number
): Array<{ top: string; left: string; scale: number; rotation: number }> => {
  return Array.from({ length: count }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    scale: 0.5 + Math.random() * 0.5,
    rotation: Math.random() * 360,
  }));
};
