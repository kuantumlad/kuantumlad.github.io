---
layout: post
title: "FFT Music Visualizer with SFML"
img: music_spect.jpg # Add image post (optional)
date: 2019-1-15 12:55:00 +0300
description:  Add post description (optional)
tag: [FFT, DFT, Music, Math, Visualize, Fourier, Signal Processing]
---

As a kid growing up we had a Dell computer with Windows Media Player on it which had a music visualizer setting you could watch as your favorite song played. My goal here was to create my own audio visualizer that I could use to not only listen to the songs I love but also see them. In order to achieve this I first made use of the discrete Fourier transform (DFT), then later adopted the Fast Fourier Transform algorithm developed by Cooley-Tukey to visualize the frequency spectrum as the song plays. 

### Music Sample ###

A typical song that one might hear on the radio is comprised of an array of sampled bits. When played the sample bits are sampled at the sampling rate of the song, which when played over the speakers is what we hear. Below is an example of what we might see of a song represented by its sampling bits.

insert  DFT of the song here from mathematica

In order to deconstruct the signal into its principal frequency components a Discrete Fourier Transform, or more preferably a Fast Fourier Transform (FFT), is preformed on the signal. First we will preform a Fourier transform of the entire song to see a static representation of the signals Fourier components, then second I perform a FFT as the song plays in order to visualize these components over time.  

### Quick review of the Fourier Transform ###

The discrete fourier transform is represented below as:

$$ F(j\omega) =  \sum^{N-1}_{k=0} f[k]e^{-j\omega kT} $$

where $$ f[k] $$ is the value of the $$k^{th}$$ input signal, which in this case was normalized to the maximum signal value, and $$N$$ is the number of samples in the signal. We can also express $$\omega$$, the harmonics of the signal, as $$\omega_{n} = \frac{2\pi n}{NT} $$. Therefore when we go to evaluate the discrete Fourier transform of the signal we are in a sense calculating the product of a matrix, whose elements are $$W_{nk}$$ are given by $$e^{-j\omega kT}$$, with a vector or the input signal $$f[k]$$. One issue with using this method to calculate the Fourier transform of a signal is that this operation is $$\mathcal{O}(N^{2})$$ making this a computational expensive procedure. An alternative to this which reduces the computation time to $$\mathcal{O}(N logN)$$ is the Cooley-Tukey FFT algorithm which can be read about [here](https://en.wikipedia.org/wiki/Cooley–Tukey_FFT_algorithm). 


### Applying the FFT to Music ###
To visualize the frequency histogram change the FFT was applied to a sample window of 4096, which is approximately $$\frac{1}{20}$$ of a second. This is known as short time Fourier transform. Once the FFT is complete the magnitude of the FFT coefficients are binned into a histogram and displayed as the sample window scans across the sample array. Filling the histogram requires knowing the appropriate frequency bin to change, calculating this requires scaling the frequency factor by the ratio of the sampling rate, the number of samples played in a seconds, to the short window size. The corresponding bin is then update. Once the FFT of the window is complete it is moved over and the process is repeated.

Histogram bins are colored based on their frequency. Below is a table mapping the frequency ranges to their respective bin colors.


| Frequency Range [Hz] | Bin Color |
|  ------------|---------|
| 0 - 32       | white   |
| 32 - 512     | blue    |
| 512 - 2048   | green   |
| 2048 - 8192  | magenta |
| 8192 - 16384 | yellow  |


Provide link to youtube video of song playing

