import { useState, useCallback } from "react";

import { HashtagsService, THashtags } from "services";

export const useHashtags = () => {
  const [hashtags, setHashtags] = useState<THashtags>([]);

  const getAllHashtags = useCallback(async () => {
    const hashtags = await HashtagsService.getAllHashtags();
    setHashtags(hashtags);
  }, []);

  return { hashtags, getAllHashtags };
}
