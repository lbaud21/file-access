import {
  Button,
  ColumnWrapper,
  InputNumber,
  Logo,
} from "./FileAccessForm.style";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import {
  useOnlyFileIsViewer,
  useOnlyFilePayForView,
  useOnlyFileGetPrice,
} from "../../contract/generated";
import { useState } from "react";

export const CONTRACT_ADDRESS =
  "0x57E364d2F200caCBA340CBe159A1E6C95A1d4E48" as const;

export default function FileAccessForm() {
  const [cid, setCid] = useState("");
  const { address, isConnected } = useAccount();

  const {
    data: isViewer,
    isLoading: isLoadingFileIsViewer,
    error: isViewerError,
  } = useOnlyFileIsViewer({ address: CONTRACT_ADDRESS, args: ["test"] });

  const {
    data: price,
    isLoading: isLoadingGetPrice,
    error: isGetPriceError,
  } = useOnlyFileGetPrice({
    address: CONTRACT_ADDRESS,
    args: [cid],
  });

  const {
    write,
    isLoading: isLoadingFilePayPerView,
    error,
  } = useOnlyFilePayForView({
    address: CONTRACT_ADDRESS,
    value: price,
  });

  console.log(error, error);

  return (
    <ColumnWrapper>
      <Logo src="/only_file_logo_white.png" />
      <ConnectButton />

      {isConnected && (
        <>
          <InputNumber
            onChange={(e) => setCid(e.target.value)}
            name="file link"
            placeholder="file link"
            type="text"
          />
          <span>{address}</span>

          {cid && !isViewer && (
            <Button onClick={() => write({ args: [cid], value: price })}>
              Access file
            </Button>
          )}
        </>
      )}
    </ColumnWrapper>
  );
}
