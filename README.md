# DSTL

## Team
* [@wariroja](https://github.com/wariroja)
* [@Santiago868](https://github.com/Santiago868)
* [@jeffscott](https://github.com/jeffscott)

## DEMO
Check out our presentation from GraphHack 2022

**https://graph-hack-2022.vercel.app/**

# Problem

Tired of waiting for images to load on brokensea as you scroll through collections? I was, that's when I thought about how NFT collections have very constrained image characteristics that a neural network can easily learn and memorize.
# What it does

DSTL trains a unique Deep Neural Network (autoencoder) model for your collection that allows you to hyper-compress your image payloads. Image payload sizes are around 10% of PNGs.
How we built it

* Train a deep autoencoder on the collection using pytorch.
* Mint an NFT on Polygon that points to our compressed image on IPFS
* Could potentially store images on-chain

What's next for DSTL

Building infrastructure/API for training models and using the decoders Integrate the decoder framework into common libraries/languages
## Built With
* material-ui
* python
* pytorch
* react
* solidity
* typescript
* ipfs
* NN autoencoder code ~~borrowed~~ stolen from https://github.com/abskj/lossy-image-compression, thanks **abskj**!