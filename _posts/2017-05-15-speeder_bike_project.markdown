---
layout: post
title: "Simple Interactive Speeder Bike Game"
img: SpeederBike.jpg # Add image post (optional)
date: 2017-05-15 12:55:00 +0300
description:  Add post description (optional)
tag: [Speeder Bike, C++, Game, Star Wars, Fun]
---
This was my first multiclass coding project using SFML libraries to learn more about coding fundamentals using C++. My childhood and current interest in Star Wars (the original trilogoy) was the inspiration for making this a game where the player is on a speeder bike travelling through the dense forrest of Endor trying to avoid getting shot at by enemy troopers.

# Development #
The game is comprised of a handful of classes to manage the background, the sprites ( the character ), and player input. 

# Game Cut Scene #

The game cut scene was made entirely from scratch using GIMP, an open source image editor, and stitching it together in a timely and orderly fashion for presentation. A couple elements of this were fun to create.

#### Warp Speed ####
The warp speed scene is done by first randomly generating the position of a <code> sf::VertexArray </code> object around the center of the screen. Next as warp speed or light speed was engaged the objects where then lengthed radially away from the center of the window to create the vanishing point. 

# Dynamics #

The player controlls their character via keyboard input. This includes moving left or right and jumping the the vertical direction. As the aim of the mission is to hit the enemy using a laser blaster equired to the character, the player can also shoot using the Space bar on the keyboard. However the player only has so much life and health to spare before the mission is critically endangered.

#### Jumping ####
The character's movement in the vertical direction is governed by basic kinematic equations of motion of an object under the influence of gravity.



