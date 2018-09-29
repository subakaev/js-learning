import VirtualFs from '../../src/virtualFs';

describe('FS', () => {
  let files;

  beforeEach(() => {
    files = new VirtualFs();
  });

  it('#mkdirSync', () => {
    expect(!files.isDirectory('/etc')).toBe(true);

    files.mkdirSync('/etc');
    expect(files.isDirectory('/etc')).toBe(true);

    files.mkdirSync('/etc/nginx');
    expect(files.isDirectory('/etc/nginx')).toBe(true);
  });

  it('#mkdirSync2', () => {
    expect(!files.isDirectory('/var//')).toBe(true);

    files.mkdirSync('/var/');
    expect(files.isDirectory('/var////')).toBe(true);
    expect(files.isDirectory('/var')).toBe(true);

    files.mkdirSync('/var//log//////');
    expect(files.isDirectory('/var/log')).toBe(true);
    expect(files.isDirectory('/var///log')).toBe(true);
  });

  it('#mkdirSync3', () => {
    expect(files.isDirectory('/etc/nginx')).toBe(false);

    files.mkdirSync('/etc/nginx');
    expect(files.isDirectory('/etc/nginx')).toBe(false);

    files.mkdirSync('/etc');
    files.mkdirSync('/etc/nginx');
    expect(files.isDirectory('/etc/nginx')).toBe(true);
  });

  it('#touchSync', () => {
    expect(!files.isFile('/file.txt')).toBe(true);

    files.touchSync('/file.txt');
    expect(files.isFile('/file.txt')).toBe(true);

    files.mkdirSync('/etc');
    files.touchSync('/etc/bashrc');
    expect(files.isFile('/etc/bashrc')).toBe(true);
  });
});
