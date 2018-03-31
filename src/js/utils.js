const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

export function sanitize(string) {
  let name = string.replace(/ /g, '+').toLowerCase();
  while (SCRIPT_REGEX.test(string)) {
    name = name.replace(SCRIPT_REGEX, '');
  }
  name = name.replace(/[|&;$%@?#"<>()+,]/g, '');

  if (name !== '') {
    return encodeURI(name);
  }

  return false;
}

export function desanitize(string) {
  let name = string.replace(/\+/g, ' ');

  while (SCRIPT_REGEX.test(string)) {
    name = name.replace(SCRIPT_REGEX, '');
  }

  if (name !== '') {
    return decodeURI(name);
  }

  return false;
}

export function throttle(func, wait = 100) {
  let timer = null;
  return (...args) => {
    if (timer === null) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}

export function debounce(fn, threshold = 250, immediate) {
  let timeout;

  return () => {
    const args = arguments; // eslint-disable-line prefer-rest-params
    const delayed = () => {
      fn(...args);
      timeout = null;
    };

    if (timeout) {
      clearTimeout(timeout);
    } else if (immediate) {
      fn(...args);
    }
    timeout = setTimeout(delayed, threshold);
  };
}
