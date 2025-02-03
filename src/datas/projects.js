export const projects = [
    {
      id: 1,
      name: 'TRANSIMPEX',
      description: 'Application web de gestion de transport et logistique.',
      type: "Web",
      image: '/transimpex/index.png',
      liveUrl: 'https://transimpexsas.com',
      videoDemo: null,
    },
    {
      id: 2,
      name: 'Maquette Vehix',
      description: 'Maquette d\'une application mobile de location de véhicules.',
      type: "Ui / Ux",
      image: '/vehix/maquette/maquette_vehix.png',
      liveUrl: 'https://www.canva.com/design/DAGdWYqHq8Y/SktKoz7uF00iqDawt38cgA/view?mode=prototype',
      videoDemo: null,
    },
    {
      id: 3,
      name: 'CollabSphere',
      description: 'Application web de gestion de tâche collaboratives.',
      type: "Web",
      image: 'collabsphere/index.png',
      liveUrl: null,
      videoDemo: 'collabsphere/demo_collabsphere.mp4',
      chapters: [
        { time: 0, title: "Présentation" },
        { time: 5.5, title: "Connexion" },
        { time: 10, title: "Tableau de bord" },
        { time: 17.9, title: "Gestion des projets" },
        { time: 46.5, title: "Tri et filtrage des projets" },
        { time: 62, title: "Gestion des tâches" },
        { time: 95.5, title: "Notifications" },
        { time: 110, title: "Collaborations" },
        { time: 118.4, title: "Gestion des utilisateurs" }
      ]
    },
    {
      id: 4,
      name: 'Vehix',
      description: 'Application mobile de location de véhicules.',
      type: "Mobile",
      image: '/vehix/app/logo.png',
      liveUrl: null,
      videoDemo: 'vehix/app/demo_vehix.mp4',
      chapters: [
        { time: 0, title: "Connexion" },
        { time: 5, title: "Tableau de bord" },
        { time: 11, title: "Notifications" },
        { time: 22, title: "Gestion des véhicules" },
        { time: 49, title: "Tri et filtrage des véhicules" },
        { time: 69, title: "Création de compte utilisateur" },
        { time: 76.9, title: "Location de véhicule" },
        { time: 113, title: "Gestion des locations" },
        { time: 136, title: "Paramètres" },
      ]
    }
  ]