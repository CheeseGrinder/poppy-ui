console.log("extends expect")

expect.extend({
  toHaveShadowRoot(received) {
    if (!(received instanceof HTMLElement)) {
      throw new Error('received should be an HTMLElement');
    }

    const pass = received.shadowRoot !== null;
    const message = `expected ${received.tagName.toLowerCase()} to have shadowRoot`;

    return {
      pass,
      message: () => message,
    };
  },
});

expect.extend({
  toHaveShadowPart(received, part) {
    if (typeof part !== 'string') {
      throw new Error('expected toHaveShadowPart to be called with a string of the CSS shadow part name');
    }

    if (received.shadowRoot === null) {
      throw new Error('expected toHaveShadowPart to be called on an element with a shadow root');
    }

    const shadowPart = received.shadowRoot.querySelector(`[part="${part}"]`);
    const pass = shadowPart !== null;

    const message = `expected ${received.tagName.toLowerCase()} to have shadow part "${part}"`;

    return {
      pass,
      message: () => message,
    };
  },
});