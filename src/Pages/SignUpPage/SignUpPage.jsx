import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignUpPage.css";

const SignUpPage = () => {
  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, []);

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .required("لطفا این قسمت را خالی نگذارید")
      .min(11, "شماره موبایل یا ایمیل نادرست است")
      .max(11, "شماره موبایل یا ایمیل نادرست است"),
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema,
  });

  return (
    <div className="container">
      <main className="signup-main">
        <div className="logo">
          <img
             src="https://th.bing.com/th/id/OIG.8ABOuuDU_UdOWOzIiLLl?pid=ImgGn"
            alt="logo"
          />
        </div>
        <header>
          <h3>ورود | ثبت نام</h3>
          <p>سلام !</p>
          <p>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
        </header>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              className={formik.errors.phoneNumber && "err"}
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              ref={input}
            />
            <p className="error">
              {formik.errors.phoneNumber && `${formik.errors.phoneNumber}`}
            </p>
          </div>
          <button type="submit">ورود</button>
        </form>
        <p className="note">
          ورود شما به معنای پذیرش <a href="#">شرایط فروشگاه  </a> و
          <a href="#">قوانین حریم خصوصی </a> است
        </p>
      </main>
    </div>
  );
};

export default SignUpPage;
