import { useEffect, useState } from "react";

/**
 * Cycles through `words`, typing and deleting each one in turn.
 * Returns the string to render at the current instant.
 */
export function useTypewriter(
  words,
  { typingSpeed = 70, deletingSpeed = 40, pauseTime = 1400 } = {}
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return undefined;
    const current = words[wordIndex % words.length];

    if (!deleting && subIndex === current.length) {
      const pause = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(pause);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return undefined;
    }

    const step = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(step);
  }, [subIndex, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  if (!words || words.length === 0) return "";
  return words[wordIndex % words.length].substring(0, subIndex);
}
