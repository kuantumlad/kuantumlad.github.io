---
layout: post
title: "Linear Regression"
img: LinReg.jpg # Add image post (optional)
date: 2018-07-15 12:55:00 +0300
description:  Add post description (optional)
tag: [Linear Regression, Binary Classification, Linear Data, C++, ROOT, Math]
---


In this project I worked with a simple learning algorithm known as the perceptron learning algorithm (PLA). This supervised machine learning algorithm was first invented by 1957 by Frank Rosenblatt when it was originally was designed to work as a machine rather than a program.
In its modern form it is an algorithm that falls under the umbrella of supervised linear binary classifier and is primarily used to classify linearly separable data, or data that does not overlap. 


Below I created a working example of classifying data from two guassian distributions with different means and sigmas using the PLA.

In order to do this I:

* created training data
* updated the weights of the perceptron
* classified testing data with the model (the perceptron)


## Data

Firstly for this example it is important that the data is linearly seperable, meaning that the data from two classes does not overlap. This can be tested using the convex-hull alogorithm which will be covered in another post. It is important that this criteria is met so that there is a choice of weights in the perceptron that classifies all the training examples correctly. Below is the labeled testing data for a planet's mass vs radius of which there are two classes (not sure if this is true in real life, but the data needs a story!).

<div style="text-align: center">
   <figure>
   <img src="/images/perceptron/training_data.png" alt="" height="50%" width="50%">
   <figcaption> Fig. 1 - Training data for the perceptron where the different colors represent the two classes that the model must separate. </figcaption>
   </figure>
</div>

## The Perceptron

The perceptron used in this example is:

$$ h = w_{0} + w_{1}x + w_{2}*y $$

where the $$w$$s are the weights which are updated for each iteration, $$x$$ is the $$i^{th}$$ planets radius and $$y$$ is its corresponding mass. For each entry the perceptron produces a hypothesis $$h$$ value. Now if this problem was strictly linear classification there would be a hard cut on the output.
There are three possible ways to process the output of the perceptron: $$h$$ is mapped to produce a $$\pm 1$$ for binary decisions (linear classification), leave the output unmapped (linear regression), and lastly map the output to a probability from [0,1] using a sigmoid function (logistic regression). For each method after every iteration the weights are updated appropriately for when the classifier successfully predicts a class or fails to. In the case of logistic regression a measure of how well the perceptron model is updating is by looking at the cost function, and continue to update the weights until there is no further improvement. 


## The Result

Below are the results of the output of the PLA on training and testing data using the logistic regression model. 

<div style="text-align: center">
   <figure>
   <img src="/images/perceptron/testing_data.png" alt="" height="50%" width="50%">
   <figcaption> Fig. 2 - The model applied to the testing data. Since the data is clearly linearly seperable the model successfully classifies all the data. </figcaption>
   </figure>
</div>


## TLDR

In short the training examples are processed through a learning algorithm, the perceptron, and the output can be treated in three different ways, which for binary classification include:

* linear classification (hard cuts)
* linear regression (predict the output)
* logistic regression (assign output to a probability)





