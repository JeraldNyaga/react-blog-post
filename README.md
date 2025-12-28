# React Components & Props — Vite Lab

Small demo showing common React patterns used in modern React (React 19):
- action-style form handling for creating posts
- mapping an array of blog posts to child components
- passing props and callback functions through a shared parent
- using useRef to bring a form into view without triggering extra re-renders

## Overview

This project demonstrates a minimal, practical wiring of components for a blog-like UI:

- App (parent) holds the posts array and the boolean that toggles the AddBlog form.
- AddBlog is the action-form component that gathers input, builds a new post object (id + formatted date), and calls a parent callback to append the post.
- ArticleList maps posts → Article components.
- NewBlogButton toggles the form visibility via props from App.

## Key patterns

1) Action-style form handling
- The AddBlog form collects fields locally and submits via a handler that:
  - prevents default browser behavior,
  - builds the new post,
  - invokes a parent callback (passed as a prop) to update the posts state.
- This keeps the form logic contained while letting the parent own the state (lifting state up).

2) Mapping over blog posts
- ArticleList receives the posts array and renders:
  - posts.map(post => <Article key={post.id} {...post} onDelete={...} />)
- Each Article receives only the props it needs (title, body, author, date) and optional callbacks.

3) Passing props & callbacks through a shared parent
- App passes data + setters down:
  - posts → ArticleList
  - setPosts (or an append function) → AddBlog
  - showForm + setShowForm → NewBlogButton and AddBlog
- Children call callbacks to request state changes; App remains the single source of truth.

4) useRef to scroll the form into view without extra re-renders
- AddBlog uses useRef to reference the form DOM node and calls .scrollIntoView() when the form becomes visible.
- Refs are mutable and do not trigger renders, so this imperative DOM action avoids unnecessary re-render cycles.

Example snippet (AddBlog scroll logic):

```jsx
const formRef = useRef(null);

useEffect(() => {
  if (showForm && formRef.current) {
    formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}, [showForm]);
```

This pattern ensures the form is focused or visible when toggled without updating React state.

## Quick start

```bash
npm install
npm run dev
npm test
```

## Files to inspect

- src/components/App.jsx — parent wiring, posts state
- src/components/AddBlog.jsx — action-style form, useRef scroll logic
- src/components/ArticleList.jsx — maps posts → Article
- src/components/Article.jsx — single post rendering
- src/data/blog.js — initial posts data

## License

MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.