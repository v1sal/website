# Alikhan Abay - personal CV website

English, single-page React CV with a terminal-inspired visual style. Includes education, community volunteering, beginner skills, languages, internship availability, email contact, and a downloadable one-page PDF CV.

## Local development

```sh
cd frontend
npm ci
npm run dev
```

## Validation

```sh
npm run lint
npm run build
```

Start the development server at http://127.0.0.1:5173, then run `npm run verify`. Browser verification uses installed Google Chrome and checks four responsive widths, WCAG AA accessibility rules, keyboard navigation, email copy, and PDF download.

## Update the CV

Edit website content in `frontend/src/App.jsx` and the PDF source in `frontend/scripts/cv.html` together. Run `npm run build:cv` to regenerate `frontend/public/Alikhan-Abay-CV.pdf`; it checks the PDF has one page and renders a review PNG to `frontend/tmp/qa/cv.png`.

## Hosting

The production output is `frontend/dist`. Deploy it with a static host at the domain root. This repository does not configure public hosting.

## Design

Charcoal surfaces, pale green terminal prompts, sans-serif reading text, and monospace metadata. Numbered sections support quick HR scanning. Mobile layout stacks sections, with no terminal commands required to access content. Reduced-motion preferences and keyboard focus states are supported. OSINT is a personal interest; C++ and Korean are explicitly beginner-level. The PDF uses a conventional, selectable-text layout for applications.