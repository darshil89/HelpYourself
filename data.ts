export const data = [
  {
    title: "BIT ERROR RATE CALCULATION OF SHIFT KEYINGS USING",
    content: `clc;
clear all;
close all;
msglen=10000;
n=msglen;
b=randi(1,n);
f1=1;f2=2;
t=0:1/30:1-1/30;
%ASK
sa1=sin(2*pi*f1*t);
E1=sum(sa1.^2);
sa1=sa1/sqrt(E1); %unit energy 
sa0=0*sin(2*pi*f1*t);
%FSK
sf0=sin(2*pi*f1*t);
E=sum(sf0.^2);
sf0=sf0/sqrt(E);
sf1=sin(2*pi*f2*t);
E=sum(sf1.^2);
sf1=sf1/sqrt(E);
%PSK
sp0=-sin(2*pi*f1*t)/sqrt(E1);
sp1=sin(2*pi*f1*t)/sqrt(E1);
%MODULATION
ask=[];psk=[];fsk=[];
for i=1:n
 if b(i)==1
 ask=[ask sa1];
 psk=[psk sp1];
 fsk=[fsk sf1];
 else
 ask=[ask sa0];
 psk=[psk sp0];
 fsk=[fsk sf0];
 end
end
%AWGN
for snr=0:20
 askn=awgn(ask,snr);
 pskn=awgn(psk,snr);
 fskn=awgn(fsk,snr);
 %DETECTION
 A=[];F=[];P=[];
 for i=1:n
 %ASK Detection
 if sum(sa1.*askn(1+30*(i-1):30*i))>0.5
 A=[A 1];
 else
 A=[A 0];
 end
 %FSK Detection
 if sum(sf1.*fskn(1+30*(i-1):30*i))>0.5
 F=[F 1];
 else
 F=[F 0];
 end
 %PSK Detection
 if sum(sp1.*pskn(1+30*(i-1):30*i))>0
 P=[P 1];
 else
 P=[P 0];
 end
 end
 %BER
 errA=0;errF=0; errP=0;
 for i=1:n
 if A(i)==b(i)
 errA=errA;
 else
 errA=errA+1;
 end
 if F(i)==b(i)
 errF=errF;
 else
 errF=errF+1;
 end
 if P(i)==b(i)
 errP=errP;
 else
 errP=errP+1;
 end
 end
 BER_A(snr+1)=errA/n;
 BER_F(snr+1)=errF/n;
 BER_P(snr+1)=errP/n;
end
figure(1)
semilogy(0:20,BER_A, 'b','linewidth',2)
title('BER Vs SNR')
grid on;
hold on
semilogy(0:20,BER_F,'r','linewidth',2)
semilogy(0:20,BER_P, 'k','linewidth',2)
xlabel('Eo/No(dB)')
ylabel('BER')
hold off
legend('ASK','FSK','PSK');
`,
  },
  {
    title: "HUFFMAN BINARY SOURCE ENCODING",
    content: `
clc; 
clear all;
close all;
symbols = [1:6]; % Distinct symbols that data source can produce
p = [.3 .3 .13 .12 .1 .05]; % Probability distribution
[dict,avglen] = huffmandict(symbols,p); % Create dictionary.
%actualsig = ([1:6],1,[symbols; p]);
data = repmat([1 2 2 3 3 3],1); % Create data using p.
disp('the data is');
disp(data);
encoded_data = huffmanenco(data,dict); % Encode the data.
disp('The Huffman coded data is');
disp(encoded_data);
decoded_data = huffmandeco(encoded_data,dict);
disp('The Huffman decoded data is');
disp(decoded_data);`,
  },
  {
    title: "SHANNON-FANO BINARY SOURCE ENCODING",
    content: `
clc;
clear all;
close all;
m=input('Enter the no. of message ensembles : ');
z=[];
h=0;
l=0;
display('Enter the probabilities in descending order');
for i=1:m
 fprintf('Ensemble %d\n',i);
 p(i)=input('');
end
%Finding each alpha values 
a(1)=0;
for j=2:m;
 a(j)=a(j-1)+p(j-1);
end
fprintf('\n Alpha Matrix');
display(a);
%Finding each code length
for i=1:m
 n(i)= ceil(-1*(log2(p(i))));
end
fprintf('\n Code length matrix');
display(n);
%Computing each code
for i=1:m
 int=a(i);
for j=1:n(i)
 frac=int*2;
 c=floor(frac);
 frac=frac-c;
 z=[z c];
 int=frac;
end
fprintf('Codeword %d',i);
display(z);
z=[];
end
%Computing Avg. Code Length & Entropy
fprintf('Avg. Code Length');
for i=1:m
 x=p(i)*n(i);
 l=l+x;
 x=p(i)*log2(1/p(i));
 h=h+x;
end
display(l);
fprintf('Entropy');
display(h);
%Computing Efficiency
fprintf('Efficiency');
display(100*h/l);
fprintf('Redundancy');
display(100-(100*h/l));`,
  },
  {
    title: "SIMULATION OF SPREAD SPECTRUM COMMUNICATION",
    content: `
clc; 
clear all; 
close all; 
PNbit_stream = round(rand(1,32)); %PNbit stream
input_signal=[1 1 0 0 1 0 1 1]; %input bit stream
PNbit_stream; 
%%%%%%%%%%%DSSS%%%%%%%%%%%%%%%
for i=1:1:8 
 for j=1:4:32 
 for k=1:1:4 
 a(j)=xor(PNbit_stream(k+j-1),input_signal(i)); 
 a(j);
 end
 end
end
subplot(3,1,1)
stem(PNbit_stream);
grid on
title('PNbit_stream'); 
subplot(3,1,2) 
stem(input_signal);
grid on
title('input_signal');
subplot(3,1,3); 
stem(a); 
grid on
title('DSSS');`,
  },
];