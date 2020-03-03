import Team from '../Team';
import Bowman from '../Bowman';
import Daemon from '../Daemon';

test('Should correctly work with Team', () => {
  const team = new Team();
  const vasya = new Bowman('vasya');
  const petya = new Daemon('petya');
  team.add(vasya);
  expect(() => team.add(vasya)).toThrow();
  expect(() => team.addAll(vasya, petya)).not.toThrow();
  expect(team.members.has(vasya) && team.members.has(petya)).toBe(true);
  expect(team.toArray()).toBeInstanceOf(Array);
});
