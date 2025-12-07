# Analyse du Template Portfolio Nuxt UI

## 📂 Architecture du Template

### Structure des fichiers
```
portfolio-template/
├── app/
│   ├── app.config.ts          # Configuration globale (avatar, email, liens sociaux)
│   ├── app.vue                # Point d'entrée de l'application
│   ├── components/
│   │   ├── AppFooter.vue      # Footer avec liens sociaux
│   │   ├── AppHeader.vue      # Header avec navigation floating
│   │   ├── ColorModeButton.vue # Toggle dark/light mode
│   │   ├── PolaroidItem.vue   # Composant pour afficher des images style polaroid
│   │   └── landing/
│   │       ├── About.vue      # Section "About Me"
│   │       ├── Blog.vue       # Section blog
│   │       ├── FAQ.vue        # Section FAQ avec accordéon
│   │       ├── Hero.vue       # Hero avec avatar et animations Motion
│   │       ├── Testimonials.vue # Carousel de témoignages
│   │       └── WorkExperience.vue # Liste des expériences professionnelles
│   ├── layouts/
│   ├── pages/
│   │   └── index.vue          # Page d'accueil qui assemble les composants Landing*
│   └── utils/
├── content/
│   ├── about.yml              # Contenu page About
│   ├── blog.yml               # Métadata du blog
│   ├── index.yml              # Contenu page Home ⭐ FICHIER PRINCIPAL
│   ├── projects.yml           # Métadata des projets
│   ├── speaking.yml           # Contenu page Speaking
│   ├── blog/                  # Articles de blog (markdown)
│   └── projects/              # Projets individuels (markdown)
├── content.config.ts          # Schémas Zod pour valider le contenu
├── nuxt.config.ts             # Configuration Nuxt
└── package.json
```

## 🔑 Concepts Clés

### 1. Nuxt Content Collections
Le template utilise **Nuxt Content** avec un système de **collections** :
- Le contenu est stocké dans des fichiers YAML (`content/index.yml`, etc.)
- Les schémas Zod dans `content.config.ts` valident la structure des données
- Les composants récupèrent les données avec `queryCollection('index').first()`

### 2. Composants Landing*
Chaque section de la page d'accueil est un composant dans `app/components/landing/` :
- `LandingHero` : Hero avec avatar, titre, description, boutons
- `LandingAbout` : Section About (colonne gauche)
- `LandingWorkExperience` : Expériences pro (colonne droite)
- `LandingTestimonials` : Carousel de témoignages
- `LandingFAQ` : Accordéon de questions/réponses
- `LandingBlog` : Aperçu des derniers articles

### 3. Structure du fichier index.yml
```yaml
seo:
  title: "..."
  description: "..."
title: "Hey, I'm Emma Thompson UX/UI Designer"
description: "..."
hero:
  links:
    - label: "Use this template"
      to: https://...
      color: "neutral"
  images:
    - src: /hero/random-1.avif
      alt: Random Image 1
about:
  title: "About Me"
  description: |
    Long description...
experience:
  title: Work Experience
  items:
    - position: "Brand Designer at"
      date: "2023 - Present"
      company:
        name: Nuxt
        logo: "i-simple-icons-nuxtdotjs"
        url: "https://nuxt.com"
        color: "#00DC82"
testimonials:
  - quote: "..."
    author:
      name: 'Sarah Chen'
      description: 'Product Director at Bloom Finance'
      avatar:
        src: 'https://...'
faq:
  title: Frequently Asked Questions
  description: Answers to common questions...
  categories:
    - title: Services & Process
      questions:
        - label: What services do you offer?
          content: |
            Long answer...
```

### 4. app.config.ts
Configuration globale accessible partout via `useAppConfig()` :
```typescript
{
  global: {
    picture: {
      dark: 'url-avatar-dark',
      light: 'url-avatar-light',
      alt: 'My profile picture'
    },
    email: 'devgatyd@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    }
  },
  footer: {
    credits: 'Built with Nuxt UI',
    links: [...]
  }
}
```

### 5. Animations Motion
Le template utilise `motion-v/nuxt` pour les animations :
```vue
<Motion
  :initial="{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }"
  :animate="{ scale: 1, opacity: 1, filter: 'blur(0px)' }"
  :transition="{ duration: 0.6, delay: 0.1 }"
>
  <UColorModeAvatar ... />
</Motion>
```

## 🎯 Plan d'adaptation pour notre portfolio

