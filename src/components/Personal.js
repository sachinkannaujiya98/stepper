import React, { useContext } from "react";
import "./personal.css";
import { multiStepContext } from "../StepContext";
const Personal = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  console.log(userData);
  return (
    <>
      {/* name div */}
      <div className="name_container">
        <div className="name_field">
          <label>first name</label>
          <input
            type="text"
            value={userData["firstname"]}
            onChange={(e) =>
              setUserData({ ...userData, firstname: e.target.value })
            }
          />
        </div>
        <div className="name_field">
          <label> last name</label>
          <input
            type="text"
            value={userData["lastname"]}
            onChange={(e) =>
              setUserData({ ...userData, lastname: e.target.value })
            }
          />
        </div>
      </div>

      {/* email div */}
      <div className="email_container">
        <div className="email_field">
          <label>email</label>
          <input
            type="email"
            value={userData["email"]}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
      </div>
      {/* country div start */}

      <div className="country_container">
        <div className="country_field">
          <label>country</label>
          <select
            value={userData["country"]}
            onChange={(e) =>
              setUserData({ ...userData, country: e.target.value })
            }
          >
            <option value="U.S">U.S</option>
            <option value="INDIA">INDIA</option>
            <option value="Singapore">Singapore</option>
            <option value="China">China</option>
          </select>
        </div>
      </div>
      {/* country div end */}
      {/* address div */}

      <div className="address_container">
        <div className="address_field">
          <label>Street address</label>
          <input
            type="text"
            value={userData["streetaddress"]}
            onChange={(e) =>
              setUserData({ ...userData, streetaddress: e.target.value })
            }
          />
        </div>
      </div>

      <div className="city_container">
        <div className="city_field">
          <label>city</label>
          <input
            type="text"
            value={userData["city"]}
            onChange={(e) => setUserData({ ...userData, city: e.target.value })}
          />
        </div>
        <div className="city_field">
          <label>state/province</label>
          <input
            type="text"
            value={userData["state"]}
            onChange={(e) =>
              setUserData({ ...userData, state: e.target.value })
            }
          />
        </div>
        <div className="city_field">
          <label>Zeep/portal</label>
          <input
            type="text"
            value={userData["Zeep"]}
            onChange={(e) => setUserData({ ...userData, Zeep: e.target.value })}
          />
        </div>
      </div>

      {/* end address div */}
      <div className="btn_div">
        <div className="btn">
          <button onClick={() => setStep(2)}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Personal;
