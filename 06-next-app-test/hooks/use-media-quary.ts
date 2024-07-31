import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', documentChangeHandler);

    // 초기 값 설정
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener('change', documentChangeHandler);
    };
  }, [query]);

  return matches;
}
