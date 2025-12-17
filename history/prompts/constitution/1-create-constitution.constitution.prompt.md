---
id: 1
title: Create Constitution
stage: constitution
date: 2025-12-17
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: user
command: /sp.constitution
labels: [constitution,setup,initialization]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

```
/sp.constitution

Project: AI-Spec–Driven Book with Embedded RAG Chatbot

Mission:
Create a unified, production-ready technical book authored via AI specifications and code, published as a Docusaurus site on GitHub Pages, with an embedded Retrieval-Augmented Generation (RAG) chatbot that answers questions grounded strictly in the book's content.

Core principles:
- Spec-first development (all outputs traceable to specs)
- Accuracy and faithfulness to book content
- Clear, structured technical writing
- Modular, reproducible architecture
- Minimal hallucination (retrieval-only answers)

Key standards:
- Book authored using Spec-Kit Plus workflows and Claude Code
- Documentation framework: Docusaurus
- Deployment target: GitHub Pages
- Code and content stored in a public GitHub repository
- Chatbot built with OpenAI Agents / ChatKit SDKs
- Backend API: FastAPI
- Vector store: Qdrant Cloud (Free Tier)
- Metadata & session storage: Neon Serverless Postgres
- RAG answers must:
  - Cite retrieved book sections
```

## Response snapshot

Created the project constitution file `.specify/memory/constitution.md` with the following key elements:

- Spec-First Development: All outputs must be traceable to specifications
- Content Accuracy and Faithfulness: Book content and RAG responses must remain faithful to source material
- Clear Technical Writing: Documentation must follow structured technical writing principles
- Modular, Reproducible Architecture: System must be modular with well-defined interfaces
- Minimal Hallucination: RAG chatbot must avoid generating ungrounded content
- Production Readiness: Components must be designed for production deployment

Also included Technology Stack Standards and Development Workflow sections as specified.

## Outcome

- ✅ Impact: Created foundational project constitution document that establishes core principles and governance
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md with project-specific principles
- 🔁 Next prompts: Proceed with creating specifications using /sp.specify
- 🧠 Reflection: Constitution provides clear governance framework for the AI-Spec–Driven Book project

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS - Constitution created with all required principles
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin creating feature specifications based on constitution