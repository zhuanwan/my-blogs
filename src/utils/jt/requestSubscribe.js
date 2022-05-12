import { postSubscribeParams, getSubscribeRedirectUrl } from 'api/subscribe'

export default async function requestSubscribe(params = {}) {
  const { id } = await postSubscribeParams({
    infoString: JSON.stringify(params)
  })

  const data = await getSubscribeRedirectUrl({ reserved: id, from: 2 })
  const urlInstance = new URL(data.authUrl)
  const redirectUrl = urlInstance.searchParams.get('redirect_url')
  const backRerdirectUrlInstance = new URL(redirectUrl)
  backRerdirectUrlInstance.searchParams.set('cid', params.companyId)
  backRerdirectUrlInstance.searchParams.set('cardId', params.cardId)
  urlInstance.searchParams.set('redirect_url', backRerdirectUrlInstance.href)
  window.location.href = urlInstance.href
}