### Étape 1 : Copier le template dans le workspace
```powershell
# Copier tous les fichiers du template
Copy-Item -Recurse portfolio-template/* .
# Supprimer le dossier .git du template
Remove-Item -Recurse -Force .git
```

### Étape 2 : Configuration de base

#### 2.1 Modifier `app/app.config.ts`
```typescript
global: {
  picture: {
    dark: '/avatar.jpg', // À remplacer par image générée
    light: '/avatar.jpg',
    alt: 'Thierry Aplogan - Full-Stack Developer'
  },
  email: 'devgatyd@gmail.com',
  available: true
},
footer: {
  credits: 'Built with Nuxt & Nuxt UI',
  links: [
    { icon: 'i-simple-icons-github', to: 'https://github.com/Gatyd', target: '_blank' },
    { icon: 'i-simple-icons-linkedin', to: 'https://linkedin.com/in/thierry-aplogan', target: '_blank' }
  ]
}
```

#### 2.2 Installer @nuxtjs/i18n
```powershell
npm install @nuxtjs/i18n
```

#### 2.3 Configurer i18n dans `nuxt.config.ts`
Ajouter `'@nuxtjs/i18n'` dans modules et configuration i18n

### Étape 3 : Adapter le contenu

#### 3.1 Modifier `content/index.yml`
Remplacer le contenu d'Emma Thompson par :
- Titre : "Hey, I'm Thierry Aplogan"
- Description : Notre tagline
- Hero links : Bouton "Get in touch" avec mailto
- About : Notre présentation
- Experience : Nos 4 domaines (Web, Mobile, Backend, AI)
- Testimonials : Nos 3 témoignages (Jean-Marc, Dr. Sarah, Alexandre)
- FAQ : Nos 5 questions/réponses

#### 3.2 Supprimer les sections non utilisées
- Blog section (on n'en a pas besoin pour l'instant)
- Speaking section

### Étape 4 : Ajouter l'i18n

#### 4.1 Créer les fichiers de traduction
- `locales/en.json`
- `locales/fr.json`

#### 4.2 Adapter les composants Landing*
Remplacer les textes statiques par `{{ t('key') }}`

#### 4.3 Créer un sélecteur de langue
Ajouter dans `AppHeader.vue` un dropdown pour changer de langue

### Étape 5 : Page Projects

#### 5.1 Migrer les données de `old-portfolio/src/datas/projects.js`
Créer des fichiers markdown dans `content/projects/` :
- `transimpex.md`
- `nephrocare.md`
- `vehix-maquette.md`
- `collabsphere.md`
- `vehix-app.md`
- `healthtrack.md`

#### 5.2 Copier les images
Déplacer les images de `old-portfolio/public/` vers `public/projects/`

### Étape 6 : Page About

#### 6.1 Modifier `content/about.yml`
Ajouter :
- Photo profil
- Photo setup dev
- Section sur l'utilisation de l'IA
- Parcours détaillé

### Étape 7 : Page Contact

Créer une page simple avec :
- Titre "Let's Work Together"
- Email avec mailto link
- Pas de formulaire

## 📋 Checklist d'implémentation

- [ ] Copier le template dans le workspace
- [ ] Configurer app.config.ts avec nos données
- [ ] Installer et configurer @nuxtjs/i18n
- [ ] Créer locales/en.json et locales/fr.json
- [ ] Adapter content/index.yml avec notre contenu
- [ ] Supprimer les sections Blog et Speaking
- [ ] Adapter les composants Landing* pour i18n
- [ ] Ajouter sélecteur de langue dans AppHeader
- [ ] Migrer les projets de old-portfolio
- [ ] Créer les fichiers markdown des projets
- [ ] Copier les images des projets
- [ ] Créer/adapter la page About
- [ ] Créer la page Contact
- [ ] Générer les 2 images avec Gemini
- [ ] Tester le changement de langue
- [ ] Optimiser SEO
- [ ] Valider responsive

## ⚠️ Points d'attention

1. **Ne pas modifier la structure de base** : Garder l'architecture du template
2. **Respecter les schémas Zod** : Suivre la structure définie dans content.config.ts
3. **Utiliser les composants Nuxt UI** : UPageHero, UPageSection, UCard, etc.
4. **Préserver les animations Motion** : Elles donnent du dynamisme à la page
5. **Tester avec les deux langues** : Vérifier que toutes les traductions sont présentes

## 🚀 Commandes utiles

```powershell
# Installer les dépendances
npm install

# Lancer le serveur de dev
npm run dev

# Build de production
npm run build

# Preview de la prod
npm run preview
```
