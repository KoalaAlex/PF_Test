---
path: "projects/liebherr"
date: "2018-10-20T17:06:58.246Z"
title: "liebherr"
tags: [design, development, project]
images: [
  "../images/cranesim/cranesim01.jpg",
  "../images/cranesim/cranesim_cabine_1024x576.jpg",
  "../images/cranesim/cranesim_LasVegas_1600x900.jpg",
  "../images/cranesim/cranesim01.jpg",
  ]
projectTitle: "Simulator VR"
cardText: "Experience how it feels to operate a crane"
projectContext: ["Client Project (2016)"]
teamSize: "Big Size Team (~30 people)"
projectType: "Virtual Reality Application"
tasks: [
  "Frontend Development",
  "Interaction Design",
  "Research",
  "Performance Optimization",
  "Crane Bending Shader",
  "Highscore Implementation",
  "Rope Physics",
  "Greenscreen Shader"
]
intention: [
  "The client asked to create a VR training system for Liebherr for the Oculus Rift Headset. The highest complexity for this was that crane behaviour should behave as realistically as possible. This means it had to rely on real physics. For example when the wind is blowing strong or the workload on the crane is too big the crane-arm will start moving or bending in a very realistic manner.",
  "From the get go we knew that the Unity Physics were not accurate enough for these requirements. Therefore we reached out for help from the University Stuttgart. They were responsible for the calculation of the forces. These physic values were passed over in real time to our VR application through socket connection (Beckhoff system).",
  "To have the full experience there was also a real crane cabin provided by Liebherr for the users to sit in. This cabin is connected with a hydraulic system so that it is able to rotate and tilt. All the windows in the cabin are colored in a green (looks like a really fancy green screen setup). An external 120fps camera attached to the Oculus Rift captured the cabin from a users perspective. A system renders out the green color of the windows and maps the virtual world onto it. The outcome is that users are able to see the real life cabin and their hands combined with the virtual crane. This means we’ve created a mixed reality experience with the help of multiple different types of technology."
]
process: [
  "In the beginning phase of the project almost everything was calculated on the CPU (e.g. image capturing via the 120fps camera, physics, data transfer of the Beckhoff system). We managed to separate some of these processes into threads for multicore cpu usage. However, at that time Unity only supported a maximum of 2 cores. This means the tread system had to be relatively simple. The first attempts of connecting the unity physics with the external calculated physic system lead to a very funny behavior which we kept as an easteregg in the final product (swingboat crane). The green screen shader was written in Unity’s shader system were it is able to select one color.",
  "Initially none of us could stay longer than 2 minutes in the application with the headset on before getting sick. The biggest problem we had to deal with were floating point errors while transferring and converting the position and rotation data to the external system. Another problem was the latency we got while passing the data and receiving the new one. We solved these things after damping the output value and interpolating the data on the last couple of frames shown to the user. range to be rendered as transparent."
]
technology: [
  "Devlopment: Unity",
  "VR Release: SteamVR",
  "Crane Physics: University Stuttgart",
  "Physics Data Transfer: Beckhoff System",
  "3D Models: 3dsMax",
  "IDE: Visual Studio"
]
platforms: ["Windows Standalone"]
videos: [
  [
    [
      'https://media.stollvongati.com/files/media/liebherr_lisim_bauma_video.mp4.mp4',
      'video/mp4'
    ],
    [
      'https://media.stollvongati.com/files/media/liebherr_lisim_bauma_video.webmhd.webm',
      'video/webm'
    ],
    [
      'https://media.stollvongati.com/files/media/liebherr_lisim_bauma_video.oggtheora.ogv',
      'video/ogg'
    ]
  ],
  [
    [
     'https://media.stollvongati.com/files/media/Liebherr_710_Applikation_final.mp4',
     'video/mp4'
    ],
      [
        'https://media.stollvongati.com/files/media/Liebherr_710_Applikation_final.webm',
        'video/webm'
    ],
      [
        'https://media.stollvongati.com/files/media/Liebherr_710_Applikation_final.ogv',
        'video/ogg'
    ]
  ]
]
---
Check out the project <a href="https://stollvongati.com/de/projekte/lisim-simulator-fuer-liebherr-turmdrehkrane.html" target="_blank">here</a> and <a href="https://stollvongati.com/de/projekte/der-liebherr-turmdrehkran-710-hc-l-als-vr-erlebnis.html" target="_blank">here</a>!
