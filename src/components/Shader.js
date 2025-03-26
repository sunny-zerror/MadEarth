export const vertexShader = `  
    uniform float uScrollDir;
    uniform vec2 uTextureSize;    
    uniform vec2 uQuadSize;        
    varying vec2 vUv;  
    varying vec2 vUvCover;
    float PI = 3.141592653589793;
    vec2 getCoverUv(vec2 uv, vec2 textureSize, vec2 quadSize) {
        vec2 ratio = vec2(
            min((quadSize.x / quadSize.y) / (textureSize.x / textureSize.y), 1.0),
            min((quadSize.y / quadSize.x) / (textureSize.y / textureSize.x), 1.0)
        );
        return vec2(
            uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            uv.y * ratio.y + (1.0 - ratio.y) * 0.5
        );
    }
    vec3 deformationCurve(vec3 pos, vec2 uv) {
    float waveStrength = min(abs(uScrollDir), 5.0) * sign(uScrollDir) * -0.1;
    pos.y -= sin((uv.x) * PI) * waveStrength; 
    return pos;
     }

    void main() {
        vUv = uv; 
        vUvCover = getCoverUv(uv, uTextureSize, uQuadSize); 
        vec3 transformed = deformationCurve(position, vUvCover);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
    }
  `

  
export const fragmentShader = `  
    varying vec2 vUv;
   void main() {
  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); // White color (RGBA)
}
  `