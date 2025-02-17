import { useParams } from "react-router";
import { TypeWriter } from "../components/TypeWriter";
import { useRequest } from "ahooks";
import axios from "axios";
import { useState, useMemo } from "react";

export default function WalletAnalysis() {

  const { address } = useParams();
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const { data, loading: isLoading, error } = useRequest(async () => {
    const res = await axios.get(`/backend-api/assistant/stat?address=${address}`);
    return res.data.data;
  }, {
    ready: !!address,
    refreshDeps: [address],
  });

  const dashboardList = useMemo(() => {
    if (error) {
      return [];
    }

    return [
      {
        label: "总收益",
        value: <div className="flex gap-[12px]">
          <span className={data?.trade_data?.total_profit_usd?.startsWith('-') ? "text-[#FF5252]" : "text-[#52FF63]"}>
            {data?.trade_data?.total_profit_usd}%
          </span>
          |
          <span className={data?.trade_data?.total_profit_eth?.startsWith('-') ? "text-[#FF5252]" : "text-[#52FF63]"}>
            {data?.trade_data?.total_profit_eth} ETH
          </span>
        </div>
      },
      {
        label: "最大盈利标的",
        value: <div className="flex gap-[12px]">
          <span>{data?.trade_data?.max_profit_token}</span>
          |
          <span className="text-[#52FF63]">+{data?.trade_data?.max_profit_ratio}</span>
        </div>
      },
      {
        label: "最大亏损标的",
        value: <div className="flex gap-[12px]">
          <span>{data?.trade_data?.max_loss_token}</span>
          |
          <span className="text-[#FF5252]">{data?.trade_data?.max_loss_ratio}</span>
        </div>
      },
      {
        label: "平均亏损",
        value: <div className="flex gap-[12px]">
          <span className={data?.trade_data?.avg_profit_per_trade_eth?.startsWith('-') ? "text-[#FF5252]" : "text-[#52FF63]"}>
            {data?.trade_data?.avg_profit_per_trade_eth} ETH
          </span>
        </div>
      },
      {
        label: "胜率",
        value: <span>{data?.trade_data?.win_rate}</span>
      },
      {
        label: "总交易次数",
        value: <span>{data?.trade_data?.total_trades}</span>
      },
    ];
  }, [data, error]);

  const highlightText = (text: string) => {
    if (!text) return '';
    return text.replace(/([+-]?\d+\.?\d*%?|[""][^""]*[""]|[''][^'']*[''])/g, match => 
      `<span class="text-[#52FF63]">${match}</span>`
    );
  };

  return <>
    {
      isLoading || !isTypingComplete ? (
        <div
          className=" my-[175px] mx-auto w-[1096px] pt-[78px] px-[88px] h-[450px] shrink-0 bg-[#000000] bg-[url('/content-bg.png')] bg-cover bg-center text-center"
        >
          <div className="w-[708px] text-[#F5F5F5] text-center font-Poppins text-[32px] font-not-italic font-400 leading-[154%] mx-auto">
            <TypeWriter
              key={address}
              texts={[
                "Based on your recent transactions, AI ",
                "suggests the following"
              ]}
              completeDelay={0}
              onComplete={() => setIsTypingComplete(true)}
            />
          </div>
        </div>
      ) : (
        <div
          className=" my-[175px] mx-auto w-[1096px] pt-[78px] px-[88px] h-[450px] shrink-0 bg-[#000000] bg-[url('/content-bg.png')] bg-cover bg-center text-center"
        >
          <div className="w-[708px] text-[#F5F5F5] text-center font-Poppins text-[32px] font-not-italic font-400 leading-[154%] mx-auto">

            <div>Based on your recent transactions, AI</div>
            <div> suggests the following</div>
          </div>
          <div className="mt-[48px] flex flex-col gap-[28px] text-left">
            <div className="flex pt-[28px] pb-[40px] pl-[48px] pr-[48px] flex-col gap-[32px] self-stretch rounded-[18px] bg-[rgba(255,255,255,0.05)]">
              <div className="flex w-[824px] justify-between items-center">
                <div className="text-[#FFF] font-Poppins text-[24px] font-not-italic font-500 leading-[32px] capitalize">
                  Dashboard
                </div>

              </div>
              <div className="w-[824px] h-[1px] bg-[rgba(255,255,255,0.12)]"></div>

              <div className="flex flex-col gap-[24px]">
                {dashboardList.map((item, index) => (
                  <div key={index} className="flex gap-[32px] items-center">
                    <div className="text-[rgba(255,255,255,0.70)] font-Poppins text-[20px] font-not-italic font-500 leading-[170%] capitalize">
                      {item.label}
                    </div>
                    <div className="flex-1 border-b border-dashed border-[rgba(255,255,255,0.12)]"></div>
                    <div className="text-[rgba(255,255,255,0.70)] font-Poppins text-[20px] font-not-italic font-500 leading-[170%] capitalize">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex pt-[28px] pb-[40px] pl-[48px] pr-[48px] flex-col gap-[32px] self-stretch rounded-[18px] bg-[rgba(255,255,255,0.05)]">
              <div className="flex w-[824px] justify-between items-center">
                <div className="text-[#FFF] font-Poppins text-[24px] font-not-italic font-500 leading-[32px] capitalize">
                  suggestions
                </div>
              </div>
              <div className="w-[824px] h-[1px] bg-[rgba(255,255,255,0.12)]"></div>
              {error ? (
                <div className="self-stretch text-[#FF5252] font-Poppins text-[20px] font-not-italic font-500 leading-[170%]">
                  数据加载失败，请稍后重试
                </div>
              ) : !data ? (
                <div className="self-stretch text-[rgba(255,255,255,0.70)] font-Poppins text-[20px] font-not-italic font-500 leading-[170%]">
                  暂无数据
                </div>
              ) : (
                <div className="flex flex-col gap-[32px]">
                  <div className="self-stretch text-[rgba(255,255,255,0.70)]  font-Poppins text-[20px] font-not-italic font-500 leading-[170%] capitalize">
                    <div dangerouslySetInnerHTML={{ __html: highlightText(data.trade_summary) }} />
                  </div>
                  <div className="flex flex-col gap-[24px]">
                    <div className="self-stretch text-[rgba(255,255,255,0.90)] font-Poppins text-[20px] font-not-italic font-700 leading-[170%] capitalize">
                      给你的忠告（请务必珍惜）：
                    </div>
                    <div className="self-stretch text-[rgba(255,255,255,0.70)] font-Poppins text-[20px] font-not-italic font-500 leading-[170%] capitalize">
                      <ul className="list-disc pl-6">
                        <li>
                          <div dangerouslySetInnerHTML={{ __html: highlightText(data.long_term_advice) }} />
                        </li>
                        <li>
                          <div dangerouslySetInnerHTML={{ __html: highlightText(data.short_term_advice) }} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }


  </>
}