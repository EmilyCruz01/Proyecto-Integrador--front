self.onmessage = (e) => {
  const { type, payload } = e.data;

  if (type === 'calculateProb') {
    const total = payload.maduros + payload.verdes + payload.incomibles;

    if (total === 0) {
      self.postMessage({
        type: 'calculateProb',
        result: { maduros: 0, verdes: 0, incomibles: 0 },
      });
    } else {
      const probabilities = {
        maduros: ((payload.maduros / total) * 100).toFixed(2),
        verdes: ((payload.verdes / total) * 100).toFixed(2),
        incomibles: ((payload.incomibles / total) * 100).toFixed(2),
      };

      self.postMessage({
        type: 'calculateProb',
        result: probabilities,
      });
    }
  }
};
