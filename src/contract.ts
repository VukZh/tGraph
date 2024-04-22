import { GetDataFeedEvent as GetDataFeedEventEvent } from "../generated/Contract/Contract"
import { GetDataFeedEvent } from "../generated/schema"

export function handleGetDataFeedEvent(event: GetDataFeedEventEvent): void {
  let entity = new GetDataFeedEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
