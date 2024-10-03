import { BaseError as CoreError } from '@wagmi/core'

import { getVersion } from '../utils/getVersion.js'

export type BaseErrorType = BaseError & { name: 'WagmiError' }
export class BaseError extends CoreError {
  override name = 'WagmiError'
  override get docsBaseUrl() {
    return 'https://wagmi.sh/solid'
  }
  override get version() {
    return getVersion()
  }
}
