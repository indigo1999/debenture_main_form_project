    export default defineNuxtPlugin(nuxtApp => {
      const ticker = useTicker();
      const TICKER_INTERVAL = 1000; // Update every 1 second

      setInterval(() => {
        ticker.value = Date.now();
      }, TICKER_INTERVAL);
    });