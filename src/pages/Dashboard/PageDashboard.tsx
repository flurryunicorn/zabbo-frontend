import React from "react";
import { IconAlarm, IconArrowRight, IconClose, IconLamp, IconPlus } from "../../assets/icons";
import { HeaderButton } from "../../components/buttons";
import StatisticsCards from "../../components/common/StatisticsCards";
import "./PageDashboard.scss";

function PageDashboard() {
  return (
    <div className="page-content-wrapper">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-10">
          <div className="flex items-center justify-between">
            <div className="">
              <h2 className="font-bold text-2xl">Good morning, Oscar Yang</h2>
            </div>
            <div className="flex items-center gap-4">
              <HeaderButton>
                <IconPlus></IconPlus>
              </HeaderButton>
              <HeaderButton isActive={true}>
                <IconAlarm></IconAlarm>
              </HeaderButton>
              <img
                className="inline-block h-10 w-10 rounded-md ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="mt-8">
            <StatisticsCards></StatisticsCards>
            <div className="flex justify-between rounded-2xl bg-primary-500 mt-8 bg-primary-400 p-5">
              <div className="bg-primary-800 flex items-center justify-center w-24 h-24 rounded-md text-white">
                <IconLamp></IconLamp>
              </div>
              <div className="flex flex-col flex-grow ml-5 justify-center">
                <h3 className="text-2xl">Zabbo Fact</h3>
                <span className="text-medium">
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout.
                </span>
              </div>
              <div className="ml-6">
                <IconClose></IconClose>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center  mb-5">
                <h2 className="text-2xl font-bold"> Monthly Transactions </h2>
                <IconArrowRight></IconArrowRight>
              </div>
              <span> Nothing to see here yet </span>
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center  mb-5">
                <h2 className="text-2xl font-bold"> History </h2>
                <IconArrowRight></IconArrowRight>
              </div>
              <span> Nothing to see here yet </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageDashboard;
