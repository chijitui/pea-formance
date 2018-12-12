function getNavigation(timing, origin) {
  if (!timing || !origin) {
    console.log('浏览器不支持！');
  }
  return {
    dns: timingFormat(
      timing.domainLookupStart, timing.domainLookupEnd, origin
    ),
    tcp: timingFormat(
      timing.connectStart, timing.connectEnd, origin
    ),
    ssl: timingFormat(
      timing.secureConnectionStart, timing.connectEnd, origin
    ),
    ttfb: timingFormat(
      timing.requestStart, timing.responseStart, origin
    ),
    trans: timingFormat(
      timing.responseStart, timing.responseEnd, origin
    ),
    dom: timingFormat(
      timing.domInteractive, timing.responseEnd, origin
    ),
    res: timingFormat(
      timing.domContentLoadedEventEnd, timing.loadEventStart, origin
    ),
    firstbyte: timingFormat(
      timing.domainLookupStart, timing.responseStart, origin
    ),
    fpt: timingFormat(
      timing.fetchStart, timing.responseEnd, origin
    ),
    tti: timingFormat(
      timing.fetchStart, timing.domInteractive, origin
    ),
    ready: timingFormat(
      timing.fetchStart, timing.domContentLoadEventEnd, origin
    ),
    load: timingFormat(
      timing.fetchStart, timing.loadEventStart, origin
    ),
  }
}

function timingFormat(start, end, origin) {
  return {
    start: start - origin,
    end: end - origin
  };
}

module.exports = getNavigation;
