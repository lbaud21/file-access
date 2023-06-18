import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useOnlyFileGetPrice, useOnlyFileIsViewer, useOnlyFilePayForView } from '../../contract/generated';  // Remplacez './path/to/generated/file' par le chemin approprié vers le fichier généré
import { useConnect } from 'wagmi';

const FileAccessForm = () => {
  const cidFromUrl = 'bafybeigqtdzogwrmb7owhtvo23lae4zuwhmddyrci6fajneeagnat4my6i';
  const addressOfContract = '0x57E364d2F200caCBA340CBe159A1E6C95A1d4E48';

  const { address, isConnected } = useConnect();
  const { data: isViewer } = useOnlyFileIsViewer({ address: addressOfContract, args: [cidFromUrl] });
  const { data: price } = useOnlyFileGetPrice({ address: addressOfContract, args: [cidFromUrl] });
  const { mutate: payForView, isLoading, isError } = useOnlyFilePayForView();

  console.log('isViewer', isViewer);

  const handleBuy = async (cid) => {
    try {
      await payForView({ cid: cid, value: price });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <ConnectButton />
      {/* is viewer */}
      {isViewer && <p>Is viewer: {isViewer}</p>}

      {/* not viewer */}
      {!isViewer && (
        <>
          <p>is not viewer</p>
          <div>
            <p>Price: {price?.toString()} FIL</p>
            <button onClick={() => handleBuy(cidFromUrl)}>Buy</button>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default FileAccessForm;
