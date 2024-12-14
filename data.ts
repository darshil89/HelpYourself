export const data = [
  {
    title: `Find the electric field at a point (0,2,3) due to a charge of q1=10nc at (1,0,1)
dimensions are in meters Ɛr=1
`,
    content: `
q = 10e-9; % Charge in Coulombs
r0 = [1, 0, 1]; % Position of the charge
r = [0, 2, 3]; % Observation point
epsilon0 = 8.854e-12; % Permittivity of free space
% Electric field calculation
R = r - r0;
magnitude_R = norm(R);
E = (1 / (4 * pi * epsilon0)) * (q / magnitude_R^3) * R;
% Plotting
figure;
quiver3(r0(1), r0(2), r0(3), E(1), E(2), E(3), 'r', 'LineWidth', 2);
hold on;
plot3(r(1), r(2), r(3), 'bo', 'MarkerSize', 10, 'MarkerFaceColor', 'b');
xlabel('x-axis'); ylabel('y-axis'); zlabel('z-axis');
title('Electric Field due to a Charge');
grid on; hold off;`,
  },
  {
    title: `Two point charges of magnitude 3µc and -8µc are located at places P1(-3,5,-7) and
P2(-4,2,9) respectively in free space. Evaluate electric field and also its magnitude at
point P(2,-6,5)`,
    content: `
P1 = [-3, 5, -7]; P2 = [-4, 2, 9];
P = [2, -6, 5];
epsilon0 = 8.854e-12;
% Electric field contributions
E1 = (1 / (4 * pi * epsilon0)) * q1 * (P - P1) / norm(P - P1)^3;
E2 = (1 / (4 * pi * epsilon0)) * q2 * (P - P2) / norm(P - P2)^3;
E_total = E1 + E2;
% Plotting
figure;
quiver3(P(1), P(2), P(3), E_total(1), E_total(2), E_total(3), 'g', 'LineWidth', 2);
xlabel('x-axis'); ylabel('y-axis'); zlabel('z-axis');
title('Electric Field due to Two Charges'); grid on;`,
  },
  {
    title: `Evaluate the cross product of two vectors 𝐴⃗=2𝑎̂x-5𝑎̂y+3𝑎̂z and 𝐵⃗⃗=5𝑎̂x-6𝑎̂y+7𝑎̂z .
Find unit vector A and B. Also find the angle between A and B`,
    content: `
A = [2, -5, 3];
B = [5, -6, 7];
% Cross product
C = cross(A, B);
% Plot vectors
figure;
quiver3(0, 0, 0, A(1), A(2), A(3), 'r', 'LineWidth', 2);
hold on;
quiver3(0, 0, 0, B(1), B(2), B(3), 'b', 'LineWidth', 2);
quiver3(0, 0, 0, C(1), C(2), C(3), 'k', 'LineWidth', 2);
xlabel('x-axis'); ylabel('y-axis'); zlabel('z-axis');
title('Cross Product of Two Vectors');
grid on; hold off;`,
  },
  {
    title: `A vector field is given by 𝐴⃗=5𝑎̂x+3xyz𝑎̂y+x2𝑎̂z . Find the field at the point(2,2,3) in
cylindrical coordinate system.`,
    content: `
x = 2; y = 2; z = 3;
% Define the vector field components in Cartesian
F_x = 5 * x;
F_y = 3 * x * y * z;
F_z = x^2 * z;
% Compute the field in Cartesian coordinates
F_cartesian = [F_x, F_y, F_z];
% Convert to cylindrical coordinates
r = sqrt(x^2 + y^2); % Cylindrical radial coordinate
theta = atan2(y, x); % Cylindrical angular coordinate
z_cyl = z; % z remains the same
% Compute cylindrical components
F_r = F_x * cos(theta) + F_y * sin(theta);
F_theta = -F_x * sin(theta) + F_y * cos(theta);
F_z_cyl = F_z;
% Display results
disp('Field in Cartesian coordinates:');
disp(F_cartesian);
disp('Field in Cylindrical coordinates (r, theta, z):');
disp([F_r, F_theta, F_z_cyl]);
disp('Cylindrical coordinates (r, theta, z):');
disp([r, theta, z_cyl]);
`,
  },
  {
    title: `Point charge Q1=300µC located at (1,-1,-3) m experiences a for 𝐹⃗⃗⃗⃗⃗1⃗=8𝑎̂x-8𝑎̂y+4𝑎̂z N
due to point charge Q2 at (3,-3,-2)m. Determine Q2.`,
    content: `Q1 = 300e-6; % Charge 1
R = [3, -3, -2] - [1, -1, -3]; % Vector between charges
% Solving for Q2
Q2 = norm(F) * norm(R)^2 / (Q1 * (1 / (4 * pi * epsilon0)));
% Display
disp('Charge Q2:');
disp(Q2);`,
  },
  {
    title: `Two point charges q1=100µC and q2=10µC are located at points (-1,1,-2) and (3,1,0)
m respectively. Find the X ,Y , Z components of the force on Q1. What is the
magnitude of the total force. `,
    content: `
clear all;
close all;q1 = 100e-6; % Charge 1 in Coulombs
q2 = 10e-6; % Charge 2 in Coulombs
P1 = [-1, 1, -2]; % Position of q1
P2 = [3, 1, 0]; % Position of q2
% Vector from q1 to q2
R = P2 - P1;
magnitude_R = norm(R);
% Force calculation
epsilon0 = 8.854e-12; % Permittivity of free space
F = (1 / (4 * pi * epsilon0)) * (q1 * q2 / magnitude_R^3) * R;
% Force components
Fx = F(1); Fy = F(2); Fz = F(3);
F_total = norm(F);
% Display results
disp(['Fx: ', num2str(Fx), ' N, Fy: ', num2str(Fy), ' N, Fz: ', num2str(Fz), ' N']);
disp(['Total Force Magnitude: ', num2str(F_total), ' N']);
figure;
quiver3(P1(1), P1(2), P1(3), F(1), F(2), F(3), 'r', 'LineWidth', 2);
hold on;
plot3(P1(1), P1(2), P1(3), 'bo', 'MarkerSize', 8, 'MarkerFaceColor', 'b');
plot3(P2(1), P2(2), P2(3), 'go', 'MarkerSize', 8, 'MarkerFaceColor', 'g');
xlabel('X-axis'); ylabel('Y-axis'); zlabel('Z-axis');
title('Force Components on q1 due to q2');
grid on; hold off;`,
  },
  {
    title: `Two point charges q1=30 µC and q2=10 µC are located at (-1,1,-3) m and (3,1,0) m
respectively find the force on q1.`,
    content: `q2 = 10e-6; % Charge 2 in Coulombs
P1 = [-1, 1, -3]; % Position of q1
P2 = [3, 1, 0]; % Position of q2
% Vector from q1 to q2
R = P2 - P1;
magnitude_R = norm(R);
% Force calculation
F = (1 / (4 * pi * epsilon0)) * (q1 * q2 / magnitude_R^3) * R;
% Display results
disp(['Force on q1: ', num2str(F), ' N']);
% Plotting
figure;
quiver3(P1(1), P1(2), P1(3), F(1), F(2), F(3), 'b', 'LineWidth', 2);
hold on;
plot3(P1(1), P1(2), P1(3), 'ro', 'MarkerSize', 8, 'MarkerFaceColor', 'r');
plot3(P2(1), P2(2), P2(3), 'go', 'MarkerSize', 8, 'MarkerFaceColor', 'g');
xlabel('X-axis'); ylabel('Y-axis'); zlabel('Z-axis');
title('Force on q1 due to q2');
grid on; hold off`,
  },
  {
    title: `Let a point q1=25nc is located at a(4,-2,7) and a charge q2(60nc) be at B(-3,4,-2) find
E at point c (1,2,3) and also find the direction of the electric field given Ɛ0= 8.854
*10-12 F/m.`,
    content: `q2 = 60e-9; % Charge 2 in Coulombs
A = [4, -2, 7]; % Position of q1
B = [-3, 4, -2]; % Position of q2
C = [1, 2, 3]; % Observation point
% Electric field contributions
E1 = (1 / (4 * pi * epsilon0)) * q1 * (C - A) / norm(C - A)^3;
E2 = (1 / (4 * pi * epsilon0)) * q2 * (C - B) / norm(C - B)^3;
% Total electric field
E_total = E1 + E2;
% Direction of electric field
direction = E_total / norm(E_total);
% Display results
disp(['Electric Field at point C: ', num2str(E_total), ' N/C']);
disp(['Direction of Electric Field: ', num2str(direction)]);
figure;
quiver3(C(1), C(2), C(3), E_total(1), E_total(2), E_total(3), 'k', 'LineWidth', 2);
hold on;
plot3(A(1), A(2), A(3), 'ro', 'MarkerSize', 8, 'MarkerFaceColor', 'r');
plot3(B(1), B(2), B(3), 'go', 'MarkerSize', 8, 'MarkerFaceColor', 'g');
xlabel('X-axis'); ylabel('Y-axis'); zlabel('Z-axis');
title('Electric Field at Point C');
grid on; hold off;
`,
  },
  {
    title: `A point charge q=30nc is located at the origin in Cartesian coordinate find the electric
flux density and the electric field intensity at (1,3,-4)m`,
    content: `P = [1, 3, -4]; % Observation point
% Electric field intensity
R = P; % Vector from charge to observation point
magnitude_R = norm(R);
E = (1 / (4 * pi * epsilon0)) * (q / magnitude_R^3) * R;
% Electric flux density
D = epsilon0 * E;
% Display results
disp(['Electric Field Intensity: ', num2str(E), ' N/C']);
disp(['Electric Flux Density: ', num2str(D), ' C/m^2']);
% Plotting
figure;
quiver3(0, 0, 0, E(1), E(2), E(3), 'm', 'LineWidth', 2);
hold on;
plot3(P(1), P(2), P(3), 'bo', 'MarkerSize', 8, 'MarkerFaceColor', 'b');
xlabel('X-axis'); ylabel('Y-axis'); zlabel('Z-axis');
title('Electric Field Intensity and Flux Density');
grid on; hold off;`,
  }
];
