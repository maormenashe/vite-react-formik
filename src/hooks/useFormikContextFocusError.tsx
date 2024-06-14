import { useEffect } from "react";
import { useFormikContext } from "formik";
import useScrollTo from "./useScrollTo";

export default function useFormikContextFocusError(
  shouldScrollToElement: boolean = true
) {
  const { isSubmitting, isValidating, errors } = useFormikContext();
  const { scrollToElement } = useScrollTo();
  useEffect(() => {
    if (!isSubmitting || isValidating) return;

    const keys = Object.keys(errors);
    if (keys.length < 1) return;

    const selector = `[name="${keys[0]}"]`;
    console.log(selector);

    const errorElement = document.querySelector(selector) as HTMLElement;
    if (shouldScrollToElement) scrollToElement(errorElement, -30);
    errorElement?.focus();
  }, [
    isSubmitting,
    isValidating,
    errors,
    shouldScrollToElement,
    scrollToElement,
  ]);
}
