# Rendering Notes: Lab 06

## Task 3: Results

| Route | Source contains the time? | Changes on refresh? | Works with JS off? |
|---|---|---|---|
| /csr | No (source only has "Loading…" and a script) | Yes, the browser's time is shown | No, stuck on "Loading…" |
| /ssr | Yes ("Rendered on the server at …") | Yes, on every request | Yes |
| /ssg | Yes ("Built at …") | No, fixed until `build-static.mjs` is run again | Yes |
| /isr | Yes ("Regenerated at …") | Only after more than 5 seconds, then it regenerates | Yes |

## Task 4: Streaming

- Time to first byte: about 1 ms (measured with curl; DevTools will show a few ms, replace with your own value)
- Total time: about 1.5 s (1502 ms)

Streaming helps when one part of a page is slow, because the rest of the
page can be shown immediately instead of waiting for the slowest part.

## Task 5: Choosing a strategy

**Blog post: SSG (or ISR).** The content rarely changes and is the same
for every visitor, so it can be built once and served from a CDN. This is
the fastest and cheapest option, and ready-made HTML is good for SEO. ISR
is a good choice if posts are edited often and a full rebuild is annoying.

**Live stock-price dashboard: CSR.** The data changes every second, so any
HTML built in advance or on the server would be stale immediately. The
browser loads the shell once, then keeps updating through polling or
WebSockets. SEO matters little because the data is live and is often
behind a login.

**User's account page: SSR (with streaming for slow sections).** The page
is personal and must always be fresh, so it cannot be a shared static
file. Building it on the server keeps one user's data out of a shared
cache and gives a fast first paint. Slow parts such as order history can
be streamed so they don't block the rest of the page.

## Task 11: The React app is client-side rendered (CSR)

After `npm run build` and `npm run preview`, View Source shows only
`<div id="root"></div>`. The browser downloads the JavaScript bundle, React
runs, and React builds the page in the browser. This is the same as the
`/csr` route from Part A: the server sends an empty shell and the content
appears only after JavaScript runs.

- With JavaScript off, the page is blank.
- A crawler that does not run JavaScript sees no content (weaker SEO).
- The first paint is slower, but later interaction is instant.

Lighthouse accessibility score: ___ / 100