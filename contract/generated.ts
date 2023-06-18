// Generated by @wagmi/cli@1.2.0 on 17/06/2023 at 22:54:56
import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Only file
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const onlyFileABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  { type: 'error', inputs: [], name: 'FailedTransfer' },
  { type: 'error', inputs: [], name: 'InvalidAddress' },
  { type: 'error', inputs: [], name: 'InvalidPrice' },
  { type: 'error', inputs: [], name: 'NotEnoughFunds' },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: '_cid', internalType: 'string', type: 'string' }],
    name: 'payForView',
    outputs: [],
  },
  { type: 'error', inputs: [], name: 'UnknownAddress' },
  { type: 'error', inputs: [], name: 'UnknownCid' },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_cid', internalType: 'string', type: 'string' },
      { name: '_price', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'uploadFile',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balances',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'cids',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_address', internalType: 'address', type: 'address' }],
    name: 'getBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_address', internalType: 'address', type: 'address' }],
    name: 'getCid',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_cid', internalType: 'string', type: 'string' }],
    name: 'getPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_cid', internalType: 'string', type: 'string' }],
    name: 'getUploader',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_cid', internalType: 'string', type: 'string' }],
    name: 'isViewer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'string', type: 'string' }],
    name: 'prices',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'string', type: 'string' }],
    name: 'uploaders',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'viewers',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link onlyFileABI}__.
 */
export function useOnlyFileRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof onlyFileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: onlyFileABI,
    ...config,
  } as UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link onlyFileABI}__ and `functionName` set to `"balances"`.
 */
export function useOnlyFileBalances<
  TFunctionName extends 'balances',
  TSelectData = ReadContractResult<typeof onlyFileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: onlyFileABI,
    functionName: 'balances',
    ...config,
  } as UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link onlyFileABI}__ and `functionName` set to `"cids"`.
 */
export function useOnlyFileCids<
  TFunctionName extends 'cids',
  TSelectData = ReadContractResult<typeof onlyFileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: onlyFileABI,
    functionName: 'cids',
    ...config,
  } as UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link onlyFileABI}__ and `functionName` set to `"getBalance"`.
 */
export function useOnlyFileGetBalance<
  TFunctionName extends 'getBalance',
  TSelectData = ReadContractResult<typeof onlyFileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: onlyFileABI,
    functionName: 'getBalance',
    ...config,
  } as UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link onlyFileABI}__ and `functionName` set to `"getCid"`.
 */
export function useOnlyFileGetCid<
  TFunctionName extends 'getCid',
  TSelectData = ReadContractResult<typeof onlyFileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: onlyFileABI,
    functionName: 'getCid',
    ...config,
  } as UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link onlyFileABI}__ and `functionName` set to `"getPrice"`.
 */
export function useOnlyFileGetPrice<
  TFunctionName extends 'getPrice',
  TSelectData = ReadContractResult<typeof onlyFileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: onlyFileABI,
    functionName: 'getPrice',
    ...config,
  } as UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link onlyFileABI}__ and `functionName` set to `"getUploader"`.
 */
export function useOnlyFileGetUploader<
  TFunctionName extends 'getUploader',
  TSelectData = ReadContractResult<typeof onlyFileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: onlyFileABI,
    functionName: 'getUploader',
    ...config,
  } as UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link onlyFileABI}__ and `functionName` set to `"isViewer"`.
 */
export function useOnlyFileIsViewer<
  TFunctionName extends 'isViewer',
  TSelectData = ReadContractResult<typeof onlyFileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: onlyFileABI,
    functionName: 'isViewer',
    ...config,
  } as UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link onlyFileABI}__ and `functionName` set to `"prices"`.
 */
export function useOnlyFilePrices<
  TFunctionName extends 'prices',
  TSelectData = ReadContractResult<typeof onlyFileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: onlyFileABI,
    functionName: 'prices',
    ...config,
  } as UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link onlyFileABI}__ and `functionName` set to `"uploaders"`.
 */
