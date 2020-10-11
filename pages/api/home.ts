// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { offset, limit } = req.query;
  const topStories = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  );
  const topStoriesData = await topStories.json();

  const storySelection = topStoriesData
    .slice(0, limit)
    .map((x) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${x}.json?print=pretty`)
    );
  const stories = await Promise.all(storySelection);
  const storySelectionData = await Promise.all(
    stories.map((x: any) => x.json())
  );

  res.statusCode = 200;
  res.json(storySelectionData);
};
