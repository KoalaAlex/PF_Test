---
path: "projects/intensa-drum"
date: "2018-10-20T17:08:58.246Z"
title: "intensa-drum"
tags: [design, development, project]
images : [
  "../images/intensa-drum/id_01_800x600.jpg",
  "../images/intensa-drum/id_02_800x600.jpg",
  "../images/intensa-drum/id_03_800x600.jpg",
  "../images/intensa-drum/id_04_800x450.jpg",
  "../images/intensa-drum/id_05_800x442.jpg",
  "../images/intensa-drum/id_06_800x440.jpg",
  "../images/intensa-drum/id_07_800x440.jpg"
  ]
projectTitle: "VOITH - INTENSA DRUM"
projectContext: ["Client Project (2017)"]
teamSize: "Small Size Team (~5 people)"
projectType: "Desktop-/Augmented Reality Application"
tasks: [
  "Frontend Development",
  "Interaction Design",
  "AR Tracking and Stability",
  "world UI",
  "Performance Optimization"
]
intention: [
  "Our client, Voith GmbH wanted to show their product and its functionality in an interactive application. They also asked to create an AR App for mobile devices. This solutions should be used at exhibitions and for customer acquisition. The app offers a 3D view of the Intensa Drum product. Users are able to the object through touch/scroll/pinch interactions. This is used to get a feeling of how the product looks like and works.",
  "It is also possible to tap/click specific hotspots to get further information about the Intensa Drum.
  These hotspots can also trigger animations for the 3D object. It shows some containers moving into the drum and getting shredded to become liquid molasses. Other hotspots guide users to a specific part of the facility where they can get additional information and watch video descriptions of the products behavior.",
  "The AR application requires an image-target that can be downloaded from the companies homepage or can be found on some flyers/magazines. Placing this image in front of the device camera triggers the AR behavior of the product. This image is needed to place the 3D object in a three dimensional space."
]
process: [
  "One client requirement was that the AR application hat to work on an iPad Air. Therefore we were not able to integrate Apples ARKit technology as it is not supporting this device. Thats why we chose the Wikitude Framework instead. This framework had a major downside on building time, because after every export to XCode it needed to be assigned in XCode binarys. A runscript to remove the simulator architecture had also to be inserted manually. Our solution to this problem was to code a linker script right from Unity.",
  "Another difficulty was to make the physics work in AR mode as various interactions were messing them up completely. We figured out a way to solve this by moving all rotating and scaling interactions away from the 3D object to the camera object."
]
technology: [
  "Devlopment: Unity",
  "AR Framework: Wikitude",
  "Camera: Cinemachine",
  "3D Models: 3dsMax",
  "IDE: Visual Studio"
]
platforms: ["iOS Devices, Windows (without AR)"]
---
