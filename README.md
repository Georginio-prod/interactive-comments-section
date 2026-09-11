# Interactive comments section (Frontend Mentor)

![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-Challenge-3F54A3)

🔗 **Démo en ligne** : <https://interactive-comments-section-five-alpha.vercel.app>
📦 **Code source** : <https://github.com/Georginio-prod/interactive-comments-section>
🎯 **Défi** : [Interactive comments section](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9) (niveau *Intermediate*)

---

## 📌 Présentation

Section de **commentaires interactive** à la manière d'un fil de discussion : commentaires
et réponses imbriquées, votes, ajout / modification / suppression de commentaires par
l'utilisateur courant, avec fenêtre de confirmation avant suppression.

C'est un exercice de **gestion d'état côté client** en Vue (options API : `data`, `methods`)
et de composition d'interface (popups, formulaires inline, réponses indentées).

## ✨ Fonctionnalités

- Affichage de commentaires avec **réponses imbriquées** et mention `@utilisateur`.
- **Vote** (+ / −) avec compteur par commentaire (`conteur`, `conteur1`…).
- **Répondre** à un commentaire (formulaire inline).
- **Ajouter** un nouveau commentaire (zone de saisie + bouton *Send*).
- **Modifier** ses propres commentaires (carte d'édition).
- **Supprimer** avec **modale de confirmation** (« Delete comment ? »).
- Responsive mobile / desktop.

## 🛠️ Stack

Vue 3 (Options API) · Vite 5 · Tailwind CSS 3.

## 📁 Structure

```
interactive-comments-section/
├── src/
│   ├── App.vue · main.js · style.css
│   └── components/content.vue   # Fil de commentaires + toute la logique (état, méthodes)
├── public/                      # Avatars, icônes (reply, edit, delete, +/−)
└── tailwind.config.js · vite.config.js
```

## 🚀 Installation & lancement

```bash
git clone https://github.com/Georginio-prod/interactive-comments-section.git
cd interactive-comments-section
npm install
npm run dev
```

## 🌐 Déploiement

Déployé sur **Vercel**. Aucune configuration nécessaire.

## 🔮 Pistes d'amélioration

Charger les commentaires depuis `data.json` (fourni par le défi), persister dans
`localStorage`, extraire un composant `Comment` récursif au lieu d'un unique fichier.

---

## 👤 Auteur

**Komla Etonam Georges EKLOU** (Georginio) — Développeur Full Stack Web & Web3

[![GitHub](https://img.shields.io/badge/GitHub-Georginio--prod-181717?logo=github)](https://github.com/Georginio-prod)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profil-0A66C2?logo=linkedin)](https://www.linkedin.com/in/komla-etonam-georges-eklou-68518b23b)
[![Portfolio](https://img.shields.io/badge/Portfolio-georginio.w3frame.com-6C63FF)](https://georginio.w3frame.com/)

> 📚 Tous mes projets sont listés et documentés sur mon [profil GitHub](https://github.com/Georginio-prod).
