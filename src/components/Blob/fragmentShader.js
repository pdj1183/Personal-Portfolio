const fragmentShader = `
uniform float u_intensity;
uniform float u_time;


void main() {
    vec3 color = vec3(0.0, 0.0, 0.0);
    gl_FragColor = vec4(color, 1.0);
}

`;

export default fragmentShader;