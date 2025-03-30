import { useEffect, useState } from "react";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { ethers } from "ethers";
import { enviornment } from "./../config/env";
import { monadABI } from "./../config/abi";
import { parseGwei } from "viem";

interface UseContractFunctionParams {
  functionName: string;
}

interface UseContractFunctionReturn {
  isPending: boolean;
  isConfirming: boolean;
  isConfirmed: boolean;
  error: any;
  callFunction: (args?: any[], value?: bigint) => Promise<void>;
  result: any[];
  txHash: string;
}

export const useContractFunction = ({
  functionName,
}: UseContractFunctionParams): UseContractFunctionReturn => {
  const { CONTRACT_ADDRESS } = enviornment;
  const [result, setResult] = useState<any>(null);
  const [txHash, setTxHash] = useState<string>("");
  const {
    data: hash,
    isPending,
    writeContractAsync,
    error,
  } = useWriteContract();

  const {
    data: txReceipt,
    isLoading: isConfirming,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  });

  const callFunction = async (
    args: any[] = [],
    value: bigint | undefined = undefined,
  ) => {
    try {
      if (functionName)
        await writeContractAsync({
          address: CONTRACT_ADDRESS,
          abi: monadABI,
          functionName,
          maxPriorityFeePerGas: parseGwei("100"),
          maxFeePerGas: parseGwei("100"),
          args,
          value,
        });
    } catch (error) {
      console.error("Error in hook:", error);
    }
  };

  const loadLogs = (logs: any[]) => {
    if (monadABI && monadABI.length > 0) {
      const iFace = new ethers.Interface(monadABI);

      if (logs.length > 0) {
        try {
          const decodedResults = logs.map(
            (log: { topics: string[]; data: string }) => {
              if (log) {
                const decodedLog = iFace.parseLog(log);
                return decodedLog?.args?.map((arg) => arg);
              }
            },
          );

          setResult(decodedResults);
        } catch (error) {
          console.error("Failed to parse log:", error);
        }
      } else {
        console.error("Logs array is empty");
      }
    } else {
      console.error("ABI is null, undefined, or empty");
    }
  };

  useEffect(() => {
    if (txReceipt?.logs) {
      setTxHash(txReceipt.transactionHash);
      loadLogs(txReceipt.logs);
    }
  }, [txReceipt]);

  return {
    isPending,
    isConfirming,
    isConfirmed,
    error,
    callFunction,
    result,
    txHash,
  };
};
