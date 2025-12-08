# Portfolio Thierry Aplogan - Instructions Copilot

## 📋 Vue d'ensemble du projet

Portfolio professionnel multilingue (FR/EN) basé sur le template Nuxt UI officiel.

**Stack technique :**
- Nuxt 3 (v4.2.1) - Framework SSR
- Nuxt UI (v4.2.1) - Composants UI
- Nuxt Content (v3.8.2) - Gestion du contenu en YAML
- @nuxtjs/i18n - Internationalisation FR/EN
- Motion-v - Animations
- Tailwind CSS v4.0 - Styling
- TypeScript - Type safety

**Architecture :**
- **Content-first** : Contenu géré dans `content/*.yml`
- **Composants Landing*** : Sections modulaires dans `app/components/landing/`
- **i18n hybride** : Données structurées en YAML + traductions en JSON

## 🎨 Design System

**Couleurs :**
- Primary : `cyan` (#06B6D4) - Moderne, tech-forward
- Neutral : `neutral` - Base neutre pour 95% du design
- Accent : Utiliser cyan avec parcimonie (5% maximum)

**Style :**
- Minimaliste, épuré, spacieux
- Swiss/International design aesthetic
- Animations subtiles (Motion)
- Micro-interactions légères

## 📁 Structure des fichiers clés

```
app/
├── app.config.ts           # Config globale (avatar, email, couleurs)
├── app.vue                 # Point d'entrée
├── components/
│   ├── AppHeader.vue       # Navigation floating
│   ├── AppFooter.vue       # Footer minimaliste
│   ├── ColorModeButton.vue # Toggle dark/light
│   └── landing/            # Sections de la home
│       ├── Hero.vue
│       ├── About.vue
│       ├── WorkExperience.vue
│       ├── Testimonials.vue
│       └── FAQ.vue
├── pages/
│   ├── index.vue           # Home (assemble les Landing*)
│   ├── about.vue           # À propos
│   ├── projects.vue        # Projets
│   └── speaking.vue        # Conférences (à supprimer)
└── utils/
    ├── links.ts            # Navigation items
    └── clipboard.ts

content/
├── index.yml               # ⭐ Contenu principal home
├── about.yml               # Contenu page about
├── projects.yml            # Métadata projets
├── projects/               # Projets individuels (markdown)
└── blog/                   # Articles (à supprimer)

locales/
├── fr.json                 # Traductions françaises
└── en.json                 # Traductions anglaises

public/
├── avatar.jpg              # Avatar principal
├── og-image.jpg            # OG image pour réseaux sociaux
└── about/
    └── setup-dev.jpg       # Photo workspace
```

## 🌐 i18n - Approche hybride

**Principe :**
1. **Données structurées** (dates, URLs, logos) → `content/*.yml`
2. **Textes** (titres, descriptions) → `locales/*.json`

**Configuration :**
- Stratégie : `no_prefix` (pas de /fr ou /en dans l'URL)
- Locale par défaut : `fr`
- Détection navigateur : Activée
- Cookie : `i18n_redirected`

**Utilisation dans les composants :**
```vue
<script setup>
const { t, locale } = useI18n()
</script>

<template>
  <h1>{{ t('hero.title') }}</h1>
</template>
```

## 🎯 Sections à implémenter

### Page Home (priorité)
1. ✅ Hero avec avatar + badge "Available"
2. ✅ About & Experience (2 colonnes)
3. 🔜 **Stack Technique** (nouveau - logos avec hover)
4. ✅ Testimonials (carousel)
5. ✅ FAQ (accordéon)
6. 🔜 **CTA Section** (avant footer)

### Page About
1. 🔜 Hero avec photo profil
2. 🔜 Section "Mon Setup" avec setup-dev.jpg
3. 🔜 Parcours détaillé
4. 🔜 Section IA & Productivité

### Page Projects
1. 🔜 Migrer 6 projets depuis `old-portfolio/src/datas/projects.js`
2. 🔜 Créer fichiers markdown dans `content/projects/`
3. 🔜 Copier images depuis `old-portfolio/public/`

### À supprimer
- ❌ Section Blog
- ❌ Page Speaking
- ❌ Fichiers dans `content/blog/`

## ⚠️ Règles importantes

### 1. **TOUJOURS vérifier après modification**
Après chaque tâche, utiliser l'outil `get_errors` pour vérifier qu'il n'y a **aucune erreur de compilation ou ESLint**.

**Ne PAS exécuter `npm run dev`** - l'utilisateur a déjà son serveur qui tourne.

### 2. **Respecter la structure du template**
- Ne pas modifier l'architecture de base
- Utiliser les composants Nuxt UI existants (UPageHero, UPageSection, UCard, etc.)
- Suivre les patterns du template

### 3. **Schémas Zod dans content.config.ts**
Tout contenu dans `content/*.yml` doit respecter les schémas définis. Si modification nécessaire :
1. Modifier le schéma dans `content.config.ts`
2. Adapter le YAML correspondant
3. Mettre à jour le composant qui consomme les données

### 4. **Traductions complètes**
Chaque clé dans `locales/fr.json` doit avoir son équivalent dans `locales/en.json`.

### 5. **Images optimisées**
- Avatar : 512x512px ou 1024x1024px (carré)
- Setup : 1920x1080px (16:9)
- OG Image : 1200x630px (format social media)
- Projets : Format variable, mais optimiser pour le web

### 6. **Micro-interactions subtiles**
- Préférer les animations Motion du template
- Éviter les effets too much (3D, particules, cursors custom)
- Hover states : scale 1.05-1.1 maximum

## 🚀 Workflow de développement

### Commandes
```bash
npm install           # Installer les dépendances
npm run dev          # Lancer le serveur de dev (port 3000)
npm run build        # Build de production
npm run preview      # Preview de la prod
npm run lint         # Linter le code
npm run lint:fix     # Fixer les erreurs de lint
npm run typecheck    # Vérifier les types TypeScript
```

### Checklist avant commit
- [ ] `npm run dev` démarre sans erreur
- [ ] Aucune erreur dans la console navigateur
- [ ] Traductions FR/EN complètes
- [ ] Images optimisées et placées
- [ ] Responsive testé (mobile, tablet, desktop)
- [ ] Dark mode testé

## 📝 Références utiles

**Documentation :**
- Nuxt : https://nuxt.com/docs
- Nuxt UI : https://ui.nuxt.com
- Nuxt Content : https://content.nuxt.com
- Nuxt i18n : https://i18n.nuxtjs.org

**Template de référence :**
- GitHub : https://github.com/nuxt-ui-templates/portfolio
- Demo : https://portfolio-template.nuxt.dev/

**Inspirations design :**
- https://leerob.io/ (Lee Robinson)
- https://rauchg.com/ (Guillermo Rauch)
- https://www.joshwcomeau.com/ (Josh Comeau)

## 🎨 Palette de couleurs

```css
/* Couleurs principales */
--primary: #06B6D4;      /* Cyan - accent */
--neutral: #737373;       /* Neutral-500 */

/* Backgrounds */
--bg: #FFFFFF;            /* Light mode */
--bg-dark: #0A0A0A;       /* Dark mode */
--bg-elevated: #F5F5F5;   /* Cards light */
--bg-elevated-dark: #171717; /* Cards dark */

/* Text */
--text: #0A0A0A;          /* Text primary light */
--text-dark: #FAFAFA;     /* Text primary dark */
--text-muted: #737373;    /* Text secondary */
```

## 📞 Contact & Liens

- **Email :** devgatyd@gmail.com
- **GitHub :** https://github.com/Gatyd
- **LinkedIn :** https://linkedin.com/in/thierry-aplogan
- **Repository :** https://github.com/Gatyd/portfolio

## 🔄 Processus de mise à jour du contenu

### Modifier un texte
1. Éditer `locales/fr.json` et `locales/en.json`
2. Vérifier avec `npm run dev`

### Ajouter une section
1. Créer le composant dans `app/components/`
2. Ajouter le contenu dans `content/index.yml`
3. Ajouter les traductions dans `locales/*.json`
4. Importer dans `app/pages/index.vue`
5. Vérifier avec `npm run dev`

### Ajouter un projet
1. Créer `content/projects/nom-projet.yml`
2. Ajouter les images dans `public/projects/`
3. Le système Content les récupérera automatiquement

## 🐛 Debugging

**Erreur i18n "Could not load" :**
- Vérifier que `langDir` pointe vers le bon dossier
- S'assurer que les fichiers JSON existent dans `locales/`

**Composant ne s'affiche pas :**
- Vérifier le schéma Zod dans `content.config.ts`
- Vérifier que les données YAML sont correctes
- Console navigateur pour les erreurs

**Build échoue :**
- `npm run typecheck` pour voir les erreurs TypeScript
- Vérifier que toutes les dépendances sont installées
- Supprimer `.nuxt/` et relancer

---

**Version :** 1.0  
**Dernière mise à jour :** 7 décembre 2025
