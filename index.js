const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const { Random } = require('random-js');
const FILE_PATH = './data.json';

const makeCommit = async n => {
  if (n === 0) return simpleGit().push();

  const random = new Random();
  
  const startDate = moment('2023-07-02');
  const endDate = moment('2023-07-02');
  const range = endDate.diff(startDate, 'days');

  const x = random.integer(0, range);
  const DATE = startDate.clone().add(x, 'days').format();

  const data = {
    date: DATE
  };

  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit().add(FILE_PATH).commit(DATE, { '--date': DATE }, makeCommit.bind(this, --n));
  });
};

makeCommit(300);