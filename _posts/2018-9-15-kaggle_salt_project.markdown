---
layout: post
title: "Finding the Salt in the Rough"
img: Salt.jpg # Add image post (optional)
date: 2018-9-15 12:55:00 +0300
description:  Add post description (optional)
tag: [Kaggle, Convolutional Neural Net, Deep Neural Net, Image Segmentation, Salt]
---

I participated in the TGS Salt Identification Challenge hosted on Kaggle. After having created the Mona Lisa using polygons this was an obvisou transition into the space of machine learning with images.

TGS poised the problem of creating an algorithm that can identify salt deposits in a seismic image. Since this problem fell into the category of image segmentation a U-net was trained using the supplied training images which consisted of the sesmic images and their masks which marked the salt deposits.

Below is a link to the Jupyter notebook that I created outlining the project goal, building the U-Net, and finally the analysis of the results before submission.

<a href="https://github.com/kuantumlad/kaggle-tgs_salt/blob/master/old_files/kaggle-tgs_salt_v2.ipynb"> Kaggle TGS Salt Identification Challenge</a>