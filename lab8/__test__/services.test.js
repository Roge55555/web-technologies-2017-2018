const services = require('../services/scanDB');

describe("services", () => {
  describe("id", () => {
    test('id = 603', () => {
      const movie = services.findById(603);
			expect(movie.id).toBe(603)
    });

    test("incorrect id", () => {
      const movie = services.findById(0);

      expect(movie).toBeUndefined();
    });
  });

  describe("name", () => {
    test('matrix', () => {
      const movies = services.findByName("matrix");

			movies.forEach(movie => {
				expect(movie).toHaveProperty('original_title');
				expect(movie).toHaveProperty('id');
				expect(movie).toHaveProperty('adult');
				expect(movie).toHaveProperty('popularity');
			});
    });

    test("incorrect name", () => {
      const movies = services.findByName("uktgyhyjb");

      expect(movies.length).toBe(0);
    });
});

  describe("pagination", () => {
    test("offset = 1  limit = 10", () => {
      const movies = services.pagination(1, 10);

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBe(10);
    });

    test("incorrect pagination", () => {
      const movies = services.pagination(0, 0);

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBe(0);
    });
  });

  describe("sortBy", () => {
    test("sort key = id order = inc", () => {

			const query = {
				key: 'id',
				order: 'inc'
			};
      const movies = services.sortBy(query);

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBeGreaterThan(1);

      for (let i = 0; i < movies.size - 1; i++)
        expect(movies[i].id < movies[i + 1].id).toBe(true);
    });

    test("sort key = original_title order = inc", () => {

			const query = {
				key: 'original_title',
				order: 'inc'
			};
      const movies = services.sortBy(query);

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBeGreaterThan(1);

      for (let i = 0; i < movies.size - 1; i++)
        expect(movies[i].original_title < movies[i + 1].original_title).toBe(true);
    });
  });
});