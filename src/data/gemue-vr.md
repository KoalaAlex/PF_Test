---
path: "projects/gemue-vr"
date: "2018-10-20T17:01:50.246Z"
title: "gemue-vr"
tags: [design, development, project]
images: [
  "../images/gemue-vr/gm_vr_01_800x450.jpg",
  "../images/gemue-vr/gm_vr_02_800x450.jpg",
  "../images/gemue-vr/gm_vr_03_800x450.jpg",
  "../images/gemue-vr/gm_vr_04_800x450.jpg",
  "../images/gemue-vr/gm_vr_05_800x450.jpg",
  ]
projectTitle: "GEMUE - Schulungsanwendung"
cardText: "VR training and MEETING system for Engineers."
projectContext: ["Client Project (2017-now)"]
teamSize: "Middle Size Team (~10 people)"
projectType: "Virtual Reality Application"
tasks: ["Frontend Development", "Research", "Interaction Design", "Network Synchronization", "Performance Optimization"]
intention:   [
  "The main idea was to build a training system for engineers with the help of VR Technology. On top of that the client required to have a virtual meeting place for all his headquarters. It should be possible for engineers to meet other peers remotely via network in a virtual space to start training activities as a group. The user starts the application in a lobby where they can modify their avatar. In order to do this they have to move towards a mirror. Users are able to change the visual appearance of their avatar ranging from outfits, faces, hair color etc. This is an encapsulated experience that has no multiplayer component so that users with zero VR knowledge can take their time to get used to it. The users can acclimate first and take time learn the interaction system of the application.",
  "When the user feels ready they can join the workshop- or the meeting room via a doorknob. Both modes have a strong multiplayer component. Users are able to see colleagues in there and interact with them.",
  "The workshop room is the place where a user can start the maintenance training through a step by step process. They receive “quests” that hints to their mistakes and gives hives tips. The training is covering a scenario of the maintenance on a valve with a membrane change.",
  "The meeting room is a place where users can take some time off and relax. They are able to chitchat with other Gemue peers. Of course I’ve added some eastereggs to this project too. Look out for laser-swords and ducks."
  ]
process: [
  "This was one of the most fun and but also toughest projects I’ve ever worked on. Most of the bugs were discovered in the multiplayer implementation. You had to be very clear about who was the manipulator of which item in a scene and how the transfer ownership works. Because of certain limitations in transferring data not all variables where kept synchronized between the users. The objects that were the most troublesome where the ones that could be manipulated in their position/rotation. Item-, button-states and the quest system were also quite difficult to implement properly.",
  "To prevent bigger bugs in the quest-line we had to make a check before each new player entered the workshop room. The solution to this problem included a check to inspect if the quest is currently active or not. If it would return FALSE another user would be able to join otherwise they would be rejected.",
  "The project is being released in phases. It has matured very well and is still maintained by the team. The client is already using this solution for their training purposes."
]
technology: [
  "Development: Unity",
  "VR interaction system: VRTK",
  "VR release: SteamVR",
  "Network synchronization: Photon Engine",
  "3D models: 3dsMax",
  "IDE: Visual Studio"
]
platforms: ["Windows Standalone"]
videos: [
  [
    [
      'https://media.stollvongati.com/files/media/StollvonGati_VR_Schulungsanwendung.mp4',
      'video/mp4'
    ],
    [
      'https://media.stollvongati.com/files/media/StollvonGati_VR_Schulungsanwendung.webm',
      'video/webm'
    ],
    [
      'https://media.stollvongati.com/files/media/StollvonGati_VR_Schulungsanwendung.ogv',
      'video/ogg'
    ],
  ]
]
---
<a href="https://stollvongati.com/de/projekte/vr-schulungsanwendung-fuer-gemue.html" target="_blank">Check out the project here!</a>
