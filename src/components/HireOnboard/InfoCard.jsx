import React from "react";
import { CiExport } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { infoData } from "@/assets/data/infoData";

const InfoCard = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <div>
          <p className="lg:text-2xl font-semibold">Open Hiring</p>
          <p className="text-sm lg:text-base">
            Overview of your company’s various hiring
          </p>
        </div>
        <div>
          <button className="bg-primary rounded-md px-4 py-2 flex items-center gap-2 lg:text-base font-semibold">
            <CiExport />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {infoData?.map((item) => (
          <div className="bg-white rounded-lg p-5 border" key={item?.id}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <div className="bg-primary rounded-xl p-2">
                  {React.createElement(item.icon, {
                    className: "text-3xl lg:text-5xl",
                  })}
                </div>
                <p className="font-semibold text-xl">{item?.title}</p>
              </div>
              <BsThreeDots className="text-3xl" />
            </div>
            <div className="flex justify-between mt-5 items-end">
              <div>
                <p className="text-4xl font-semibold mb-2">{item?.count}</p>
                <p className="lg:text-lg text-textColor">{item?.description}</p>
              </div>
              <div>
                <p>Last Month</p>
                <p className="text-xl">{item?.percentage}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCard;
