// Shared motion tokens so every section enters the same way.
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE },
  }),
};
