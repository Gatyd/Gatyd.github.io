# Portfolio - Cahier des charges

## 📋 Vue d'ensemble
Refonte complète du portfolio avec Nuxt 3 + Nuxt UI en se basant sur le template officiel : https://portfolio-template.nuxt.dev/

## 🎯 Objectifs principaux
- **Multi-pages** : Home, Projects, About, Contact
- **Bilinguisme** : Français + Anglais avec détection automatique du navigateur
- **Design** : Style neutre et professionnel inspiré du template de référence
- **Conversion** : Optimisé pour convaincre les clients et recruteurs

## 🌐 Internationalisation (i18n)
- **Langues** : FR (défaut) + EN
- **Stratégie** : `no_prefix` avec détection navigateur
- **Fallback** : Anglais
- **Persistence** : Cookie pour mémoriser le choix

## 🎨 Design & Style
- **Référence** : https://portfolio-template.nuxt.dev/
- **Palette** : Couleurs neutres (éviter les couleurs trop vives)
- **Navigation** : Floating centered navigation (style du template)
- **Footer** : Minimaliste avec icônes sociales uniquement
- **Composants** : Utiliser UPageHero, UPageSection, UCard, etc.

## 📄 Pages à implémenter

### 1. Home (/)
- **Hero Section** :
  - Avatar centré avec ring
  - Titre : "Hey, I'm Thierry Aplogan"
  - Badge : "Available for new projects" (vert avec animation pulse)
  - CTA : "Get in touch" (mailto)
  - Liens sociaux : GitHub, LinkedIn

- **About & Experience** (2 colonnes) :
  - Colonne 1 : Présentation courte
  - Colonne 2 : Expériences (Web, Mobile, Backend, AI)

- **Testimonials** (Carousel) :
  - Jean-Marc Dubois (CEO, TransImpex)
  - Dr. Sarah Okonkwo (Medical Director, NephroCare)
  - Alexandre Martin (Product Manager, VehiX)

- **FAQ** (Accordéon) :
  - 5 questions/réponses sur services, technologies, délais, IA, disponibilité

### 2. Projects (/projects)
- **Source de données** : Migrer depuis `old-portfolio/src/datas/projects.js`
- **Projets** (6 au total) :
  1. **TransImpex** - Plateforme logistique web
  2. **NephroCare** - Système gestion patients
  3. **Vehix (Maquette)** - Design UX/UI
  4. **CollabSphere** - Outil collaboration
  5. **Vehix (App)** - Application mobile location véhicules
  6. **HealthTrack** - Suivi santé

- **Informations par projet** :
  - Titre + description
  - Technologies utilisées (tags)
  - Images/screenshots (dans `public/`)
  - Lien démo/GitHub si disponible

### 3. About (/about)
- **UPageHero** avec orientation horizontale
- **Photo profil** : Style casual/professionnel
- **Photo setup dev** : Grande photo montrant l'environnement de travail
- **Parcours** : Expérience, formation, compétences
- **Section IA & Productivité** :
  - Utilisation de GitHub Copilot, ChatGPT, Gemini
  - Gains de productivité (30-40% plus rapide)
  - Importance pour les recruteurs

### 4. Contact (/contact)
- **Méthode** : Email uniquement (pas de formulaire)
- **Email** : devgatyd@gmail.com
- **Style** : Clean et simple avec mailto: link
- **CTA** : "Send an Email"

## 🖼️ Images à générer (avec Gemini)
1. **Photo profil casual** - Pour la home page (avatar)
2. **Photo setup dev** - Pour la page About (environnement de travail)

## 🔗 Liens sociaux
- GitHub : https://github.com/Gatyd
- LinkedIn : https://linkedin.com/in/thierry-aplogan
- Email : devgatyd@gmail.com

## 🛠️ Stack technique
- **Framework** : Nuxt 3 (v4.2.1)
- **UI** : Nuxt UI (v4.2.1)
- **Styling** : Tailwind CSS v4.0.0
- **i18n** : @nuxtjs/i18n (v10.2.1)
- **Animations** : Motion (inclus dans Nuxt UI)
- **Icons** : @iconify-json/lucide, @iconify-json/simple-icons
- **Package manager** : npm

## 📝 Contenus rédigés

### Témoignages (FR)
1. **Jean-Marc Dubois** - PDG, TransImpex
   > "Thierry a transformé nos opérations logistiques avec une plateforme web sur mesure. Son expertise technique et son approche résolution de problèmes ont réduit notre temps de traitement de 60%. Professionnel, réactif et axé sur les résultats."

2. **Dr. Sarah Okonkwo** - Directrice Médicale, NephroCare
   > "Travailler avec Thierry sur notre système de gestion des patients a été exceptionnel. Il a compris nos flux de travail médicaux complexes et a livré une solution intuitive que notre personnel a adoptée immédiatement. Son attention aux détails a fait toute la différence."

3. **Alexandre Martin** - Chef de Produit, VehiX
   > "Du design UX au développement mobile complet, Thierry a géré notre application de location de véhicules de manière impeccable. Il a anticipé les défis, proposé des solutions intelligentes et livré avant les délais. Une combinaison rare de sens du design et de compétences techniques."

### FAQ (5 questions)
1. Quels services proposez-vous ?
2. Quelles technologies maîtrisez-vous ?
3. Comment utilisez-vous l'IA dans votre workflow ?
4. Quel est votre délai typique de projet ?
5. Êtes-vous disponible pour de nouveaux projets ?

## ✅ Checklist d'implémentation

### Phase 1 : Setup (Basé sur template)
- [ ] Créer nouveau projet Nuxt avec template portfolio
- [ ] Analyser la structure du template
- [ ] Configurer i18n (FR/EN)
- [ ] Adapter les couleurs et le thème

### Phase 2 : Contenu
- [ ] Adapter la page Home avec nos contenus
- [ ] Migrer les données des projets
- [ ] Créer la page About avec sections IA
- [ ] Implémenter la page Contact (email only)

### Phase 3 : Assets
- [ ] Générer les 2 images avec Gemini
- [ ] Organiser les images des projets
- [ ] Optimiser les assets

### Phase 4 : Finitions
- [ ] Vérifier toutes les traductions
- [ ] Tester le changement de langue
- [ ] Optimiser SEO (meta tags)
- [ ] Tester responsive design
- [ ] Valider accessibilité

## 🚫 Éléments exclus (pour l'instant)
- Blog
- Formulaire de contact (email uniquement)
- Section certifications/awards (peut-être plus tard)
- Animations complexes (rester sobre)

## 📌 Notes importantes
- **Approche** : Partir du template officiel, ne pas réinventer la roue
- **Priorité** : Fonctionnalité > Originalité
- **Qualité** : Tout doit être parfait, pas de compromis
- **Timeline** : Urgent mais flexible pour avoir un résultat impeccable
