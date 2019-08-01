
export default class ChatController {
  static get(req, res) {
    res
      .status(200)
      .json({
        data: "Greetings from Node Api server"
      })
  }
}
