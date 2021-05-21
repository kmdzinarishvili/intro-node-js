const app = require('./api')


// write some tests


describe('users', () => {
    test('users',  () => {
        expect(data.users).toHaveLength(1)
      })
      test('posts', () => {
        expect(data.posts).toHaveLength(3)
      })
})

