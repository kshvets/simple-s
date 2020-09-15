Sentry.init({
  dsn: 'https://41a2636e8ebb4c869671e0cd4782144c@o447782.ingest.sentry.io/5428100',
  integrations: [
    new Sentry.Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
});