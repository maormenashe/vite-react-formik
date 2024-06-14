interface ScrollToMethods {
  scrollToElement: (element: HTMLElement, offset?: number) => void;
  scrollToTop: () => void;
  scrollToBottom: () => void;
}

export default function useScrollTo(
  durationInMs: number = 500
): ScrollToMethods {
  function smoothScrollTo(y: number): void {
    const start = window.scrollY;
    const distance = y - start;
    let startTime: number | null = null;

    function easeInOutCubic(
      t: number,
      b: number,
      c: number,
      d: number
    ): number {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    }

    function scroll(timestamp: number): void {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const run = easeInOutCubic(elapsed, start, distance, durationInMs);
      window.scrollTo(0, run);
      if (elapsed < durationInMs) requestAnimationFrame(scroll);
    }

    requestAnimationFrame(scroll);
  }

  function scrollToElement(element: HTMLElement, offset: number = 0): void {
    if (element) {
      const elementTop =
        element.getBoundingClientRect().top + window.scrollY + offset;
      smoothScrollTo(elementTop);
    }
  }

  function scrollToTop(): void {
    smoothScrollTo(0);
  }

  function scrollToBottom(): void {
    smoothScrollTo(document.body.scrollHeight);
  }

  return {
    scrollToElement,
    scrollToTop,
    scrollToBottom,
  };
}
