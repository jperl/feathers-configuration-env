import setEnv from './lib/set-env';
import test from 'ava';

test('loads environment variables', t => {
  setEnv();
  t.true(process.env.host === 'localhost');
});

test('respects NODE_ENV', t => {
  process.env.NODE_ENV = 'production';
  setEnv();
  t.true(process.env.host === 'productionhost');
});
