// Stadium, pitch markings, posts, crowd and sky. Everything is procedural low-poly geometry.
import * as THREE from 'three';
import { FIELD } from './config.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { rand, randRange, pick } from './util.js';

const TIMES = {
  day:   { top: '#3f7fd8', horizon: '#d7e6ee', sun: 0xfff1d6, sunI: 2.4, hemiI: 1.25, ground: 0x4a6b2a, fog: '#c9dbe4', lights: 0 },
  dusk:  { top: '#2a3a74', horizon: '#f2a46a', sun: 0xffb27a, sunI: 1.7, hemiI: 0.95, ground: 0x3e4a2a, fog: '#d99a72', lights: 0.6 },
  night: { top: '#03060f', horizon: '#18223d', sun: 0xcfe0ff, sunI: 0.55, hemiI: 0.5, ground: 0x1f2a18, fog: '#141c30', lights: 1 },
};

function tex(w, h, draw, repeat) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); }
  return { t, c };
}

export function buildStadium(scene, renderer, opts) {
  const tod = TIMES[opts.time] || TIMES.day;
  const out = { flags: [], crowdUniforms: { uTime: { value: 0 }, uExcite: { value: 0 } } };

  // --- sky + lighting -------------------------------------------------------
  const skyGeo = new THREE.SphereGeometry(600, 24, 12);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color(tod.top) }, hor: { value: new THREE.Color(tod.horizon) } },
    vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'uniform vec3 top; uniform vec3 hor; varying vec3 vP; void main(){ float h = clamp(normalize(vP).y*1.6, 0.0, 1.0); gl_FragColor = vec4(mix(hor, top, pow(h,0.7)), 1.0); }',
  });
  scene.add(new THREE.Mesh(skyGeo, skyMat));
  scene.fog = new THREE.Fog(tod.fog, 170, 520);
  scene.add(new THREE.HemisphereLight(0xdfeaff, tod.ground, tod.hemiI));
  const sun = new THREE.DirectionalLight(tod.sun, tod.sunI); sun.position.set(-60, 90, 40); scene.add(sun);
  if (tod.lights > 0) {
    for (const [x, z] of [[70, 55], [-70, -55]]) { const l = new THREE.DirectionalLight(0xffffff, 0.8 * tod.lights); l.position.set(x, 50, z); scene.add(l); }
  }
  renderer.setClearColor(tod.fog);

  // --- ground ---------------------------------------------------------------
  const grass = tex(256, 256, (g, w, h) => {
    g.fillStyle = '#3f8a2c'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#4b9a33'; g.fillRect(0, 0, w / 2, h);
    for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(${rand() < 0.5 ? '20,50,10' : '120,170,70'},${randRange(0.05, 0.16)})`; g.fillRect(rand() * w, rand() * h, 2, 2); }
  }, [128 / 10, 84 / 10]);
  const pitch = new THREE.Mesh(new THREE.PlaneGeometry(128, 84), new THREE.MeshLambertMaterial({ map: grass.t }));
  pitch.rotation.x = -Math.PI / 2; scene.add(pitch);
  const outer = tex(64, 64, (g, w, h) => { g.fillStyle = '#3a7429'; g.fillRect(0, 0, w, h); for (let i = 0; i < 300; i++) { g.fillStyle = 'rgba(0,0,0,0.06)'; g.fillRect(rand() * w, rand() * h, 2, 2); } }, [60, 60]);
  const og = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400), new THREE.MeshLambertMaterial({ map: outer.t }));
  og.rotation.x = -Math.PI / 2; og.position.y = -0.02; scene.add(og);

  // --- markings -------------------------------------------------------------
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xf4f4f0 });
  const lineGeos = [], redGeos = [];
  const tmpObj = new THREE.Object3D();
  const line = (x1, z1, x2, z2, w = 0.12, out = lineGeos) => {
    const len = Math.hypot(x2 - x1, z2 - z1);
    const g = new THREE.PlaneGeometry(len, w);
    tmpObj.rotation.set(-Math.PI / 2, 0, -Math.atan2(z2 - z1, x2 - x1));
    tmpObj.position.set((x1 + x2) / 2, 0.012, (z1 + z2) / 2); tmpObj.updateMatrix();
    g.applyMatrix4(tmpObj.matrix); out.push(g);
  };
  const H = FIELD.half, W = FIELD.halfW, D = FIELD.dead;
  line(-D, -W, D, -W, 0.14); line(-D, W, D, W, 0.14);
  line(-D, -W, -D, W, 0.14); line(D, -W, D, W, 0.14);
  // 20 m and 40 m lines (|x| = 30 and 10) are painted red, as on an NRL field
  const isRed = (x) => Math.abs(x) === 30 || Math.abs(x) === 10;
  for (let x = -50; x <= 50; x += 10) line(x, -W, x, W, x === 0 || Math.abs(x) === 50 ? 0.16 : isRed(x) ? 0.14 : 0.1, isRed(x) ? redGeos : lineGeos);
  // dashed 10 m and 20 m in from touch, plus 5 m dashes
  for (let x = -45; x <= 45; x += 5) for (const zz of [-W + 10, W - 10, -W + 20, W - 20]) line(x - 0.5, zz, x + 0.5, zz, 0.1);
  scene.add(new THREE.Mesh(mergeGeometries(lineGeos), lineMat));
  scene.add(new THREE.Mesh(mergeGeometries(redGeos), new THREE.MeshBasicMaterial({ color: 0xd8262c })));
  // in-goal tint
  for (const s of [-1, 1]) {
    const ig = tex(1024, 128, (g, w, h) => {
      g.clearRect(0, 0, w, h);
      const name = (s < 0 ? opts.homeName : opts.awayName).toUpperCase();
      g.font = 'bold 96px Arial Black, Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = 'rgba(255,255,255,0.55)';
      const tw = g.measureText(name).width, k = Math.min(1, (w * 0.94) / tw);
      g.save(); g.translate(w / 2, h / 2); g.scale(k, 1); g.fillText(name, 0, 4); g.restore();
    });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(44, 5.5), new THREE.MeshBasicMaterial({ map: ig.t, transparent: true, depthWrite: false }));
    m.rotation.x = -Math.PI / 2; m.rotation.z = s < 0 ? Math.PI / 2 : -Math.PI / 2; m.position.set(s * 54, 0.013, 0); scene.add(m);
  }
  // painted numbers
  const numMat = {};
  for (let x = -40; x <= 40; x += 10) {
    const n = 50 - Math.abs(x);
    if (!numMat[n]) {
      const nt = tex(128, 64, (g, w, h) => { g.font = 'bold 54px Arial Black, Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = 'rgba(255,255,255,0.85)'; g.fillText(String(n), w / 2, h / 2 + 2); });
      numMat[n] = new THREE.MeshBasicMaterial({ map: nt.t, transparent: true, depthWrite: false });
    }
    for (const zz of [-W + 6, W - 6]) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 1.8), numMat[n]);
      m.rotation.x = -Math.PI / 2; m.rotation.z = zz < 0 ? 0 : Math.PI; m.position.set(x, 0.014, zz); scene.add(m);
    }
  }

  // --- posts -----------------------------------------------------------------
  const postMat = new THREE.MeshLambertMaterial({ color: 0xf8f8f8 });
  const padMats = [new THREE.MeshLambertMaterial({ color: opts.homeColor }), new THREE.MeshLambertMaterial({ color: opts.awayColor })];
  for (const s of [-1, 1]) {
    for (const zz of [-FIELD.postGap, FIELD.postGap]) {
      const up = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, FIELD.postH, 8), postMat); up.position.set(s * H, FIELD.postH / 2, zz); scene.add(up);
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 2, 8), padMats[s < 0 ? 0 : 1]); pad.position.set(s * H, 1, zz); scene.add(pad);
    }
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, FIELD.postGap * 2, 8), postMat);
    bar.rotation.x = Math.PI / 2; bar.position.set(s * H, FIELD.crossbar, 0); scene.add(bar);
  }
  // corner posts
  const flagMat = new THREE.MeshLambertMaterial({ color: 0xff3020 });
  for (const x of [-H, H, -D, D]) for (const z of [-W, W]) {
    const f = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.4, 6), flagMat); f.position.set(x, 0.7, z); scene.add(f);
  }

  // --- advertising boards ---------------------------------------------------
  const SPONSORS = ['KOALA COLA', 'BIG PIE CO.', 'ROO FUEL', 'SURF & TURF', 'GUMLEAF BANK', 'DINGO TYRES', 'SOUTHERLY AIR', 'TRADIE MART'];
  const boardTex = tex(1024, 64, (g, w, h) => {
    const cols = ['#d11f2a', '#123a7a', '#f2b51d', '#1f7a3a', '#1b1b1b', '#0f8a8a', '#f26a1b', '#4b1f7a'];
    for (let i = 0; i < 8; i++) {
      g.fillStyle = cols[i]; g.fillRect(i * 128, 0, 128, h);
      g.fillStyle = '#fff'; g.font = 'bold 19px Arial Black, Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(SPONSORS[i], i * 128 + 64, h / 2);
    }
  }, [1, 1]);
  const boardMat = new THREE.MeshLambertMaterial({ map: boardTex.t, emissive: 0x222222 });
  const boards = (len, x, z, rotY) => {
    const t = boardTex.t.clone(); t.needsUpdate = true; t.wrapS = THREE.RepeatWrapping; t.repeat.set(len / 48, 1);
    const m = new THREE.Mesh(new THREE.BoxGeometry(len, 0.9, 0.15), [boardMat, boardMat, boardMat, boardMat, new THREE.MeshLambertMaterial({ map: t, emissive: 0x333333 }), boardMat]);
    m.position.set(x, 0.45, z); m.rotation.y = rotY; scene.add(m);
  };
  boards(124, 0, -W - 5, 0); boards(124, 0, W + 5, Math.PI);
  boards(70, -D - 4, 0, Math.PI / 2); boards(70, D + 4, 0, -Math.PI / 2);

  // --- stands + crowd -------------------------------------------------------
  const concrete = new THREE.MeshLambertMaterial({ color: 0x8d8a84 });
  const seatsMat = new THREE.MeshLambertMaterial({ color: 0x5a6270 });
  const crowdSpots = [];
  const stand = (cx, cz, len, rows, rotY, startDist, rise = 0.55) => {
    const g = new THREE.Group(); g.position.set(cx, 0, cz); g.rotation.y = rotY; scene.add(g);
    const depth = rows * 0.95;
    // stepped deck as a sloped slab
    const slope = Math.atan2(rise, 0.95), slabLen = Math.hypot(depth, rows * rise);
    const slab = new THREE.Mesh(new THREE.BoxGeometry(len, 0.6, slabLen), seatsMat);
    slab.rotation.x = -slope; slab.position.set(0, 1.0 + (rows * rise) / 2, startDist + depth / 2); g.add(slab);
    const wall = new THREE.Mesh(new THREE.BoxGeometry(len + 2, rows * rise + 6, 1.2), concrete);
    wall.position.set(0, (rows * rise + 6) / 2, startDist + depth + 0.8); g.add(wall);
    const front = new THREE.Mesh(new THREE.BoxGeometry(len, 1.4, 0.4), concrete); front.position.set(0, 0.7, startDist - 0.3); g.add(front);
    for (const sx of [-1, 1]) {
      const side = new THREE.Mesh(new THREE.BoxGeometry(1.2, rows * rise + 4, depth + 2), concrete);
      side.position.set(sx * (len / 2 + 0.6), (rows * rise + 4) / 2, startDist + depth / 2); g.add(side);
    }
    g.updateMatrixWorld(true);
    const v = new THREE.Vector3();
    for (let r = 0; r < rows; r++) for (let i = 0; i < len / 0.9; i++) {
      if (rand() < 0.16) continue;
      v.set(-len / 2 + 0.45 + i * 0.9 + randRange(-0.1, 0.1), 1.45 + r * rise, startDist + 0.5 + r * 0.95);
      g.localToWorld(v);
      crowdSpots.push({ x: v.x, y: v.y, z: v.z, rot: rotY });
    }
    return g;
  };
  stand(0, W + 9, 118, 26, 0, 0);                 // far side (faces -z after it is built along +z)
  stand(0, -W - 9, 118, 26, Math.PI, 0);          // near side
  stand(D + 10, 0, 62, 18, Math.PI / 2, 0);       // ends
  stand(-D - 10, 0, 62, 18, -Math.PI / 2, 0);
  // roof over near & far stands
  const roofMat = new THREE.MeshLambertMaterial({ color: 0xd6d6d6 });
  for (const s of [-1, 1]) {
    const roof = new THREE.Mesh(new THREE.BoxGeometry(124, 0.6, 20), roofMat); roof.position.set(0, 22, s * (W + 9 + 17)); roof.rotation.x = s * 0.08; scene.add(roof);
    for (let x = -55; x <= 55; x += 22) { const col = new THREE.Mesh(new THREE.BoxGeometry(0.6, 22, 0.6), concrete); col.position.set(x, 11, s * (W + 9 + 26)); scene.add(col); }
  }
  // crowd instanced meshes
  const bodyGeo = new THREE.BoxGeometry(0.5, 0.72, 0.38); bodyGeo.translate(0, 0.36, 0);
  const headGeo = new THREE.BoxGeometry(0.22, 0.24, 0.22); headGeo.translate(0, 0.86, 0);
  const crowdMat = (base) => {
    const m = new THREE.MeshLambertMaterial(base);
    m.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = out.crowdUniforms.uTime; sh.uniforms.uExcite = out.crowdUniforms.uExcite;
      sh.vertexShader = 'uniform float uTime; uniform float uExcite;\n' + sh.vertexShader.replace('#include <begin_vertex>',
        `#include <begin_vertex>
         float ph = instanceMatrix[3].x * 1.7 + instanceMatrix[3].z * 2.3;
         float bob = max(0.0, sin(uTime * (5.0 + fract(ph) * 4.0) + ph));
         transformed.y += bob * (0.03 + uExcite * 0.32);`);
    };
    return m;
  };
  const n = crowdSpots.length;
  const bodies = new THREE.InstancedMesh(bodyGeo, crowdMat({ color: 0xffffff }), n);
  const heads = new THREE.InstancedMesh(headGeo, crowdMat({ color: 0xffffff }), n);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(1, 1, 1), pos = new THREE.Vector3(), col = new THREE.Color();
  const skins = ['#f1c9a5', '#e0ac82', '#c68a5e', '#8d5a3a', '#5a3520'];
  const homeC = [opts.homeColor, opts.homeColor2], awayC = [opts.awayColor, opts.awayColor2];
  for (let i = 0; i < n; i++) {
    const s = crowdSpots[i];
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), s.rot + Math.PI);
    sc.setScalar(randRange(0.92, 1.08)); pos.set(s.x, s.y, s.z);
    m4.compose(pos, q, sc); bodies.setMatrixAt(i, m4); heads.setMatrixAt(i, m4);
    const r = rand();
    col.set(r < 0.42 ? pick(homeC) : r < 0.7 ? pick(awayC) : `hsl(${Math.floor(rand() * 360)},${30 + rand() * 40}%,${30 + rand() * 40}%)`);
    bodies.setColorAt(i, col); heads.setColorAt(i, col.set(pick(skins)));
  }
  scene.add(bodies, heads);

  // --- floodlights ----------------------------------------------------------
  const towerMat = new THREE.MeshLambertMaterial({ color: 0x9a9a9a });
  const lampMat = new THREE.MeshBasicMaterial({ color: tod.lights > 0 ? 0xfffbe8 : 0xd8d8c8 });
  for (const x of [-78, 78]) for (const z of [-62, 62]) {
    const t = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 1.1, 42, 6), towerMat); t.position.set(x, 21, z); scene.add(t);
    const bank = new THREE.Mesh(new THREE.BoxGeometry(7, 4, 1), lampMat); bank.position.set(x * 0.97, 43, z * 0.97); bank.lookAt(0, 0, 0); scene.add(bank);
    if (tod.lights > 0) {
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(12, 8), new THREE.MeshBasicMaterial({ color: 0xfff4c8, transparent: true, opacity: 0.25 * tod.lights, depthWrite: false, fog: false }));
      glow.position.copy(bank.position); glow.lookAt(0, 0, 0); glow.translateZ(0.8); scene.add(glow);
    }
  }

  // --- big screen -----------------------------------------------------------
  const screen = tex(512, 256, () => {});
  const scr = new THREE.Mesh(new THREE.PlaneGeometry(22, 11), new THREE.MeshBasicMaterial({ map: screen.t, fog: false }));
  scr.position.set(-D - 30, 24, 0); scr.rotation.y = Math.PI / 2; scene.add(scr);
  const frame = new THREE.Mesh(new THREE.BoxGeometry(1, 13, 24), concrete); frame.position.set(-D - 30.6, 24, 0); scene.add(frame);
  const leg = new THREE.Mesh(new THREE.BoxGeometry(1, 18, 1), concrete); leg.position.set(-D - 30.6, 9, 0); scene.add(leg);
  out.drawScreen = (lines) => {
    const g = screen.c.getContext('2d'), w = 512, h = 256;
    g.fillStyle = '#05070c'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#f2b51d'; g.fillRect(0, 0, w, 36);
    g.fillStyle = '#111'; g.font = 'bold 26px Arial Black, Arial'; g.textAlign = 'center'; g.fillText(lines.title, w / 2, 28);
    g.fillStyle = '#fff'; g.font = 'bold 64px Arial Black, Arial';
    const sw = g.measureText(lines.score).width, k = Math.min(1, (w - 40) / sw);
    g.save(); g.translate(w / 2, 130); g.scale(k, 1); g.fillText(lines.score, 0, 0); g.restore();
    g.font = 'bold 30px Arial'; g.fillStyle = '#9fd3ff'; g.fillText(lines.sub, w / 2, 200);
    g.font = '20px Arial'; g.fillStyle = '#ccc'; g.fillText(lines.foot || '', w / 2, 240);
    screen.t.needsUpdate = true;
  };

  // --- flags show the wind --------------------------------------------------
  const poleMat = new THREE.MeshLambertMaterial({ color: 0xcccccc });
  const flagCols = [opts.homeColor, opts.awayColor, '#ffffff', opts.homeColor2];
  let fi = 0;
  for (const [x, z] of [[-40, W + 36], [0, W + 36], [40, W + 36], [-40, -W - 36], [0, -W - 36], [40, -W - 36]]) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 6, 6), poleMat); pole.position.set(x, 27, z); scene.add(pole);
    const pivot = new THREE.Group(); pivot.position.set(x, 29.4, z); scene.add(pivot);
    const fg = new THREE.PlaneGeometry(3, 1.8, 6, 1); fg.translate(1.5, 0, 0);
    const flag = new THREE.Mesh(fg, new THREE.MeshLambertMaterial({ color: flagCols[fi++ % 4], side: THREE.DoubleSide })); pivot.add(flag);
    fg.computeBoundingSphere(); flag.frustumCulled = false;
    out.flags.push({ pivot, flag, base: fg.attributes.position.array.slice() });
  }

  // --- distant skyline --------------------------------------------------------
  const bMats = ['#7f8a99', '#9aa3ad', '#6d7787', '#b0a593', '#8c8f96'].map((c) => new THREE.MeshLambertMaterial({ color: c }));
  const bGeos = bMats.map(() => []);
  for (let i = 0; i < 70; i++) {
    const a = rand() * Math.PI * 2, r = randRange(230, 330), hgt = randRange(12, 70) * (Math.abs(Math.sin(a)) > 0.6 ? 1.3 : 0.7);
    const g = new THREE.BoxGeometry(randRange(12, 28), hgt, randRange(12, 28));
    tmpObj.rotation.set(0, rand() * 3, 0); tmpObj.position.set(Math.cos(a) * r, hgt / 2, Math.sin(a) * r); tmpObj.updateMatrix();
    g.applyMatrix4(tmpObj.matrix); bGeos[i % bMats.length].push(g);
  }
  bGeos.forEach((list, i) => scene.add(new THREE.Mesh(mergeGeometries(list), bMats[i])));
  const hillMat = new THREE.MeshLambertMaterial({ color: tod.ground, flatShading: true });
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2 + rand() * 0.3;
    const hill = new THREE.Mesh(new THREE.ConeGeometry(randRange(90, 160), randRange(40, 90), 6), hillMat);
    hill.position.set(Math.cos(a) * 470, 0, Math.sin(a) * 470); scene.add(hill);
  }

  out.update = (dt, time, wind, excite) => {
    out.crowdUniforms.uTime.value = time; out.crowdUniforms.uExcite.value = excite;
    const ang = Math.atan2(-wind.z, wind.x), sp = Math.hypot(wind.x, wind.z);
    if (!Number.isFinite(sp) || !Number.isFinite(time)) return;
    for (const f of out.flags) {
      f.pivot.rotation.y = ang;
      const arr = f.flag.geometry.attributes.position.array, base = f.base;
      for (let i = 0; i < arr.length; i += 3) {
        const x = base[i];
        arr[i + 2] = Math.sin(time * (4 + sp) - x * 2.2) * 0.14 * x * (0.3 + sp / 8);
        arr[i + 1] = base[i + 1] - x * (0.5 - Math.min(0.45, sp / 18));
      }
      f.flag.geometry.attributes.position.needsUpdate = true;
    }
  };
  return out;
}
