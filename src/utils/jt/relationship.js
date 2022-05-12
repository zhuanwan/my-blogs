import { effect } from 'store'
import * as types from 'store/mutation-types'

// 添加好友关系
function updateRelationship({
  introductionId,
  sourceType = 0,
  cardId,
  actionId,
  actionType
}) {
  const params = { cardId, sourceType }

  if (introductionId) params.introductionId = introductionId
  if (actionId) params.actionId = actionId
  if (actionType) params.actionType = actionType

  effect({
    type: types.CARD_RELATIONSHIP_ADD,
    payload: { params }
  })
}

export default updateRelationship
