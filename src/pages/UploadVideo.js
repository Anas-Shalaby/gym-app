import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import DeleteIcon from "@mui/icons-material/Delete";
import { client } from "../util/client";
import { topics } from "../util/Constants";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const UploadVideo = ({ user }) => {
  const [caption, setCaption] = useState("");
  const [target, setTopic] = useState(topics[0].name);
  const [loading, setLoading] = useState(false);
  const [savingPost, setSavingPost] = useState(false);
  const [videoAsset, setVideoAsset] = useState(null);
  const [wrongFileType, setWrongFileType] = useState(false);
  const navigate = useNavigate();

  const uploadVideo = async (e) => {
    const selectedFile = e.target.files[0];
    const fileTypes = ["video/mp4", "video/webm", "video/ogg"];

    if (fileTypes.includes(selectedFile.type)) {
      setWrongFileType(false);
      setLoading(true);

      client.assets
        .upload("file", selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name,
        })
        .then((data) => {
          console.log(data);
          setVideoAsset(data);
          setLoading(false);
        })
        .catch((err) => console.log(err.message));
    } else {
      setLoading(false);
      setWrongFileType(true);
    }
  };

  const handlePost = async () => {
    if (caption && videoAsset?._id && target) {
      setSavingPost(true);
      const doc = {
        _type: "post",
        caption,
        video: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: videoAsset?._id,
          },
        },
        userId: user[1]._id,
        postedBy: "Mohamed Agiza",
        target,
      };
      client.create(doc).then(() => {
        navigate("/");
      });
    } else {
      setSavingPost(true);
      setTimeout(() => setSavingPost(false), 2000);
    }
  };

  const handleDiscard = () => {
    setSavingPost(false);
    setVideoAsset(undefined);
    setCaption("");
    setTopic("");
  };

  return (
    <>
      <Navbar />
      <div className="flex w-full h-full absolute left-0 top-[160px] lg:top-[200px] mb-10 pt-10 lg:pt-20 bg-[#212529] justify-center">
        <div className=" bg-[#212529] rounded-lg xl:h-[90vh] flex gap-6 flex-wrap justify-center items-center p-14 pt-6">
          <div>
            <div>
              <p className="text-5xl font-bold animate-pulse">Upload Video</p>
              <Typography className="text-md text-gray-400 mt-1">
                Post a video to your account
              </Typography>
            </div>
            <div className=" border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center  outline-none mt-10 w-[260px] h-[458px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100">
              {loading ? (
                <Typography className="text-center text-3xl text-red-400 font-semibold">
                  Uploading...
                </Typography>
              ) : (
                <div>
                  {!videoAsset ? (
                    <label className="cursor-pointer">
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="flex flex-col justify-center items-center">
                          <Typography className="font-bold text-xl">
                            <CloudUploadIcon className="text-gray-300 text-6xl" />
                          </Typography>
                          <Typography className="text-xl font-semibold">
                            Select video to upload
                          </Typography>
                        </div>

                        <Typography className="text-gray-400 text-center mt-10 text-sm leading-10">
                          720x1280 resolution or higher <br />
                          Up to 10 minutes <br />
                          Less than 2 GB
                        </Typography>
                        <Typography className="bg-[#F00] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none">
                          Select file
                        </Typography>
                      </div>
                      <input
                        type="file"
                        name="upload-video"
                        onChange={uploadVideo}
                        className="w-0 h-0"
                      />
                    </label>
                  ) : (
                    <div className=" rounded-3xl w-[300px]  p-4 flex flex-col gap-6 justify-center items-center">
                      <video
                        className="rounded-xl h-full mt-16 bg-black"
                        controls
                        loop
                        src={videoAsset?.url}
                      />
                      <div className=" flex justify-between gap-20">
                        <Typography className="text-lg">
                          {videoAsset.originalFilename}
                        </Typography>
                        <Button
                          type="button"
                          className=" rounded-full bg-gray-200 text-red-400 p-2 text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                          onClick={() => setVideoAsset(null)}
                        >
                          <DeleteIcon />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            {wrongFileType && (
              <p className="text-center text-xl text-red-400 font-semibold mt-4 w-[260px]">
                Please select an video file
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3 pb-10">
            <Typography className="text-md font-medium ">Caption</Typography>
            <input
              type="text"
              onChange={(e) => setCaption(e.target.value)}
              value={caption}
              className="rounded lg:w-950 outline-none text-xl font-md text-[#000] border-2 border-gray-200 p-2"
            />
            <Typography className="text-md font-medium ">
              Choose a topic
            </Typography>

            <select
              onChange={(e) => {
                setTopic(e.target.value);
              }}
              value={target}
              className="outline-none lg:w-650 border-2 border-gray-200 text-xl text-[#000] capitalize lg:p-4 p-2 rounded cursor-pointer"
            >
              {topics.map((item) => (
                <option
                  key={item.name}
                  className=" outline-none capitalize bg-white text-black text-xl p-2 hover:bg-gray-300"
                  value={item.name}
                >
                  {item.name}
                </option>
              ))}
            </select>
            <div className="flex gap-6 mt-10">
              <button
                onClick={handleDiscard}
                type="button"
                className="border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
              >
                Discard
              </button>
              <Link to={`/Home`}>
                <button
                  disabled={videoAsset?.url ? false : true}
                  onClick={handlePost}
                  type="button"
                  className="bg-[#F00] text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
                >
                  {savingPost ? "Posting..." : "Post"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadVideo;
