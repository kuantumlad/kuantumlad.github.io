---
layout: post
title: "Baysian Data Analysis"
img: bda_into.jpg # Add image post (optional)
date: 2019-03-01 12:55:00 +0300
description:  Add post description (optional)
tag: [BDA, Bayesian Data Analysis 3rd Edition, Bayesian Data Analysis ]
---

I decided to explore the concept of Bayesian data analysis using the "Baysian Data Analysis 3rd Edition" by A. Gelman, J. Carlin, and H. Stern. I created, so far, two Jupyter notebooks as I followed the first couple of chapters. I briefly outline what I did in each of the two notebooks and provide links to them. A future post will go over the use of Bayesian techniques for a real world example which will make use of these core concepts from this post. 


## Chapter 2

In this chapter I created a notebook for the example in Chapter 2, section 4 about the probability of a girl birth given placenta previa.

#### Problem:
An early study concerning the sex of placenta previa births in Germany found that of a total of 980 births, 437 were female. How much evidence does this provide for the claim that the proportion of female births in the population of placenta previa births is less than 0.485, the proportion of female births in the general population?

The resulting notebook goes over:

* Three posterior distributions given different shape parameters, $\alpha$ and $\beta$ for the Beta distribution. I then compare the distribution mean to that of the population mean.

* After this I explore a transformation to the parameter space, $\theta$.

* Simulate samples for different parameter transformations and draw the quantiles

* Calculate the probabilty that the proportion of female births is less than 0.485.

##### Choice of Prior

Using different shape parameters produces different posterior distributions with different mean values. Below are the results.

<div style="text-align: center">
<figure>
   <img src="/images/bda_chapter2/posterior_a.png" alt="" height="50%" width="50%">
   <figcaption>Fig. 1 - Using a uniform prior ( $$ \alpha = 0 , \beta = 0 $$ ) results in posterior distribution being left unchanged and centered around the sample mean of the data. </figcaption>
 </figure>
 </div>

<div style="text-align: center">
<figure>
   <img src="/images/bda_chapter2/posterior_c.png" alt="" height="50%" width="50%">
   <figcaption>Fig. 1 - Increasing the beta distribution shape parameters shifts the prior toward the population mean. The result of this is the posterior distrubution is updated with a mean closer to that of the population. </figcaption>
 </figure>
 </div>

##### CDF for the $$\beta$# distribution

Calculate the cdfs for Beta distributions with different shape parameters, and plot them! This will also tell us the probability that the proportion of female births is less than or equal to 0.485, which turns out to be over 0.98! In other words $$ P( \theta < 0.485 ) \approx 0.98 $$

<div style="text-align: center">
<figure>
   <img src="/images/bda_chapter2/beta_cdf_c.png" alt="" height="50%" width="50%">
   <figcaption>Fig. 1 - The CDF for the beta distribution with an informative conjugate prior distribution. The probability that $$\theta <= 0.485 $$ is over 0.95. </figcaption>
 </figure>
 </div>


## Chapter 3
