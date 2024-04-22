import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { GetDataFeedEvent } from "../generated/schema"
import { GetDataFeedEvent as GetDataFeedEventEvent } from "../generated/Contract/Contract"
import { handleGetDataFeedEvent } from "../src/contract"
import { createGetDataFeedEventEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let addr = Address.fromString("0x0000000000000000000000000000000000000001")
    let data = BigInt.fromI32(234)
    let newGetDataFeedEventEvent = createGetDataFeedEventEvent(addr, data)
    handleGetDataFeedEvent(newGetDataFeedEventEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("GetDataFeedEvent created and stored", () => {
    assert.entityCount("GetDataFeedEvent", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "GetDataFeedEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "addr",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "GetDataFeedEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "data",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
