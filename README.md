# AURA

**Adaptive Universal Real-time Accessibility** — an education platform for students with disabilities.

Live captions, lecture notes with auto-transcription, vision assistance, and a Chrome extension that makes any website more accessible.

## project structure

```
src/
  app/              # pages + api routes
    dashboard/      # main app (notes, vision, chat, audio, etc)
    api/            # chat, vision, summarize, live camera endpoints
  components/
    sections/       # landing page sections
    dashboard/      # sidebar, widgets
    layout/         # navbar, footer
    ui/             # shared components (button, card, badge)
  lib/              # supabase clients, hooks, utils
extension/          # chrome extension (content script, popup, background)
```

## extension

the `extension/` folder is a standalone chrome extension. load it as an unpacked extension in chrome for local dev. it adds an accessibility toolbar (FAB) to any page — font scaling, dyslexia font, color filters, live captions overlay, page simplification, etc.
