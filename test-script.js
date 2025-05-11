import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10000, // virtual users
  duration: '30s',
};

export default function () {
  let res = http.get('http://135.235.242.21/');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
