import React, { useState } from "react";
import PlaceHolderImg from "../SVG/PlaceHolderImg";
import ThereDot from "../SVG/ThereDot";
import Search from "../SVG/Search";
import Share from "../SVG/Share";
import Edite from "../SVG/Edite";
import Delete from "../SVG/Delete";
import useModal from "../../hooks/useModal";
import ModalEdit from "../../components/modalEdit"
import ModalShare from "../../components/modalShare"

const Post = ({ Name, PostText, id }) => {
  const modalEdit = useModal();
  const modalShare = useModal();

  const [isEditVisble, setIsEditVisble] = useState(false);
  const [isShareVisble, setIsShareVisble] = useState(false);

  const handelEdit = (id) => {
    setIsEditVisble((pre) => !pre);
  };

  const handelShare = (id) => {
    setIsShareVisble((pre) => !pre);
  };

  return (
    <div className="Post flex p-5 gap-4 rounded-md border border-[#BEC2C6] my-4">
      <div className="ImgForPesron rounded-full bg-[#F5F5F5]  w-32 h-32 flex items-center justify-center my-auto">
        <div className=" w-12 text-[#A5A5A5]">
          <PlaceHolderImg />
        </div>
      </div>
      <div className=" flex flex-col gap-2 justify-between items-center pb-5 w-4/5">
        <div className=" w-full gap-1 flex justify-between">
          <h3 className="Name font-bold">{Name}</h3>
          <div
            className=" w-4 text-[#2D65E4] cursor-pointer"
            onClick={(id) => handelEdit(id)}>
            <ThereDot />
          </div>
        </div>
        <div className=" relative">
          <p className=" w-4/5">{PostText}</p>

          {isEditVisble && (
            <div className="SettingOption absolute right-1 flex flex-col p-5 gap-2 top-0 rounded-md border border-[#BEC2C6]">
              <div className=" flex gap-5 cursor-pointer items-center ">
                <button type="submit" onClick={modalEdit.openModal}>
                <span className=" flex gap-4">
                  <Edite />
                  Edit
                </span>
                </button>
                <ModalEdit modalId={id} isOpen={modalEdit.isOpen} closeModal={modalEdit.closeModal} />
              </div>

              <div className=" flex gap-5 justify-center items-center cursor-pointer">
                <span className=" w-4">
                  <Delete />
                </span>
                Delete
              </div>
            </div>
          )}
        </div>
        <div className="Search w-full cursor-pointer flex justify-end text-[#2D65E4] mt-5">
          <div className=" w-5" onClick={(id) => handelShare(id)}>
            <button type="submit" onClick={modalShare.openModal}>
              <Share />
            </button>
            <ModalShare modalId={id} isOpen={modalShare.isOpen} closeModal={modalShare.closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
