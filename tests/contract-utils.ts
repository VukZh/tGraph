import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { GetDataFeedEvent } from "../generated/Contract/Contract"

export function createGetDataFeedEventEvent(
  addr: Address,
  data: BigInt
): GetDataFeedEvent {
  let getDataFeedEventEvent = changetype<GetDataFeedEvent>(newMockEvent())

  getDataFeedEventEvent.parameters = new Array()

  getDataFeedEventEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  getDataFeedEventEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromSignedBigInt(data))
  )

  return getDataFeedEventEvent
}
