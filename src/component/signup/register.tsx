import React, { useState } from "react";
import styles from "./register.module.css";
import Card from "../../custom/card/card";
import { Form, Formik } from "formik";
import Input from "../../custom/input/input";
import shoeImage from "../../images/shoe.jpg";
import { designValidation } from "../../validation/designValidation";
import { IoArrowForward } from "react-icons/io5";
const RegisterForm = () => {
  // const [input, setInput] = useState("");

  // const Onchange = (e) => {
  //   setInput(e.target.value);
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted",);
  // };
  return (
    <section className={styles.section1}>
      <section className={styles.container}>
        <section className={styles.photoSection}>
          <img src={shoeImage} alt="Example" />
        </section>

        <section className={styles.rightHand}>
          <div className={styles.textArea}>
            <p>register</p>
          </div>
          {/* <div className={styles.lineContainer}>
            <div className={styles.circle}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div> */}
          <p className={styles.fill}>Please fill with your details</p>

          <div>
            <Formik
              initialValues={{
                lastName: "",
                firstName: "",
                age: "",
                gender: "",
                email: "",
                phoneNumber: "",
              }}
              validationSchema={designValidation}
              onSubmit={(values) => {
                console.log(values);
              }}>
              {(props) => {
                return (
                  <Form className={styles.formContainer}>
                    <div className={styles.inputContainer}>
                      <Input
                        type="text"
                        // label="Username"
                        placeholder="First Name"
                        name="firstName"
                      />
                      <Input
                        // label="Password"
                        placeholder="Last Name"
                        name="lastName"
                        type="text"
                      />
                    </div>

                    <div className={styles.inputContainer}>
                      <Input
                        type="email"
                        // label="Username"
                        placeholder=" Your Email"
                        name="email"
                      />
                      <Input
                        // label="Password"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        type="text"
                      />
                    </div>

                    <div className={styles.inputContainer}>
                      <Input
                        type="number"
                        // label="Username"
                        placeholder=" Age"
                        name="age"
                      />
                      <div className={styles.genderContainer}>
                        <label>
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            defaultChecked
                            className={styles.selectBox}
                          />
                          Male
                        </label>

                        <label>
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            className={styles.selectBox}
                          />
                          Female
                        </label>
                      </div>
                    </div>

                    <div className={styles.buttonStyle}>
                      <label>
                        <input type="radio" className={styles.selectBox} />
                        Accept terms and conditions.
                      </label>

                      <button type="submit">
                        Login
                        <IoArrowForward />
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </section>
      </section>
    </section>
  );
};

export default RegisterForm;
