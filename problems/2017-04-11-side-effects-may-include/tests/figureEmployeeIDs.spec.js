const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const figureEmployeeIDs = require('../lib/figureEmployeeIDs').default;

const getEmployees = () => [
  {
    name : 'Daniel',
    dateOfBirth : '1984-01-12'
  },
  {
    name : 'Jack',
    dateOfBirth : '1946-04-06'
  },
  {
    name : 'Jane',
    dateOfBirth : '1989-08-30'
  }
];

describe('figureEmployeeIDs', () => {
  before(() => {
    const date = new Date('2016-04-11');
    this.clock = sinon.useFakeTimers(date);
  })

  after(() => {
    this.clock.restore();
  });

  it('should return a list of employee data mapped with their employee ids', () => {
    const employees = getEmployees();
    const seed = Math.random();

    const employeesWithIDs = [
      {
        name : 'Daniel',
        dateOfBirth : '1984-01-12',
        id : 'emp-1-'+seed
      },
      {
        name : 'Jack',
        dateOfBirth : '1946-04-06',
        id : 'emp-2-'+seed
      },
      {
        name : 'Jane',
        dateOfBirth : '1989-08-30',
        id : 'emp-3-'+seed
      }
    ]

    expect(figureEmployeeIDs(employees, seed)).to.deep.equal(employeesWithIDs);
  });

  it('should not mutate the input employees parameter', () => {
    const employees = getEmployees();
    figureEmployeeIDs(employees);
    expect(employees).to.deep.equal(getEmployees());
  })

});
