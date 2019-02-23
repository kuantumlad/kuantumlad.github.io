---
layout: post
title: "Generate Da Vinci's Mona Lisa with Polygons?"
img: Mona_Lisa.jpg # Add image post (optional)
date: 2018-07-15 12:55:00 +0300
description:  Add post description (optional)
tag: [Mona Lisa, Hill Climbing, Genetic Algorithm]
---
The principal goal of this project is to find a way to efficiently compress a source image from a finite number of n-sided polygons by adjusting the color and coordinate space using the hill climbing algorithm (commonly called the genetic algorithm). The hill climbing algorithm is implemented in this project to take a set of 3 sided polygons, triangles, and adjust the color and vertices of each corner of the triangle until the target image is formed by the set of polygons. In this case the image is the famous Mona Lisa by Leonardo da Vinci.

### The Hill Climbing Algorithm (HCA) ###
The Hill Climbing algorithm is an optimization algorithm that iteratively finds the best solution for the set of parameters against the target solution. For example the initial state of the problem is chosen at random and parameters are tweaked randomly until the next best solution is found. This process is iteratively done in order to minimize the loss.

#### HCA with Images ####

Each triangle has three vertices which can be assigned a position in the xy-plane and an RBG color. If there are N triangles which can have either their vertices moved or color values changes then the number of degrees of freedom for this problem is $$ N*(3 * 2)*(3 * 3) $$ . In other words it's the product of the number of triangles and the number of directions that each of the three vertices can be moved and the number of color values that can be changed for each. The loss function takes into account these degrees of freedom by calculating the $$\chi^{2}$$ for each iteration.

$$ \chi^{2} = \sum_{pixel=1}^{N_{pixels}} (\overrightarrow{X}_{target} - \overrightarrow{X}_{pixel}) + (\overrightarrow{C}_{target} - \overrightarrow{C}_{pixel}) $$

If the $$\chi^{2}$$ of the current iteration is better then the previous one then that configuration of triangles is kept. Because of this process the created image will not exactly match that of the target but it will get relatively close.

### Implementation of HCA ###

There are two ways to implement this algorithm: (1) iterate toward the best solution that can fit the entire image, (2) split the image into a grid and fit more triangles within the grid. After successfully implementing the first method I split the image into a grid to achieve a better composite image of Mona Lisa.


