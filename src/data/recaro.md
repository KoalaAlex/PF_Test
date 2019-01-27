---
path: "projects/recaro"
date: "2018-10-20T17:03:34.246Z"
title: "recaro"
tags: [design, development, project]
images: [
  "../images/recaro/rec_01_800x565.jpg",
  "../images/recaro/rec_02_800x565.jpg",
  "../images/recaro/rec_03_800x480.jpg"
  ]
projectTitle: "Recaro - Seat configurator"
cardText: "Configure a plane seat in virtual reality."
projectContext: ["Client Project (2016-2017)"]
teamSize: "Middle Size Team (~8 people)"
projectType: "Virtual Reality Application"
tasks: [
  "Frontend Development",
  "Interaction System",
  "Research",
  "Performance Optimization",
  "Model/Color Switcher System",
  "Dynamic Light System"
]
intention: [
  "The client Recaro wanted to create a VR configurator for their seat products as an application that can be shown at exhibitions. It should be in general a lite version of their a basic seat configurator. It is considered a lite version because it covers only one of their products: The CL6710.",
  "Some parts of the seat can be colorized by the users for personalization purposes. Some other devices could be completely changed and modified. The user is operating the application through VR controllers. With the left one they are able to manipulate the global states of the scene like daytime, cabin light, seat position etc. With the right one the user is able to modify the seat and trigger animations (e.g. for opening the entertainment screen or seat divider).",
  "The interactions could get easily overloaded. Originally the interaction system was designed for engineers which have less to medium experience in VR. Especially for the exhibition in Hamburg we added an extra goal to this project. We wanted it be as easy as possible to operate by everyone without VR skills. That’s why we created a tablet connection where a trained person could also make some inputs to the VR application. These inputs were ranging from triggering animations, changing the daytime or colors of the seats."
]
process: [
  "At the beginning of this project there were not many interactions kits available for VR applications. Therefore we had to created our own one. For the base of this project we used SteamVR for common button inputs. We then linked these events to our custom behaviors (e.g. pointer raycast on objects). It required a lot of research work and many trial and error approaches for the behavior to work properly.",
  "On top of that the whole system needed to be as dynamic as possible. We created a global material manager and a shader switcher which connects all function for 3D objects called MOG.
  The general tablet connection was not implemented by me but I handled the received informations from the socket connection in Unity and passed some parameter information back via to the tablet. Some states needed to be implemented bidirectional for example if the VR user changes the daytime it also needed to be reflected on the tablet client."
]
technology: [
"Devlopment: Unity",
"VR Interaction System: Selfmade",
"VR Release: SteamVR",
"Camera: Cinemachine",
"3D Models: 3dsMax",
"IDE: Visual Studio"
]
platforms: ["Windows Standalone"]
videos: [
  [
    [
      'https://media.stollvongati.com/files/media/AircraftInteriors_RECARO.mp4',
      'video/mp4'
    ],
    [
      'https://media.stollvongati.com/files/media/AircraftInteriors_RECARO.webm',
      'video/webm'
    ],
    [
      'https://media.stollvongati.com/files/media/AircraftInteriors_RECARO.ogv',
      'video/ogg'
    ]
  ]
]
---
<a href="https://stollvongati.com/de/projekte/virtuelle-flugzeugkabine-fuer-recaro-business-class-sitze.html" target="_blank">Check out the project here!</a>
