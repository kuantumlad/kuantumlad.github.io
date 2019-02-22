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

The goal of a grid search algorithm is to find the maximum of a known function, $$ f(\vec{\theta} ), where the parameters of the model are given by $$ \vec{\theta} = (\theta_{1}, \theta_{2}, ... ). One of the primary differences of this algorithms from others is that this is a gradient descent-less technique for finding the maximum of a model. All together there are three approches for a search algorithm. The first is a manual search of the parameters of the model guided by intuition or luck. In some cases this can work if there is some knowledge about where the parameters should be, but typically this method can become time consumming as the number of free parameters increases. Second is a grid search where the parameter space is exhaustingly searched. While an improvement over the first method this one can become increasingly time consuming as the number of parameters in the model grows, and it can miss the best parameters. Lastly, there is a random grid search which randomly picks a finite subset of the available parameters. The advantage to the random grid search is that is ideal for a large parameter model and can approximate the maximizing parameters in less time than a grid search. 


## The Toy Model

For this example the toy model has a 3D parameter space ($$ i=1,2,3 $$ ) with the model defines as below:

$$ f( \mu_{i}, \sigma_{i}, x_{i} ) = e^{ \frac{(\mu_{i} - x_{i})^{2} }{2\sigma^{2}_{i}} } $$

## Grid Search

