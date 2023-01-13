import { useEffect, useState } from "react";

export const useInitialFetch = (url: string, refetch?: any[]) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    (async () => {
      try {
        const dataRaw = await fetch(url);
        const dataJson = await dataRaw.json();
        setData(dataJson);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, ...(refetch || [])]);

  return [data, isLoading];
};
