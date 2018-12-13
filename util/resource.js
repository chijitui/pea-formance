function getInfo(performance, src) {
  if (performance.getEntriesByName) {
    const resource = performance.getEntriesByName(src);
    return {
      name: resource.name,
      initiatorType: resource.initiatorType,
      nextHopProtocol: resource.nextHopProtocol,
      transferSize: resource.transferSize,
      totalTime: resource.responseEnd - resource.requestStart,
      downloadTime: resource.responseEnd - resource.responseStart,
      ttfb: resource.responseStart - resource.requestStart,
      start: resource.requestStart,
      end: resource.responseEnd
    };
  }
  return {};
}

module.exports = {
  getInfo,
};
