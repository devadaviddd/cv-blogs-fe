export default class WebError extends Error {
  public uiMessage: string
  public status: number | undefined
  constructor(message: string, status: number | undefined, uiMessage: string) {
    super(message)
    this.uiMessage = uiMessage
    this.status = status
  }
}