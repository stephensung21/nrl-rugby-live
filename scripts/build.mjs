// Bundles src/ into dist/game.js (plain IIFE so index.html also works from file://)
// and produces dist/standalone.html with everything inlined.
import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const serve = process.argv.includes('--serve');
const opts = { entryPoints: ['src/main.js'], bundle: true, format: 'iife', target: 'es2020', outfile: 'dist/game.js', minify: !serve && !process.env.DEV, sourcemap: serve, legalComments: 'none' };
mkdirSync('dist', { recursive: true });
if (serve) {
  const ctx = await esbuild.context(opts);
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: '.', port: 8080 });
  console.log(`Dev server: http://localhost:${port}/`);
} else {
  await esbuild.build(opts);
  const js = readFileSync('dist/game.js', 'utf8');
  const css = readFileSync('style.css', 'utf8');
  const html = readFileSync('index.html', 'utf8')
    .replace('<link rel="stylesheet" href="style.css">', () => `<style>\n${css}\n</style>`)
    .replace('<script src="dist/game.js"></script>', () => `<script>\n${js.replace(/<\/script/gi, '<\\/script')}\n</script>`);
  writeFileSync('dist/standalone.html', html);
  console.log('Built dist/game.js and dist/standalone.html', (js.length / 1024).toFixed(0) + ' KB');
}
