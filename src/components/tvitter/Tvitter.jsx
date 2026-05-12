import { useState } from "react";
import "./Tvitter.css";
import img from "../../assets/1.png";
import img1 from "../../assets/2.svg";
import img2 from "../../assets/3.svg";
import img3 from "../../assets/4.svg";

function Tvitter() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: '',
    number: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [show, setShow] = useState(false);
  const [log, setLog] = useState(false);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <div className="container">
        <div className="ota">
          <img className="img" src={img} alt="" />
          <div className="mini_ota">
            <img src={img1} alt="" />
            <h1 className="h1">Happening now</h1>
            <br />
            <h3 className="h3">Join Twitter today</h3>
            {show && (
              <div className="modal">
                <button className="X" onClick={() => setShow(false)}>
                  X
                </button>
                <form className="ota1" onSubmit={handleSubmit}>
                  <div className="ota2">
                    <div className="ota99">
                      <br />
                      <br />
                      <br />
                      <div className="mini_ota99">
                        <img src={img1} alt="" />
                        <br />
                        <br />
                        <h1>Log in to Twitter</h1>
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="ota3">
                      <input
                        className="inp"
                        name="username"
                        type="text"
                        placeholder="Phone number, email address"
                        value={form.username}
                        onChange={handleChange}
                      />
                      <input
                        className="inp"
                        name="password"
                        type="text"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                      />
                      <button className="btn1" type="submit">
                        Log In
                      </button>
                      <p className="ppp">Sign up to Twitter</p>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {log && (
              <div className="modal1">
                <button className="X" onClick={() => setLog(false)}>
                  X
                </button>
                <div className="otacha">
                  <img src={img1} alt="" />
                  <h3>Create an account</h3>
                </div>
                <form className="ota1" onSubmit={handleSubmit}>
                  <div className="ota2">
                    <br />
                    <br />
                    <br />
                    <div className="ota3">
                      <input
                        className="inp2"
                        name="username"
                        type="text"
                        placeholder="Name"
                        value={form.username}
                        onChange={handleChange}
                      />
                      <input
                        className="inp2"
                        name="password"
                        type="text"
                        placeholder="Phone number"
                        value={form.password}
                        onChange={handleChange}
                      />
                      <input
                        className="inp2"
                        name="number"
                        type="email"
                        placeholder="Email"
                        value={form.number}
                        onChange={handleChange}
                      />
                      <input
                        className="inp2"
                        name="email"
                        type="text"
                        placeholder="Date of birth "
                        value={form.email}
                        onChange={handleChange}
                      />
                      <button className="btn1" type="submit">
                        Next
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            <div className="btn_box">
              <button className="btn">
                <img src={img2} alt="" />
                <p onClick={() => setLog(true)}>Sign up with Google</p>
              </button>
              <button className="btn">
                <img src={img3} alt="" />
                <p>Sign up with Apple</p>
              </button>
              <button className="btn">Sign up with phone or email</button>
            </div>
            <br />
            <p className="p">
              By singing up you agree to the <span>Terms of Service</span> and{" "}
              <span>
                Privacy <br /> Policy
              </span>
              , including <span>Cookie Use</span>.
            </p>
            <br />
            <div className="p_box">
              <p>Already have an account?</p>
              <p onClick={() => setShow(true)} className="pp">
                Log in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tvitter;
