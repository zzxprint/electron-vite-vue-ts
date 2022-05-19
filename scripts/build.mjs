import { build } from 'vite';
import electronBuilder from 'electron-builder';

await build();
electronBuilder.build()
