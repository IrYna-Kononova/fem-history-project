# Feminism Project

Table of Contents
1.Introduction
2.Features
3.APIs and Libraries
4.Data Flow

# 1.Introduction
The Feminism Project is a comprehensive resource designed to educate users about the history of feminism, debunk common myths, and provide access to essential feminist literature. The goal is to promote a deeper understanding and appreciation of feminist movements and their impact on society.

# 2.Features
**Interactive Timeline:** An engaging timeline of key events in the history of feminism.
**Debunking Myths:** A section dedicated to addressing and correcting common myths about feminism.
**Literature Resources:** A curated list of important feminist literature with detailed descriptions and external links.
**Search and Filters:** Users can search for specific events and filter them by era, region, and type.

# 3.Installation
**APIs**
No external APIs used.

**Libraries**
*React:* JavaScript library for building user interfaces.
*Framer Motion:* For animations and transitions.
*React Vertical Timeline Component:* For creating the interactive timeline.
*Font Awesome:* For icons used throughout the app.

# 4.Data Flow
The data is managed and shared among components using React's state management. Here’s a brief diagram of the data flow:

[App Component]
     |
     ├── [Header Component]
     ├── [Filters Component]
     ├── [History Component]
     |       └── Fetches and displays timeline events
     |
     ├── [Myths Component]
     |       └── Fetches and displays myths and debunks
     |
     ├── [Resources Component]
             └── Fetches and displays literature resources



