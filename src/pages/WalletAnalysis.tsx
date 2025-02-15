export default function WalletAnalysis() {
  const dashboardList = [
    { 
      label: "总收益", 
      value: <span className="text-[#FF5252]">-20%</span>
    },
    { 
      label: "最大盈利标的", 
      value: <>BTC/USDT <span className="text-[#52FF63]">(+15%)</span></>
    },
    { 
      label: "最大亏损标的", 
      value: <>ETH/USDT <span className="text-[#FF5252]">(-25%)</span></>
    },
    { 
      label: "平均亏损", 
      value: <span className="text-[#FF5252]">-3.5%</span>
    },
    { 
      label: "最大亏损倍数标的", 
      value: <>DOGE/USDT <span className="text-[#FF5252]">(10x)</span></>
    },
    { 
      label: "最大倍数标的", 
      value: <>SOL/USDT <span className="text-[#FF5252]">(20x)</span></>
    },
  ];

  return <>
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
          <div className="flex flex-col gap-[32px]">
            <div className="self-stretch text-[rgba(255,255,255,0.70)]  font-Poppins text-[20px] font-not-italic font-500 leading-[170%] capitalize">
              你这周一共交易了 42 次，胜率 <span className="text-[#52FF63]">32%</span>，平均盈利 -3.5%（没错，负的，亏得比存银行吃利息还惨）。你亏得最惨的标的，基本都有 "高波动、高杠杆、拍脑袋买" 的属性，而你那点可怜的盈利，几乎全靠 "低波动、基本面稳、猥琐发育" 的标的撑着。
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="self-stretch text-[rgba(255,255,255,0.90)] font-Poppins text-[20px] font-not-italic font-700 leading-[170%] capitalize">
                给你的忠告（请务必珍惜）：
              </div>

              <div className="self-stretch text-[rgba(255,255,255,0.70)] font-Poppins text-[20px] font-not-italic font-500 leading-[170%] capitalize">
                <ul className="list-disc pl-6">
                  <li>终极长期建议——收手吧，PVP不适合你，你就是市场的流动性贡献者（韭菜）。与其在这儿送钱，不如踏实上班，攒点钱，买点比特币，至少不会亏得连网费都交不起。</li>
                  <li>短期建议——如果你实在手痒停不下来（赌狗DNA疯狂蠢蠢欲动），那就求求你，从一周 42 次交易缩到 5 次，好歹让自己亏得慢点，活得久一点。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
}