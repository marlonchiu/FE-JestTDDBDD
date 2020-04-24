import { generateConfig, generateAnotherConfig } from "./demo";

/**
 * 快照
 * toMatchSnapshot 生成快照文件夹__snapshots__
 * toMatchInlineSnapshot  行内快照
 *
 * 对于变化的配置量 Snapshot({ time2: expect.any(Date)})
 *   同样可以接收 Date String Number
 *
 */
// test('should generateConfig 函数', () => {
//   // expect(generateConfig()).toEqual({
//   //   server: 'http://localhost',
//   //   port: 8080,
//   //   domain: 'localhost'
//   // })
//   expect(generateConfig()).toMatchSnapshot({
//     time2: expect.any(Date)
//   })
// })

// test('should generateAnotherConfig 函数', () => {
//   expect(generateAnotherConfig()).toMatchSnapshot({
//     time2: expect.any(Date)
//   })
// })

test("行内 generateAnotherConfig 函数", () => {
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      time2: expect.any(Date),
    },
    `
    Object {
      "domain": "localhost",
      "port": 8080,
      "server": "http://localhost",
      "time": "2020",
      "time2": Any<Date>,
    }
  `
  );
});
