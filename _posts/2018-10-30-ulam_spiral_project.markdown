---
layout: post
title: "Visualize Ulam's Spiral"
img: Ulam_Spiral.jpg # Add image post (optional)
date: 2018-10-30 12:55:00 +0300
description:  Add post description (optional)
tag: [Ulam's Spiral, Prime Numbers, Math]
---
# Ulam's Spiral #
Ulam's Spiral is a fun way to visualize the set of positive real numbers with an emphasis on the set of prime numbers. The spiral was originally thought up by the mathematician Stanislaw Ulam in 1963 while apparently doodling on a napkin at a very boring mathematics lecture.

## Creating the Spiral ##

The spiral is created by creating a square spiral in the counter clockwise direction by starting with the number 1 at the center. The numbers are represented by dots in the image, with white representinga nonprime number while the circle is colored red for a prime number.

<figure>	   
  <img src="/Users/bclary/Documents/work/website/kuantumlad.github.io/images/ulam_spiral/ulam_spiral_text.png" alt="" height="20%" width="20%">
    <figcaption>Fig. 1 - To visualize the numerical representation of Ulam's spiral the first 40 numbers are shown starting from 1 and working outward in a spiral like manner Later the numbers of replaced with circles colored red to represent prime numbers. </figcaption>
</figure>     



## Visualizing the Spiral ##

Below is an image created using Ulam's Spiral technique with 22500 numbers arranged in a square lattice. What is interesting is the formation of lines comprised of prime numbers throughout the image! Ulam notes that this is not unexpected because within those regions of high prime density a prime generating polynomial is thought to be resonsible for this.

## Coding ##

Rather than use a C++ <code> std::vector </code> container this time a dynamic array containing pointers to n instances of <code> sf::CircleShape </code> was used for the project. The properties of the CircleShape class are altered depending on whether the number associated with the instance was prime or not.

Below is example code illustrating a dynamically allocated array of size N for type <code> sf::CircleShape* </code>.

<code>
sf::CircleShape **ulam_grid_circles = new sf::CircleShape*[N];
</code>

Remember to delete the object in memory to avoid memory allocation issues using <code> delete[] </code>


Citations:





