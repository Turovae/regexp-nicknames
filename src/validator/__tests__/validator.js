import Validator from '../Validator';

const nameVariants = [
  ['only latin letters', 'SayMyName', true],
  ['latin letters and digits', 'android977lts', true],
  ['latin letters and digits 2', 'android97l92s', true],
  ['latin letters and allowed characters', 'frodo_baggins', true],
  ['latin letters and allowed characters 2', 'f1r2o3d4o_b5a6g7g8i9n10s', true],
  ['latin letters and allowed characters 3', 'frodo_bag-gins', true],
  ['latin letters and greater then three digits', 'frodo9999baggins', false],
  ['no latin letters', 'Вася', false],
  ['start digit', '5kings', false],
  ['end digit', 'blabla6', false],
  ['start _', '_blabla', false],
  ['end _', 'blabla_', false],
  ['start -', '-blabla', false],
  ['end -', 'blabla-', false],
  ['latin and space', 'frodo baggins', false],
  ['latin and underlines', 'b_l_a_b_l_a', true],
  ['latin and $', 'bla$bla', false],
];

test.each(nameVariants)(
  'test Validator.validateNames with %s',
  (_, name, expected) => {
    expect(Validator.validateUsername(name)).toBe(expected);
  },
);
