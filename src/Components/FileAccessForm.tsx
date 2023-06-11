import { useState } from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function FileAccessForm() {
  const [hasAccessToFile, setHasAccessToFile] = useState(false);

  const fetchWalletHasAccessToFile = () => {
    // Call smart contrat here to check if the connected wallet's address has already paid to access the file
    setHasAccessToFile(false);
  };

  const pay = () => {
    // Call smart contrat here to pay
    // If success, set hasAccessToFile to true
    setHasAccessToFile(true);
  };

  return (
    <div className="flex flex-col">
      <div>
        <input name="cid" placeholder="file CID" type="text" />
      </div>
      <div>
        <ConnectButton />
      </div>

      {!hasAccessToFile && <button onClick={() => pay()}>Pay</button>}
      {hasAccessToFile && <div>This is a file </div>}
    </div>
  );
}
