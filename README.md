# HN Reader (WIP)

Another HN Reader. Made out of frustration and boredom.

visit at [hn.yan.fm](https://hn.yan.fm/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Dev Notes

features I want to add:

- scroll up to refresh top of feed
- numbers on the left to symbolize the 30th, 60th, etc post so you do not get lost scrolling
- last updated counter in bottom right
- save last viewed article in bottom right corner
- override the refresh on browser
  - when updating the list, diff the position of posts to show green when a post goes up and red when a post goes down
  - save the location on the page you were at
  - last updated on the bottom right
- quick animations on the page
- comment colors, who is OP and who is not
  - is it important to highlight who is who? are comment colors necessary? Do people comment often enough to each other that its useful?
  - if its important could use color + shape
- fullscreen pages: add an arrow pointing left on item pages to push the page fullscreen. "Fullpages" can be the default when hyperlinked to the site
- dark mode
- search bar
- user page
- mobile

UX Fixes

- comments section
  - implement reddit scroll position fix when collapsing comments
  - cache collapsed comments
  - fix hover effect of article comment (you should visually see what comment is collapsed when hovering on the right)
  - make comment bars more visible ( a little )
  - why are there empty comments?
  - hidden comments should include sum of all children not just direct descendants
  - should be able to hyperlink a comment
  - increase size of collapsed comment
  - better comment formatting
    - code blocks
    - indenting and bolding
    - find `>` characters and comment block them
    - make links open in a new tab
- fix scroll bar positioning (disable scrolling of page when looking at an items)
- on HN its hard to know where you are on the list. since its paginated 30-60 looks the same as 1-30. Only the numbers tell you but they're grayed out.
- if a post has zero comments, make sure it has zero comments then don't display the post sub page when clicking on it.
