import { useState, useEffect } from 'react';

// Cycles through `words`, typing and deleting each (Slide 4 · typewriter role).
// Honors reduced-motion by showing the first word statically.
const useTypewriter = (words, { type = 90, del = 45, hold = 1600 } = {}) => {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [text, setText] = useState(reduce ? words[0] : '');

  useEffect(() => {
    if (reduce) return;
    let i = 0;
    let sub = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[i];
      sub += deleting ? -1 : 1;
      setText(word.slice(0, sub));

      let delay = deleting ? del : type;
      if (!deleting && sub === word.length) {
        deleting = true;
        delay = hold;
      } else if (deleting && sub === 0) {
        deleting = false;
        i = (i + 1) % words.length;
        delay = type;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, type);
    return () => clearTimeout(timer);
  }, [words, type, del, hold, reduce]);

  return text;
};

export default useTypewriter;
