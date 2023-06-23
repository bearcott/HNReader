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

export const useIsScrolling = () => {
  let timer = null;

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!isScrolling) setIsScrolling(true);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setIsScrolling(false);
        timer = null;
      }, 1000);
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isScrolling;
};
