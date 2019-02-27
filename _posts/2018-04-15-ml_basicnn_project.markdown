---
layout: post
title: "Applying a Simple Neural Net to the Iris Data Set"
img: IrisFlower.jpg # Add image post (optional)
date: 2018-04-15 12:55:00 +0300
description:  
tag: [Iris Data Set, Neural Net, One Layer Net, Two Layer Net, Classification, Python, Multivariate Data]
---

# Overview

I wanted to explore the fundamental concepts of a neural net without the use of any open source libraries so I created a three layers neural net using the sigmoid function between the layers and a softmax output at the final layer in a jupyter notebook. I then apply the neural net to the canonical Iris data set provided by the University of California, Irvine.


# Three Layer Neural Net

## One-Hot Encoding

In the case of the iris data set we are working with categorical data which is data that does not have numerical labels. The iris species name is an example of this. While some machine learning algorithms can use or are indifferent to categorical labels, some are not (neural nets).
Thus we require a method to transform the non-numerical labels into integer values for a machine learning algorithm to process. In this post I use <i> one-hot encoding </i> which assigns a binary value to the $$i^{th}$$ data element. This looks like

| species 1 | species 2 | species 3 |
|-----------| ----------| ----------|
|  0        |  1        | 0         |
|  1        |  0        | 0         |
|  0        |  0        | 1         |
|  .        |  .        | .         |


## Creating the Neural Net

Once the one-hot encoding is complete it is time to set the number of nodes in the hidden layer. Since this is a three layer neural net there is only one hidden layer which the first and last layer are connected to.

The activation function for the nodes is the sigmoid which has the function form of:

$$ f = \frac{1}{1 + e^{-z}} $$

where $$z$$ is the output of the previous layer. In addition to forward propogation this neural net includes back-propagation. Back-propagation allows the neural net to update the weights based on error from the output, thereby helping the algorithm find the optimal set of weights that minimizes the error.

Lastly the output of the algorithm is handled by the a softmax function. The softmax function takes the output of the neural net and assigns a probability to each output class. The class with the largest probability is assigned its respective label.

For a three class data set the explicit softmax expression is:

$$ \sigma  = \frac{ e^{z_{j}} }{ e^{z_{1}} +  e^{z_{2}} +  e^{z_{3}} } $$

where $$j$$ is the one of the output classes ($$ j =1, 2, 3 $$ ).

# TLDR

Here is the <a href="https://github.com/kuantumlad/machine_learning/blob/master/classification/iris_nn.ipynb"> link </a> to a three layer neural net I made from scratch in a jupyter notebook to classify the canonical iris data set.
