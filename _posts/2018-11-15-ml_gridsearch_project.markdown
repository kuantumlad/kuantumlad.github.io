---
layout: post
title: "Parameter Optimization with Grid Search Algorithm"
img: GridSearch.jpg # Add image post (optional)
date: 2018-11-15 12:55:00 +0300
description:  Add post description (optional)
tag: [Parameter Optimization, Chi2 Minimization, Grid Search, Algorithm, Math]
---

During my PhD at Jefferson Lab there was one project I was involved with was the alignment of the drift chambers, a detector built to aid in the reconstruction of charged particles so as to measure their momentum. While other methods were employed, I explored the use of how a grid search algorithm could potentially be used by starting with a simple example, which I illustrate below.


# Search Algorithm Overview

The goal of a grid search algorithm is to find the maximum of a known function, $$ f(\vec{\theta} ) $$, where the parameters of the model are given by $$ \vec{\theta} = (\theta_{1}, \theta_{2}, ... ) $$. One of the primary differences of this algorithms from others is that this is a gradient descent-less technique for finding the maximum of a model. All together there are three approches for a search algorithm. The first is a manual search of the parameters of the model guided by intuition or luck. In some cases this can work if there is some knowledge about where the parameters should be, but typically this method can become time consumming as the number of free parameters increases. Second is a grid search where the parameter space is exhaustingly searched. While an improvement over the first method this one can become increasingly time consuming as the number of parameters in the model grows, and it can miss the best parameters. Lastly, there is a random grid search which randomly picks a finite subset of the available parameters. The advantage to the random grid search is that is ideal for a large parameter model and can approximate the maximizing parameters in less time than a grid search. 


## The Toy Model

For this example the toy model has a 3D parameter space ($$ i=1,2,3 $$ ) with the model defines as below:

$$ f( \mu_{i}, \sigma_{i}, x_{i} ) = e^{- \frac{(\mu_{i} - x_{i})^{2} }{2\sigma^{2}_{i}} } $$


The true model results is defined as such:

$$ F( f_{1}, f_{2}, f_{3} )_{true} = f_{1} \times f_{2} \times f_{3} $$

where the maximum value of the model is defined to be equal to one and has independent variables ranges given as $$x_{i,min} < x_{i} < x_{i,max} $$

The goal is to find the value of each of the independent variables $$ x_{i} $$ that maximizes the model. Benchmarking of the results is done using a $$ \chi^{2} = ( F_{pred} - F_{true} )^{2} $$ for each grid point, which are then compared to the true parameter values. 

## Grid Search


For the grid search we divide the independent variables over a range, $$x_{min}$$ to $$x_{max}$$, with a minimum spacing $$s_{i}$$ which may be determined by the resolution of the measurements. The number of grid points in each dimension is thus:

$$ N_{i} = \frac{ x_{i,max} - x_{i,min} }{s_i}. $$

In this example the number of grid points for 3 independent variables is $$ 12 \times 20 \times 10$$ which is equal to 2400 points. The final result of the grid search yields (5,3,8) for the coordinates that maximized the model function. 

## Random Search

Instead of drawing from discrete locations within the 3D grid for the model parameters, they are drawn by generating a random number within the range of the independent variable. The number of iterations for this process is defined by the user, and is in general less than the number of grid search points. This method yields the final independent coorindates of (5.24, 3.00, 7.95)! Not too bad with less than half the iterations of that from the grid search!

# TLDR

Search Algorithms:

* Manual search - Possible, only if expert has realistic idea of parameters
* Grid search - A no no if there are too many parameters or needs fine binning
* Random search - Preferred method when there are a large number of independent variables that need to be varied. 






