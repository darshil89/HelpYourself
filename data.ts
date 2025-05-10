export const data = [
  {
    title: "Image Processing concept",
    content: `
    % Program to study the image processing concept
I=imread('pout.tif');
J=imcomplement(I);
figure,imshow(I)
figure,imshow(J)
K=imadjust(I,[0;0.4],[0.5;1])
figure,imshow(K)
`,
  },
  {
    title: "Histogram equalization image",
    content: `
    % Program to obtain histogram equalization concept
I=imread('trees.tif');
J=imcomplement(I);
imhist(J,100);
imshow(I);
title('original');
figure,imshow(J);
title('complement');
I=histeq(I);
figure,imhist(I,64);
title('equilized');
figure,imhist(J,64);
title('histogram');
n=numel(I);
p=imhist(I)/n;
figure,plot(p);
title('normalized');
K=imadjust(I,[0;1],[0.4;1],0.5);
figure,imshow(K);
title('adjusted image');
T=maketform('affine',[.3 0 0;.5 1 0;0 1 1]);
tformfwd([0,0],T);
I2=imtransform(I,T);
figure,imshow(I2);
title('forward image');

`,
  },
  {
    title: "Averaging filter in spatial domain",
    content: `
% Program for implementation of smoothing or averaging filter in spatial domain
I=imread('trees.tif');
subplot(2,2,1);
imshow(J);
title('original image');
f=ones(3,3)/9;
h=imfilter(I,f,'circular');
subplot(2,2,2);
imshow(h);
title('averaged image');`,
  },
  {
    title: "Opening and Closing of the image",
    content: `
f=imread('coins.png');
se=strel('square',20);
fo=imopen(f,se);
figure,imshow(f)
title('input image');
figure,imshow(fo)
title('opening of input image');
fc=imclose(f,se);
figure,imshow(fc)
title('opening of input image');
foc=imclose(fo,se);
figure,imshow(foc)
title('closing of opened input image');`,
  },
  {
    title: "Region of Interest for the image",
    content: `
clc;
close all;
clear;

% Load and convert indexed image to grayscale
load trees;
I = ind2gray(X, map);  

% Display the original image
figure, imshow(I);
title('Original Image');

% Let user select region by clicking points
disp('Select points for the region and press Enter');
[x, y] = getpts;  % User clicks points

% Fill the selected region
I2 = roifill(I, x, y);

% Display the modified image
figure, imshow(I2);
title('Output Image (After roifill)');`,
  },
  {
    title: "Edge detection algorithm",
    content: `
%Program for edge detection algorithm
I=imread('coins.png');
figure,imshow(I)
title ('figure 1 original image');
h=ones(5,5)/25;
b=imfilter(I,h);
figure,imshow(b)
title ('figure 2 filtered image');
c=edge(b,'sobel');
figure,imshow(c)
title ('figure 3 edge detected output by sobel operator');
d=edge(b,'prewitt');
figure,imshow(d)
title ('figure 4 edge detected output by prewitt operator');
e=edge(b,'robert');
figure,imshow(e)
title ('figure 5 edge detected output by robert operator');
f=edge(b,'canny');
figure,imshow(f)
title ('figure 6 edge detected output by canny operator');
`,
  },
  {
    title: "Sharpen image using gradient mask",
    content: `
% Program of sharpen image using gradient mask
I=imread('coins.png');
subplot(2,2,1);
imshow(I)
title('Original Image');
h=fspecial('sobel');
f=imfilter(I,h,'replicate');
subplot(2,2,2);
imshow(F)
title('filtered image by sobel mask');
s=I+F;
subplot(2,2,4);
imshow(s)
title('Final o/p Image');`,
  },
  {
    title: "Erosion and Dilation",
    content: `
% Program for morphological operations: Erosions& Dilation
f=imread('coins.png');
B=[0 1 1;1 1 1;0 1 0];
f1=imdilate(f,B);
se=strel('disk',10);
f2=imerode(f,se);
figure,imshow(f)
title('input image');
figure,imshow(f1)
title('delated image');
figure,imshow(f2)
title('eroded image');`,
  },
  {
    title:  "DCT/IDCT computation",
    content: `
clc;
clear all;
close all;

% User input for basis dimension
m = input('Enter the basis matrix dimension: ');
n = m;

% Define alpha1 and alpha2 coefficients
alpha1 = ones(1, m) * sqrt(2/m);
alpha1(1) = sqrt(1/m);

alpha2 = ones(1, n) * sqrt(2/n);
alpha2(1) = sqrt(1/n);

% Initialize the DCT basis cell array
a = cell(m, n);

% Compute 2D DCT basis functions
for u = 0:m-1
    for v = 0:n-1
        basis = zeros(m, n);
        for x = 0:m-1
            for y = 0:n-1
                basis(x+1, y+1) = alpha1(u+1) * alpha2(v+1) * ...
                    cos((2*x+1)*u*pi/(2*m)) * cos((2*y+1)*v*pi/(2*n));
            end
        end
        a{u+1, v+1} = basis;
    end
end

% Visualize each basis matrix
figure(3)
k = 1;
for u = 1:m
    for v = 1:n
        subplot(m, n, k)
        imshow(a{u, v}, [])
        title(['u=', num2str(u-1), ', v=', num2str(v-1)])
        k = k + 1;
    end
end`,
  },
];