import React, { useEffect } from "react";
import "./sendmail.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase/init";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";

function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(formData) => {
    const docRef = await addDoc(collection(db, "emails"), {
      To: formData.To,
      subject: formData.Subject,
      message: formData.Message,
      timestamp: serverTimestamp(),
    });
    console.log(docRef.id)
    dispatch(closeSendMessage())
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => {
            dispatch(closeSendMessage());
          }}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("To", { required: true })}
          type="email"
          placeholder="To"
        />
        {errors.To && (
          <span className="sendMail__error">This field is required</span>
        )}
        <input
          {...register("Subject", { required: true })}
          type="text"
          placeholder="Subject"
        />
        {errors.Subject && (
          <span className="sendMail__error">This field is required</span>
        )}
        <input
          {...register("Message", { required: true })}
          type="text"
          placeholder="Message..."
          className="sendMail__message"
        />
        {errors.Message && (
          <span className="sendMail__error">This field is required</span>
        )}
        <div className="sendMail__options">
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;