export function useOnlyFileUploaders<
  TFunctionName extends 'uploaders',
  TSelectData = ReadContractResult<typeof onlyFileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: onlyFileABI,
    functionName: 'uploaders',
    ...config,
  } as UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link onlyFileABI}__ and `functionName` set to `"viewers"`.
 */
export function useOnlyFileViewers<
  TFunctionName extends 'viewers',
  TSelectData = ReadContractResult<typeof onlyFileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: onlyFileABI,
    functionName: 'viewers',
    ...config,
  } as UseContractReadConfig<typeof onlyFileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link onlyFileABI}__.
 */
export function useOnlyFileWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof onlyFileABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof onlyFileABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof onlyFileABI, TFunctionName, TMode>({
    abi: onlyFileABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link onlyFileABI}__ and `functionName` set to `"payForView"`.
 */
export function useOnlyFilePayForView<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof onlyFileABI,
          'payForView'
        >['request']['abi'],
        'payForView',
        TMode
      > & { functionName?: 'payForView' }
    : UseContractWriteConfig<typeof onlyFileABI, 'payForView', TMode> & {
        abi?: never
        functionName?: 'payForView'
      } = {} as any,
) {
  return useContractWrite<typeof onlyFileABI, 'payForView', TMode>({
    abi: onlyFileABI,
    functionName: 'payForView',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link onlyFileABI}__ and `functionName` set to `"uploadFile"`.
 */
export function useOnlyFileUploadFile<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof onlyFileABI,
          'uploadFile'
        >['request']['abi'],
        'uploadFile',
        TMode
      > & { functionName?: 'uploadFile' }
    : UseContractWriteConfig<typeof onlyFileABI, 'uploadFile', TMode> & {
        abi?: never
        functionName?: 'uploadFile'
      } = {} as any,
) {
  return useContractWrite<typeof onlyFileABI, 'uploadFile', TMode>({
    abi: onlyFileABI,
    functionName: 'uploadFile',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link onlyFileABI}__ and `functionName` set to `"withdraw"`.
 */
export function useOnlyFileWithdraw<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof onlyFileABI,
          'withdraw'
        >['request']['abi'],
        'withdraw',
        TMode
      > & { functionName?: 'withdraw' }
    : UseContractWriteConfig<typeof onlyFileABI, 'withdraw', TMode> & {
        abi?: never
        functionName?: 'withdraw'
      } = {} as any,
) {
  return useContractWrite<typeof onlyFileABI, 'withdraw', TMode>({
    abi: onlyFileABI,
    functionName: 'withdraw',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link onlyFileABI}__.
 */
export function usePrepareOnlyFileWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof onlyFileABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: onlyFileABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof onlyFileABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link onlyFileABI}__ and `functionName` set to `"payForView"`.
 */
export function usePrepareOnlyFilePayForView(
  config: Omit<
    UsePrepareContractWriteConfig<typeof onlyFileABI, 'payForView'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: onlyFileABI,
    functionName: 'payForView',
    ...config,
  } as UsePrepareContractWriteConfig<typeof onlyFileABI, 'payForView'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link onlyFileABI}__ and `functionName` set to `"uploadFile"`.
 */
export function usePrepareOnlyFileUploadFile(
  config: Omit<
    UsePrepareContractWriteConfig<typeof onlyFileABI, 'uploadFile'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: onlyFileABI,
    functionName: 'uploadFile',
    ...config,
  } as UsePrepareContractWriteConfig<typeof onlyFileABI, 'uploadFile'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link onlyFileABI}__ and `functionName` set to `"withdraw"`.
 */
export function usePrepareOnlyFileWithdraw(
  config: Omit<
    UsePrepareContractWriteConfig<typeof onlyFileABI, 'withdraw'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: onlyFileABI,
    functionName: 'withdraw',
    ...config,
  } as UsePrepareContractWriteConfig<typeof onlyFileABI, 'withdraw'>)
}
