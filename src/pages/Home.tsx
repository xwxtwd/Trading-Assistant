import { useState } from 'react';
import { TypeWriter } from '../components/TypeWriter';
import { useNavigate } from 'react-router';

export default function Home() {

  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleCheck = () => {
    if (!address) {
      return;
    }
    navigate(`/detail/${address}`);
  };

  return <>
    <div
      className="my-[175px] mx-auto w-[1096px] pt-[78px] px-[88px] h-[450px] shrink-0 bg-[#000000] bg-[url('/content-bg.png')] bg-cover bg-center text-center"
    >
      {
        isLoading ? (
          <div className="w-[708px] text-[#F5F5F5] text-center font-Poppins text-[32px] font-not-italic font-400 leading-[154%] mx-auto">

            <TypeWriter
              key={address}
              texts={[
                "Based on your recent transactions, AI ",
                "suggests the following"
              ]}
              completeDelay={0}
            />
          </div>
        ) : (
          <>
            <div className="w-[708px] text-[#F5F5F5] text-center font-Poppins text-[32px] font-not-italic font-400 leading-[154%] mx-auto">
              <TypeWriter
                texts={[
                  "It is your AI trading assistant",
                  "gives you suggest"
                ]}
              />
            </div>

            <div className="mt-[60px] w-[920px] h-[100px] shrink-0 rounded-[100px] bg-[rgba(255,255,255,0.05)] flex justify-between items-center pr-[22px] pl-[46px] gap-[20px]">
              <input
                className="flex-1 text-[#FFF] font-Poppins text-[24px] font-not-italic font-500 leading-[32px] capitalize focus:outline-none focus:ring-0"
                type="text"
                placeholder="input your wallet address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <button className="flex w-[140px] px-[32px] py-[16px] justify-center items-center gap-[4px] rounded-[60px] bg-[#52FF63]"
                onClick={handleCheck}
              >
                Check
              </button>
            </div>
          </>
        )
      }

    </div>
  </>
}