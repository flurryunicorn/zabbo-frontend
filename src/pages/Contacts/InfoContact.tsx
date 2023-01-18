import React from "react";
import { NavLink } from "react-router-dom";
import {
  IconArrowLeft,
  IconArrowRight,
  IconInstagram,
  IconLine,
  IconLinkedin,
  IconSeeMore,
  IconShortLine,
  IconTelegram,
  IconTwitter,
  IconUserAvatar,
} from "../../assets/icons";
// import { HeaderButton } from "../../components/buttons";
import TransactionItem from "../../components/common/TransactionItem";

import "./contact.scss";

const InfoContact = () => {
  return (
    <div className="page-content-wrapper">
      <div className="grid grid-cols-12 gap-2 mr-20 ml-20">
        <div className="col-span-10 flex flex-col ml-3 mr-3">
          <div className="flex  pt-12  justify-between">
            <NavLink to="/contacts">
              <IconArrowLeft></IconArrowLeft>
            </NavLink>
            <div
              className="hover:cursor-pointer dropdownMenu"
              style={{ position: "relative" }}
            >
              <IconSeeMore></IconSeeMore>
              <ul className="dropdown-menu-body">
                <li>
                  <div className=" text-sm p-3">
                    <NavLink to={""} style={{ color: "#312F2F" }}>
                      New engagement
                    </NavLink>
                  </div>
                  <IconShortLine></IconShortLine>
                </li>

                <li>
                  <div className=" text-sm p-3">
                    <NavLink to={""} style={{ color: "#312F2F" }}>
                      Edit
                    </NavLink>
                  </div>{" "}
                  <IconShortLine></IconShortLine>
                </li>
                <li>
                  <div className=" text-sm p-3">
                    <NavLink to={""} style={{ color: "#312F2F" }}>
                      Delete
                    </NavLink>
                  </div>{" "}
                  <IconShortLine></IconShortLine>
                </li>
                <li>
                  <div className=" text-sm p-3">
                    <NavLink to={""} style={{ color: "#312F2F" }}>
                      Share
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center pt-12">
            <IconUserAvatar />
            <span
              className="font-bold text-lg font-sans mb-5 mt-3"
              style={{ color: "#606060" }}
            >
              @johndoe123
            </span>
            <span
              className="text-base font-normal mb-5"
              style={{ color: "rgba(0, 6, 32, 0.8)" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius ante elit, a varius metus pulvinar vitae. Suspendisse
              eleifend eleifend.
            </span>
          </div>
          <div className=" flex justify-center items-center">
            <NavLink to="" className="mr-5 ">
              <IconTwitter></IconTwitter>
            </NavLink>
            <NavLink to="" className="mr-5">
              <IconInstagram></IconInstagram>
            </NavLink>
            <NavLink to="" className="mr-5">
              <IconTelegram></IconTelegram>
            </NavLink>
            <NavLink to="" className="">
              <IconLinkedin></IconLinkedin>
            </NavLink>
          </div>
          <div className="col-span-10 flex justify-center items-center">
            <div className="mt-8 mb-8">
              <IconLine></IconLine>
            </div>
          </div>
        </div>
        <div className="col-span-10 flex flex-col ml-3 mr-3">
          <div className="flex justify-between mb-5">
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#606060" }}
            >
              Name
            </span>
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#000" }}
            >
              John Doe
            </span>
          </div>
          <div className="flex justify-between mb-5">
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#606060" }}
            >
              Business Name
            </span>
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#000" }}
            >
              John Doe Development
            </span>
          </div>
          <div className="flex justify-between mb-5">
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#606060" }}
            >
              Email
            </span>
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#000" }}
            >
              johndoe@gmail.com
            </span>
          </div>
          <div className="flex justify-between mb-5">
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#606060" }}
            >
              Phone Number
            </span>
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#000" }}
            >
              +1 (22) 345 6789
            </span>
          </div>
          <div className="flex justify-between mb-5">
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#606060" }}
            >
              Address
            </span>
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#000" }}
            >
              10-123 1/2 Main St NW Montreal QC H32 2YZ
            </span>
          </div>
          <div className="flex justify-between mb-5">
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#606060" }}
            >
              Website
            </span>
            <span
              className="text-base font-normal font-sans"
              style={{ color: "#000" }}
            >
              http://www.johndoe.com
            </span>
          </div>
        </div>
        <div className="col-span-10 flex flex-col ml-3 mr-3">
          <div className="flex justify-between mb-6">
            <span
              className="text-lg font-bold font-sans"
              style={{ color: "#606060" }}
            >
              History
            </span>
            <NavLink to="" className="flex items-center">
              <IconArrowRight></IconArrowRight>
            </NavLink>
          </div>
          <div className="flex flex-col">
            <TransactionItem
              transactionName="TransactionName"
              transactionState={false}
              transactionCost="2350"
              transactionDate="02-12-22"
            ></TransactionItem>
            <TransactionItem
              transactionName="TransactionName"
              transactionState={true}
              transactionCost="2350"
              transactionDate="02-12-22"
            ></TransactionItem>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoContact;
