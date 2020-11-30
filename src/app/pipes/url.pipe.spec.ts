import { UrlPipe } from './url.pipe';

describe('UrlPipe', () => {
  it('create an instance', () => {
    const pipe = new UrlPipe();
    expect(pipe).toBeTruthy();
  });

  it('returns hostname when url is passed', () => {
    const pipe = new UrlPipe();
    expect(pipe.transform('https://www.google.com')).toEqual('google.com');
    expect(pipe.transform('https://www.google.com/test')).toEqual('google.com');
    expect(pipe.transform('https://github.com')).toEqual('github.com');
    expect(pipe.transform('https://github.com/test')).toEqual('github.com');
    expect(pipe.transform('')).toEqual('');
  });
});
