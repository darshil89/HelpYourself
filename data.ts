export const data = [
  {
    title: "Time Response Damping",
    content: `
wn = 10; % Natural Frequency
zeta = [0.1 0.5 0.9]; % Damping Ratio
% Calculate Time Response Specification for Different Damping Factors
for i = 1:length(zeta)
 theta(i)= acos(zeta(i)); 
 wd = wn*sqrt(1-zeta(i)^2); % Calculate Damped Natural Frequency
 % Calculate Time Response Specifications
 tr = (pi-theta(i))/wd;
 tp= pi/wd;
 ts = 4/(zeta(i)*wn);
 Mp = exp(-zeta(i)*pi/sqrt(1-zeta(i)^2));
 
 % Display Results
 fprintf('Damping Ratio = %.1f\n', zeta(i));
 fprintf('Damped Natural Frequency = %.2f rad/s\n', wd);
 fprintf('Rise Time = %.2f s\n', tr);
 fprintf('Peak Time = %.2f s\n', tp);
 fprintf('Settling Time = %.2f s\n', ts);
 fprintf('Percent Overshoot = %.2f %%\n\n', Mp*100);
end`,
  },
  {
    title: "Root Locus Plot",
    content: `
num = [1 2];
den = [1 4 3];
sys = tf(num, den); % Transfer function ‘sys’ using the numerator and denominator coefficients
% Root Locus Plot
figure;
rlocus(sys); % ‘rlocus’ function to plot the root locus of the system 
grid on;
title('Root Locus Plot');
% Bode Plot
figure;
bode(sys);
grid on;
title('Bode Plot'); % ‘bode’ function to plot the Bode plot of the system`,
  },
  {
    title: "Frequency Response of Second-Order System ",
    content: `
clc;
clear all;
close all; 
% Given System
wn = 10; % Natural Frequency
zeta = 0.5; % Damping Ratio
% Define Transfer Function
num = wn^2;
den = [1 2*zeta*wn wn^2];
sys = tf(num, den);
w = logspace(-1, 2, 1000); % Define Frequency Range
% Calculate Frequency Response
h=freqs(num,den,w);
mag=20*log10(abs(h));
phase=angle(h);
% Plot Frequency Response
subplot(2,1,1);
semilogx(w,mag);
grid on;
title('Magnitude Response');
xlabel('Frequency rad/s)');
ylabel('Magnitude (dB)');
subplot(2,1,2);
semilogx(w, phase);
grid on;
title('Phase Response');
xlabel('Frequency (rad/s)');
ylabel('Phase(rad)');`,
  },
];
