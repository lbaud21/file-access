import { ColumnWrapper, InputNumber, Logo } from "./FileAccessForm.style";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function FileAccessForm() {
  const { address, isConnected } = useAccount();

  return (
    <ColumnWrapper>
      <Logo src="/only_file_logo_white.png" />

      <ConnectButton />
      {isConnected && (
        <>
          <InputNumber name="file link" placeholder="file link" type="text" />
          <span>{address}</span>
        </>
      )}
    </ColumnWrapper>
  );
}
